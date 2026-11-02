import { Router, Request, Response } from 'express';
import {
  CLASS_6_INFO,
  CLASS_6_BOOKS,
  getAllBooks,
  getBookById,
  getBookChapters,
  getChapterByNo,
  searchAll
} from '../data/class6Data.ts';

export const apiRouter = Router();

// Middleware: Enable CORS for all API calls
apiRouter.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  next();
});

/**
 * Root metadata & API Index
 * GET /api/v1/meta or /api/meta
 */
apiRouter.get('/meta', (_req: Request, res: Response) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    api: {
      name: 'NCTB Class 6 Curriculum REST API',
      name_bn: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড ষষ্ঠ শ্রেণি কারিকুলাম এপিআই',
      version: '1.0.0',
      description: 'Public REST API providing all official textbooks and chapters for Class 6 in Bangladesh.',
      deployment: {
        platform: 'Vercel Serverless / Node.js Express',
        github_ready: true,
        cors_enabled: true
      },
      endpoints: [
        { method: 'GET', path: '/api/v1/classes', description: 'List available academic classes' },
        { method: 'GET', path: '/api/v1/class-6', description: 'Class 6 details and summary' },
        { method: 'GET', path: '/api/v1/class-6/books', description: 'All 14 textbooks for Class 6 (filterable: ?category, ?search)' },
        { method: 'GET', path: '/api/v1/class-6/books/:bookId', description: 'Single textbook details with complete chapters' },
        { method: 'GET', path: '/api/v1/class-6/books/:bookId/chapters', description: 'List of all chapters for a specific textbook' },
        { method: 'GET', path: '/api/v1/class-6/books/:bookId/chapters/:chapterNo', description: 'Single chapter with learning outcomes & topics' },
        { method: 'GET', path: '/api/v1/class-6/chapters', description: 'Flat list of all 104 chapters across all books' },
        { method: 'GET', path: '/api/v1/search?q={query}', description: 'Full-text search across all books and chapters' },
        { method: 'GET', path: '/api/v1/export/class-6.json', description: 'Complete downloadable JSON dump' }
      ]
    }
  });
});

/**
 * List Classes
 * GET /api/v1/classes
 */
apiRouter.get('/classes', (_req: Request, res: Response) => {
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    total: 1,
    data: [CLASS_6_INFO]
  });
});

/**
 * Class 6 Information
 * GET /api/v1/class-6
 */
apiRouter.get('/class-6', (_req: Request, res: Response) => {
  const booksSummary = CLASS_6_BOOKS.map(b => ({
    id: b.id,
    code: b.code,
    title_bn: b.title_bn,
    title_en: b.title_en,
    category: b.category,
    category_bn: b.category_bn,
    total_chapters: b.total_chapters,
    theme_color: b.theme_color
  }));

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    data: {
      ...CLASS_6_INFO,
      books: booksSummary
    }
  });
});

/**
 * List Books for Class 6
 * GET /api/v1/class-6/books or /api/v1/books
 * Query params: ?category=language|science|... &search=... &compact=true|false
 */
const handleGetBooks = (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;
  const search = req.query.search as string | undefined;
  const compact = req.query.compact === 'true';

  let books = getAllBooks({ category, search });

  if (compact) {
    // Return books without full chapter sub-arrays to keep response lightweight
    const compactBooks = books.map(({ chapters: _, ...meta }) => meta);
    return res.json({
      success: true,
      status: 200,
      timestamp: new Date().toISOString(),
      count: compactBooks.length,
      filters: { category: category || 'all', search: search || null, compact: true },
      data: compactBooks
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    count: books.length,
    filters: { category: category || 'all', search: search || null, compact: false },
    data: books
  });
};

apiRouter.get('/class-6/books', handleGetBooks);
apiRouter.get('/books', handleGetBooks);

/**
 * Get Specific Book by ID or Code
 * GET /api/v1/class-6/books/:bookId or /api/v1/books/:bookId
 */
const handleGetBookById = (req: Request, res: Response) => {
  const { bookId } = req.params;
  const book = getBookById(bookId);

  if (!book) {
    return res.status(404).json({
      success: false,
      status: 404,
      error: `Book '${bookId}' not found in Class 6 curriculum.`,
      available_books: CLASS_6_BOOKS.map(b => ({ id: b.id, title_bn: b.title_bn, title_en: b.title_en }))
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    data: book
  });
};

apiRouter.get('/class-6/books/:bookId', handleGetBookById);
apiRouter.get('/books/:bookId', handleGetBookById);

/**
 * Get all Chapters for a Specific Book
 * GET /api/v1/class-6/books/:bookId/chapters
 */
const handleGetBookChapters = (req: Request, res: Response) => {
  const { bookId } = req.params;
  const book = getBookById(bookId);

  if (!book) {
    return res.status(404).json({
      success: false,
      status: 404,
      error: `Book '${bookId}' not found.`
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    book: {
      id: book.id,
      code: book.code,
      title_bn: book.title_bn,
      title_en: book.title_en,
      category_bn: book.category_bn
    },
    total_chapters: book.chapters.length,
    data: book.chapters
  });
};

apiRouter.get('/class-6/books/:bookId/chapters', handleGetBookChapters);
apiRouter.get('/books/:bookId/chapters', handleGetBookChapters);

/**
 * Get Specific Chapter by Chapter Number
 * GET /api/v1/class-6/books/:bookId/chapters/:chapterNo
 */
const handleGetChapterByNo = (req: Request, res: Response) => {
  const { bookId, chapterNo } = req.params;
  const num = parseInt(chapterNo, 10);

  if (isNaN(num)) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Chapter number must be a valid integer.'
    });
  }

  const result = getChapterByNo(bookId, num);
  if (!result) {
    return res.status(404).json({
      success: false,
      status: 404,
      error: `Chapter ${num} not found for book '${bookId}'.`
    });
  }

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    data: result
  });
};

