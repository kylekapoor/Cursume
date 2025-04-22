# ⚡️ Cursume — Cursor for Resumes

**The first AI-powered resume workspace that evolves with you.**

Cursume is your personal AI career assistant — you upload your resume once, and from that point forward, you never have to fight with formatting, rewriting, or starting from scratch again. Just say what you need:

> 🗣️ “Add my Shopify backend internship.”  
> ✍️ “Rewrite this bullet to be more outcome-driven.”  
> 🔍 “Tailor this resume for a Google SWE internship.”

Cursume gets it. It updates the actual resume structure, saves version history, integrates real-time collaboration, and supports export to PDF, DOCX, and LaTeX.

---

## ✨ Why It’s Different

- 🧠 **Conversational Editing**  
  Edit resumes by typing or speaking your prompts. Powered by OpenAI GPT + Whisper.

- 🖋 **Live AI Rewrite Suggestions**  
  Select any bullet → get a tailored rewrite → accept/reject instantly, in place.

- 🔗 **Smart Portfolio Integration**  
  Automatically scrape and import your highlights from LinkedIn, GitHub, Medium, and your portfolio site.

- 🎯 **Job-Aware Tailoring**  
  Paste a job link (LinkedIn, company site) → Cursume tailors your resume in seconds.

- 📤 **Multi-format Export + Versioning**  
  Export to Word, PDF, or Overleaf-ready LaTeX. Save tailored versions per job.

- 📊 **AI Resume Score**  
  Get a breakdown of your resume's strength, clarity, and alignment with your target job — all scored out of 100.

---

## 🛠 Tech Stack

- **Frontend**: Next.js · TypeScript · TailwindCSS · TipTap  
- **Auth**: Clerk  
- **Storage**: Supabase  
- **AI**: OpenAI GPT-4 & Whisper  
- **Backend Enhancements**: Python microservices (resume parsing, scoring, NLP)

---

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/cursume.git
cd cursume
npm install
npm run dev
