import React from 'react';
import { BookOpen, Server, CheckCircle2, Copy, Check, Download, ExternalLink, Github } from 'lucide-react';

interface NavbarProps {
  activeTab: 'tester' | 'books' | 'deploy' | 'docs';
  setActiveTab: (tab: 'tester' | 'books' | 'deploy' | 'docs') => void;
  onExportJson: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onExportJson }) => {
  const [copiedUrl, setCopiedUrl] = React.useState(false);

  const copyApiUrl = () => {
    const url = window.location.origin + '/api/v1/class-6/books';
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20 font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base tracking-tight font-sans">
                  NCTB Class 6 API
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  v1.0.0
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  লাইভ
                </span>
              </div>
              <p className="text-xs text-slate-400 font-bengali">
                ষষ্ঠ শ্রেণির সকল পাঠ্যবই ও অধ্যায় REST API
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('tester')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'tester'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                API টেস্ট কনসোল
              </span>
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'books'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                বই ও অধ্যায়সমূহ (১৪টি)
              </span>
            </button>
            <button
              onClick={() => setActiveTab('deploy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'deploy'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" />
                GitHub & Vercel ডিপ্লয়
              </span>
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'docs'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              ডকুমেন্টেশন & স্কিমা
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyApiUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Copy Base API URL"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">এপিআই URL</span>
                </>
              )}
            </button>

            <button
              onClick={onExportJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
              title="সম্পূর্ণ JSON ডাউনলোড করুন"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">JSON ডাউনলোড</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub Navigation */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-900 scrollbar-none">
          <button
            onClick={() => setActiveTab('tester')}
            className={`px-3 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'tester' ? 'bg-emerald-500 text-slate-950 font-medium' : 'text-slate-400'
            }`}
          >
            API টেস্টার
          </button>
          <button
            onClick={() => setActiveTab('books')}
            className={`px-3 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'books' ? 'bg-emerald-500 text-slate-950 font-medium' : 'text-slate-400'
            }`}
          >
            বই ও অধ্যায়
          </button>
          <button
            onClick={() => setActiveTab('deploy')}
            className={`px-3 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'deploy' ? 'bg-emerald-500 text-slate-950 font-medium' : 'text-slate-400'
            }`}
          >
            GitHub ও Vercel গাইড
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`px-3 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'docs' ? 'bg-emerald-500 text-slate-950 font-medium' : 'text-slate-400'
            }`}
          >
            ডকুমেন্টেশন
          </button>
        </div>
      </div>
    </header>
  );
};
