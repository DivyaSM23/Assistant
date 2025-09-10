# 🌸 Collaborative Scheduler & Assistant  

A simple but cute **day-wise collaborative scheduler and task assistant**.  
It helps two people (or teams) organize their daily routines, track to-dos, and manage time slots — all stored with a lightweight backend.  

---

## ✨ Features  

- 📅 **Day-wise scheduling** — Create, view, and edit schedules per date  
- 🔄 **Default slots** — Reset button loads morning/evening routines automatically  
- ✅ **Task tracking** — Add, check, and store todos for each day  
- 🤝 **Collaborative use** — Designed for two people with shared + individual slots  
- 💾 **Persistent storage** — Data saved to JSON files in backend  
- 🎨 **Cute UI** — Built with TailwindCSS & React  

---

## 🏗️ Project Structure  

```
project-root/
│
├── backend/               # Express backend
│   ├── server.js          # API server (schedules & todos)
│   └── data/              # JSON files saved here
│
├── src/                   # React frontend
│   ├── components/        # UI Components
│   │   ├── CuteSchedule.jsx
│   │   ├── SlotList.jsx
│   │   ├── SlotEditor.jsx
│   │   └── TodoList.jsx
│   ├── config.js          # Global API base URL
│   └── index.css
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started  

### 1. Clone the repository  
```bash
git clone https://github.com/DivyaSM23/Assistant.git
cd project-root
```

### 2. Install dependencies  

#### Frontend  
```bash
npm install
```

#### Backend  
```bash
cd backend
npm install
```

---

### 3. Run locally  

#### Start backend  
```bash
cd backend
node server.js
```
Backend runs at:  
👉 `http://localhost:5000`

#### Start frontend  
```bash
npm run dev
```
Frontend runs at:  
👉 `http://localhost:5173`

---

## 📜 License  

MIT License. Free to use and modify.  
