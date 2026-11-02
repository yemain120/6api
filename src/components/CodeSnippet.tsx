import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';

interface CodeSnippetProps {
  endpoint: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ endpoint }) => {
  const [lang, setLang] = useState<'curl' | 'fetch' | 'axios' | 'python' | 'dart'>('curl');
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${endpoint}`
    : `https://your-domain.vercel.app${endpoint}`;

  const snippets: Record<string, string> = {
    curl: `curl -X GET "${fullUrl}" \\
  -H "Accept: application/json"`,

    fetch: `// JavaScript (Fetch API)
fetch("${fullUrl}")
  .then(res => res.json())
  .then(data => {
    console.log("Class 6 NCTB Data:", data);
  })
  .catch(err => console.error("API Error:", err));`,

    axios: `// JavaScript / TypeScript (Axios)
import axios from 'axios';

const response = await axios.get("${fullUrl}");
console.log(response.data);`,

    python: `# Python (requests)
import requests

url = "${fullUrl}"
response = requests.get(url)
data = response.json()

print(f"Status: {response.status_code}")
print(data)`,

    dart: `// Dart / Flutter
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<void> fetchClass6Data() async {
  final url = Uri.parse('${fullUrl}');
  final response = await http.get(url);
  
  if (response.statusCode == 200) {
    final data = jsonDecode(response.body);
    print(data);
  }
}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippets[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
      <div className="flex items-center justify-between px-3 py-2 bg-slate-950/70 border-b border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <Terminal className="w-3.5 h-3.5 text-slate-400 mr-1" />
          {(['curl', 'fetch', 'axios', 'python', 'dart'] as const).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                lang === l
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {l === 'curl' ? 'cURL' : l === 'fetch' ? 'Fetch JS' : l === 'axios' ? 'Axios' : l === 'python' ? 'Python' : 'Dart/Flutter'}
            </button>
          ))}
        </div>

        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">কপি হয়েছে!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      <div className="p-3 bg-slate-950 font-mono text-xs overflow-x-auto text-slate-200">
        <pre className="text-emerald-400/90 whitespace-pre leading-relaxed">
          {snippets[lang]}
        </pre>
      </div>
    </div>
  );
};
