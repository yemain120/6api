/**
 * NCTB Class 6 Full Textbooks & Chapters Data
 * National Curriculum and Textbook Board (জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ)
 */

export interface Chapter {
  chapter_no: number;
  chapter_slug: string;
  title_bn: string;
  title_en: string;
  summary_bn: string;
  summary_en: string;
  topics: string[];
  learning_outcomes: string[];
  estimated_periods?: number;
  practical_tasks?: string[];
}

export interface Book {
  id: string;
  code: string;
  title_bn: string;
  title_en: string;
  class: string;
  class_no: number;
  category: 'language' | 'mathematics' | 'science' | 'social_science' | 'technology' | 'life_skills' | 'arts' | 'religion';
  category_bn: string;
  publisher: string;
  curriculum_version: string;
  description_bn: string;
  description_en: string;
  theme_color: string;
  icon_name: string;
  total_chapters: number;
  pdf_url?: string;
  chapters: Chapter[];
}

export interface ClassInfo {
  id: string;
  class_no: number;
  name_bn: string;
  name_en: string;
  board_bn: string;
  board_en: string;
  academic_curriculum: string;
  total_books: number;
  total_chapters: number;
  categories: { id: string; name_bn: string; name_en: string; count: number }[];
}

export const CLASS_6_INFO: ClassInfo = {
  id: 'class-6',
  class_no: 6,
  name_bn: 'ষষ্ঠ শ্রেণি',
  name_en: 'Class 6 (Grade 6)',
  board_bn: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ (NCTB)',
  board_en: 'National Curriculum and Textbook Board, Bangladesh (NCTB)',
  academic_curriculum: 'National Curriculum Framework (জাতীয় শিক্ষাক্রম রূপরেখা)',
  total_books: 14,
  total_chapters: 104,
  categories: [
    { id: 'language', name_bn: 'ভাষা ও সাহিত্য', name_en: 'Languages & Literature', count: 2 },
    { id: 'mathematics', name_bn: 'গণিত', name_en: 'Mathematics', count: 1 },
    { id: 'science', name_bn: 'বিজ্ঞান', name_en: 'Science', count: 2 },
    { id: 'social_science', name_bn: 'ইতিহাস ও সমাজ', name_en: 'History & Social Science', count: 1 },
    { id: 'technology', name_bn: 'তথ্য ও প্রযুক্তি', name_en: 'Information Technology', count: 1 },
    { id: 'life_skills', name_bn: 'জীবন ও স্বাস্থ্য', name_en: 'Life Skills & Health', count: 2 },
    { id: 'arts', name_bn: 'শিল্প ও সংস্কৃতি', name_en: 'Arts & Culture', count: 1 },
    { id: 'religion', name_bn: 'ধর্ম ও নৈতিক শিক্ষা', name_en: 'Religious & Moral Education', count: 4 },
  ]
};

