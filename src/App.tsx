/**
 * NCTB Class 6 All Textbooks & Chapters REST API
 * Vercel Serverless Ready + Interactive API Console
 */
import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { ApiTester } from './components/ApiTester.tsx';
import { BooksExplorer } from './components/BooksExplorer.tsx';
import { DeploymentGuide } from './components/DeploymentGuide.tsx';
import { Documentation } from './components/Documentation.tsx';
import { CLASS_6_INFO, CLASS_6_BOOKS } from './data/class6Data.ts';
import { Heart, Globe, Github, Server, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'tester' | 'books' | 'deploy' | 'docs'>('tester');
  const [testerPath, setTesterPath] = useState<string>('/api/v1/class-6/books');

  const handleSelectEndpoint = (path: string) => {
    setTesterPath(path);
    setActiveTab('tester');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      class_info: CLASS_6_INFO,
      exported_at: new Date().toISOString(),
      source: 'National Curriculum and Textbook Board, Bangladesh (NCTB)',
      total_books: CLASS_6_BOOKS.length,
      books: CLASS_6_BOOKS
    }, null, 2));

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "nctb-class-6-all-books-and-chapters.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onExportJson={handleExportJson}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'tester' && (
          <ApiTester initialPath={testerPath} />
        )}

        {activeTab === 'books' && (
          <BooksExplorer onSelectEndpoint={handleSelectEndpoint} />
        )}

        {activeTab === 'deploy' && (
          <DeploymentGuide />
        )}

        {activeTab === 'docs' && (
          <Documentation onSelectEndpoint={handleSelectEndpoint} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">
                ৬
              </div>
              <span className="text-xs text-slate-400 font-bengali">
                জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) বাংলাদেশ — ষষ্ঠ শ্রেণির উন্মুক্ত REST API
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-mono">
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                Vercel Serverless Compatible
              </span>
              <span>•</span>
              <span className="font-mono">JSON / REST / CORS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
