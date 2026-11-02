# 📚 NCTB Class 6 Textbooks & Chapters REST API
**জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) বাংলাদেশ — ষষ্ঠ শ্রেণির সকল পাঠ্যবই ও অধ্যায়ের পাবলিক রেস্ট এপিআই**

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Class: 6](https://img.shields.io/badge/Class-Grade%206-blue.svg)](#)
[![Total Books: 14](https://img.shields.io/badge/Books-14%20Textbooks-teal.svg)](#)
[![Total Chapters: 104](https://img.shields.io/badge/Chapters-104%20Chapters-indigo.svg)](#)

---

## 🌟 বৈশিষ্ট্যসমূহ (Features)
- 📖 **সকল ১৪টি পাঠ্যবই অন্তর্ভুক্ত**: বাংলা, ইংরেজি, গণিত, বিজ্ঞান (অনুসন্ধানী ও অনুশীলন), ইতিহাস ও সামাজিক বিজ্ঞান, ডিজিটাল প্রযুক্তি, জীবন ও জীবিকা, স্বাস্থ্য সুরক্ষা, শিল্প ও সংস্কৃতি, ইসলাম শিক্ষা, হিন্দুধর্ম শিক্ষা, বৌদ্ধধর্ম শিক্ষা, খ্রিস্টধর্ম শিক্ষা।
- 📑 **১০৪টি সম্পূর্ণ অধ্যায়**: প্রতিটি অধ্যায়ের বাংলা ও ইংরেজি নাম, সারসংক্ষেপ, আলোচ্য বিষয়সমূহ (Topics), এবং শিখনফল (Learning Outcomes)।
- ⚡ **Vercel Serverless Ready**: `vercel.json` এবং `api/index.ts` প্রস্তুত—গিটহাবে পুশ করে সরাসরি Vercel-এ ডিপ্লয়যোগ্য।
- 🌐 **CORS সাপোর্ট**: `Access-Control-Allow-Origin: *` এনাবল করা, ফলে যেকোনো React, Vue, Flutter, Next.js বা মোবাইল অ্যাপ থেকে সরাসরি কল করা যাবে।
- 🔍 **সার্বজনীন সার্চ এপিআই**: বাংলা এবং ইংরেজি যেকোনো কিওয়ার্ড দিয়ে বই এবং অধ্যায় সার্চ করা যায়।

---

## 🚀 এপিআই এন্ডপয়েন্টস (API Endpoints)

| Method | Endpoint | বিবরণ (Description) |
| :--- | :--- | :--- |
| `GET` | `/api/v1/classes` | সকল শ্রেণির মেটাডাটা ও তথ্য |
| `GET` | `/api/v1/class-6` | ষষ্ঠ শ্রেণির সার্বিক তথ্য ও বইসমূহের তালিকা |
| `GET` | `/api/v1/class-6/books` | সকল ১৪টি পাঠ্যবই ও অধ্যায় (`?category=...&compact=true`) |
| `GET` | `/api/v1/class-6/books/:bookId` | নির্দিষ্ট বইয়ের সম্পূর্ণ তথ্য (যেমন: `bangla`, `math`) |
| `GET` | `/api/v1/class-6/books/:bookId/chapters` | নির্দিষ্ট বইয়ের অধ্যায়সমূহের তালিকা |
| `GET` | `/api/v1/class-6/books/:bookId/chapters/:no` | নির্দিষ্ট অধ্যায়ের বিস্তারিত শিখনফল ও টপিক |
| `GET` | `/api/v1/class-6/chapters` | সকল বইয়ের ১০৪টি অধ্যায়ের ফ্ল্যাট তালিকা (`?category=&search=`) |
| `GET` | `/api/v1/search?q={query}` | সম্পূর্ণ ডাটাবেজে ফুল-টেক্সট সার্চ এপিআই |
| `GET` | `/api/v1/export/class-6.json` | সম্পূর্ণ ডাটাবেজ এক ক্লিকে JSON ফরম্যাটে ডাউনলোড |

---

## 💻 ব্যবহারের উদাহরণ (Usage Examples)

### cURL
```bash
curl -X GET "https://your-domain.vercel.app/api/v1/class-6/books" \
  -H "Accept: application/json"
```

### JavaScript / TypeScript (Fetch)
```javascript
fetch('https://your-domain.vercel.app/api/v1/class-6/books/math')
  .then(res => res.json())
  .then(data => {
    console.log('গণিত বইয়ের অধ্যায়সমূহ:', data.data.chapters);
  });
```

### Python (Requests)
```python
import requests

response = requests.get('https://your-domain.vercel.app/api/v1/class-6/books/bangla')
data = response.json()
print("বইয়ের নাম:", data['data']['title_bn'])
for ch in data['data']['chapters']:
    print(f"অধ্যায় {ch['chapter_no']}: {ch['title_bn']}")
```

---

## 🛠️ GitHub-এ পুশ ও Vercel-এ ডিপ্লয় নির্দেশিকা

### ১. গিটহাবে পুশ করুন:
```bash
git init
git add .
git commit -m "feat: NCTB Class 6 All Books and Chapters API"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/class-6-nctb-api.git
git push -u origin main
```

### ২. Vercel-এ ডিপ্লয় করুন:
1. [vercel.com/new](https://vercel.com/new) এ যান।
2. আপনার GitHub রিপোজিটরি নির্বাচন করে **Import** করুন।
3. **Deploy** বাটনে ক্লিক করুন! (কোনো বাড়তি কনফিগারেশন লাগবে না)।
