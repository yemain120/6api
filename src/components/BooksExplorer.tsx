import React, { useState } from 'react';
import {
  CLASS_6_BOOKS,
  CLASS_6_INFO,
  Book,
  Chapter
} from '../data/class6Data.ts';
import {
  BookOpen,
  Search,
  Filter,
  Layers,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Tag,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BooksExplorerProps {
  onSelectEndpoint: (path: string) => void;
}

export const BooksExplorer: React.FC<BooksExplorerProps> = ({ onSelectEndpoint }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedBookId, setExpandedBookId] = useState<string | null>('bangla');
  const [selectedChapter, setSelectedChapter] = useState<{ book: Book; chapter: Chapter } | null>(null);

  const filteredBooks = CLASS_6_BOOKS.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();

    const matchesTitle =
      book.title_bn.toLowerCase().includes(q) ||
      book.title_en.toLowerCase().includes(q) ||
      book.description_bn.toLowerCase().includes(q);

    const matchesChapter = book.chapters.some(
      c =>
        c.title_bn.toLowerCase().includes(q) ||
        c.title_en.toLowerCase().includes(q) ||
        c.topics.some(t => t.toLowerCase().includes(q))
    );

    return matchesTitle || matchesChapter;
  });

  const totalChaptersCount = CLASS_6_BOOKS.reduce((sum, b) => sum + b.chapters.length, 0);

  return (
    <div className="space-y-6">
      {/* Header Stat Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              ষষ্ঠ শ্রেণির সকল পাঠ্যবই ও অধ্যায়সমূহ
            </h1>
            <p className="text-sm text-slate-400 mt-1 font-bengali">
              মোট ১৪টি বিষয় এবং ১০৪টি অধ্যায়ের পূর্ণাঙ্গ পাঠ্যক্রম, শিখনফল ও এপিআই এন্ডপয়েন্ট।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
              <div className="text-xl font-bold text-emerald-400 font-mono">14</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">বই</div>
            </div>
            <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
              <div className="text-xl font-bold text-teal-400 font-mono">{totalChaptersCount}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">অধ্যায়</div>
            </div>
            <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
              <div className="text-xl font-bold text-blue-400 font-mono">100%</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">কারিকুলাম</div>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-5 pt-5 border-t border-slate-800/80 flex flex-col md:flex-row items-stretch gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="বই, অধ্যায় বা টপিক খুঁজুন (যেমন: সংখ্যার গল্প, পরমাণু, মুক্তিযুদ্ধ, কবিতা)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-bengali"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              সকল বই ({CLASS_6_BOOKS.length})
            </button>
            {CLASS_6_INFO.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name_bn} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Books List Grid */}
      <div className="space-y-4">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12 bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 font-bengali">
              "{searchQuery}" দিয়ে কোনো বই বা অধ্যায় খুঁজে পাওয়া যায়নি।
            </p>
          </div>
        ) : (
          filteredBooks.map((book) => {
            const isExpanded = expandedBookId === book.id;

            return (
              <div
                key={book.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-700 shadow-md"
              >
                {/* Book Header Summary */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-14 rounded-xl flex items-center justify-center font-bold text-white shadow-inner flex-shrink-0"
                      style={{ backgroundColor: book.theme_color }}
                    >
                      <BookOpen className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className="text-lg font-bold text-white font-bengali">
                          {book.title_bn}
                        </h2>
                        <span className="text-xs text-slate-400 font-sans">
                          ({book.title_en})
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {book.code}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bengali">
                          {book.category_bn}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 max-w-3xl line-clamp-2 font-bengali">
                        {book.description_bn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                    <button
                      onClick={() => onSelectEndpoint(`/api/v1/class-6/books/${book.id}`)}
                      className="px-3 py-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      title="API কনসোলে এই বইটি টেস্ট করুন"
                    >
                      <span>API: /{book.id}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => setExpandedBookId(isExpanded ? null : book.id)}
                      className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer font-bengali"
                    >
                      <span>{book.chapters.length}টি অধ্যায়</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Chapters Table */}
                {isExpanded && (
                  <div className="border-t border-slate-800/80 bg-slate-950/70 p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        {book.title_bn} এর অধ্যায়সমূহের সূচিপত্র ও শিখনফল ({book.chapters.length}টি)
                      </h3>
                      <button
                        onClick={() => onSelectEndpoint(`/api/v1/class-6/books/${book.id}/chapters`)}
                        className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        GET /api/v1/class-6/books/{book.id}/chapters
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {book.chapters.map((ch) => (
                        <div
                          key={ch.chapter_no}
                          className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center">
                                {ch.chapter_no}
                              </span>
                              <div>
                                <h4 className="text-sm font-bold text-white font-bengali leading-snug">
                                  {ch.title_bn}
                                </h4>
                                <p className="text-[11px] text-slate-400 font-sans">
                                  {ch.title_en}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => onSelectEndpoint(`/api/v1/class-6/books/${book.id}/chapters/${ch.chapter_no}`)}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                              title="অধ্যায়টি API কনসোলে টেস্ট করুন"
                            >
                              <span>API</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed font-bengali">
                            {ch.summary_bn}
                          </p>

                          {/* Topics Chips */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              প্রধান বিষয়সমূহ:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {ch.topics.map((t, tidx) => (
                                <span
                                  key={tidx}
                                  className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 font-bengali border border-slate-700/60"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Learning outcomes */}
                          {ch.learning_outcomes && ch.learning_outcomes.length > 0 && (
                            <div className="pt-2 border-t border-slate-800/60">
                              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                                <CheckCircle className="w-2.5 h-2.5" /> শিখনফল:
                              </span>
                              <ul className="mt-1 space-y-1 text-[11px] text-slate-400 list-disc list-inside font-bengali">
                                {ch.learning_outcomes.map((lo, lidx) => (
                                  <li key={lidx}>{lo}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
