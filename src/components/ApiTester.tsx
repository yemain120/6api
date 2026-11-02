import React, { useState, useEffect } from 'react';
import { Play, Copy, Check, RefreshCw, Send, Sparkles, Filter, Code, Info, ArrowRight } from 'lucide-react';
import { CodeSnippet } from './CodeSnippet.tsx';

interface EndpointPreset {
  name: string;
  name_bn: string;
  category: string;
  method: 'GET';
  path: string;
  desc: string;
}

const PRESET_ENDPOINTS: EndpointPreset[] = [
  {
    name: 'Class 6 Overview',
    name_bn: 'ষষ্ঠ শ্রেণি ওভারভিউ ও পরিচিতি',
    category: 'Class',
    method: 'GET',
    path: '/api/v1/class-6',
    desc: 'Returns overall metadata, categories, and summary of all Class 6 textbooks.'
  },
  {
    name: 'All 14 Textbooks',
    name_bn: 'সকল ১৪টি পাঠ্যবই ও অধ্যায়সমূহ',
    category: 'Books',
    method: 'GET',
    path: '/api/v1/class-6/books',
    desc: 'Returns full data for all 14 textbooks and complete chapter lists.'
  },
  {
    name: 'Compact Books List',
    name_bn: 'বইসমূহের সংক্ষিপ্ত তালিকা (লাইটওয়েট)',
    category: 'Books',
    method: 'GET',
    path: '/api/v1/class-6/books?compact=true',
    desc: 'Returns lightweight list of books without full chapter nested arrays.'
  },
  {
    name: 'Bangla Textbook & Chapters',
    name_bn: 'বাংলা পাঠ্যবই ও ৭টি অধ্যায়',
    category: 'Single Book',
    method: 'GET',
    path: '/api/v1/class-6/books/bangla',
    desc: 'Complete Bengali textbook chapters, learning outcomes, and grammar topics.'
  },
  {
    name: 'Math Textbook & Chapters',
    name_bn: 'গণিত পাঠ্যবই ও ১২টি অধ্যায়',
    category: 'Single Book',
    method: 'GET',
    path: '/api/v1/class-6/books/math',
    desc: 'Class 6 Mathematics curriculum with all 12 chapters from numbers to algebra.'
  },
  {
    name: 'Science Chapters Only',
    name_bn: 'বিজ্ঞান (অনুসন্ধানী) এর অধ্যায়সমূহ',
    category: 'Chapters',
    method: 'GET',
    path: '/api/v1/class-6/books/science-inquiry/chapters',
    desc: 'List of all 11 chapters of Science Inquiry textbook.'
  },
  {
    name: 'Specific Chapter Detail',
    name_bn: 'নির্দিষ্ট অধ্যায় বিস্তারিত (ডিজিটাল প্রযুক্তি - অধ্যায় ১)',
    category: 'Chapters',
    method: 'GET',
    path: '/api/v1/class-6/books/digital-technology/chapters/1',
    desc: 'Detailed view of chapter 1 (শিখন অভিজ্ঞতা ১: তথ্যের সত্যতা অনুসন্ধান).'
  },
  {
    name: 'All Science Subject Chapters',
    name_bn: 'বিজ্ঞান বিভাগের সকল অধ্যায়',
    category: 'Filter',
    method: 'GET',
    path: '/api/v1/class-6/chapters?category=science',
    desc: 'Filtered flat list of chapters across all science textbooks.'
  },
  {
    name: 'Search: ভগ্নাংশ (Fractions)',
    name_bn: 'সার্চ এপিআই: ভগ্নাংশ',
    category: 'Search',
    method: 'GET',
    path: '/api/v1/search?q=ভগ্নাংশ',
    desc: 'Search for fraction-related topics across all books and chapters.'
  },
  {
    name: 'Search: Motion / গতি',
    name_bn: 'সার্চ এপিআই: Motion বা গতি',
    category: 'Search',
    method: 'GET',
    path: '/api/v1/search?q=গতি',
    desc: 'Search for physics motion topics in Bangla or English.'
  },
  {
    name: 'Complete JSON Export',
    name_bn: 'সম্পূর্ণ ডাটাবেজ ডাম্প (JSON)',
    category: 'Export',
    method: 'GET',
    path: '/api/v1/export/class-6.json',
    desc: 'Download or fetch the entire Class 6 curriculum dataset in one call.'
  }
];

