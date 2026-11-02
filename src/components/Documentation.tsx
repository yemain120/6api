import React from 'react';
import { BookOpen, FileText, Code, Database, Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const Documentation: React.FC<{ onSelectEndpoint: (path: string) => void }> = ({ onSelectEndpoint }) => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/classes',
      desc_bn: 'সকল শ্রেণির তালিকা ও শিক্ষাক্রমের মেটাডাটা।',
      desc_en: 'List of all academic classes and curriculum overview.',
      params: 'None'
    },
    {
      method: 'GET',
      path: '/api/v1/class-6',
      desc_bn: 'ষষ্ঠ শ্রেণির সংক্ষিপ্ত তথ্য, বিভাগ ও বইসমূহের তালিকা।',
      desc_en: 'Class 6 details, subject categories, and summary of books.',
      params: 'None'
    },
    {
      method: 'GET',
      path: '/api/v1/class-6/books',
      desc_bn: 'ষষ্ঠ শ্রেণির সকল ১৪টি পাঠ্যবই এবং তাদের সকল অধ্যায়।',
      desc_en: 'All 14 Class 6 textbooks with nested chapters.',
      params: 'category, search, compact (true/false)'
    },
    {
      method: 'GET',
      path: '/api/v1/class-6/books/:bookId',
      desc_bn: 'নির্দিষ্ট বইয়ের বিস্তারিত তথ্য ও সম্পূর্ণ সূচিপত্র।',
      desc_en: 'Specific textbook by ID (e.g., bangla, math, science-inquiry).',
      params: 'bookId (path param)'
    },
    {
      method: 'GET',
      path: '/api/v1/class-6/books/:bookId/chapters',
      desc_bn: 'একটি বইয়ের শুধুমাত্র সকল অধ্যায়ের তালিকা।',
      desc_en: 'List of all chapters for a specific book.',
      params: 'bookId (path param)'
    },
    {
      method: 'GET',
      path: '/api/v1/class-6/books/:bookId/chapters/:chapterNo',
      desc_bn: 'নির্দিষ্ট একটি অধ্যায়ের বিস্তারিত শিখনফল, টপিক ও কাজ।',
      desc_en: 'Single chapter details with topics and learning outcomes.',
      params: 'bookId, chapterNo (path params)'
    },
    {
      method: 'GET',
      path: '/api/v1/class-6/chapters',
      desc_bn: 'সকল বইয়ের ১০৪টি অধ্যায়ের ফ্ল্যাট তালিকা (প্যাজিনেশন ও ফিল্টার)।',
      desc_en: 'Flat list of all 104 chapters with pagination.',
      params: 'subject, category, search, page, limit'
    },
    {
      method: 'GET',
      path: '/api/v1/search?q={query}',
      desc_bn: 'বাংলা বা ইংরেজিতে বই ও অধ্যায়ের মধ্যে ফুল-টেক্সট সার্চ।',
      desc_en: 'Full-text search across book titles, chapters, and topics.',
      params: 'q (string, required)'
    },
    {
      method: 'GET',
      path: '/api/v1/export/class-6.json',
      desc_bn: 'সম্পূর্ণ ডাটাবেজ এক ক্লিকে JSON ফরম্যাটে ডাউনলোড।',
      desc_en: 'Complete downloadable JSON dump for offline caching.',
      params: 'None'
    }
  ];

  const bookModel = `{
  "id": "bangla",
  "code": "NCTB-6-BAN",
  "title_bn": "বাংলা",
  "title_en": "Bangla (Bengali)",
  "class": "class-6",
  "class_no": 6,
  "category": "language",
  "category_bn": "ভাষা ও সাহিত্য",
  "publisher": "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ",
  "curriculum_version": "নতুন জাতীয় শিক্ষাক্রম",
  "theme_color": "#dc2626",
  "total_chapters": 7,
  "chapters": [ ... ]
}`;

  const chapterModel = `{
  "chapter_no": 1,
  "chapter_slug": "communication-with-respect",
  "title_bn": "মর্যাদা বজায় রেখে যোগাযোগ করি",
  "title_en": "Communicating with Respect and Dignity",
  "summary_bn": "বিভিন্ন পরিস্থিতিতে ব্যক্তি ও সম্পর্কের মর্যাদা অনুযায়ী উপযুক্ত বাচনভঙ্গি...",
  "summary_en": "Techniques and etiquette for respectful communication...",
  "topics": [
    "পরিস্থিতি অনুযায়ী যোগাযোগ",
    "মর্যাদা অনুযায়ী সর্বনামের রূপভেদ (আপনি, তুমি, তুই)"
  ],
  "learning_outcomes": [
    "পরিস্থিতি ও ব্যক্তির মর্যাদা বুঝে প্রমিত বাংলা ও যথাযথ সর্বনাম ব্যবহার করতে পারবে।"
  ],
  "estimated_periods": 6,
  "practical_tasks": [
    "সহপাঠীদের সাথে পরিস্থিতিভিত্তিক রোল-প্লে বা নাট্যাভিনয় উপস্থাপন।"
  ]
}`;

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          API রেফারেন্স ও স্কিমা স্পেসিফিকেশন
        </h1>
        <p className="text-sm text-slate-400 mt-1 font-bengali">
          RESTful আর্কিটেকচার, JSON রেসপন্স স্ট্যান্ডার্ড এবং ডেটা মডেল নির্দেশিকা।
        </p>
      </div>

      {/* Endpoints Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            সমগ্র এপিআই এন্ডপয়েন্ট তালিকা
          </h2>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Base: /api/v1
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/50 text-slate-400 font-mono">
                <th className="py-3 px-4 font-semibold">METHOD</th>
                <th className="py-3 px-4 font-semibold">ENDPOINT</th>
                <th className="py-3 px-4 font-semibold">বিবরণ (DESCRIPTION)</th>
                <th className="py-3 px-4 font-semibold">প্যারামিটার</th>
                <th className="py-3 px-4 font-semibold text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {endpoints.map((ep, i) => (
                <tr key={i} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {ep.method}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono font-medium text-emerald-300">
                    {ep.path}
                  </td>
                  <td className="py-3 px-4 font-bengali text-slate-300 max-w-xs">
                    <div>{ep.desc_bn}</div>
                    <div className="text-[11px] text-slate-500 font-sans">{ep.desc_en}</div>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400 text-[11px]">
                    {ep.params}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onSelectEndpoint(ep.path.replace('{query}', 'বাংলা'))}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded transition-colors cursor-pointer"
                    >
                      টেস্ট করুন
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Book Model */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-0">
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              Book Schema (বই মডেল)
            </span>
            <span className="text-[10px] font-mono text-slate-400">TypeScript Interface: Book</span>
          </div>
          <div className="p-4 bg-slate-950 font-mono text-xs overflow-x-auto text-emerald-300">
            <pre className="whitespace-pre leading-relaxed">{bookModel}</pre>
          </div>
        </div>

        {/* Chapter Model */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-0">
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono">
              <Database className="w-3.5 h-3.5 text-teal-400" />
              Chapter Schema (অধ্যায় মডেল)
            </span>
            <span className="text-[10px] font-mono text-slate-400">TypeScript Interface: Chapter</span>
          </div>
          <div className="p-4 bg-slate-950 font-mono text-xs overflow-x-auto text-teal-300">
            <pre className="whitespace-pre leading-relaxed">{chapterModel}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