export const CLASS_6_BOOKS: Book[] = [
  // 1. বাংলা
  {
    id: 'bangla',
    code: 'NCTB-6-BAN',
    title_bn: 'বাংলা',
    title_en: 'Bangla (Bengali)',
    class: 'class-6',
    class_no: 6,
    category: 'language',
    category_bn: 'ভাষা ও সাহিত্য',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#dc2626',
    icon_name: 'BookOpen',
    description_bn: 'ষষ্ঠ শ্রেণির শিক্ষার্থীদের প্রমিত বাংলায় ভাব প্রকাশ, ব্যাকরণ সচেতনতা, সাহিত্যের রসাস্বাদন ও সৃজনশীল যোগাযোগের দক্ষতা বিকাশের পাঠ্যবই।',
    description_en: 'Official NCTB Bangla textbook for Class 6 focusing on standard Bengali communication, grammar, literature appreciation, and creative expression.',
    total_chapters: 7,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'communication-with-respect',
        title_bn: 'মর্যাদা বজায় রেখে যোগাযোগ করি',
        title_en: 'Communicating with Respect and Dignity',
        summary_bn: 'বিভিন্ন পরিস্থিতিতে ব্যক্তি ও সম্পর্কের মর্যাদা অনুযায়ী উপযুক্ত বাচনভঙ্গি, সর্বনাম ও শারীরিক ভাষা ব্যবহারের উপায়।',
        summary_en: 'Techniques and etiquette for respectful verbal and non-verbal communication according to different relationships and situations.',
        topics: ['পরিস্থিতি অনুযায়ী যোগাযোগ', 'মর্যাদা অনুযায়ী সর্বনামের রূপভেদ (আপনি, তুমি, তুই)', 'অভাষিক ও শারীরিক যোগাযোগ', 'শ্রদ্ধাশীল আচরণের শিষ্টাচার'],
        learning_outcomes: ['পরিস্থিতি ও ব্যক্তির মর্যাদা বুঝে প্রমিত বাংলা ও যথাযথ সর্বনাম ব্যবহার করতে পারবে।', 'অন্যের মতামত শ্রদ্ধার সাথে শুনে প্রতিক্রিয়া জানাতে পারবে।'],
        estimated_periods: 6,
        practical_tasks: ['সহপাঠীদের সাথে পরিস্থিতিভিত্তিক রোল-প্লে বা নাট্যাভিনয় উপস্থাপন।']
      },
      {
        chapter_no: 2,
        chapter_slug: 'using-standard-language',
        title_bn: 'প্রমিত ভাষা ব্যবহার করি',
        title_en: 'Using Standard Bengali Language',
        summary_bn: 'ধ্বনি, বর্ণ ও শব্দের সঠিক উচ্চারণ এবং আঞ্চলিক ভাষার সাথে প্রমিত রূপের পার্থক্যের বিশদ পাঠ।',
        summary_en: 'Understanding phonetics, accurate pronunciation of Bengali vowels and consonants, and distinguishing standard form from regional dialects.',
        topics: ['ধ্বনি ও বর্ণের উচ্চারণ', 'আঞ্চলিক বনাম প্রমিত ভাষার তুলনা', 'উচ্চারণ অনুশীলন', 'শব্দ ব্যবহারের যথার্থতা'],
        learning_outcomes: ['আঞ্চলিক ও প্রমিত ভাষার ব্যবধান চিহ্নিত করতে পারবে।', 'পাঠ্যবই ও দৈনন্দিন জীবনে স্পষ্ট প্রমিত বাংলায় কথা বলতে পারবে।'],
        estimated_periods: 8,
        practical_tasks: ['একটি আঞ্চলিক বাক্যকে প্রমিত বাংলায় রূপান্তর করে আবৃত্তি করা।']
      },
      {
        chapter_no: 3,
        chapter_slug: 'writing-sentences-understanding-meaning',
        title_bn: 'অর্থ বুঝে বাক্য লিখি',
        title_en: 'Writing Meaningful Sentences & Grammar',
        summary_bn: 'শব্দের শ্রেণি ও পদ পরিচয়: বিশেষ্য, সর্বনাম, বিশেষণ, ক্রিয়া, ক্রিয়া বিশেষণ, অনুসর্গ ও যোজক।',
        summary_en: 'Parts of speech and lexical categories in Bengali: Nouns, Pronouns, Adjectives, Verbs, Adverbs, Postpositions, and Conjunctions.',
        topics: ['শব্দের শ্রেণিবিভাগ', 'বিশেষ্য ও সর্বনাম পদ', 'বিশেষণ ও ক্রিয়া পদ', 'অনুসর্গ, যোজক ও আবেগ শব্দ', 'বাক্য গঠনরীতি'],
        learning_outcomes: ['বাক্যের বিভিন্ন উপাদানের ব্যাকরণিক কাজ শনাক্ত করতে পারবে।', 'সঠিক যতিচিহ্ন ও পদের ব্যবহারে অর্থপূর্ণ বাক্য লিখতে পারবে।'],
        estimated_periods: 10,
        practical_tasks: ['প্রদত্ত অনুচ্ছেদ থেকে আট শ্রেণির শব্দ আলাদা করে ছকে সাজানো।']
      },
      {
        chapter_no: 4,
        chapter_slug: 'analyzing-surrounding-writings',
        title_bn: 'চারপাশের লেখা বিশ্লেষণ করি',
        title_en: 'Analyzing Everyday Written Texts',
        summary_bn: 'বিজ্ঞাপন, নোটিশ, সাইনবোর্ড, আবেদনপত্র, বিলবোর্ড এবং দৈনন্দিন ব্যবহারিক লেখার উদ্দেশ্য ও গঠন বিশ্লেষণ।',
        summary_en: 'Critical analysis of real-world texts including notices, advertisements, instructions, and practical applications.',
        topics: ['বিজ্ঞাপন ও নোটিশের ভাষা', 'চিঠিপত্র ও আবেদনপত্র', 'তথ্যবহুল পোস্টার ও সাইনবোর্ড', 'লেখকের উদ্দেশ্য ও লক্ষিত পাঠক'],
        learning_outcomes: ['বাস্তব জীবনের বিভিন্ন লেখার উদ্দেশ্য অনুধাবন করতে পারবে।', 'জরুরি প্রয়োজনে স্পষ্ট ও সংক্ষিপ্ত প্রাতিষ্ঠানিক বার্তা তৈরি করতে পারবে।'],
        estimated_periods: 6,
        practical_tasks: ['বিদ্যালয়ের পরিষ্কার-পরিচ্ছন্নতা সপ্তাহ উদযাপনের একটি নোটিশ তৈরি।']
      },
      {
        chapter_no: 5,
        chapter_slug: 'descriptive-and-informative-composition',
        title_bn: 'বিবরণমূলক ও তথ্যমূলক রচনা',
        title_en: 'Descriptive and Informative Writing',
        summary_bn: 'বাস্তব বস্তু, ঐতিহাসিক স্থান বা প্রাকৃতিক দৃশ্যের তথ্যবহুল ও বস্তুনিষ্ঠ বিবরণ লেখার কৌশল।',
        summary_en: 'Structuring objective essays, descriptive reports, and informational compositions using organized facts.',
        topics: ['বিবরণমূলক লেখার বৈশিষ্ট্য', 'তথ্য সংগ্রহের পদ্ধতি', 'অনুচ্ছেদ বিন্যাস ও যৌক্তিক ধারাবাহিকতা', 'নমুনা তথ্যভিত্তিক রচনা পাঠ'],
        learning_outcomes: ['কোনো ঘটনা বা স্থান প্রত্যক্ষ করে তার নির্ভরযোগ্য বিবরণ লিখতে পারবে।', 'তথ্যমূলক পাঠ অনুধাবন করে মূলভাব সংক্ষেপে প্রকাশ করতে পারবে।'],
        estimated_periods: 8,
        practical_tasks: ['নিজের বিদ্যালয় বা স্থানীয় কোনো দর্শনীয় স্থান নিয়ে ২০০ শব্দের তথ্যমূলক রচনা তৈরি।']
      },
      {
        chapter_no: 6,
        chapter_slug: 'reading-and-creating-literature',
        title_bn: 'সাহিত্য পড়ি ও লিখতে শিখি',
        title_en: 'Reading and Creating Literature',
        summary_bn: 'কবিতা, ছড়া, গল্প, নাটক ও প্রবন্ধের আস্বাদন, বিশ্লেষণ এবং নিজের কল্পনাশক্তির প্রকাশ।',
        summary_en: 'Literary genres: Poetry, short stories, folk fables, and drama; understanding rhythm, rhyme, imagery, and narrative.',
        topics: ['কবিতা ও ছড়ার ছন্দ-অন্ত্যমিল', 'ছোটগল্পের প্লট ও চরিত্রায়ন', 'নাটকের সংলাপ রচনা', 'সাহিত্য বিশ্লেষণের প্রাথমিক পাঠ'],
        learning_outcomes: ['কবিতা ও গল্পের অন্তরালের বার্তা ও আবেগ উপলব্ধি করতে পারবে।', 'ছোট ছোট ছড়া, গল্প বা সংলাপ নিজে রচনা করতে উৎসাহিত হবে।'],
        estimated_periods: 12,
        practical_tasks: ['একটি অসম্পূর্ণ গল্পের জন্য নিজস্ব কল্পনায় আকর্ষণীয় সমাপ্তি লেখা।']
      },
      {
        chapter_no: 7,
        chapter_slug: 'imaginative-and-creative-writing',
        title_bn: 'কল্পনা ও সৃজনশীল রচনা',
        title_en: 'Imaginative and Creative Compositions',
        summary_bn: 'কল্পনাভিত্তিক রোমাঞ্চকর ঘটনা, রূপকথা, ভবিষ্যৎ পৃথিবী বা স্বপ্নযাত্রার সৃজনশীল লেখনী।',
        summary_en: 'Developing fictional narratives, science-fiction ideas, and imaginative stories using expressive metaphors.',
        topics: ['কল্পনানির্ভর গল্প তৈরি', 'কল্পনার সাথে বাস্তবের মেলবন্ধন', 'আবেগ ও উদ্দীপনামূলক প্রকাশভঙ্গি', 'সৃজনশীল পাণ্ডুলিপি প্রস্তুত'],
        learning_outcomes: ['অনুকরণ না করে নিজস্ব চিন্তায় সৃজনশীল গল্প তৈরি করতে পারবে।', 'স্বতঃস্ফূর্ত ভাব প্রকাশের আত্মবিশ্বাস অর্জন করবে।'],
        estimated_periods: 6,
        practical_tasks: ['"যদি আমি পাখির মতো উড়তে পারতাম" অথবা "ভবিষ্যতের একটি দিন" বিষয়ে কল্পনাভিত্তিক রচনা লিখন।']
      }
    ]
  },

  // 2. English
  {
    id: 'english',
    code: 'NCTB-6-ENG',
    title_bn: 'ইংরেজি',
    title_en: 'English for Today',
    class: 'class-6',
    class_no: 6,
    category: 'language',
    category_bn: 'ভাষা ও সাহিত্য',
    publisher: 'National Curriculum and Textbook Board, Bangladesh',
    curriculum_version: 'New National Curriculum',
    theme_color: '#2563eb',
    icon_name: 'Languages',
    description_bn: 'যোগাযোগমুখী ইংরেজি শেখা, শব্দভাণ্ডার বৃদ্ধি, দৈনন্দিন কথোপকথন ও ব্যাকরণের ব্যবহারিক প্রয়োগের ১৮টি ইউনিট সমৃদ্ধ পাঠ্যবই।',
    description_en: 'Communicative English textbook for Grade 6 containing 18 engaging units focusing on real-life speaking, reading comprehension, grammar, and active writing.',
    total_chapters: 18,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'talking-to-people',
        title_bn: 'ইউনিট ১: মানুষের সাথে কথা বলা',
        title_en: 'Unit 1: Talking to People',
        summary_bn: 'পরিচিত ও অপরিচিত ব্যক্তির সাথে সম্ভাষণ, শুভেচ্ছা বিনিময় ও শালীন কথোপকথন।',
        summary_en: 'Greetings, introductions, formal vs informal pleasantries, and polite conversational phrases.',
        topics: ['Formal & Informal Greetings', 'Introducing Oneself and Others', 'Conversational Openers', 'Polite Expressions'],
        learning_outcomes: ['Initiate and conclude polite conversations in English comfortably.', 'Differentiate formal and informal dialogue contexts.'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'little-things',
        title_bn: 'ইউনিট ২: ছোট ছোট বিষয়',
        title_en: 'Unit 2: Little Things',
        summary_bn: 'জুলিয়া কার্নির বিখ্যাত কবিতা "Little Things" পাঠ, আবৃত্তি ও মানবতার ছোট ভালো কাজের গুরুত্ব।',
        summary_en: 'Poem recitation, literary appreciation of Julia Abigail Fletcher Carney’s "Little Things", and appreciating small acts of kindness.',
        topics: ['Poem Recitation & Rhythm', 'Vocabulary: drops, grains, eternity', 'Moral reflection on kindness', 'Rhyming words in poems'],
        learning_outcomes: ['Recite simple English poetry with proper stress and intonation.', 'Express thoughts on the power of small helpful deeds.'],
        estimated_periods: 5
      },
      {
        chapter_no: 3,
        chapter_slug: 'future-lies-in-present',
        title_bn: 'ইউনিট ৩: বর্তমানের মাঝেই ভবিষ্যৎ',
        title_en: 'Unit 3: Future Lies in Present',
        summary_bn: 'দৈনন্দিন অভ্যাস, সময়নিষ্ঠা এবং ভবিষ্যৎ স্বপ্ন বাস্তবায়নের পথনির্দেশক গল্প।',
        summary_en: 'Short narrative about time management, goal setting, and how present discipline builds the future.',
        topics: ['Reading comprehension', 'Verb forms and continuous tense', 'Expressing daily habits and dreams', 'Sentence construction'],
        learning_outcomes: ['Describe daily routines and aspirations using correct present and future verbs.'],
        estimated_periods: 6
      },
      {
        chapter_no: 4,
        chapter_slug: 'ask-and-answer',
        title_bn: 'ইউনিট ৪: প্রশ্ন করা ও উত্তর দেওয়া',
        title_en: 'Unit 4: Ask and Answer',
        summary_bn: 'Wh-প্রশ্নের গঠন, সাহায্যকারী ক্রিয়া ব্যবহার এবং কার্যকর সাক্ষাৎকার গ্রহণ।',
        summary_en: 'Forming interrogative sentences with Wh-question words, auxiliary verbs, and peer interview techniques.',
        topics: ['Wh-Question Words (Who, What, Where, When, Why, How)', 'Yes/No Questions', 'Peer Interview Activity', 'Dialogue writing'],
        learning_outcomes: ['Ask meaningful questions to seek clarification or extract information.'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'together-we-are-one',
        title_bn: 'ইউনিট ৫: একতাই বল',
        title_en: 'Unit 5: Together We Are One',
        summary_bn: 'দলগত কাজ, সহমর্মিতা এবং সমাজের সকল শ্রেণির মানুষকে অন্তর্ভুক্ত করার গুরুত্ব।',
        summary_en: 'Collaboration, teamwork values, and embracing inclusivity regardless of diversity.',
        topics: ['Collaborative classroom tasks', 'Inclusive language', 'Synonyms and antonyms', 'Paragraph writing on teamwork'],
        learning_outcomes: ['Work collaboratively in groups and express appreciation for teammates.'],
        estimated_periods: 5
      },
      {
        chapter_no: 6,
        chapter_slug: 'the-missing-tenth-man',
        title_bn: 'ইউনিট ৬: দশম ব্যক্তির নিখোঁজ রহস্য',
        title_en: 'Unit 6: The Missing Tenth Man',
        summary_bn: 'একটি হাসির ধাঁধামূলক লোককাহিনী যা বিশ্লেষণী চিন্তা ও মনোযোগ বৃদ্ধি করে।',
        summary_en: 'Humorous traditional counting folk tale that sharpens critical observation and logical problem-solving.',
        topics: ['Story comprehension', 'Ordinal and cardinal numbers', 'Direct and indirect speech glimpses', 'Role play'],
        learning_outcomes: ['Identify humorous punchlines and explain the riddle behind the story in English.'],
        estimated_periods: 5
      },
      {
        chapter_no: 7,
        chapter_slug: 'a-day-in-the-life-of-mina',
        title_bn: 'ইউনিট ৭: মীনার একটি দিন',
        title_en: 'Unit 7: A Day in the Life of Mina',
        summary_bn: 'একটি সাধারণ গ্রামীণ ও শহরের কিশোরীর দৈনন্দিন সময়সূচি ও পরিবারের দায়িত্ব।',
        summary_en: 'Daily schedule, time management, family support, and using time prepositions.',
        topics: ['Daily routine verbs (wake up, study, assist, sleep)', 'Prepositions of time (at, on, in)', 'Chronological sequence connectors'],
        learning_outcomes: ['Write a coherent 100-word paragraph detailing a typical school day.'],
        estimated_periods: 5
      },
      {
        chapter_no: 8,
        chapter_slug: 'bangabandhu-my-inspiration',
        title_bn: 'ইউনিট ৮: বঙ্গবন্ধু আমার অনুপ্রেরণা',
        title_en: 'Unit 8: Bangabandhu, My Inspiration',
        summary_bn: 'জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের শৈশব, আত্মত্যাগ ও অদম্য সাহসিকতার পাঠ।',
        summary_en: 'Biographical narrative exploring Father of the Nation Bangabandhu Sheikh Mujibur Rahman’s inspiring youth and leadership.',
        topics: ['Biographical comprehension', 'Past simple tense of regular & irregular verbs', 'Historical milestones vocabulary', 'Expressing admiration'],
        learning_outcomes: ['Narrate key biographical events using correct past tense.'],
        estimated_periods: 6
      },
      {
        chapter_no: 9,
        chapter_slug: 'polite-requests',
        title_bn: 'ইউনিট ৯: বিনীত অনুরোধ',
        title_en: 'Unit 9: Polite Requests',
        summary_bn: 'অনুরোধ জানানো ও অনুমতি চাওয়ায় Can, Could, Would, May এর মার্জিত ব্যবহার।',
        summary_en: 'Using modal auxiliaries (Can, Could, Would, May) to make, accept, or decline courteous requests.',
        topics: ['Modal auxiliaries for requests', 'Accepting and refusing politely', 'Telephone etiquette', 'Classroom requests'],
        learning_outcomes: ['Formulate courteous requests in public and school environments without hesitation.'],
        estimated_periods: 5
      },
      {
        chapter_no: 10,
        chapter_slug: 'the-boy-under-the-tree',
        title_bn: 'ইউনিট ১০: গাছের নিচের ছেলেটি',
        title_en: 'Unit 10: The Boy Under the Tree',
        summary_bn: 'প্রকৃতিপ্রেম ও প্রাণীদের প্রতি মমতা নিয়ে হৃদয়গ্রাহী নীতিগল্প।',
        summary_en: 'Compassionate story encouraging kindness towards stray animals and ecological conservation.',
        topics: ['Describing natural surroundings', 'Adjectives of feeling and appearance', 'Empathy and animal welfare', 'Character sketching'],
        learning_outcomes: ['Demonstrate emotional awareness and write descriptive observations of nature.'],
        estimated_periods: 5
      },
      {
        chapter_no: 11,
        chapter_slug: 'meeting-an-overseas-friend',
        title_bn: 'ইউনিট ১১: প্রবাসী বন্ধুর সাথে সাক্ষাৎ',
        title_en: 'Unit 11: Meeting an Overseas Friend',
        summary_bn: 'সাংস্কৃতিক বৈচিত্র্য, ঐতিহ্যবাহী খাবার ও বাংলাদেশের সৌন্দর্যের ইংরেজি বর্ণনা।',
        summary_en: 'Cross-cultural communication, describing Bangladeshi culture, seasons, and hospitality to an international visitor.',
        topics: ['Describing Bangladesh heritage & food', 'Comparative adjectives', 'Cultural exchange dialogues', 'Informal letter writing'],
        learning_outcomes: ['Introduce Bangladeshi traditions in English fluently to an international friend.'],
        estimated_periods: 6
      },
      {
        chapter_no: 12,
        chapter_slug: 'medhas-dream',
        title_bn: 'ইউনিট ১২: মেধার স্বপ্ন',
        title_en: 'Unit 12: Medha’s Dream',
        summary_bn: 'পরিবেশ দূষণ রোধ, বৃক্ষরোপণ এবং একটি সবুজ ভবিষ্যৎ গড়ে তোলার প্রত্যয়।',
        summary_en: 'Story focused on green climate action, community tree planting, and youth leadership.',
        topics: ['Environmental action verbs', 'Future intentions (going to, will)', 'Eco-friendly slogans and posters', 'Dialogue delivery'],
        learning_outcomes: ['Draft environmental slogans and articulate personal climate initiatives.'],
        estimated_periods: 5
      },
      {
        chapter_no: 13,
        chapter_slug: 'my-books',
        title_bn: 'ইউনিট ১৩: আমার প্রিয় বইসমূহ',
        title_en: 'Unit 13: My Books',
        summary_bn: 'বই পড়ার আনন্দ, বিভিন্ন ধরনের সাহিত্যের প্রতি ভালোবাসা এবং কল্পনার বিস্তার।',
        summary_en: 'Poem and prose celebrating the joy of reading, library exploration, and knowledge enrichment.',
        topics: ['Poem appreciation: rhythm & imagery', 'Book review vocabulary (genre, plot, author)', 'Expressing personal taste', 'Library skills'],
        learning_outcomes: ['Write a short review of a favorite book in simple English.'],
        estimated_periods: 5
      },
      {
        chapter_no: 14,
        chapter_slug: 'arshis-letter',
        title_bn: 'ইউনিট ১৪: আরশির চিঠি',
        title_en: 'Unit 14: Arshi’s Letter',
        summary_bn: 'চিঠি ও ইমেইলের সঠিক ফরম্যাট, প্রিয়জনকে শুভকামনা জানানো ও কৃতজ্ঞতা প্রকাশ।',
        summary_en: 'Informal letter and email formatting: Heading, salutation, body paragraphs, subscription, and signature.',
        topics: ['Parts of an informal letter', 'Email etiquette and subject lines', 'Sharing pleasant experiences', 'Addressing an envelope'],
        learning_outcomes: ['Draft and format personal letters and emails clearly for friends and relatives.'],
        estimated_periods: 5
      },
      {
        chapter_no: 15,
        chapter_slug: 'a-fresh-pair-of-eyes',
        title_bn: 'ইউনিট ১৫: নতুন দৃষ্টিকোণ',
        title_en: 'Unit 15: A Fresh Pair of Eyes',
        summary_bn: 'জীবনে যা কিছু আছে তার জন্য কৃতজ্ঞ থাকা এবং ইতিবাচক মানসিকতার বিকাশ।',
        summary_en: 'Insightful narrative on shifting perspectives, cultivating gratitude, and identifying happiness in simple blessings.',
        topics: ['Perspective-taking in stories', 'Compound sentences with and, but, so', 'Expressing gratitude', 'Reflective journal writing'],
        learning_outcomes: ['Express perspectives and write reflections on everyday gratitude.'],
        estimated_periods: 5
      },
      {
        chapter_no: 16,
        chapter_slug: 'save-our-planet',
        title_bn: 'ইউনিট ১৬: আমাদের গ্রহ রক্ষা করো',
        title_en: 'Unit 16: Save Our Planet',
        summary_bn: 'জলবায়ু পরিবর্তন, পুনর্ব্যবহার (Recycling) এবং প্লাস্টিক বর্জ্য নিয়ন্ত্রণের উপায়।',
        summary_en: 'Climate awareness, 3Rs (Reduce, Reuse, Recycle), plastic pollution, and green living habits.',
        topics: ['Ecological terms (deforestation, waste, conserve)', 'Imperative sentences for guidelines', 'Making persuasive posters', 'Speech delivery'],
        learning_outcomes: ['Deliver a 1-minute persuasive presentation on eco-conservation.'],
        estimated_periods: 6
      },
      {
        chapter_no: 17,
        chapter_slug: 'king-lear',
        title_bn: 'ইউনিট ১৭: কিং লিয়ার',
        title_en: 'Unit 17: King Lear (Classic Adaptation)',
        summary_bn: 'শেক্সপিয়রের অমর ট্র্যাজেডি "কিং লিয়ার"-এর সহজবোধ্য কিশোর রূপান্তর ও চরিত্রের নৈতিক শিক্ষা।',
        summary_en: 'Simplified adaptation of Shakespeare’s King Lear; analyzing sincerity versus flattery.',
        topics: ['Classic drama adaptation', 'Character analysis (Lear, Cordelia, Goneril, Regan)', 'Moral lessons on honesty and unconditional love', 'Dramatic reading'],
        learning_outcomes: ['Analyze character motives in classic literature and perform adapted dialogues.'],
        estimated_periods: 6
      },
      {
        chapter_no: 18,
        chapter_slug: 'four-friends',
        title_bn: 'ইউনিট ১৮: চার বন্ধু',
        title_en: 'Unit 18: Four Friends',
        summary_bn: 'হরিণ, কচ্ছপ, কাক ও ইঁদুরের বন্ধুত্বের রূপকথা ও যৌথ প্রচেষ্টায় বিপদ মুক্তির গল্প।',
        summary_en: 'Timeless fable highlighting how unity, resourcefulness, and loyalty overcome grave adversity.',
        topics: ['Fable conventions and talking animals', 'Story sequencing and flowcharts', 'Creative ending variations', 'Group skit performance'],
        learning_outcomes: ['Demonstrate total unit comprehension and narrate fables with confidence.'],
        estimated_periods: 6
      }
    ]
  },

  // 3. গণিত
  {
    id: 'math',
    code: 'NCTB-6-MAT',
    title_bn: 'গণিত',
    title_en: 'Mathematics',
    class: 'class-6',
    class_no: 6,
    category: 'mathematics',
    category_bn: 'গণিত',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#059669',
    icon_name: 'Calculator',
    description_bn: 'সংখ্যার গল্প, জ্যামিতিক রূপ, বীজগণিতের সূচনা, উপাত্ত বিশ্লেষণ ও বাস্তব জীবনের গাণিতিক সমস্যার আনন্দদায়ক সমাধানের পাঠ্যবই।',
    description_en: 'Practical Grade 6 mathematics textbook combining ancient number history, 2D/3D shapes, algebra fundamentals, and data exploration.',
    total_chapters: 12,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'story-of-numbers',
        title_bn: 'অধ্যায় ১: সংখ্যার গল্প',
        title_en: 'Chapter 1: The Story of Numbers',
        summary_bn: 'প্রাচীন মায়ান, মিশরীয় ও রোমান সংখ্যা ব্যবস্থা, দেশীয় ও আন্তর্জাতিক সংখ্যা গণনারীতি ও সংখ্যার ম্যাজিক।',
        summary_en: 'History of counting, Mayan and Roman numeral systems, local and international place value systems, and number puzzles.',
        topics: ['প্রাচীন গণনা পদ্ধতি ও মায়ান সংখ্যা', 'রোমান সংখ্যা লিখনের নিয়ম', 'দেশীয় ও আন্তর্জাতিক অঙ্কপাতন রীতি', 'সংখ্যার মজার খেলা ও ধাঁধা'],
        learning_outcomes: ['রোমান ও প্রাচীন সংখ্যা প্রতীক ডিকোড করতে পারবে।', 'দেশীয় ও আন্তর্জাতিক উভয় রীতিতে বড় সংখ্যা পড়তে ও লিখতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 2,
        chapter_slug: 'story-of-two-dimensional-objects',
        title_bn: 'অধ্যায় ২: দ্বিমাত্রিক বস্তুর গল্প',
        title_en: 'Chapter 2: The Story of Two-Dimensional Shapes',
        summary_bn: 'কাগজ কেটে ত্রিভুজ, চতুর্ভুজ ও বৃত্ত তৈরি, শীর্ষবিন্দু, বাহু ও কোণের সম্পর্ক যাচাই।',
        summary_en: 'Exploring polygons, triangles, quadrilaterals, circles, perimeters, and symmetry through paper folding and hands-on geometry.',
        topics: ['ত্রিভুজের প্রকারভেদ ও কোণের সমষ্টি', 'চতুর্ভুজ ও তার প্রকারভেদ (বর্গ, আয়ত, সামান্তরিক, রম্বস)', 'বৃত্ত, ব্যাস, ব্যাসার্ধ ও পরিধি', 'দ্বিমাত্রিক বস্তুর প্রতিসাম্য'],
        learning_outcomes: ['দ্বিমাত্রিক আকৃতির বৈশিষ্ট্য শনাক্ত করে তাদের পরিসীমা পরিমাপ করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 3,
        chapter_slug: 'inquiry-and-analysis-of-data',
        title_bn: 'অধ্যায় ৩: তথ্যের অনুসন্ধান ও বিশ্লেষণ',
        title_en: 'Chapter 3: Data Inquiry and Analysis',
        summary_bn: 'উপাত্ত সংগ্রহ, গণসংখ্যা নিবেশন সারণি তৈরি, স্তম্ভলেখ অঙ্কন এবং গড়, মধ্যক ও প্রচুরক নির্ণয়।',
        summary_en: 'Collecting authentic classroom survey data, frequency tables, bar charts, mean, median, and mode determination.',
        topics: ['উপাত্ত সংগ্রহ ও শ্রেণীকরণ', 'ট্যালি চিহ্ন ও গণসংখ্যা সারণি', 'স্তম্ভচিত্র (Bar Chart) অঙ্কন ও বিশ্লেষণ', 'গড়, মধ্যক ও প্রচুরকের প্রাথমিক প্রয়োগ'],
        learning_outcomes: ['উপাত্ত উপস্থাপন করে সহজ গ্রাফের মাধ্যমে যৌক্তিক সিদ্ধান্ত নিতে পারবে।'],
        estimated_periods: 10
      },
      {
        chapter_no: 4,
        chapter_slug: 'tree-of-prime-factors',
        title_bn: 'অধ্যায় ৪: মৌলিক উৎপাদকের গাছ',
        title_en: 'Chapter 4: The Tree of Prime Factors',
        summary_bn: 'মৌলিক সংখ্যা ও যৌগিক সংখ্যা, উৎপাদকের বৃক্ষ মডেল, গ.সা.গু ও ল.সা.গু এর বাস্তব প্রয়োগ।',
        summary_en: 'Prime and composite numbers, factorization trees, finding GCD/HCF and LCM, and real-life scheduling/grouping problems.',
        topics: ['মৌলিক ও যৌগিক সংখ্যার ধারণা', 'উৎপাদকের গাছ (Factor Tree)', 'ইউক্লিডীয় পদ্ধতিতে গ.সা.গু', 'বাস্তব সমস্যায় গ.সা.গু ও ল.সা.গু এর ব্যবহার'],
        learning_outcomes: ['মৌলিক উৎপাদকের বিশ্লেষণের মাধ্যমে দ্রুত গ.সা.গু ও ল.সা.গু নির্ণয় করতে পারবে।'],
        estimated_periods: 10
      },
      {
        chapter_no: 5,
        chapter_slug: 'measurement-of-length',
        title_bn: 'অধ্যায় ৫: দৈর্ঘ্যের পরিমাপ',
        title_en: 'Chapter 5: Measurement of Length',
        summary_bn: 'দৈর্ঘ্য পরিমাপের মেট্রিক পদ্ধতি, স্কেলের সঠিক ব্যবহার, ফিতা দিয়ে ক্ষেত্রফল ও উচ্চতা পরিমাপ।',
        summary_en: 'Metric units of measurement (mm, cm, m, km), conversion of units, measuring height and perimeter accurately.',
        topics: ['মেট্রিক এককাবলি ও রূপান্তর', 'পরিমাপক স্কেলের ব্যবহার', 'বিদ্যালয় মাঠ ও কক্ষের দৈর্ঘ্য পরিমাপ', 'ভুল পরিমাপ এড়ানোর কৌশল'],
        learning_outcomes: ['যথাযথ পরিমাপক যন্ত্র নির্বাচন করে নির্ভুলভাবে বস্তু পরিমাপ করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 6,
        chapter_slug: 'realm-of-integers',
        title_bn: 'অধ্যায় ৬: পূর্ণসংখ্যার জগৎ',
        title_en: 'Chapter 6: The Realm of Integers',
        summary_bn: 'ধনাত্মক ও ঋণাত্মক সংখ্যার ধারণা, সংখ্যারেখায় স্থাপন এবং চিহ্নের নিয়মে যোগ-বিয়োগ।',
        summary_en: 'Positive and negative integers, representing values on number lines, opposite numbers, and addition/subtraction rules.',
        topics: ['ঋণাত্মক সংখ্যার বাস্তব প্রয়োজনীয়তা (লাভ-ক্ষতি, তাপমাত্রা)', 'সংখ্যারেখা ও পূর্ণসংখ্যা', 'চিহ্নের নিয়মাবলি (+ ও -)', 'সংখ্যারেখার সাহায্যে যোগ ও বিয়োগ'],
        learning_outcomes: ['সংখ্যারেখা ব্যবহার করে ঋণাত্মক ও ধনাত্মক পূর্ণসংখ্যার হিসাব নির্ভুলভাবে সম্পন্ন করতে পারবে।'],
        estimated_periods: 9
      },
      {
        chapter_no: 7,
        chapter_slug: 'game-of-fractions',
        title_bn: 'অধ্যায় ৭: ভগ্নাংশের খেলা',
        title_en: 'Chapter 7: The Game of Fractions',
        summary_bn: 'প্রকৃত, অপ্রকৃত ও মিশ্র ভগ্নাংশ, সমতুল ভগ্নাংশ এবং গ্রিড ও চিত্রের সাহায্যে ভগ্নাংশের গুণ ও ভাগ।',
        summary_en: 'Proper, improper, and mixed fractions, equivalent fractions, decimal conversions, and visual fractional arithmetic.',
        topics: ['ভগ্নাংশের দৃশ্যমান মডেল ও কাগজ কাটা', 'সমতুল ভগ্নাংশ ও লঘিষ্ঠকরণ', 'ভগ্নাংশের যোগ ও বিয়োগ', 'দশমিক ভগ্নাংশের সহজ গণনা'],
        learning_outcomes: ['বাস্তব উপকরণ ও চিত্র দেখে ভগ্নাংশের ধারণা স্পষ্ট করতে পারবে এবং বাস্তব সমস্যায় প্রয়োগ করতে পারবে।'],
        estimated_periods: 10
      },
      {
        chapter_no: 8,
        chapter_slug: 'world-of-unknown-quantities',
        title_bn: 'অধ্যায় ৮: অজানা রাশির জগৎ',
        title_en: 'Chapter 8: The World of Unknown Quantities (Algebra)',
        summary_bn: 'বীজগণিতের প্রাথমিক ধারণা, চলক (Variables), পদ, সহগ এবং বীজগণিতীয় রাশির যোগ ও বিয়োগ।',
        summary_en: 'Introduction to algebra, variables, constants, algebraic terms, coefficients, and basic algebraic expressions.',
        topics: ['বীজগণিতীয় প্রতীক ও চলক', 'বীজগণিতীয় পদ ও সহগ', 'সদৃশ ও বিসদৃশ পদ', 'বীজগণিতীয় রাশির যোগ ও বিয়োগ'],
        learning_outcomes: ['দৈনন্দিন অজানা মানকে চলকের মাধ্যমে বীজগণিতীয় রাশিতে রূপান্তর করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 9,
        chapter_slug: 'simple-equations',
        title_bn: 'অধ্যায় ৯: সরল সমীকরণ',
        title_en: 'Chapter 9: Simple Equations',
        summary_bn: 'সমীকরণ গঠনের নিয়ম, পাল্লার মতো ভারসাম্য রক্ষা এবং এক চলকবিশিষ্ট সমীকরণের সমাধান।',
        summary_en: 'Concept of mathematical balance, forming one-variable linear equations, and finding the unknown solution.',
        topics: ['সমীকরণ ও সমান চিহ্নের তাৎপর্য', 'পক্ষান্তর বিধি', 'এক চলকবিশিষ্ট সরল সমীকরণ সমাধান', 'বাস্তব সমস্যা থেকে সমীকরণ গঠন ও সমাধান'],
        learning_outcomes: ['কথায় লেখা বাস্তব গাণিতিক সমস্যা থেকে সমীকরণ তৈরি করে অজানা রাশির মান বের করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 10,
        chapter_slug: 'story-of-three-dimensional-objects',
        title_bn: 'অধ্যায় ১০: ত্রিমাত্রিক বস্তুর গল্প',
        title_en: 'Chapter 10: The Story of Three-Dimensional Objects',
        summary_bn: 'ঘনক, আয়তাকার ঘনবস্তু, প্রিজম, পিরামিড, সিলিন্ডার ও গোলকের তল, ধার ও শীর্ষবিন্দুর হিসাব।',
        summary_en: 'Cubes, rectangular prisms, cylinders, spheres, cones, identifying vertices, edges, faces, and 3D net unfolding.',
        topics: ['ত্রিমাত্রিক বস্তুর তল, ধার ও শীর্ষবিন্দু', 'ত্রিমাত্রিক বস্তুর নেট (Net) তৈরি', 'আয়তন ও পৃষ্ঠতলের ক্ষেত্রফলের ধারণা', 'বাস্তব ঘনবস্তু তৈরি'],
        learning_outcomes: ['ত্রিমাত্রিক জ্যামিতিক বস্তুর নেট তৈরি করে মডেল গঠন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 11,
        chapter_slug: 'unitary-method-percentage-and-ratio',
        title_bn: 'অধ্যায় ১১: ঐকিক নিয়ম, শতকরা এবং অনুপাত',
        title_en: 'Chapter 11: Unitary Method, Percentage, and Ratio',
        summary_bn: 'বাজারদর, সময়-দূরত্ব ও ওজনের হিসাবের জন্য ঐকিক নিয়ম, শতকরা হার ও অনুপাতের বাস্তব প্রয়োগ।',
        summary_en: 'Real-world commercial arithmetic: Unitary method for grocery pricing, speed calculation, percentage calculation, and ratio.',
        topics: ['ঐকিক নিয়মে সমস্যা সমাধান', 'শতকরা হিসাব ও শতকরাকে ভগ্নাংশে রূপান্তর', 'অনুপাত ও সমতুল অনুপাত', 'লাভ ও ক্ষতির প্রাথমিক ধারণা'],
        learning_outcomes: ['কেনাকাটা ও দৈনন্দিন জীবনে দাম ও পরিমাণের তুলনামূলক হিসাব ঐকিক ও শতকরা নিয়মে করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 12,
        chapter_slug: 'finding-and-understanding-formulas',
        title_bn: 'অধ্যায় ১২: সূত্র খুঁজি ও সূত্র বুঝি',
        title_en: 'Chapter 12: Finding and Understanding Mathematical Patterns',
        summary_bn: 'জ্যামিতিক ও সংখ্যাত্মক প্যাটার্ন থেকে সাধারণ সূত্র আবিষ্কার এবং গাণিতিক রহস্য সমাধান।',
        summary_en: 'Discovering visual and numerical patterns, sequences, generalizing formulas, and creative math puzzles.',
        topics: ['সংখ্যা প্যাটার্ন ও সিকোয়েন্স', 'জ্যামিতিক প্যাটার্নে কাঠি সাজানো', 'বীজগণিতীয় সাধারণ পদ নির্ণয়', 'গণিতের নান্দনিক রূপ'],
        learning_outcomes: ['প্যাটার্ন পর্যবেক্ষণ করে সাধারণ নিয়ম বা গাণিতিক সূত্র নিজে প্রতিপাদন করতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 4. বিজ্ঞান (অনুসন্ধানী পাঠ)
  {
    id: 'science-inquiry',
    code: 'NCTB-6-SCI-INQ',
    title_bn: 'বিজ্ঞান (অনুসন্ধানী পাঠ)',
    title_en: 'Science (Inquiry Book)',
    class: 'class-6',
    class_no: 6,
    category: 'science',
    category_bn: 'বিজ্ঞান',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#0284c7',
    icon_name: 'Atom',
    description_bn: 'পদার্থ, পরমাণুর গঠন, বল ও গতি, সৌরজগৎ, মানবদেহের বিভিন্ন তন্ত্র ও জীববৈচিত্র্যের মৌলিক বৈজ্ঞানিক ধারণার অনুসন্ধানী পাঠ্যবই।',
    description_en: 'Inquiry-based foundational science textbook for Class 6 covering matter, atoms, motion, force, energy, the universe, cellular biology, and ecosystems.',
    total_chapters: 11,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'scientific-inquiry-method',
        title_bn: 'অধ্যায় ১: বৈজ্ঞানিক অনুসন্ধান',
        title_en: 'Chapter 1: Scientific Inquiry and Methodology',
        summary_bn: 'বিজ্ঞান কী, বৈজ্ঞানিক অনুসন্ধান পদ্ধতির ধাপসমূহ, প্রশ্ন গঠন, পরীক্ষণ ও উপাত্ত সংগ্রহ।',
        summary_en: 'Nature of science, scientific method stages: hypothesis formulation, experiment design, observation, and data validation.',
        topics: ['বৈজ্ঞানিক অনুসন্ধানের ধাপসমূহ', 'সতর্কতা ও প্রমাণভিত্তিক সিদ্ধান্ত', 'পরিমাপের যথার্থতা', 'বিজ্ঞানের নৈতিকতা'],
        learning_outcomes: ['একটি নির্দিষ্ট সমস্যার বৈজ্ঞানিক অনুসন্ধান পরিকল্পনা প্রণয়ন ও বাস্তবায়ন করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'matter-and-its-states',
        title_bn: 'অধ্যায় ২: পদার্থ ও তার অবস্থা',
        title_en: 'Chapter 2: Matter and Its States',
        summary_bn: 'কঠিন, তরল ও বায়বীয় অবস্থা, পদার্থের আন্তঃআণবিক আকর্ষণ বল ও কণার গতিতত্ত্ব।',
        summary_en: 'Solids, liquids, gases, kinetic molecular theory, intermolecular forces, melting, boiling, and sublimation.',
        topics: ['পদার্থের তিন অবস্থা', 'কণার গতিতত্ত্বের স্বীকার্যসমূহ', 'গলন, স্ফুটন ও বাষ্পীভবন', 'ঘনীভবন ও ঊর্ধ্বপাতন'],
        learning_outcomes: ['কণার গতিতত্ত্বের সাহায্যে তাপমাত্রা বৃদ্ধির সাথে পদার্থের ভৌত অবস্থার পরিবর্তন ব্যাখ্যা করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'structure-of-matter',
        title_bn: 'অধ্যায় ৩: পদার্থের গঠন',
        title_en: 'Chapter 3: Structure of Matter',
        summary_bn: 'পরমাণু ও অণু, মৌলিক ও যৌগিক পদার্থ, ইলেকট্রন, প্রোটন ও নিউট্রনের পরিচয়।',
        summary_en: 'Atoms, molecules, elements vs compounds, atomic structure (protons, neutrons, electrons), and periodic table introductory concept.',
        topics: ['মৌলিক ও যৌগিক পদার্থ', 'অণু ও পরমাণুর তুলনা', 'পরমাণুর মূল কণিকাসমূহ', 'প্রচলিত মৌলের প্রতীক ও রাসায়নিক সংকেত'],
        learning_outcomes: ['দৈনন্দিন ব্যবহারের বিভিন্ন বস্তুকে মৌলিক ও যৌগিক পদার্থে বিভক্ত করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 4,
        chapter_slug: 'motion',
        title_bn: 'অধ্যায় ৪: গতি',
        title_en: 'Chapter 4: Motion',
        summary_bn: 'গতি ও স্থিতি, প্রসঙ্গ কাঠামো, বিভিন্ন প্রকার গতি (রৈখিক, ঘূর্ণন, স্পন্দন), দ্রুতি, বেগ ও ত্বরণ।',
        summary_en: 'Rest and motion, reference frames, types of motion (linear, circular, oscillatory), speed, velocity, and acceleration.',
        topics: ['প্রসঙ্গ বিন্দু ও কাঠামো', 'গতির প্রকারভেদ (চলন, ঘূর্ণন, পর্যায়বৃত্ত)', 'দূরত্ব বনাম সরণ', 'দ্রুতি, বেগ ও ত্বরণের সমীকরণ'],
        learning_outcomes: ['চলমান কোনো বস্তুর দ্রুতি ও গড় বেগ পরিমাপ ও গণনা করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 5,
        chapter_slug: 'force-and-pressure',
        title_bn: 'অধ্যায় ৫: বল ও চাপ',
        title_en: 'Chapter 5: Force and Pressure',
        summary_bn: 'বলের প্রভাব, জড়তা ও নিউটনের প্রথম গতিসূত্র, ঘর্ষণ বল, বায়ুমণ্ডলীয় চাপ ও তরলের চাপ।',
        summary_en: 'Effects of force, inertia, Newton’s first law of motion, friction types, atmospheric and fluid pressure.',
        topics: ['বলের ধারণা ও একক (নিউটন)', 'জড়তা ও নিউটনের প্রথম সূত্র', 'ঘর্ষণ বলের সুবিধা ও অসুবিধা', 'চাপ ও ক্ষেত্রফলের সম্পর্ক'],
        learning_outcomes: ['ঘর্ষণ বল নিয়ন্ত্রণের উপায় এবং বাস্তব জীবনে চাপের প্রভাব প্রদর্শন করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 6,
        chapter_slug: 'energy-and-its-transformation',
        title_bn: 'অধ্যায় ৬: শক্তি ও তার রূপান্তর',
        title_en: 'Chapter 6: Energy and Its Transformations',
        summary_bn: 'গতিশক্তি ও বিভব শক্তি, শক্তির বিভিন্ন রূপ, শক্তির রূপান্তর এবং শক্তি সংরক্ষণশীলতা নীতি।',
        summary_en: 'Kinetic and potential energy, forms of energy (mechanical, chemical, thermal, electrical), law of conservation of energy.',
        topics: ['শক্তির বিভিন্ন রূপ', 'যান্ত্রিক শক্তির নিত্যতা', 'বিদ্যুৎ ও সৌরশক্তির ব্যবহার', 'নবায়নযোগ্য ও অনবায়নযোগ্য শক্তি'],
        learning_outcomes: ['একটি রূপ থেকে অন্য রূপে শক্তির রূপান্তরের বাস্তব উদাহরণ উপস্থাপন করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 7,
        chapter_slug: 'the-sun-and-solar-system',
        title_bn: 'অধ্যায় ৭: সূর্য ও সৌরজগৎ',
        title_en: 'Chapter 7: The Sun and the Solar System',
        summary_bn: 'সৌরজগতের আটটি গ্রহ, উপগ্রহ, গ্রহাণুপুঞ্জ, ধূমকেতু এবং আহ্নিক ও বার্ষিক গতির প্রভাব।',
        summary_en: 'The Sun, 8 planets, dwarf planets, moons, asteroids, comets, day-night cycle, and seasonal changes on Earth.',
        topics: ['সৌরজগতের পরিবার', 'গ্রহসমূহের বৈশিষ্ট্য ও দূরত্ব', 'দিন-রাত্রির পর্যায় ও ঋতু পরিবর্তন', 'চন্দ্রকলা ও গ্রহণ (সূর্য ও চন্দ্রগ্রহণ)'],
        learning_outcomes: ['মডেল প্রদর্শনের মাধ্যমে কীভাবে দিন-রাত্রি ও ঋতু পরিবর্তন ঘটে তা উপস্থাপন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 8,
        chapter_slug: 'earth-and-the-universe',
        title_bn: 'অধ্যায় ৮: পৃথিবী ও মহাবিশ্ব',
        title_en: 'Chapter 8: Earth and the Vast Universe',
        summary_bn: 'নক্ষত্র, নক্ষত্রমণ্ডল, গ্যালাক্সি, মিল্কিওয়ে বা ছায়াপথ এবং মহাবিশ্বের প্রসারণের ধারণা।',
        summary_en: 'Stars, constellations, galaxies, the Milky Way, light-year distance unit, and origin of the universe concepts.',
        topics: ['নক্ষত্র ও তাদের জীবনচক্র', 'আলোকবর্ষ এককের ধারণা', 'ছায়াপথ ও মহাবিশ্বের আকার', 'টেলিস্কোপ ও মহাকাশ গবেষণা'],
        learning_outcomes: ['মহাবিশ্বের বিশালতার সাথে পৃথিবীর অবস্থান তুলনা করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 9,
        chapter_slug: 'cellular-organization-of-life',
        title_bn: 'অধ্যায় ৯: উদ্ভিদ ও প্রাণীর কোষীয় সংগঠন',
        title_en: 'Chapter 9: Cellular Organization of Plants and Animals',
        summary_bn: 'কোষের ধারণা, উদ্ভিদ ও প্রাণীকোষের প্রধান অঙ্গাণু (প্লাস্টিড, মাইটোকন্ড্রিয়া, নিউক্লিয়াস) ও মাইক্রোস্কোপ ব্যবহার।',
        summary_en: 'Cell theory, plant vs animal cells, key organelles (cell wall, nucleus, mitochondria, plastids), microscope operation.',
        topics: ['কোষ কী ও কোষের আবিষ্কার', 'উদ্ভিদকোষ ও প্রাণীকোষের পার্থক্য', 'নিউক্লিয়াস ও সাইটোপ্লাজমীয় অঙ্গাণু', 'সরল অণুবীক্ষণ যন্ত্রের মাধ্যমে পেঁয়াজের কোষ পর্যবেক্ষণ'],
        learning_outcomes: ['উদ্ভিদ ও প্রাণীকোষের চিহ্নিত চিত্র এঁকে প্রধান অঙ্গাণুসমূহের কাজ উল্লেখ করতে পারবে।'],
        estimated_periods: 9
      },
      {
        chapter_no: 10,
        chapter_slug: 'human-body-organ-systems',
        title_bn: 'অধ্যায় ১০: মানবদেহের অঙ্গসংস্থান',
        title_en: 'Chapter 10: Human Body Organ Systems',
        summary_bn: 'পরিপাকতন্ত্র, শ্বাসতন্ত্র, রক্ত সংবহনতন্ত্র ও কঙ্কালতন্ত্রের প্রধান অংশ ও সুস্থ রাখার উপায়।',
        summary_en: 'Introduction to human digestive system, respiratory system, circulatory system, and skeletal health.',
        topics: ['পরিপাকতন্ত্র ও খাদ্য হজমের ধাপ', 'শ্বাসতন্ত্র ও ফুসফুসের কাজ', 'হৃদপিণ্ড ও রক্ত সঞ্চালন', 'কঙ্কাল ও পেশিতন্ত্রের যত্ন'],
        learning_outcomes: ['মানবদেহের প্রধান অঙ্গসমূহের অবস্থান নির্দেশ করতে পারবে এবং সুস্থ থাকার অভ্যাস মেনে চলবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 11,
        chapter_slug: 'biodiversity-and-ecosystem',
        title_bn: 'অধ্যায় ১১: জীববৈচিত্র্য ও পরিবেশ',
        title_en: 'Chapter 11: Biodiversity and Ecosystems',
        summary_bn: 'বাস্তুতন্ত্রের উপাদান (উৎপাদক, খাদক, বিয়োজক), খাদ্যশৃঙ্খল, খাদ্যজাল ও জীববৈচিত্র্য সংরক্ষণ।',
        summary_en: 'Ecosystem components (biotic & abiotic), food chains, food webs, ecological balance, and conserving wildlife in Bangladesh.',
        topics: ['বাস্তুতন্ত্রের সজীব ও অজীব উপাদান', 'খাদ্যশৃঙ্খল ও খাদ্যজাল', 'সুন্দরবনের জীববৈচিত্র্য', 'জলবায়ু পরিবর্তনের হুমকি ও সংরক্ষণ প্রচেষ্টা'],
        learning_outcomes: ['স্থানীয় পরিবেশের একটি খাদ্যজাল তৈরি করে জীববৈচিত্র্য রক্ষার গুরুত্ব ব্যাখ্যা করতে পারবে।'],
        estimated_periods: 7
      }
    ]
  },

  // 5. বিজ্ঞান (অনুশীলন পাঠ)
  {
    id: 'science-activity',
    code: 'NCTB-6-SCI-ACT',
    title_bn: 'বিজ্ঞান (অনুশীলন পাঠ)',
    title_en: 'Science (Activity / Practical Book)',
    class: 'class-6',
    class_no: 6,
    category: 'science',
    category_bn: 'বিজ্ঞান',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#0891b2',
    icon_name: 'FlaskConical',
    description_bn: 'হাতে-কলমে পরীক্ষা, বিজ্ঞান প্রজেক্ট, স্থানীয় পরিবেশ অনুসন্ধান ও দলগত বৈজ্ঞানিক অনুসন্ধানের অনুশীলন পাঠ্যবই।',
    description_en: 'Hands-on practical experiments, scientific project design, data collection logs, and environmental investigation workbook.',
    total_chapters: 6,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'seeing-with-eyes-of-science',
        title_bn: 'অভিজ্ঞতা ১: বিজ্ঞানের চোখ দিয়ে দেখি',
        title_en: 'Experience 1: Observing with the Eyes of Science',
        summary_bn: 'দৈনন্দিন ঘটনাকে বৈজ্ঞানিক দৃষ্টিভঙ্গিতে পর্যবেক্ষণ, প্রশ্ন উত্থাপন ও তথ্য রেকর্ড করার কৌশল।',
        summary_en: 'Formulating investigative questions, maintaining a scientific observation logbook, and sensory analysis.',
        topics: ['পর্যবেক্ষণ ও উপাত্ত নথিভুক্তকরণ', 'অনুমানের যথার্থতা পরীক্ষা', 'সহজ পরীক্ষা উপকরণ তৈরি', 'বিজ্ঞানের ডায়েরি লিখন'],
        learning_outcomes: ['স্বাভাবিক ঘটনার কারণ নিয়ে যৌক্তিক প্রশ্ন তুলে প্রাথমিক পরীক্ষা চালাতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'heat-and-temperature-experiments',
        title_bn: 'অভিজ্ঞতা ২: তাপ ও তাপমাত্রা পরীক্ষা',
        title_en: 'Experience 2: Heat and Temperature Laboratory',
        summary_bn: 'থার্মোমিটার দিয়ে বিভিন্ন বস্তুর তাপমাত্রা পরিমাপ, তাপ সঞ্চালন (পরিবহন, পরিচলন, বিকিরণ) পরীক্ষা।',
        summary_en: 'Calibrating and reading thermometers, experimenting with thermal conduction, convection currents, and radiation absorption.',
        topics: ['থার্মোমিটার পাঠ গ্রহণের নিয়ম', 'তাপ পরিবহন পরীক্ষা', 'তরল ও গ্যাসে পরিচলন ধারা পর্যবেক্ষণ', 'কালো ও সাদা বস্তুর তাপ শোষণ তুলনা'],
        learning_outcomes: ['থার্মোমিটার ব্যবহার করে সঠিক সেলসিয়াস ও ফারেনহাইট পাঠ নিতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'observing-aquatic-and-microscopic-life',
        title_bn: 'অভিজ্ঞতা ৩: জলজ ও অনুজীব পর্যবেক্ষণ',
        title_en: 'Experience 3: Observing Aquatic and Microscopic Life',
        summary_bn: 'পুকুর বা জলাশয়ের পানির নমুনা সংগ্রহ, ড্রপার ও আতশ কাঁচের সাহায্যে ক্ষুদ্র জলজ জীব ও উদ্ভিদের সন্ধান।',
        summary_en: 'Collecting pond water samples, using magnifying glasses and simple lenses to document microscopic plankton and flora.',
        topics: ['নমুনা সংগ্রহের সঠিক পদ্ধতি', 'লেন্স ও ম্যাগনিফাইং গ্লাস ব্যবহার', 'জলজ অমেরুদণ্ডী প্রাণীর চিত্রাঙ্কন', 'পানির গুণমান পরীক্ষা'],
        learning_outcomes: ['স্থানীয় জলাশয়ের নমুনা পরীক্ষা করে স্বাস্থ্যকর ও দূষিত পানির তফাৎ বের করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 4,
        chapter_slug: 'investigating-speed-and-friction',
        title_bn: 'অভিজ্ঞতা ৪: গতি ও ঘর্ষণ পরীক্ষা',
        title_en: 'Experience 4: Investigating Speed and Friction',
        summary_bn: 'ঢালু তলে খেলনা গাড়ি চালিয়ে বিভিন্ন তলে (কাচ, বালু, কাঠ, কাপড়) ঘর্ষণের মাত্রা ও গতি পরিমাপ।',
        summary_en: 'Measuring rolling friction on different floor surfaces using toy cars, stopwatches, and inclined planes.',
        topics: ['ঢালু তলে গতি পরীক্ষা', 'ঘর্ষণ বলের হ্রাস-বৃদ্ধি পর্যবেক্ষণ', 'লুব্রিকেন্ট ও চাকার প্রভাব', 'গ্রাফে গতি উপস্থাপন'],
        learning_outcomes: ['পরীক্ষামূলক প্রমাণের সাহায্যে ঘর্ষণ বল কীভাবে গতি নিয়ন্ত্রণ করে তা উপস্থাপন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 5,
        chapter_slug: 'food-and-nutrient-testing',
        title_bn: 'অভিজ্ঞতা ৫: খাবার ও পুষ্টির অনুসন্ধান',
        title_en: 'Experience 5: Food and Nutrition Laboratory',
        summary_bn: 'স্থানীয় খাবারে শর্করা, আমিষ ও চর্বি শনাক্তকরণ পরীক্ষা এবং সুষম খাদ্য তালিকা প্রস্তুতকরণ।',
        summary_en: 'Simple chemical indicator tests for starch, proteins, and lipids in local staples; designing balanced meal charts.',
        topics: ['খাবারের পুষ্টি উপাদান পরীক্ষা (আয়োডিন দ্রবণ দিয়ে শর্করা পরীক্ষা)', 'দৈনিক পুষ্টির চাহিদা পরিমাপ', 'ভেজাল খাবার শনাক্তকরণ সচেতনতা', 'বিদ্যালয় টিফিনের পুষ্টি পর্যালোচনা'],
        learning_outcomes: ['ঘরে সহজলভ্য খাবার পরীক্ষা করে মৌলিক পুষ্টি উপাদানের উপস্থিতি প্রমাণ করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 6,
        chapter_slug: 'waste-management-and-recycling-project',
        title_bn: 'অভিজ্ঞতা ৬: বর্জ্য ব্যবস্থাপনা ও পুনর্ব্যবহার প্রজেক্ট',
        title_en: 'Experience 6: Waste Management and Upcycling Project',
        summary_bn: 'বিদ্যালয় ও বাড়ির বর্জ্য পৃথকীকরণ, পচনশীল ও অপচনশীল বর্জ্যের জৈব সার ও মডেল তৈরিতে ব্যবহার।',
        summary_en: 'Classroom composting, separating biodegradable vs non-biodegradable waste, and creating recycled functional objects.',
        topics: ['বর্জ্যের অডিট ও উৎস শনাক্তকরণ', 'কম্পোস্টিং বা জৈব সার তৈরির ধাপ', 'প্লাস্টিক বোতল ও কাগজের পুনর্ব্যবহার', 'পরিবেশ মেলায় প্রজেক্ট প্রদর্শন'],
        learning_outcomes: ['কমিউনিটিতে বর্জ্য কমানোর বাস্তবসম্মত দলীয় উদ্যোগ পরিচালনা করতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 6. ইতিহাস ও সামাজিক বিজ্ঞান
  {
    id: 'history-social-science',
    code: 'NCTB-6-HSS',
    title_bn: 'ইতিহাস ও সামাজিক বিজ্ঞান',
    title_en: 'History and Social Science',
    class: 'class-6',
    class_no: 6,
    category: 'social_science',
    category_bn: 'ইতিহাস ও সমাজ',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#d97706',
    icon_name: 'Landmark',
    description_bn: 'সমাজ ও আত্মপরিচয়, প্রাচীন সভ্যতা, বাংলার সমৃদ্ধ ঐতিহ্য, মুক্তিযুদ্ধ ও সক্রিয় নাগরিকতার বিশদ পাঠ্যবই।',
    description_en: 'Comprehensive inquiry into human society, ancient civilizations, archaeological roots, Bangladesh Liberation War, and democratic citizenship.',
    total_chapters: 8,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'our-society-and-identity',
        title_bn: 'অধ্যায় ১: আমাদের সমাজ ও পরিচয়',
        title_en: 'Chapter 1: Our Society and Self-Identity',
        summary_bn: 'পরিবার, সমাজ, বিভিন্ন পেশার মানুষের অবদান এবং বৈচিত্র্যের মাঝে আত্মপরিচয়ের বিকাশ।',
        summary_en: 'Family bonds, community interdependence, respect for occupations, and self-identity within multicultural society.',
        topics: ['সামাজিক সম্পর্ক ও পারস্পরিক নির্ভরতা', 'সমাজের বৈচিত্র্যময় পেশা', 'আত্মপরিচয় গঠন ও মূল্যবোধ', 'সহমর্মিতা ও দলগত সহযোগিতা'],
        learning_outcomes: ['সমাজে প্রতিটি ব্যক্তির ভূমিকার মর্যাদা স্বীকার করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'active-citizenship-and-human-values',
        title_bn: 'অধ্যায় ২: সক্রিয় নাগরিকতা ও মানবিক মূল্যবোধ',
        title_en: 'Chapter 2: Active Citizenship and Human Values',
        summary_bn: 'নাগরিকের অধিকার ও দায়িত্ব, বিদ্যালয় ও এলাকার সামাজিক কাজে সক্রিয় অংশগ্রহণ এবং শিশু অধিকার।',
        summary_en: 'Constitutional rights, citizen duties, community stewardship, democratic decision-making, and United Nations Child Rights.',
        topics: ['নাগরিক অধিকার বনাম নাগরিক দায়িত্ব', 'শিশু সনদের মৌলিক ধারা', 'বিদ্যালয়ের উন্নয়ন প্রকল্পে দলগত অংশগ্রহণ', 'ন্যায়বিচার ও সমতা রক্ষা'],
        learning_outcomes: ['স্থানীয় পর্যায়ে যেকোনো সামাজিক সমস্যা সমাধানে দায়িত্বশীল ভূমিকা পালন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'natural-and-social-environment',
        title_bn: 'অধ্যায় ৩: প্রাকৃতিক ও সামাজিক পরিবেশ',
        title_en: 'Chapter 3: Natural and Social Environment of Bangladesh',
        summary_bn: 'বাংলাদেশের ভৌগোলিক ভূপ্রকৃতি, নদীমাতৃক জীবনধারা এবং মানবজীবনে ঋতু ও জলবায়ুর গভীর প্রভাব।',
        summary_en: 'Topography of Bangladesh, river systems, delta landscape, seasonal rhythms, and climate adaptation.',
        topics: ['বাংলাদেশের ভূপ্রকৃতি (সমতল, পাহাড়ি, বরেন্দ্র)', 'নদীমালা ও জনজীবনের সম্পর্ক', 'প্রাকৃতিক দুর্যোগ ও প্রস্তুতি', 'পরিবেশ সংরক্ষণে সামাজিক আন্দোলন'],
        learning_outcomes: ['মানচিত্রে বাংলাদেশের প্রধান নদী ও ভূপ্রাকৃতিক অঞ্চল চিহ্নিত করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'ancient-civilizations-and-history',
        title_bn: 'অধ্যায় ৪: প্রাচীন সভ্যতা ও ইতিহাস',
        title_en: 'Chapter 4: Ancient Civilizations and Global Heritage',
        summary_bn: 'সিন্ধু সভ্যতা, মেসোপটেমিয়া, প্রাচীন মিশর এবং প্রাচীন বাংলার উয়ারী-বটেশ্বর ও মহাস্থানগড়।',
        summary_en: 'Indus Valley civilization, Mesopotamia, ancient Egypt, and early urban centers in Bengal (Wari-Bateshwar and Mahasthangarh).',
        topics: ['সভ্যতা বিকাশের নদীকেন্দ্রিক ইতিহাস', 'সিন্ধু সভ্যতার নগর পরিকল্পনা ও পয়ঃনিষ্কাশন', 'উয়ারী-বটেশ্বর ও মহাস্থানগড়ের প্রত্নতত্ত্ব', 'প্রাচীন মানুষের জীবনযাত্রা ও শিল্প'],
        learning_outcomes: ['প্রত্নতাত্ত্বিক নিদর্শনের গুরুত্ব ও প্রাচীন নগর সভ্যতার প্রকৌশল অনুধাবন করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 5,
        chapter_slug: 'history-of-bangladesh-liberation-war',
        title_bn: 'অধ্যায় ৫: মুক্তিযুদ্ধ ও স্বাধীনতার ইতিহাস',
        title_en: 'Chapter 5: The Liberation War and History of Independence',
        summary_bn: '১৯৪৭ সালের দেশভাগ থেকে ১৯৭১ সালের মহান মুক্তিযুদ্ধ, বঙ্গবন্ধুর নেতৃত্ব এবং বীর মুক্তিযোদ্ধাদের আত্মত্যাগ।',
        summary_en: 'Language movement (1952), 6-point demand, 1970 elections, historic 7th March speech, genocide of 25th March, and the heroic 1971 Liberation War.',
        topics: ['বায়ান্নর ভাষা আন্দোলন ও স্বাধিকার চেতনা', 'বঙ্গবন্ধুর ৭ই মার্চের কালজয়ী ভাষণ', '২৫শে মার্চের কালরাত ও স্বাধীনতার ঘোষণা', 'মুক্তিবাহিনী ও বীরশ্রেষ্ঠগণের অবদান', '১৬ই ডিসেম্বরের চূড়ান্ত বিজয়'],
        learning_outcomes: ['মুক্তিযুদ্ধের ঐতিহাসিক পর্যায়ক্রম ও বীর শহীদদের অবদানের ইতিহাস শ্রদ্ধার সাথে উপস্থাপন করতে পারবে।'],
        estimated_periods: 10
      },
      {
        chapter_no: 6,
        chapter_slug: 'geographical-diversity-and-settlements',
        title_bn: 'অধ্যায় ৬: ভৌগোলিক বৈচিত্র্য ও মানব বসতি',
        title_en: 'Chapter 6: Geographical Diversity and Human Settlement',
        summary_bn: 'গ্রামীণ ও নগর বসতির বৈশিষ্ট্য, মানুষের অভিবাসন এবং পরিবেশের সাথে অভিযোজনের বৈজ্ঞানিক রূপ।',
        summary_en: 'Settlement patterns (rural nucleated vs urban sprawl), migration causes, and geographic livelihood adaptations.',
        topics: ['গ্রাম ও শহরের জীবনযাত্রার পার্থক্য', 'বসতি গড়ে ওঠার ভৌগোলিক কারণ', 'অভিবাসনের সুযোগ ও প্রতিবন্ধকতা', 'টেকসই নগরায়নের চ্যালেঞ্জ'],
        learning_outcomes: ['ভৌগোলিক বৈশিষ্ট্যের ওপর ভিত্তি করে মানুষের পেশা ও জীবনধারার ভিন্নতা ব্যাখ্যা করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 7,
        chapter_slug: 'cultural-heritage-and-traditions',
        title_bn: 'অধ্যায় ৭: সাংস্কৃতিক বৈচিত্র্য ও ঐতিহ্য',
        title_en: 'Chapter 7: Cultural Heritage and Diversity',
        summary_bn: 'নবান্ন, পহেলা বৈশাখ, লোকসংগীত, হস্তশিল্প এবং ক্ষুদ্র নৃগোষ্ঠীর সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য।',
        summary_en: 'Festivals of Bangladesh (Pohela Boishakh, Nabanna), ethnic minority heritage, folk music, crafts, and culinary identity.',
        topics: ['বাঙালির চিরায়ত লোকউৎসব', 'ক্ষুদ্র নৃগোষ্ঠীর জীবন ও সংস্কৃতি (চাকমা, মারমা, গারো, সাঁওতাল)', 'ঐতিহ্যবাহী লোকশিল্প ও কারুকাজ', 'সাংস্কৃতিক সম্প্রীতি ও শ্রদ্ধাবোধ'],
        learning_outcomes: ['বাংলাদেশের বহুভাষিক ও বহুসাংস্কৃতিক ঐতিহ্যের প্রতি গভীর সম্মান প্রকাশ করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 8,
        chapter_slug: 'social-equality-and-human-rights',
        title_bn: 'অধ্যায় ৮: সামাজিক সাম্য ও মানবাধিকার',
        title_en: 'Chapter 8: Social Equality and Human Rights',
        summary_bn: 'লিঙ্গ সমতা, প্রতিবন্ধী ব্যক্তিদের অধিকার, বৈষম্যহীন সমাজ গঠন এবং সার্বজনীন মানবিক মর্যাদা।',
        summary_en: 'Gender equity, accessibility for individuals with disabilities, eradicating prejudice, and fostering universal human dignity.',
        topics: ['মানবাধিকারের সার্বজনীন ঘোষণাপত্র', 'লিঙ্গ বৈষম্য দূরীকরণ', 'বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের অধিকার ও অন্তর্ভুক্তি', 'বৈষম্যহীন সমাজ গঠনের পদক্ষেপ'],
        learning_outcomes: ['শ্রেণিকক্ষ ও সমাজে যেকোনো ধরনের বৈষম্য প্রতিরোধে ইতিবাচক আচরণ প্রদর্শন করতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 7. ডিজিটাল প্রযুক্তি
  {
    id: 'digital-technology',
    code: 'NCTB-6-DT',
    title_bn: 'ডিজিটাল প্রযুক্তি',
    title_en: 'Digital Technology',
    class: 'class-6',
    class_no: 6,
    category: 'technology',
    category_bn: 'তথ্য ও প্রযুক্তি',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#4f46e5',
    icon_name: 'Laptop',
    description_bn: 'তথ্যের সত্যতা যাচাই, সাইবার নিরাপত্তা, নিরাপদ ইন্টারনেট ব্রাউজিং, অ্যালগরিদম ও প্রোগ্রামিংয়ের প্রাথমিক ধারণা সমৃদ্ধ পাঠ্যবই।',
    description_en: 'Class 6 digital literacy, fact-checking mis/disinformation, digital citizenship, cyber safety, and algorithmic thinking foundation.',
    total_chapters: 6,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'investigating-information-truthfulness',
        title_bn: 'শিখন অভিজ্ঞতা ১: তথ্যের সত্যতা অনুসন্ধান',
        title_en: 'Experience 1: Fact-Checking and Information Verification',
        summary_bn: 'ইন্টারনেট ও সামাজিক যোগাযোগমাধ্যমে প্রচারিত সংবাদের সত্যতা যাচাই, ভুয়া খবর চেনার কৌশল।',
        summary_en: 'Distinguishing fact from opinion, recognizing misinformation/disinformation, reverse image search, and verified sources.',
        topics: ['তথ্যের উৎস শনাক্তকরণ', 'গুজব ও ভুয়া খবর চেনার উপায়', 'রিভার্স ইমেজ সার্চ ও ফ্যাক্ট-চেক টুলস', 'সঠিক তথ্য শেয়ারের শিষ্টাচার'],
        learning_outcomes: ['যেকোনো অনলাইন তথ্যের বিশ্বাসযোগ্যতা নিরপেক্ষভাবে যাচাই করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 2,
        chapter_slug: 'using-digital-technology-in-communication',
        title_bn: 'শিখন অভিজ্ঞতা ২: যোগাযোগে ডিজিটাল প্রযুক্তির ব্যবহার',
        title_en: 'Experience 2: Digital Communication and Netiquette',
        summary_bn: 'ইমেইল পাঠানো, সার্চ ইঞ্জিনে তথ্য খোঁজা ও ডিজিটাল মাধ্যমে ভদ্র আচরণ বজায় রাখা।',
        summary_en: 'Search engine query techniques, sending formal emails, file attachments, and respecting online communication netiquette.',
        topics: ['সার্চ ইঞ্জিনের কি-ওয়ার্ড কৌশল', 'ইমেইল অ্যাকাউন্ট ও মেইল পাঠানোর নিয়ম', 'ফাইল ও ইমেজ অ্যাটাচমেন্ট', 'অনলাইন যোগাযোগের ভদ্রতা ও সতর্কতা'],
        learning_outcomes: ['প্রয়োজনে প্রাতিষ্ঠানিক বার্তা ইমেইলে প্রস্তুত করে শিক্ষক বা সহপাঠীর সাথে আদান-প্রদান করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'citizen-services-through-digital-technology',
        title_bn: 'শিখন অভিজ্ঞতা ৩: নাগরিক সেবা প্রাপ্তিতে ডিজিটাল প্রযুক্তি',
        title_en: 'Experience 3: Accessing e-Citizen Services',
        summary_bn: 'জাতীয় তথ্য বাতায়ন, জন্মনিবন্ধন যাচাই, অনলাইন ট্রেনের টিকিট ও বিভিন্ন সরকারি ই-সেবা সম্পর্কে ধারণা।',
        summary_en: 'Bangladesh National Portal (bangladesh.gov.bd), digital birth certificate check, ticketing, and government digital services.',
        topics: ['সরকারি ই-সেবার ক্ষেত্রসমূহ', 'জাতীয় তথ্য বাতায়ন অনুসন্ধান', 'অনলাইন আবেদন প্রক্রিয়ার সাধারণ ধাপ', 'ডিজিটাল সেবার সুবিধা'],
        learning_outcomes: ['পরিবারের প্রয়োজনে প্রয়োজনীয় সরকারি ই-সেবা পোর্টাল চিহ্নিত ও ব্যবহার করতে সহায়তা করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 4,
        chapter_slug: 'information-security-and-risks',
        title_bn: 'শিখন অভিজ্ঞতা ৪: তথ্য ঝুঁকি ও নিরাপত্তা',
        title_en: 'Experience 4: Cyber Safety and Password Protection',
        summary_bn: 'শক্তিশালী পাসওয়ার্ড তৈরি, টু-ফ্যাক্টর অথেনটিকেশন, ফিশিং আক্রমণ ও ব্যক্তিগত গোপনীয়তা রক্ষা।',
        summary_en: 'Strong password policies, 2FA, phishing detection, malware risks, and protecting personal identity online.',
        topics: ['দুর্বল বনাম শক্তিশালী পাসওয়ার্ড', 'ফিশিং লিংক ও অপরিচিত বার্তার বিপদ', 'ডিজিটাল ফুটপ্রিন্ট কী ও কেন জরুরি', 'সাইবার নিরাপত্তা হেল্পলাইন'],
        learning_outcomes: ['ব্যক্তিগত ডিভাইস ও অনলাইন প্রোফাইলের সর্বোচ্চ নিরাপত্তা নিশ্চিত করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 5,
        chapter_slug: 'algorithmic-thinking-and-programming',
        title_bn: 'শিখন অভিজ্ঞতা ৫: অ্যালগরিদম ও প্রোগ্রামিংয়ের প্রাথমিক ধারণা',
        title_en: 'Experience 5: Computational Thinking and Visual Coding',
        summary_bn: 'ধাপভিত্তিক সমস্যা সমাধান, ফ্লোচার্ট বা প্রবাহচিত্র তৈরি এবং ব্লকবিত্তিক প্রোগ্রামিং (Scratch) এর ভূমিকা।',
        summary_en: 'Step-by-step algorithms, flowchart symbols, sequence, loops, conditions, and visual drag-and-drop block coding basics.',
        topics: ['দৈনন্দিন কাজের অ্যালগরিদম প্রণয়ন', 'ফ্লোচার্ট ও প্রতীকসমূহের ব্যবহার', 'ব্লক কোডিংয়ের প্রাথমিক নির্দেশনাবলি', 'লজিক্যাল এরর ও ডিবাগিং'],
        learning_outcomes: ['একটি নির্দিষ্ট সমস্যার সমাধান ধাপভিত্তিক অ্যালগরিদমে রূপান্তর করতে পারবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 6,
        chapter_slug: 'creative-digital-projects',
        title_bn: 'শিখন অভিজ্ঞতা ৬: সৃজনশীল ডিজিটাল প্রোজেক্ট',
        title_en: 'Experience 6: Creative Digital Content Publishing',
        summary_bn: 'কম্পিউটারে ডিজিটাল পোস্টার, স্লাইড প্রেজেন্টেশন ও ডকুমেন্ট তৈরি করে উপস্থাপন।',
        summary_en: 'Creating word documents, slides, infographics, formatting text, inserting images, and presenting ideas digitally.',
        topics: ['ওয়ার্ড প্রসেসরে টাইপিং ও ফরম্যাটিং', 'স্লাইড প্রেজেন্টেশন তৈরির কৌশল', 'রয়্যালটি-মুক্ত ছবি ও কপিরাইট আইন', 'ডিজিটাল প্রজেক্টের দলীয় উপস্থাপনা'],
        learning_outcomes: ['একটি নির্বাচিত বিষয়ে স্লাইড তৈরি করে ক্লাসে ডিজিটাল পদ্ধতিতে উপস্থাপন করতে পারবে।'],
        estimated_periods: 7
      }
    ]
  },

  // 8. জীবন ও জীবিকা
  {
    id: 'life-livelihoods',
    code: 'NCTB-6-LL',
    title_bn: 'জীবন ও জীবিকা',
    title_en: 'Life and Livelihoods',
    class: 'class-6',
    class_no: 6,
    category: 'life_skills',
    category_bn: 'জীবন ও স্বাস্থ্য',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#10b981',
    icon_name: 'Briefcase',
    description_bn: 'কাজের আনন্দ, পারিবারিক বাজেট, আর্থিক সাক্ষরতা, পেশার রূপবদল ও ভবিষ্যৎ কর্মজীবনের প্রস্তুতির ব্যবহারিক পাঠ্যবই।',
    description_en: 'Hands-on life skills, financial literacy, family budgeting, domestic self-reliance, and exploring career trajectories.',
    total_chapters: 5,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'joy-of-work',
        title_bn: 'অধ্যায় ১: কাজের আনন্দ',
        title_en: 'Chapter 1: The Joy of Everyday Work',
        summary_bn: 'নিজের কাজ নিজে করা, পারিবারিক কাজে সহায়তা, কাজের প্রতি শ্রদ্ধাশীল মানসিকতা গড়ে তোলা।',
        summary_en: 'Dignity of labor, self-reliance at home (bed-making, folding clothes, dishwashing), and supporting parents cheerfully.',
        topics: ['কাজের মর্যাদা ও সমতা', 'পারিবারিক কাজে দায়িত্ব পালন', 'ব্যক্তিগত স্বাবলম্বিতা', 'কাজের সাপ্তাহিক ডায়েরি'],
        learning_outcomes: ['পারিবারিক দৈনন্দিন গৃহকর্মে নিয়মিত ও স্বতঃস্ফূর্তভাবে অংশগ্রহণ করবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'evolution-of-professions',
        title_bn: 'অধ্যায় ২: পেশার রূপবদল',
        title_en: 'Chapter 2: The Evolution of Professions',
        summary_bn: 'অতীতে প্রচলিত পেশা, বর্তমানের পেশা এবং কৃত্রিম বুদ্ধিমত্তা ও প্রযুক্তির ছোঁয়ায় ভবিষ্যতের সম্ভাবনাময় কর্মক্ষেত্র।',
        summary_en: 'Traditional crafts vs emerging tech careers, impact of automation, and future-ready vocational skills.',
        topics: ['ঐতিহ্যবাহী গ্রামীণ ও নাগরিক পেশা', 'প্রযুক্তির কারণে পেশায় রূপান্তর', 'ভবিষ্যতের নতুন কাজের সুযোগ', 'পেশাজীবীদের সাক্ষাৎকার গ্রহণ'],
        learning_outcomes: ['পেশার রূপবদল বিশ্লেষণ করে ভবিষ্যতের উপযুক্ত দক্ষতা অনুধাবন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'financial-literacy-and-budgeting',
        title_bn: 'অধ্যায় ৩: আর্থিক সাক্ষরতা',
        title_en: 'Chapter 3: Financial Literacy and Smart Budgeting',
        summary_bn: 'আয়, ব্যয়, পারিবারিক বাজেট প্রস্তুতকরণ, অপচয় রোধ এবং মাটির ব্যাংকে সঞ্চয়ের গুরুত্ব।',
        summary_en: 'Income, expenditure, distinguishing needs vs wants, creating realistic household budgets, and fostering saving habits.',
        topics: ['প্রয়োজন বনাম শখের পার্থক্য', 'পারিবারিক মাসিক খরচের হিসাব', 'বাজেট তৈরির কৌশল', 'সঞ্চয়ের নানাবিধ উপায়'],
        learning_outcomes: ['নিজের পকেট খরচ বা পরিবারের জন্য একটি সহজ সাপ্তাহিক ব্যয়ের হিসাবপত্র তৈরি করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'goal-setting-for-dreams',
        title_bn: 'অধ্যায় ৪: স্বপ্ন পূরণের লক্ষ্য নির্ধারণ',
        title_en: 'Chapter 4: Goal Setting for Aspirations',
        summary_bn: 'নিজের আগ্রহ, সামর্থ্য ও দুর্বলতা শনাক্তকরণ, স্বল্প ও দীর্ঘমেয়াদি লক্ষ্য নির্ধারণের উপায়।',
        summary_en: 'Self-assessment (strengths, weaknesses, interests), SMART goal planning, and overcoming procrastination.',
        topics: ['নিজের শক্তি ও আগ্রহ অনুসন্ধান', 'স্মার্ট (SMART) লক্ষ্য নির্ধারণ', 'কাজের বাধা চিহ্নিতকরণ ও সমাধান', 'ধারাবাহিক অনুশীলনের গুরুত্ব'],
        learning_outcomes: ['নিজের পড়াশোনা ও দক্ষতার জন্য সুনির্দিষ্ট ও বাস্তবসম্মত লক্ষ্য স্থির করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'skills-and-future-vision',
        title_bn: 'অধ্যায় ৫: দক্ষতা ও ভবিষ্যৎ ভাবনা',
        title_en: 'Chapter 5: Team Skills and Future Vision',
        summary_bn: 'দলগত সমঝোতা, নেতৃত্ব, যোগাযোগ দক্ষতা এবং ক্ষুদ্র উদ্যোগ (Entrepreneurship) গ্রহণের পরিকল্পনা।',
        summary_en: 'Teamwork, communication, creative problem solving, and designing a small school-based entrepreneurship enterprise.',
        topics: ['দলগত সংহতি ও নেতৃত্ব', 'সৃজনশীল উদ্যোগের ধারণা', 'বিদ্যালয় মেলায় স্টল পরিচালনার মহড়া', 'ভবিষ্যৎ জীবনের প্রস্তুতি'],
        learning_outcomes: ['সহপাঠীদের সাথে যৌথভাবে একটি উদ্ভাবনী প্রকল্প বা মেলার পরিকল্পনা কার্যকর করতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 9. স্বাস্থ্য সুরক্ষা
  {
    id: 'health-protection',
    code: 'NCTB-6-HP',
    title_bn: 'স্বাস্থ্য সুরক্ষা',
    title_en: 'Health Protection and Physical Wellbeing',
    class: 'class-6',
    class_no: 6,
    category: 'life_skills',
    category_bn: 'জীবন ও স্বাস্থ্য',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#14b8a6',
    icon_name: 'HeartPulse',
    description_bn: 'সুস্থ শরীর, সঠিক পুষ্টি, বয়ঃসন্ধিকালীন যত্ন, মানসিক স্বাস্থ্য ও দুর্ঘটনা প্রতিরোধমূলক জীবনযাপনের পাঠ্যবই।',
    description_en: 'Physical hygiene, adolescent changes, mental wellness, emotional regulation, physical fitness games, and first-aid safety.',
    total_chapters: 6,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'healthy-body-and-safe-living',
        title_bn: 'অধ্যায় ১: সুস্থ শরীর ও নিরাপদ জীবন',
        title_en: 'Chapter 1: Healthy Body and Hygienic Living',
        summary_bn: 'ব্যক্তিগত পরিষ্কার-পরিচ্ছন্নতা, সঠিক নিয়মে হাত ধোয়া, দাঁতের যত্ন ও নিরাপদ পানীয় জলের ব্যবহার।',
        summary_en: 'Personal hygiene habits, 7 steps of handwashing, oral care, safe water consumption, and disease prevention.',
        topics: ['ব্যক্তিগত স্বাস্থ্যবিধির নিয়মাবলি', 'সঠিক উপায়ে সাবান দিয়ে হাত ধোয়া', 'নিরাপদ পানি ও খাদ্য সুরক্ষা', 'দৈনন্দিন পরিচ্ছন্নতা চেকলিস্ট'],
        learning_outcomes: ['স্বাস্থ্য সুরক্ষার মৌলিক নিয়মগুলো দৈনন্দিন জীবনে অভ্যাসে পরিণত করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'mental-health-and-emotional-wellbeing',
        title_bn: 'অধ্যায় ২: মানসিক স্বাস্থ্য ও আবেগ নিয়ন্ত্রণ',
        title_en: 'Chapter 2: Mental Health and Emotional Regulation',
        summary_bn: 'রাগ, ভয়, দুঃখের মতো অনুভূতি চেনা ও সুস্থ উপায়ে প্রকাশ করা, ইতিবাচক মানসিকতা গঠন।',
        summary_en: 'Identifying complex emotions (anger, anxiety, grief), mindful breathing, positive coping strategies, and peer empathy.',
        topics: ['আবেগ শনাক্তকরণ ও প্রকাশভঙ্গি', 'রাগ নিয়ন্ত্রণের শ্বাস-প্রশ্বাসের ব্যায়াম', 'বন্ধুর প্রতি সহমর্মিতা প্রকাশ', 'পরামর্শ বা সহযোগিতা চাওয়ার সাহস'],
        learning_outcomes: ['কঠিন পরিস্থিতিতে নিজের আবেগ নিয়ন্ত্রণ করে শান্ত প্রতিক্রিয়া জানাতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 3,
        chapter_slug: 'adolescence-and-growth',
        title_bn: 'অধ্যায় ৩: বয়ঃসন্ধিকালীন বৃদ্ধি ও পরিবর্তন',
        title_en: 'Chapter 3: Adolescence and Physical Growth',
        summary_bn: 'কৈশোরের স্বাভাবিক শারীরিক ও মানসিক পরিবর্তন, কুসংস্কার বর্জন এবং যথাযথ যত্ন ও পরিচ্ছন্নতা।',
        summary_en: 'Understanding puberty, body changes, nutrition during growth spurts, dispelling myths, and seeking guidance from elders/doctors.',
        topics: ['বয়ঃসন্ধির শারীরিক ও হরমোনজনিত পরিবর্তন', 'কৈশোরের পুষ্টি ও সুষম খাবার', 'কুসংস্কার ও ভুল ধারণা থেকে মুক্ত থাকা', 'অভিভাবক ও চিকিৎসকের পরামর্শ গ্রহণ'],
        learning_outcomes: ['বয়ঃসন্ধিকালের পরিবর্তনগুলোকে স্বাভাবিক হিসেবে গ্রহণ করে আত্মবিশ্বাস ধরে রাখতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'disease-prevention-and-immunization',
        title_bn: 'অধ্যায় ৪: সংক্রামক রোগ প্রতিরোধ ও স্বাস্থ্যবিধি',
        title_en: 'Chapter 4: Infectious Disease Prevention and Immunity',
        summary_bn: 'ডেঙ্গু, ডায়রিয়া, সর্দি-কাশি থেকে সুরক্ষা, মশার বংশবৃদ্ধি রোধ এবং টিকাদানের গুরুত্ব।',
        summary_en: 'Dengue, cholera, influenza prevention, mosquito control (Aedes), community hygiene drives, and routine vaccination.',
        topics: ['সাধারণ সংক্রামক রোগের লক্ষণ', 'ডেঙ্গু ও চিকুনগুনিয়া প্রতিরোধে পরিষ্কার-পরিচ্ছন্নতা', 'রোগ প্রতিরোধ ক্ষমতা বাড়ানোর খাবার', 'টিকা গ্রহণের তালিকা'],
        learning_outcomes: ['নিজের ঘর ও বিদ্যালয় প্রাঙ্গণ মশকমুক্ত রাখতে নিয়মিত পরিচ্ছন্নতা কার্যক্রম চালাতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'physical-fitness-and-sports',
        title_bn: 'অধ্যায় ৫: শারীরিক সক্ষমতা ও খেলাধুলা',
        title_en: 'Chapter 5: Physical Fitness and Active Sports',
        summary_bn: 'নিয়মিত ব্যায়াম, পিটি, অ্যাথলেটিক্স, ঐতিহ্যবাহী গ্রামীণ খেলা ও দলগত স্পোর্টস।',
        summary_en: 'Warm-up routines, school drill (PT), athletics, traditional games (Hadudu, Dariabandha), football, and cardiovascular fitness.',
        topics: ['ওয়ার্ম-আপ ও স্ট্রেচিং এক্সারসাইজ', 'ঐতিহ্যবাহী লোকজ খেলাধুলা', 'দলগত খেলার নিয়ম ও স্পোর্টসম্যানশিপ', 'ব্যায়ামের শারীরিক উপকারিতা'],
        learning_outcomes: ['শারীরিক সক্ষমতা বাড়াতে নিয়মিত খেলাধুলা ও দলীয় শৃঙ্খলার চর্চা করবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 6,
        chapter_slug: 'safe-environment-and-first-aid',
        title_bn: 'অধ্যায় ৬: নিরাপদ পরিবেশ ও প্রাথমিক চিকিৎসা',
        title_en: 'Chapter 6: Safe Environment and First Aid Basics',
        summary_bn: 'সড়ক নিরাপত্তা, আগুনে পোড়া, পানিতে ডোবা ও কাটার প্রাথমিক চিকিৎসা এবং জরুরি হেল্পলাইন নম্বর।',
        summary_en: 'Road safety rules, zebra crossing, fire hazards, and basic first aid for burns, minor cuts, fractures, and emergency 999 hotline.',
        topics: ['রাস্তা পারাপার ও ট্রাফিক সাইন', 'ফার্স্ট এইড বক্সের প্রয়োজনীয় জিনিসপত্র', 'কেটে যাওয়া ও পুড়ে যাওয়ার প্রাথমিক শুশ্রূষা', 'জরুরি হেল্পলাইন (৯৯৯) ব্যবহারের নিয়ম'],
        learning_outcomes: ['দুর্ঘটনা ঘটলে আতংকিত না হয়ে মৌলিক প্রাথমিক চিকিৎসা প্রদান ও সাহায্য ডাকতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 10. শিল্প ও সংস্কৃতি
  {
    id: 'art-culture',
    code: 'NCTB-6-AC',
    title_bn: 'শিল্প ও সংস্কৃতি',
    title_en: 'Art and Culture',
    class: 'class-6',
    class_no: 6,
    category: 'arts',
    category_bn: 'শিল্প ও সংস্কৃতি',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#ea580c',
    icon_name: 'Palette',
    description_bn: 'রেখা ও রঙ, লোকসঙ্গীত, আবৃত্তি, মাটির কাজ, অভিনয় ও বাংলাদেশের সাংস্কৃতিক ঐতিহ্যের আনন্দদায়ক সৃজনশীল পাঠ্যবই।',
    description_en: 'Hands-on arts textbook exploring drawing, folk rhythms, pottery, theater acting, traditional puppetry, and Bangladesh’s cultural heritage.',
    total_chapters: 6,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'global-musical-gathering',
        title_bn: 'অধ্যায় ১: ভুবনজোড়া গানের আসর',
        title_en: 'Chapter 1: The Global Musical Gathering',
        summary_bn: 'সুর ও তাল, লোকসংগীত (ভাটিয়ালি, জারি, সারি, বাউল) এবং জাতীয় ও দেশাত্মবোধক গানের সুর অনুধাবন।',
        summary_en: 'Musical notes, rhythm, folk genres (Bhatiyali, Jari, Sari, Baul), and singing patriotic anthems in harmony.',
        topics: ['সাত সুর ও স্বরলিপির প্রাথমিক ধারণা', 'বাংলার লোকসংগীতের সুরবৈচিত্র্য', 'দেশাত্মবোধক গানের আবেগ', 'দলগত সঙ্গীত পরিবেশনা'],
        learning_outcomes: ['সঠিক সুর ও লয়ে জাতীয় সঙ্গীত ও লোকগান গাইতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'play-of-lines-and-colors',
        title_bn: 'অধ্যায় ২: রেখা ও রঙের খেলা',
        title_en: 'Chapter 2: The Play of Lines and Colors',
        summary_bn: 'মৌলিক ও মাধ্যমিক রঙ, প্রকৃতির রেখা পর্যবেক্ষণ, জলরং ও প্যাস্টেলে চিত্রাঙ্কন।',
        summary_en: 'Primary and secondary colors, perspective, drawing organic shapes from nature, watercolor and crayon techniques.',
        topics: ['রেখার বৈচিত্র্য (সোজা, বাঁকা, ঢেউ খেলানো)', 'রঙের চাকা (Color Wheel)', 'প্রকৃতি ও দৃশ্য চিত্রাঙ্কন', 'শৈল্পিক অনুভূতি প্রকাশ'],
        learning_outcomes: ['নিজের কল্পনা ও পরিবেশের রঙ মিলিয়ে আকর্ষণীয় ছবি আঁকতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'clay-craft-and-sculpture',
        title_bn: 'অধ্যায় ৩: মাটির তৈরি শিল্পের রূপ',
        title_en: 'Chapter 3: Clay Crafts and Pottery Forms',
        summary_bn: 'মৃৎশিল্পের ঐতিহ্য, কাদামাটি দিয়ে ফল, ফুল, পুতুল ও পাত্র তৈরি এবং টেরাকোটার ইতিহাস।',
        summary_en: 'Heritage of clay pottery, terracotta plaques of Paharpur/Mainamati, sculpting small fruit and animal clay figurines.',
        topics: ['কাদামাটি প্রস্তুত ও নরম করার কৌশল', 'মডেলিং পদ্ধতিতে মাটির পুতুল তৈরি', 'ঐতিহ্যবাহী মৃৎশিল্পীদের জীবনগাথা', 'মাটির পাত্রে নকশা আঁকা'],
        learning_outcomes: ['কাদামাটি ব্যবহার করে ত্রিমাত্রিক খেলনা ও পাত্র তৈরি করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'acting-and-theatrical-expression',
        title_bn: 'অধ্যায় ৪: অভিনয় ও নাট্যরূপ',
        title_en: 'Chapter 4: Acting and Theatrical Expression',
        summary_bn: 'সংলাপ উচ্চারণ, শারীরিক অঙ্গভঙ্গি, অনুকরণ ও বিদ্যালয়ের নাটিকা মঞ্চায়ন।',
        summary_en: 'Voice modulation, pantomime, facial expressions, dialogue delivery, and performing short school plays.',
        topics: ['কণ্ঠস্বরের ওঠানামা ও স্পষ্ট উচ্চারণ', 'মাইম বা মূকাভিনয় অনুশীলন', 'একটি গল্পের নাট্যরূপ লিখন', 'মঞ্চে দলীয় উপস্থাপনা'],
        learning_outcomes: ['কোনো চরিত্রের আবেগ ও ভাব ফুটিয়ে তুলে সাবলীল অভিনয় করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'rhythm-and-dance-movements',
        title_bn: 'অধ্যায় ৫: নৃত্যের ছন্দ ও মুদ্রা',
        title_en: 'Chapter 5: Rhythm and Dance Movements',
        summary_bn: 'নৃত্যের ছন্দ, হস্তমুদ্রা, পদচালনা এবং লোকনৃত্যের আনন্দময় অভিব্যক্তি।',
        summary_en: 'Rhythmic footwork, classical & folk hand gestures (Mudras), tribal dances, and festive group choreographies.',
        topics: ['তালের সাথে পায়ের ছন্দ মেলানো', 'সহজ হস্তমুদ্রাসমূহ', 'বাংলার ঝুমুর ও ফসল কাটার নৃত্য', 'নৃত্যের মাধ্যমে ভাব প্রকাশ'],
        learning_outcomes: ['লোকগানের ছন্দের সাথে তাল মিলিয়ে মৌলিক নাচের মুদ্রা পরিবেশন করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 6,
        chapter_slug: 'cultural-festivals-and-heritage',
        title_bn: 'অধ্যায় ৬: ঐতিহ্যের আলোয় আমাদের সংস্কৃতি',
        title_en: 'Chapter 6: Cultural Festivals and Folk Heritage',
        summary_bn: 'বৈশাখী মেলা, পুতুলনাচ, আলপনা আঁকা এবং আমাদের চিরায়ত কারুশিল্পের সমাহার।',
        summary_en: 'Traditional crafts, Nakshi Kantha motifs, floor Alpana painting, shadow puppetry, and local artisanal fairs.',
        topics: ['আলপনার নকশা ও রং প্রয়োগ', 'নকশিকাঁথার মোটিফ ও ইতিহাস', 'ঐতিহ্যবাহী লোকমেলা আয়োজন', 'সাংস্কৃতিক স্মারক প্রদর্শনী'],
        learning_outcomes: ['বিদ্যালয়ের জাতীয় ও সাংস্কৃতিক অনুষ্ঠানে নান্দনিক আলপনা ও সাজসজ্জা করতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 11. ইসলাম শিক্ষা
  {
    id: 'islamic-studies',
    code: 'NCTB-6-ISL',
    title_bn: 'ইসলাম শিক্ষা',
    title_en: 'Islamic Studies and Moral Education',
    class: 'class-6',
    class_no: 6,
    category: 'religion',
    category_bn: 'ধর্ম ও নৈতিক শিক্ষা',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#15803d',
    icon_name: 'Moon',
    description_bn: 'আকাইদ, তাহরাত ও সালাত, নির্বাচিত সূরা ও হাদিস, উত্তম চরিত্র গঠন এবং মহানবী (সা.)-এর আদর্শ জীবনের পাঠ্যবই।',
    description_en: 'Islamic theology (Aqidah), Taharah and Salah worship, Quranic recitation with Tajweed, Hadith morality, and Seerah of Prophet Muhammad (pbuh).',
    total_chapters: 5,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'aqidah-islamic-creed',
        title_bn: 'অধ্যায় ১: আকাইদ (বিশ্বাসমালা)',
        title_en: 'Chapter 1: Aqidah (Foundations of Faith)',
        summary_bn: 'তাওহিদ, রিসালাত, আসমাউল হুসনা (আল্লাহর সুন্দর নামসমূহ), মালাইকা (ফেরেশতাগণ) ও আখিরাতের প্রতি বিশ্বাস।',
        summary_en: 'Monotheism (Tawhid), Prophethood (Risalat), Asma-ul-Husna (Attributes of Allah), belief in Angels and the Hereafter.',
        topics: ['তাওহিদের তাৎপর্য ও শিরকের কুফল', 'আল্লাহর ৫টি গুণবাচক নাম ও শিক্ষা', 'রিসালাত ও নবী-রাসূলগণের দায়িত্ব', 'আখিরাতের জবাবদিহিতা ও সৎকর্ম'],
        learning_outcomes: ['ঈমানের মূল স্তম্ভসমূহ গভীরভাবে উপলব্ধি করে ব্যক্তিগত আচরণে সততা ফুটিয়ে তুলবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 2,
        chapter_slug: 'ibadah-worship-and-purity',
        title_bn: 'অধ্যায় ২: ইবাদত (তাহরাত ও সালাত)',
        title_en: 'Chapter 2: Ibadah (Purity and Prayer)',
        summary_bn: 'তাহরাত (পবিত্রতা), অজু, গোসল, তায়াম্মুমের নিয়ম, সালাতের ওয়াক্ত ও জামাতে সালাত আদায়ের ফজিলত।',
        summary_en: 'Taharah (cleanliness), steps of Wudu, Tayammum, prayer timings, conditions and arkan of Salah, and congregational prayer benefits.',
        topics: ['পবিত্রতার গুরুত্ব ও স্বাস্থ্যবিধি', 'অজু ও তায়াম্মুমের ফরজসমূহ', 'পাঁচ ওয়াক্ত সালাতের রাকাত সংখ্যা', 'জামাতে সালাত ও সামাজিক ঐক্য'],
        learning_outcomes: ['সঠিক নিয়মে অজু করে একাগ্রতার সাথে সালাত আদায় করতে পারবে।'],
        estimated_periods: 10
      },
      {
        chapter_no: 3,
        chapter_slug: 'quran-and-hadith-studies',
        title_bn: 'অধ্যায় ৩: কুরআন ও হাদিস পরিচয়',
        title_en: 'Chapter 3: Introduction to the Quran and Hadith',
        summary_bn: 'তাজবিদ সহকারে কুরআন পাঠ, সূরা ফাতিহা, ইখলাস, ফালাক ও নাস-এর অর্থ এবং উত্তম চরিত্রের ১০টি নির্বাচিত হাদিস।',
        summary_en: 'Rules of Tajweed (Makhraj), meaning and reflection of Surah Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, and 10 selected ethical Hadiths.',
        topics: ['মাখরাজ ও তাজবিদের মৌলিক নিয়ম', 'নির্বাচিত চারটি সূরার অর্থ ও শানে নুযুল', 'সততা, পরিচ্ছন্নতা ও মা-বাবার সেবায় হাদিসের বাণী', 'দৈনন্দিন দোয়া ও জিকির'],
        learning_outcomes: ['বিশুদ্ধ উচ্চারণে কুরআন তিলাওয়াত এবং হাদিসের নৈতিক শিক্ষা বাস্তব জীবনে পালন করতে পারবে।'],
        estimated_periods: 10
      },
      {
        chapter_no: 4,
        chapter_slug: 'akhlaq-moral-character',
        title_bn: 'অধ্যায় ৪: আখলাক (চরিত্র ও নৈতিকতা)',
        title_en: 'Chapter 4: Akhlaq (Character and Morality)',
        summary_bn: 'আখলাকে হামিদাহ (প্রশংসনীয় গুণাবলি): সত্যবাদিতা, আমানতদারি, পরোপকার; এবং আখলাকে সাইয়্যিয়াহ (মন্দ স্বভাব) বর্জন।',
        summary_en: 'Virtues (honesty, trustworthiness, modesty, helping the needy) and avoiding vices (lying, jealousy, backbiting, arrogance).',
        topics: ['সত্যবাদিতা ও ওয়াদা রক্ষা', 'পিতামাতা ও শিক্ষকের প্রতি দায়িত্ব', 'প্রতিবেশীর অধিকার রক্ষা', 'হিংসা, গিবত ও অপচয়ের ক্ষতি'],
        learning_outcomes: ['প্রশংসনীয় চরিত্রে ভূষিত হতে এবং যেকোনো ধরনের মিথ্যা ও অন্যায় পরিহার করতে সচেষ্ট হবে।'],
        estimated_periods: 8
      },
      {
        chapter_no: 5,
        chapter_slug: 'seerah-ideal-lives',
        title_bn: 'অধ্যায় ৫: আদর্শ জীবনচরিত (সিরাত)',
        title_en: 'Chapter 5: Biographies of Model Personalities (Seerah)',
        summary_bn: 'মহানবী হযরত মুহাম্মদ (সা.)-এর শৈশব, হিলফুল ফুজুল গঠন, আল-আমিন উপাধি অর্জন এবং খোলাফায়ে রাশেদিনের প্রাথমিক জীবনী।',
        summary_en: 'Prophet Muhammad’s (pbuh) early life, honesty as Al-Amin, Hilf al-Fudul peace coalition, and brief life lessons from the Rightly Guided Caliphs.',
        topics: ['মহানবী (সা.)-এর জন্ম ও শৈশব', 'হিলফুল ফুজুল শান্তি চুক্তি ও যুবসমাজের শিক্ষা', 'আমানতদার আল-আমিন', 'হযরত আবু বকর ও ওমর (রা.)-এর ন্যায়পরায়ণতা'],
        learning_outcomes: ['মহানবীর জীবনাদর্শ অনুসরণ করে সমাজে শান্তি ও সম্প্রীতি স্থাপনে অনুপ্রাণিত হবে।'],
        estimated_periods: 8
      }
    ]
  },

  // 12. হিন্দুধর্ম শিক্ষা
  {
    id: 'hindu-studies',
    code: 'NCTB-6-HIN',
    title_bn: 'হিন্দুধর্ম শিক্ষা',
    title_en: 'Hindu Religious and Moral Education',
    class: 'class-6',
    class_no: 6,
    category: 'religion',
    category_bn: 'ধর্ম ও নৈতিক শিক্ষা',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#b45309',
    icon_name: 'Sun',
    description_bn: 'স্রষ্টা ও সৃষ্টি, দেব-দেবী ও পূজা-পার্বণ, ধর্মগ্রন্থের নৈতিক শিক্ষা এবং মহাপুরুষগণের জীবনীর পাঠ্যবই।',
    description_en: 'Hindu philosophy, Brahma & avatar concept, deities and festivals (Durga/Saraswati Puja), scripture morality (Gita), and saints.',
    total_chapters: 5,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'creator-and-creation-in-hinduism',
        title_bn: 'অধ্যায় ১: স্রষ্টা ও সৃষ্টি',
        title_en: 'Chapter 1: The Creator and the Universe',
        summary_bn: 'ব্রহ্ম, ঈশ্বর ও অবতারের রূপ, সর্বভূতে ঈশ্বরের উপস্থিতি এবং জীবের প্রতি দয়া প্রদর্শনের ধর্মীয় তাৎপর্য।',
        summary_en: 'Concepts of Brahman, Ishvara, Avatars, omnipresence of the Divine in living entities, and compassion towards creation.',
        topics: ['ব্রহ্মের স্বরূপ ও ঈশ্বরের মহিমা', 'অবতার ধারণার তাৎপর্য', 'জীবসেবা ও ঈশ্বরসেবা', 'ধর্মীয় শ্লোক ও ধ্যান'],
        learning_outcomes: ['সকল সৃষ্টির মাঝে ঈশ্বরের রূপ দর্শন করে সবার প্রতি অহিংস আচরণ করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'deities-and-worship-festivals',
        title_bn: 'অধ্যায় ২: দেব-দেবী ও পূজা-পার্বণ',
        title_en: 'Chapter 2: Deities and Festive Worship',
        summary_bn: 'ব্রহ্মা, বিষ্ণু, শিব, দুর্গা ও সরস্বতী দেবীর পরিচিতি, পূজার নিয়মাবলি এবং সম্প্রীতির উৎসব।',
        summary_en: 'Introduction to Trideva and Goddesses (Durga, Saraswati), rituals of Puja, sacred Mantras, and universal communal harmony.',
        topics: ['দেব-দেবীর পরিচয় ও মাহাত্ম্য', 'পূজার উপকরণ ও উপাচার', 'সরস্বতী পূজা ও বিদ্যার্জনের শপথ', 'উৎসবের সামাজিক ঐক্য'],
        learning_outcomes: ['পূজার শৃঙ্খলা ও উপাসনার মাধ্যমে চিত্তের পবিত্রতা অর্জন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'ancient-scriptures-and-gita',
        title_bn: 'অধ্যায় ৩: হিন্দুধর্মের প্রাচীন ধর্মগ্রন্থ',
        title_en: 'Chapter 3: Sacred Scriptures and Bhagavad Gita',
        summary_bn: 'বেদ, উপনিষদ, রামায়ণ, মহাভারত এবং শ্রীমদ্ভগবদ্গীতার কর্মযোগ ও সত্যনিষ্ঠার শিক্ষা।',
        summary_en: 'Vedas overview, moral fables from Ramayana & Mahabharata, and Karma Yoga (duty without attachment) from the Bhagavad Gita.',
        topics: ['চার বেদের সংক্ষিপ্ত পরিচয়', 'রামায়ণের ভ্রাতৃত্ব ও পিতৃভক্তি', 'মহাভারতের অন্যায়ের বিরুদ্ধে লড়াই', 'গীতার কর্মযোগ শ্লোক পাঠ'],
        learning_outcomes: ['ধর্মগ্রন্থের কাহিনি থেকে ত্যাগ ও নিষ্ঠার পাঠ গ্রহণ করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'moral-conduct-and-values',
        title_bn: 'অধ্যায় ৪: সদাচার ও নৈতিক মূল্যবোধ',
        title_en: 'Chapter 4: Moral Conduct and Virtuous Living',
        summary_bn: 'অহিংসা, সত্যবাদিতা, পরোপকার, গুরুজনদের প্রতি শ্রদ্ধা এবং জীবজগতের সুরক্ষা।',
        summary_en: 'Ahimsa (non-violence), truthfulness, selfless charity, reverence for teachers and elders, and ecological ethics.',
        topics: ['অহিংসা পরম ধর্ম', 'সত্যবাদী হরিশচন্দ্রের জীবনশিক্ষা', 'পরিবেশ ও পশুপাখির সুরক্ষা', 'দৈনন্দিন জীবনে সদাচার অনুশীলন'],
        learning_outcomes: ['দৈনন্দিন জীবনে অহিংসা ও সত্যনিষ্ঠার আদর্শ মেনে চলতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'lives-of-great-saints',
        title_bn: 'অধ্যায় ৫: মহাপুরুষ ও মহীয়সী নারীগণের জীবনী',
        title_en: 'Chapter 5: Lives of Great Spiritual Personalities',
        summary_bn: 'শ্রী চৈতন্যদেব, শ্রী রামকৃষ্ণ পরমহংস, স্বামী বিবেকানন্দ এবং মা সারদা দেবীর প্রেম ও সম্প্রীতির বাণী।',
        summary_en: 'Universal love and humanism taught by Sri Chaitanya, Sri Ramakrishna Paramahamsa, Swami Vivekananda, and Sarada Devi.',
        topics: ['শ্রী চৈতন্যের মানবপ্রেম ও জাতিভেদ বিরোধিতা', 'রামকৃষ্ণের সর্বধর্ম সমন্বয়', 'বিবেকানন্দের যুবসমাজের প্রতি আহ্বান', 'মা সারদার মাতৃত্বের আদর্শ'],
        learning_outcomes: ['মহাপুরুষদের জীবন থেকে প্রেরণা পেয়ে বৈষম্যমুক্ত সমাজ গঠনে অংশ নিতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 13. বৌদ্ধধর্ম শিক্ষা
  {
    id: 'buddhist-studies',
    code: 'NCTB-6-BUD',
    title_bn: 'বৌদ্ধধর্ম শিক্ষা',
    title_en: 'Buddhist Religious and Moral Education',
    class: 'class-6',
    class_no: 6,
    category: 'religion',
    category_bn: 'ধর্ম ও নৈতিক শিক্ষা',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#c2410c',
    icon_name: 'Flower2',
    description_bn: 'সিদ্ধার্থ গৌতমের জীবনচরিত, ত্রিপিটক, চার আর্যসত্য, অষ্টাঙ্গিক মার্গ ও পঞ্চশীলের নৈতিক শিক্ষার পাঠ্যবই।',
    description_en: 'Life of Gautama Buddha, Tripitaka scriptures, Four Noble Truths, Noble Eightfold Path, Panchasila ethical precepts.',
    total_chapters: 5,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'tripitaka-and-buddhist-foundations',
        title_bn: 'অধ্যায় ১: ত্রিপিটক ও বৌদ্ধধর্মের মূল ভিত্তি',
        title_en: 'Chapter 1: The Tripitaka and Core Buddhist Foundations',
        summary_bn: 'ত্রিপিটকের তিন ভাগ (বিনয়, সূত্র, অভিধর্ম) এবং বুদ্ধবাণীর সংরক্ষণ ও তাৎপর্য।',
        summary_en: 'The Three Baskets (Vinaya, Sutta, Abhidhamma Pitaka), preservation of Buddha’s discourses, and Dhamma reverence.',
        topics: ['ত্রিপিটক পরিচিতি', 'বিনয় পিটকের শৃঙ্খলা বিধান', 'সূত্র পিটকের উপদেশমালা', 'অভিধর্মের দার্শনিক ধারণা'],
        learning_outcomes: ['ত্রিপিটকের মূল বিষয়বস্তু ও নৈতিক মূল্য অনুধাবন করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'life-of-gautama-buddha',
        title_bn: 'অধ্যায় ২: গৌতম বুদ্ধের জীবনচরিত ও বোধিলাভ',
        title_en: 'Chapter 2: The Life and Enlightenment of Gautama Buddha',
        summary_bn: 'সিদ্ধার্থের রাজপ্রাসাদ ত্যাগ (মহাভিনিষ্ক্রমণ), কঠোর তপস্যা ও বোধিবৃক্ষের নিচে পরম জ্ঞান লাভ।',
        summary_en: 'Prince Siddhartha’s renunciation, deep meditation, overcoming Mara, and achieving supreme Enlightenment (Buddhahood).',
        topics: ['রাজকুমার সিদ্ধার্থের বাল্যজীবন', 'চারটি নিমিত্ত দর্শন ও রাজপ্রাসাদ ত্যাগ', 'বোধিবৃক্ষমূলে বোধিলাভ', 'প্রথম ধর্মচক্র প্রবর্তন'],
        learning_outcomes: ['বুদ্ধের আত্মত্যাগ ও ত্যাগের আদর্শ থেকে সংযম শিখতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'four-noble-truths-and-eightfold-path',
        title_bn: 'অধ্যায় ৩: চার আর্যসত্য ও অষ্টাঙ্গিক মার্গ',
        title_en: 'Chapter 3: Four Noble Truths and Noble Eightfold Path',
        summary_bn: 'দুঃখ, দুঃখের কারণ, দুঃখ নিরোধ এবং দুঃখ নিরোধের মধ্যম পথ বা অষ্টাঙ্গিক মার্গ।',
        summary_en: 'Dukkha (suffering), origin of suffering, cessation of suffering, and the Middle Path of Eightfold Right Practices.',
        topics: ['চারটি আর্যসত্যের ব্যাখ্যা', 'অষ্টাঙ্গিক মার্গের আটটি সোপান (সম্যক দৃষ্টি, সংকল্প, বাক্য ইত্যাদি)', 'মধ্যম পথের সুফল', 'দৈনন্দিন জীবনে প্রয়োগ'],
        learning_outcomes: ['অষ্টাঙ্গিক মার্গের অনুশীলন করে লোভ ও হিংসা পরিহার করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'panchasila-and-moral-virtue',
        title_bn: 'অধ্যায় ৪: শীল পালন ও নৈতিক জীবনাচরণ',
        title_en: 'Chapter 4: Panchasila (Five Precepts) and Virtuous Conduct',
        summary_bn: 'পঞ্চশীল পালন: প্রাণী হত্যা না করা, চুরি না করা, অসদাচরণ না করা, মিথ্যা না বলা ও মাদক বর্জন।',
        summary_en: 'Panchasila precepts: Refraining from harming life, taking the un-given, misconduct, falsehood, and intoxicants.',
        topics: ['পঞ্চশীলের প্রতিজ্ঞা ও তাৎপর্য', 'জীবজগতের প্রতি মৈত্রী ভাবনা', 'দান ও সৎসঙ্গের সুফল', 'অষ্টশীল ও ত্রিরত্ন বন্দনা'],
        learning_outcomes: ['পঞ্চশীল ব্রত গ্রহণ করে আত্মশুদ্ধির সাথে জীবন পরিচালনা করতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'buddhist-heritage-in-bangladesh',
        title_bn: 'অধ্যায় ৫: বৌদ্ধ ঐতিহাসিক স্থান ও ঐতিহ্য',
        title_en: 'Chapter 5: Buddhist Heritage Sites and Sacred Tradition',
        summary_bn: 'পাহাড়পুর সোমপুর মহাবিহার, ময়নামতি শালবন বিহার এবং বাংলাদেশের প্রাচীন বৌদ্ধ প্রত্নকীর্তি।',
        summary_en: 'Somapura Mahavihara at Paharpur, Shalban Vihara at Mainamati, and archaeological glory of ancient Buddhist Bengal.',
        topics: ['সোমপুর বৌদ্ধ মহাবিহারের স্থাপত্য', 'ময়নামতির প্রত্নতাত্ত্বিক সম্পদ', 'অতীশ দীপঙ্করের জ্ঞানচর্চা ও তিব্বত যাত্রা', 'বৌদ্ধ উৎসব ও কঠিন চীবর দান'],
        learning_outcomes: ['বাংলার গৌরবময় বৌদ্ধ ঐতিহ্য ও স্থাপত্যের সংরক্ষণ সম্পর্কে সচেতন হতে পারবে।'],
        estimated_periods: 6
      }
    ]
  },

  // 14. খ্রিস্টধর্ম শিক্ষা
  {
    id: 'christian-studies',
    code: 'NCTB-6-CHR',
    title_bn: 'খ্রিস্টধর্ম শিক্ষা',
    title_en: 'Christian Religious and Moral Education',
    class: 'class-6',
    class_no: 6,
    category: 'religion',
    category_bn: 'ধর্ম ও নৈতিক শিক্ষা',
    publisher: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ',
    curriculum_version: 'নতুন জাতীয় শিক্ষাক্রম',
    theme_color: '#7c3aed',
    icon_name: 'Cross',
    description_bn: 'ঈশ্বর ও সৃষ্টিতত্ত্ব, যিশু খ্রিস্টের জীবন ও মানবপ্রেমের বাণী, পবিত্র বাইবেল ও খ্রিস্টীয় দশ আজ্ঞার পাঠ্যবই।',
    description_en: 'Christian theology, life and teachings of Jesus Christ, Biblical study, Ten Commandments, forgiveness, and selfless social service.',
    total_chapters: 5,
    chapters: [
      {
        chapter_no: 1,
        chapter_slug: 'god-and-creation',
        title_bn: 'অধ্যায় ১: ঈশ্বর ও সৃষ্টি তত্ত্ব',
        title_en: 'Chapter 1: God, Creation, and Loving Providence',
        summary_bn: 'পবিত্র বাইবেলের আদিপুস্তকে সৃষ্টির বিবরণ, ঈশ্বরের ভালোবাসা ও প্রকৃতির প্রতি মানুষের অভিভাবকত্ব।',
        summary_en: 'Book of Genesis creation account, God’s omnipotence, divine love for humanity, and stewardship of the Earth.',
        topics: ['ঈশ্বরের সৃষ্টি কর্ম ও মানুষের বিশেষ মর্যাদা', 'প্রকৃতির ভারসাম্য রক্ষা করা', 'ঈশ্বরের আনুগত্য ও কৃতজ্ঞতা', 'প্রার্থনার অপরিহার্যতা'],
        learning_outcomes: ['সৃষ্টিজগতের অপার সৌন্দর্য অনুভব করে ঈশ্বরের প্রতি বিশ্বাস ও যত্নশীল আচরণ গড়ে তুলতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 2,
        chapter_slug: 'life-and-teachings-of-jesus-christ',
        title_bn: 'অধ্যায় ২: যিশু খ্রিস্টের জীবন ও মানবপ্রেমের বাণী',
        title_en: 'Chapter 2: Life and Teachings of Jesus Christ',
        summary_bn: 'যিশুর জন্ম (বড়দিন), শৈশব, মানবসেবা, অসুস্থদের আরোগ্য দান ও পরম ক্ষমার বার্তা।',
        summary_en: 'Nativity of Jesus (Christmas), early years in Nazareth, parables of love, healing the sick, and teaching unconditional mercy.',
        topics: ['যিশুর জন্ম ও বেথলেহেমের তারা', 'গিরিপ্রবচন (Sermon on the Mount) এর নীতিশিক্ষা', 'উত্তম শমরীয়ের রূপক গল্প', 'শত্রুকে ভালোবাসার কঠিন শিক্ষা'],
        learning_outcomes: ['যিশুর আদর্শে উদ্বুদ্ধ হয়ে আর্তপীড়িত ও অসহায় মানুষের সেবায় এগিয়ে আসতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 3,
        chapter_slug: 'holy-bible-and-reflections',
        title_bn: 'অধ্যায় ৩: পবিত্র বাইবেল পাঠ ও অনুধাবন',
        title_en: 'Chapter 3: Studying and Reflecting on the Holy Bible',
        summary_bn: 'পুরাতন নিয়ম ও নতুন নিয়ম পরিচিতি, জ্ঞানগর্ভ নীতিবচন এবং বাইবেল পাঠের আত্মিক শক্তি।',
        summary_en: 'Old Testament and New Testament divisions, wisdom books (Proverbs, Psalms), and reading Scripture for daily guidance.',
        topics: ['বাইবেলের বিন্যাস ও ইতিহাস', 'গীতসংহিতার প্রশংসাগীতি', 'হিতোপদেশের প্রজ্ঞার বাণী', 'বাইবেল পাঠের পারিবারিক নিয়ম'],
        learning_outcomes: ['বাইবেলের বাণী পাঠ করে চরিত্র গঠন ও মানসিক শান্তি অর্জন করতে পারবে।'],
        estimated_periods: 7
      },
      {
        chapter_no: 4,
        chapter_slug: 'ten-commandments-and-moral-code',
        title_bn: 'অধ্যায় ৪: দশ আজ্ঞা ও খ্রিস্টীয় নৈতিক শিক্ষা',
        title_en: 'Chapter 4: The Ten Commandments and Christian Ethics',
        summary_bn: 'মোশির মাধ্যমে প্রদত্ত ঈশ্বরের দশ আজ্ঞা এবং পিতা-মাতাকে সম্মান ও প্রতিবেশীর প্রতি ভালোবাসার শিক্ষা।',
        summary_en: 'Ten Commandments given through Moses, moral duties to God and community, honoring parents, and justice.',
        topics: ['দশ আজ্ঞার পটভূমি ও গুরুত্ব', 'পিতা-মাতার বাধ্য থাকা', 'জীবনের পবিত্রতা ও অন্যায় প্রতিরোধ', 'ন্যায়পরায়ণ ও সৎ জীবনযাপন'],
        learning_outcomes: ['দশ আজ্ঞার বিধানগুলো মেনে চলে সামাজিক শান্তি ও সুবিচার প্রতিষ্ঠায় অবদান রাখতে পারবে।'],
        estimated_periods: 6
      },
      {
        chapter_no: 5,
        chapter_slug: 'forgiveness-peace-and-service',
        title_bn: 'অধ্যায় ৫: ক্ষমা, শান্তি ও মানবসেবার আদর্শ',
        title_en: 'Chapter 5: Forgiveness, Peace, and Selfless Service',
        summary_bn: 'হৃদয় দিয়ে ক্ষমা করা, অহিংসা ও শান্তির দূত হওয়া এবং মাদার তেরেসার মতো আত্মত্যাগের দৃষ্টান্ত।',
        summary_en: 'Power of forgiveness, peacemaking virtues, Saint Mother Teresa’s compassionate service to the destitute, and modern ministry.',
        topics: ['ক্ষমা ও পুনর্মিলন', 'শান্তি স্থাপনকারীদের আশীর্বাদ', 'মাদার তেরেসার মানবসেবার ত্যাগ', 'সমাজকল্যাণমূলক কাজে তরুণদের ভূমিকা'],
        learning_outcomes: ['ক্ষমা ও সহমর্মিতার মনোভাব নিয়ে যেকোনো সংঘাত অহিংস উপায়ে মেটাতে সচেষ্ট হবে।'],
        estimated_periods: 6
      }
    ]
  }
];

// Helper functions for easy querying in both backend and frontend
export function getAllBooks(filter?: { category?: string; search?: string }) {
  let list = CLASS_6_BOOKS;
  if (filter?.category && filter.category !== 'all') {
    list = list.filter(b => b.category === filter.category);
  }
  if (filter?.search) {
    const q = filter.search.toLowerCase().trim();
    list = list.filter(b =>
      b.title_bn.toLowerCase().includes(q) ||
      b.title_en.toLowerCase().includes(q) ||
      b.description_bn.toLowerCase().includes(q) ||
      b.description_en.toLowerCase().includes(q) ||
      b.chapters.some(c => c.title_bn.toLowerCase().includes(q) || c.title_en.toLowerCase().includes(q))
    );
  }
  return list;
}

export function getBookById(id: string): Book | undefined {
  return CLASS_6_BOOKS.find(b => b.id.toLowerCase() === id.toLowerCase() || b.code.toLowerCase() === id.toLowerCase());
}

export function getBookChapters(bookId: string): Chapter[] | undefined {
  const book = getBookById(bookId);
  return book?.chapters;
}

export function getChapterByNo(bookId: string, chapterNo: number): { book: Omit<Book, 'chapters'>; chapter: Chapter } | undefined {
  const book = getBookById(bookId);
  if (!book) return undefined;
  const chapter = book.chapters.find(c => c.chapter_no === chapterNo);
  if (!chapter) return undefined;
  const { chapters: _, ...bookMeta } = book;
  return { book: bookMeta, chapter };
}

export function searchAll(query: string) {
  if (!query || !query.trim()) return { books: [], chapters: [] };
  const q = query.toLowerCase().trim();
  
  const matchedBooks = CLASS_6_BOOKS.filter(b =>
    b.title_bn.toLowerCase().includes(q) ||
    b.title_en.toLowerCase().includes(q) ||
    b.description_bn.toLowerCase().includes(q) ||
    b.description_en.toLowerCase().includes(q)
  ).map(({ chapters: _, ...meta }) => meta);

  const matchedChapters: { book_id: string; book_title_bn: string; book_title_en: string; chapter: Chapter }[] = [];
  CLASS_6_BOOKS.forEach(b => {
    b.chapters.forEach(c => {
      if (
        c.title_bn.toLowerCase().includes(q) ||
        c.title_en.toLowerCase().includes(q) ||
        c.summary_bn.toLowerCase().includes(q) ||
        c.summary_en.toLowerCase().includes(q) ||
        c.topics.some(t => t.toLowerCase().includes(q))
      ) {
        matchedChapters.push({
          book_id: b.id,
          book_title_bn: b.title_bn,
          book_title_en: b.title_en,
          chapter: c
        });
      }
    });
  });

  return {
    query,
    total_results: matchedBooks.length + matchedChapters.length,
    books: matchedBooks,
    chapters: matchedChapters
  };
}