export const ApiTester: React.FC<{ initialPath?: string }> = ({ initialPath }) => {
  const [currentPath, setCurrentPath] = useState(initialPath || '/api/v1/class-6/books');
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [responseSize, setResponseSize] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedRes, setCopiedRes] = useState(false);
  const [filterText, setFilterText] = useState('');

  const sendRequest = async (pathToSend = currentPath) => {
    setLoading(true);
    setErrorMsg(null);
    const start = performance.now();

    try {
      const response = await fetch(pathToSend);
      const end = performance.now();
      setResponseTime(Math.round(end - start));
      setResponseStatus(response.status);

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const json = await response.json();
        setResponseData(json);
        const text = JSON.stringify(json);
        setResponseSize((text.length / 1024).toFixed(1) + ' KB');
      } else {
        const text = await response.text();
        setResponseData(text);
        setResponseSize((text.length / 1024).toFixed(1) + ' KB');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to fetch from endpoint');
      setResponseStatus(500);
      setResponseData({ error: 'Network error or connection refused' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialPath) {
      setCurrentPath(initialPath);
      sendRequest(initialPath);
    } else {
      sendRequest('/api/v1/class-6/books');
    }
  }, [initialPath]);

  const copyResponse = () => {
    if (!responseData) return;
    navigator.clipboard.writeText(JSON.stringify(responseData, null, 2));
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 p-5 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              ইন্টারেক্টিভ এপিআই এক্সপ্লোরার
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Class 6 NCTB REST API Console
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl font-bengali">
              যেকোনো এপিআই এন্ডপয়েন্ট সিলেক্ট করে সরাসরি লাইভ টেস্ট করুন, রেসপন্স ও ল্যাটেন্সি দেখুন এবং কোড স্নিপেট তৈরি করুন।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-mono border border-slate-700">
              CORS: Enabled ( * )
            </span>
            <span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/30 font-semibold">
              Vercel Ready
            </span>
          </div>
        </div>
      </div>

      {/* Preset Endpoints Chips */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            জনপ্রিয় এন্ডপয়েন্ট প্রিসেটসমূহ (Quick Endpoints):
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {PRESET_ENDPOINTS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPath(preset.path);
                sendRequest(preset.path);
              }}
              className={`text-left p-2.5 rounded-xl border transition-all text-xs group cursor-pointer ${
                currentPath === preset.path
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/30'
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/70 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {preset.name_bn}
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {preset.method}
                </span>
              </div>
              <p className="font-mono text-[11px] text-slate-400 truncate">
                {preset.path}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Request URL Input & Send Button */}
      <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-800 shadow-xl space-y-3">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
          রিকোয়েস্ট এন্ডপয়েন্ট (Request URL):
        </label>
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          <div className="flex items-center flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 font-mono text-xs sm:text-sm text-slate-200 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs mr-2">
              GET
            </span>
            <input
              type="text"
              value={currentPath}
              onChange={(e) => setCurrentPath(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendRequest()}
              className="w-full bg-transparent border-none outline-none font-mono text-emerald-300 placeholder-slate-600"
              placeholder="/api/v1/class-6/books"
            />
          </div>

          <button
            onClick={() => sendRequest()}
            disabled={loading}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>লোড হচ্ছে...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Request</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Response Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Response Header Info */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Response:
            </span>

            {responseStatus !== null && (
              <span
                className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                  responseStatus === 200
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-red-500/10 text-red-400 border-red-500/30'
                }`}
              >
                {responseStatus} {responseStatus === 200 ? 'OK' : 'Error'}
              </span>
            )}

            {responseTime !== null && (
              <span className="text-xs font-mono text-slate-400">
                Time: <strong className="text-slate-200">{responseTime}ms</strong>
              </span>
            )}

            {responseSize && (
              <span className="text-xs font-mono text-slate-400">
                Size: <strong className="text-slate-200">{responseSize}</strong>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyResponse}
              disabled={!responseData}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors cursor-pointer"
            >
              {copiedRes ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* JSON Viewer */}
        <div className="p-4 bg-slate-950 font-mono text-xs overflow-auto max-h-[500px] text-slate-200">
          {loading ? (
            <div className="py-16 flex flex-col items-center justify-center text-slate-500 gap-2">
              <RefreshCw className="w-6 h-6 animate-spin text-emerald-400" />
              <span>Fetching data from {currentPath}...</span>
            </div>
          ) : errorMsg ? (
            <div className="p-4 bg-red-950/30 border border-red-800/40 rounded-xl text-red-400">
              <p className="font-bold">Error:</p>
              <p>{errorMsg}</p>
            </div>
          ) : responseData ? (
            <pre className="text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">
              {JSON.stringify(responseData, null, 2)}
            </pre>
          ) : (
            <p className="text-slate-600 italic">কোনো ডাটা নেই। উপরে Send Request এ ক্লিক করুন।</p>
          )}
        </div>
      </div>

      {/* Code Snippets Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            এই এন্ডপয়েন্ট ব্যবহারের কোড স্নিপেট (Client Code Snippets):
          </label>
        </div>
        <CodeSnippet endpoint={currentPath} />
      </div>
    </div>
  );
};