apiRouter.get('/class-6/books/:bookId/chapters/:chapterNo', handleGetChapterByNo);
apiRouter.get('/books/:bookId/chapters/:chapterNo', handleGetChapterByNo);

/**
 * Flat list of all 104 chapters across all Class 6 books
 * GET /api/v1/class-6/chapters or /api/v1/chapters
 * Query params: ?subject=... &category=... &search=... &limit=... &page=...
 */
const handleGetAllChapters = (req: Request, res: Response) => {
  const subject = req.query.subject as string | undefined;
  const category = req.query.category as string | undefined;
  const search = req.query.search as string | undefined;
  const page = parseInt(req.query.page as string || '1', 10);
  const limit = parseInt(req.query.limit as string || '50', 10);

  let flatList: {
    book_id: string;
    book_title_bn: string;
    book_title_en: string;
    category: string;
    chapter: any;
  }[] = [];

  CLASS_6_BOOKS.forEach(b => {
    if (subject && b.id !== subject && b.code !== subject) return;
    if (category && category !== 'all' && b.category !== category) return;

    b.chapters.forEach(c => {
      flatList.push({
        book_id: b.id,
        book_title_bn: b.title_bn,
        book_title_en: b.title_en,
        category: b.category,
        chapter: c
      });
    });
  });

  if (search) {
    const q = search.toLowerCase().trim();
    flatList = flatList.filter(item =>
      item.chapter.title_bn.toLowerCase().includes(q) ||
      item.chapter.title_en.toLowerCase().includes(q) ||
      item.chapter.summary_bn.toLowerCase().includes(q) ||
      item.chapter.summary_en.toLowerCase().includes(q) ||
      item.book_title_bn.toLowerCase().includes(q) ||
      item.book_title_en.toLowerCase().includes(q) ||
      item.chapter.topics.some((t: string) => t.toLowerCase().includes(q))
    );
  }

  const total = flatList.length;
  const startIndex = (page - 1) * limit;
  const paginated = flatList.slice(startIndex, startIndex + limit);

  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    pagination: {
      total,
      page,
      limit,
      total_pages: Math.ceil(total / limit)
    },
    data: paginated
  });
};

apiRouter.get('/class-6/chapters', handleGetAllChapters);
apiRouter.get('/chapters', handleGetAllChapters);

/**
 * Universal Search Endpoint
 * GET /api/v1/search?q=...
 */
apiRouter.get('/search', (req: Request, res: Response) => {
  const q = (req.query.q || req.query.search || '') as string;
  if (!q.trim()) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: 'Query parameter q is required (e.g., /api/v1/search?q=ভগ্নাংশ or /api/v1/search?q=motion)'
    });
  }

  const results = searchAll(q);
  res.json({
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    ...results
  });
});

/**
 * Complete Data Dump / Export for Class 6
 * GET /api/v1/export/class-6.json
 */
apiRouter.get('/export/class-6.json', (_req: Request, res: Response) => {
  res.setHeader('Content-Disposition', 'attachment; filename="nctb-class-6-all-books-and-chapters.json"');
  res.setHeader('Content-Type', 'application/json');
  res.json({
    class_info: CLASS_6_INFO,
    exported_at: new Date().toISOString(),
    source: 'National Curriculum and Textbook Board, Bangladesh (NCTB)',
    books: CLASS_6_BOOKS
  });
});
