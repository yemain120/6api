import React, { useState } from 'react';
import {
  Github,
  Globe,
  CheckCircle,
  Copy,
  Check,
  Terminal,
  FileCode,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Zap,
  Server
} from 'lucide-react';

export const DeploymentGuide: React.FC = () => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(id);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const gitCommands = `# ১. গিট ইনিশিয়ালাইজ করুন
git init

# ২. সকল ফাইল যোগ করুন
git add .

# ৩. কমিট করুন
git commit -m "feat: Class 6 NCTB Textbooks and Chapters REST API"

# ৪. মেইন ব্রাঞ্চ সেট করুন
git branch -M main

# ৫. আপনার গিটহাব রিপোজিটরির সাথে লিংক করুন
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/class-6-nctb-api.git

# ৬. গিটহাবে পুশ করুন
git push -u origin main`;

  const vercelCliCommands = `# Vercel CLI ইনস্টল করুন (যদি না থাকে)
npm i -g vercel

# প্রজেক্ট ডিরেক্টরিতে কমান্ড দিন এবং ডিপ্লয় করুন
vercel

# প্রোডাকশন ডিপ্লয় করতে:
vercel --prod`;

  const readmeContent = `# 📚 NCTB Class 6 Textbooks & Chapters REST API
> জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) বাংলাদেশ ষষ্ঠ শ্রেণির সকল পাঠ্যবই ও অধ্যায়ের পাবলিক রেস্ট এপিআই (REST API)।

## 🚀 লাইভ এপিআই এন্ডপয়েন্টস (Endpoints)
- \`GET /api/v1/classes\` - সকল শ্রেণির মেটাডাটা
- \`GET /api/v1/class-6\` - ষষ্ঠ শ্রেণির সামগ্রিক তথ্য
- \`GET /api/v1/class-6/books\` - সকল ১৪টি পাঠ্যবই ও অধ্যায়
- \`GET /api/v1/class-6/books/:bookId\` - নির্দিষ্ট বই ও অধ্যায়
- \`GET /api/v1/class-6/books/:bookId/chapters\` - বইয়ের সকল অধ্যায়
- \`GET /api/v1/class-6/books/:bookId/chapters/:chapterNo\` - নির্দিষ্ট অধ্যায় বিস্তারিত
- \`GET /api/v1/class-6/chapters\` - সকল বিষয়ের ১০৪টি অধ্যায় (ফিল্টারেবল)
- \`GET /api/v1/search?q={query}\` - সার্বজনীন সার্চ এপিআই
- \`GET /api/v1/export/class-6.json\` - সম্পূর্ণ ডাটা ডাম্প (JSON)

## 🛠️ ডিপ্লয়মেন্ট (Deploy on Vercel)
এই প্রজেক্টটি Vercel Serverless Functions এবং \`vercel.json\` দ্বারা প্রিকনফিগার করা।
1. GitHub এ রিপোজিটরি তৈরি করে পুশ করুন।
2. vercel.com এ লগইন করে **Add New Project** এ গিয়ে রিপোটি সিলেক্ট করুন।
3. **Deploy** বাটনে ক্লিক করুন!`;

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 p-6 rounded-2xl border border-slate-800 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5" />
            GitHub & Vercel এক ক্লিকে ডিপ্লয়মেন্ট
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            গিটহাবে পুশ করে Vercel-এ ডিপ্লয় করার পূর্ণাঙ্গ নির্দেশিকা
          </h1>
          <p className="text-sm text-slate-300 mt-2 font-bengali leading-relaxed">
            এই প্রজেক্টের মধ্যে ইতিমধ্যে <code className="text-emerald-400 font-mono">vercel.json</code> এবং{' '}
            <code className="text-emerald-400 font-mono">api/index.ts</code> ফাইল কনফিগার করা আছে। তাই গিটহাবে পুশ করার সাথে সাথেই Vercel সার্ভারলেস ফাংশন হিসেবে সকল এপিআই রুট লাইভ হয়ে যাবে!
          </p>
        </div>
      </div>

      {/* Deployment Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
            <Server className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-white">Vercel Serverless API</h2>
          <p className="text-xs text-slate-400 font-bengali leading-relaxed">
            <code className="text-emerald-400">api/index.ts</code> ফাইলটি Express রাউটার ব্যবহার করে Vercel এর গ্লোবাল এজ এজেন্টে সার্ভারলেসভাবে চলে।
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
          <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
            <FileCode className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-white">vercel.json রাউটিং</h2>
          <p className="text-xs text-slate-400 font-bengali leading-relaxed">
            সকল <code className="text-emerald-400">/api/*</code> রিকোয়েস্ট অটোমেটিক সার্ভারলেস ফাংশনে এবং অন্য সব রিকোয়েস্ট ফ্রন্টএন্ডে রিরাইট হয়।
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
          <div className="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-white">CORS Enabled</h2>
          <p className="text-xs text-slate-400 font-bengali leading-relaxed">
            Access-Control-Allow-Origin: * প্রিকনফিগার করা, ফলে React, Flutter, Android বা যেকোনো অ্যাপ থেকে সরাসরি রিকোয়েস্ট পাঠানো যায়।
          </p>
        </div>
      </div>

      {/* Step 1: Git Push */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center">
              ১
            </span>
            <h2 className="text-base font-bold text-white font-bengali">
              ধাপ ১: কোড গিটহাবে (GitHub) পুশ করুন
            </h2>
          </div>

          <button
            onClick={() => copyText('git', gitCommands)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {copiedStep === 'git' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>কমান্ডগুলো কপি করুন</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-slate-400 font-bengali">
          আপনার কম্পিউটারের টার্মিনাল বা VS Code-এ এই প্রজেক্ট ফোল্ডারে গিয়ে নিচের কমান্ডগুলো চালান:
        </p>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
          <pre className="text-emerald-400/90 whitespace-pre leading-relaxed">
            {gitCommands}
          </pre>
        </div>
      </div>

      {/* Step 2: Vercel Deploy */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center">
            ২
          </span>
          <h2 className="text-base font-bold text-white font-bengali">
            ধাপ ২: Vercel ড্যাশবোর্ডে ইমপোর্ট ও ডিপ্লয় করুন
          </h2>
        </div>

        <div className="space-y-3 font-bengali text-xs text-slate-300">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="font-mono text-emerald-400 font-bold">1.</span>
            <div>
              <p className="font-semibold text-white">Vercel এ প্রবেশ করুন:</p>
              <p className="text-slate-400 mt-0.5">
                <a
                  href="https://vercel.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  vercel.com/new <ExternalLink className="w-3 h-3" />
                </a>{' '}
                -এ যান এবং আপনার GitHub একাউন্ট দিয়ে লগইন করুন।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="font-mono text-emerald-400 font-bold">2.</span>
            <div>
              <p className="font-semibold text-white">রিপোজিটরি নির্বাচন করুন (Import Git Repository):</p>
              <p className="text-slate-400 mt-0.5">
                আপনার সদ্য পুশ করা <code className="text-emerald-400">class-6-nctb-api</code> রিপোজিটরির পাশে **Import** বাটনে ক্লিক করুন।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="font-mono text-emerald-400 font-bold">3.</span>
            <div>
              <p className="font-semibold text-white">প্রজেক্ট কনফিগারেশন চেক:</p>
              <p className="text-slate-400 mt-0.5">
                Framework Preset স্বয়ংক্রিয়ভাবে <strong>Vite</strong> বা <strong>Other</strong> পাবে। কোনো কিছু পরিবর্তন করার প্রয়োজন নেই।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="font-mono text-emerald-400 font-bold">4.</span>
            <div>
              <p className="font-semibold text-white">ডিপ্লয় (Deploy):</p>
              <p className="text-slate-400 mt-0.5">
                নীল রঙের <strong>"Deploy"</strong> বাটনে ক্লিক করুন। মাত্র ৩০-৪৫ সেকেন্ডের মধ্যে আপনার এপিআই ডিপ্লয় হয়ে যাবে!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative: Vercel CLI */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-slate-950 font-bold text-xs flex items-center justify-center">
              ৩
            </span>
            <h2 className="text-base font-bold text-white font-bengali">
              বিকল্প পদ্ধতি: Vercel CLI দিয়ে ১-কমান্ডে ডিপ্লয়
            </h2>
          </div>

          <button
            onClick={() => copyText('cli', vercelCliCommands)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {copiedStep === 'cli' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>CLI কোড কপি</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
          <pre className="text-emerald-400/90 whitespace-pre leading-relaxed">
            {vercelCliCommands}
          </pre>
        </div>
      </div>

      {/* Copyable README.md template */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white font-bengali">
              গিটহাবের জন্য প্রস্তুত README.md টেমপ্লেট
            </h2>
            <p className="text-xs text-slate-400 font-bengali">
              আপনার রিপোজিটরির <code className="text-emerald-400">README.md</code> ফাইলে এটি পেস্ট করতে পারেন।
            </p>
          </div>

          <button
            onClick={() => copyText('readme', readmeContent)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {copiedStep === 'readme' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy README</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 max-h-56 overflow-y-auto">
          <pre className="whitespace-pre-wrap">{readmeContent}</pre>
        </div>
      </div>
    </div>
  );
};
