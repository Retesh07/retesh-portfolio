// ============================================================
// Resume Data — All content extracted from Retesh G.S's resume
// ============================================================

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Project {
  number: string;
  category: string;
  title: string;
  tech: string;
  description: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
}

export interface ContactItem {
  icon: "email" | "phone" | "linkedin" | "github" | "leetcode";
  label: string;
  value: string;
  href: string;
}

// ── Personal Info ──────────────────────────────────────────────
export const personalInfo = {
  name: "RETESH G.S",
  firstName: "RETESH",
  lastName: "G.S",
  role: "COMPUTER SCIENCE STUDENT · FULL-STACK DEVELOPER · TECH ENTHUSIAST",
  email: "reteshgs2005@gmail.com",
  phone: "+91-7975459789",
  location: "Bengaluru, Karnataka, India",
  github: "github.com/Retesh07",
  githubUrl: "https://github.com/Retesh07",
  linkedin: "linkedin.com/in/retesh-g-s",
  linkedinUrl: "https://linkedin.com/in/retesh-g-s",
  leetcode: "leetcode.com/u/reteshgs2005",
  leetcodeUrl: "https://leetcode.com/u/reteshgs2005/",
  portfolioYear: "2026",
};

// ── About / Bio ────────────────────────────────────────────────
export const aboutBio =
  "I'm a Computer Science student at PES University, Bengaluru, with a strong interest in AI-powered applications, backend engineering, and scalable systems. My work includes Agentic RAG platforms, LLM-based applications, distributed systems, and full-stack development. As a 4× CNR Rao Merit Scholar and 1st-place Ideathon winner, I enjoy building practical solutions that combine innovation, performance, and real-world impact.";

// ── Education ──────────────────────────────────────────────────
export const education = {
  institution: "PES University",
  degree: "Bachelor of Technology in Computer Science",
  cgpa: "8.53 / 10.0",
  duration: "Aug 2023 – May 2027",
  location: "Bengaluru, India",
  highlights: [
    "4× CNR Rao Merit Scholarship recipient for maintaining top 25% academic standing",
  ],
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Management Systems",
    "Machine Learning",
    "Computer Networks",
  ],
};

// ── Skills (categorized pills) ────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    label: "PROGRAMMING LANGUAGES",
    skills: ["C", "Python", "JavaScript", "Verilog", "LeetCode (DSA)"],
  },
  {
    label: "WEB TECHNOLOGIES",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "BullMQ",
      "Redis",
      "Flask",
      "FastAPI",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    label: "AI / ML",
    skills: [
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Groq LLM",
      "Prompt Engineering",
      "HuggingFace Embeddings",
      "RAGAS",
      "LangSmith",
      "YOLOv8",
      "BiLSTM",
      "TensorFlow",
    ],
  },
  {
    label: "CLOUD & DEVOPS",
    skills: ["Vercel", "Render", "Git", "GitHub", "Linux"],
  },
];

// ── Expertise (replaces "Services" from reference) ─────────────
export const expertiseItems: ExpertiseItem[] = [
  {
    number: "01",
    title: "FULL-STACK WEB DEVELOPMENT",
    description:
      "Building end-to-end web applications with the MERN stack — from RESTful APIs and database schemas to responsive React frontends with smooth state management and user authentication.",
  },
  {
    number: "02",
    title: "MACHINE LEARNING & AI",
    description:
      "Developing classification and NLP pipelines using TensorFlow and Python — from text preprocessing and feature engineering to training deep learning models with 95%+ accuracy.",
  },
  {
    number: "03",
    title: "DISTRIBUTED SYSTEMS & NETWORKING",
    description:
      "Designing chunk-based distributed storage, heartbeat monitoring, and encrypted tunnels using Python sockets, multi-threading, and SSL/TLS protocols.",
  },
  {
    number: "04",
    title: "EMBEDDED SYSTEMS & IoT",
    description:
      "Prototyping hardware solutions with Arduino and Raspberry Pi — integrating IR, ultrasonic, and weight sensors with optimized motor control logic.",
  },
  {
    number: "05",
    title: "CLOUD & DEVOPS",
    description:
      "Deploying and managing applications with Firebase, Vercel, and Git workflows — ensuring reliable CI/CD pipelines and seamless production environments.",
  },
];

// ── Projects ───────────────────────────────────────────────────
export const projects: Project[] = [
  {
    number: "01",
    category: "AI / AGENTIC RAG SYSTEM",
    title: "DOCMIND AI",
    tech: "LangGraph, ChromaDB, Groq LLM (Llama 3.3), RAGAS, LangSmith, Streamlit",
    description: [
      "Engineered an Agentic RAG platform for intelligent document QA, featuring PDF ingestion, chunk vectorization, and LLM-powered context synthesis",
      "Architected a stateful LangGraph workflow integrating automated document grading, query rewriting, and hallucination detection to maximize answer precision",
      "Leveraged ChromaDB vector store with HuggingFace embeddings for high-speed, relevant semantic document retrieval",
      "Evaluated system performance using RAGAS retrieval metrics and configured LangSmith tracing for end-to-end LLM execution monitoring",
    ],
    githubUrl: "https://github.com/Retesh07/DocMind-AI",
    liveUrl: "https://retesh-doc-mind-ai.hf.space/",
  },
  {
    number: "02",
    category: "AI / FULL-STACK PLATFORM",
    title: "YATRAI",
    tech: "React 18, Node.js, Express, Groq AI (Llama 3.3 70B), MongoDB, Socket.io, BullMQ, Redis",
    description: [
      "Built an AI travel planner for Indian travelers with an interactive 7-step wizard delivering customized day-by-day itineraries, hotel suggestions, and ₹ INR cost breakdowns",
      "Integrated Groq AI (Llama 3.3 70B) using structured JSON output prompts with robust automated fallback plan generation",
      "Designed an asynchronous background queue with BullMQ + Redis for community trip sharing and automated notification dispatching",
      "Implemented real-time WebSockets via Socket.io to push instant notification alerts and live trip feeds without refreshing",
      "Embedded date-aware live weather forecasting via Open-Meteo API alongside interactive OpenStreetMap & Leaflet route visualizers",
    ],
    githubUrl: "https://github.com/Retesh07/YatrAI",
    liveUrl: "https://yatr-ai-brown.vercel.app",
  },
  {
    number: "03",
    category: "AI / DATABASE ANALYTICS",
    title: "AI SQL ASSISTANT",
    tech: "Python, FastAPI, Groq LLM (Llama 3.3), SQLite, MySQL, JavaScript",
    description: [
      "Developed a Natural Language-to-SQL platform translating plain English prompts into executable database queries across SQLite and MySQL engines",
      "Built a schema-aware query generation pipeline with input relevance verification, syntax validation, and execution safety rules",
      "Designed a responsive analytics dashboard providing interactive schema exploration, query explanations, data charts, and CSV exports",
      "Connected Large Language Models via Groq API to FastAPI microservices for rapid query generation and automated business insights",
    ],
    githubUrl: "https://github.com/Retesh07/AI-SQL-Assistant",
    liveUrl: "https://ai-sql-assistant-93qc.onrender.com/app",
  },
  {
    number: "04",
    category: "DISTRIBUTED SYSTEMS",
    title: "MINI HDFS SIMULATION",
    tech: "Python, Network Sockets, Flask, Multi-threading",
    description: [
      "Engineered a distributed file system simulation utilizing chunk-level file splitting and automatic 2× data replication across storage nodes",
      "Implemented real-time heartbeat monitoring to continuously check node health and trigger immediate data re-replication upon failure",
      "Built an interactive Flask monitoring dashboard visualizing active node statuses, chunk distribution, and cluster health metrics",
      "Optimized concurrent client request handling using Python multi-threading for seamless multi-file uploads and retrieval operations",
    ],
    githubUrl: "https://github.com/Retesh07/Mini-HDFS-Simulation-Exploring-Distributed-Data-Storage",
    liveUrl: "https://github.com/Retesh07/Mini-HDFS-Simulation-Exploring-Distributed-Data-Storage",
  },
];

// ── Achievements ───────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    icon: "🏆",
    title: "PES Triverse Ideathon — 1st Place",
    description:
      "Won first place in a university-wide ideathon conducted in collaboration with HCLTech; awarded a ₹50,000 cash prize for innovative problem-solving and teamwork.",
  },
  {
    icon: "🎓",
    title: "CNR Rao Merit Scholarship (4×)",
    description:
      "Awarded for academic excellence by ranking consistently in the top 25% of the batch across four semesters; received a total scholarship of ₹25,600 with certificates of merit.",
  },
  {
    icon: "⚡",
    title: "Problem Solving & DSA — LeetCode",
    description:
      "Active problem solver on LeetCode (@reteshgs2005) focusing on Data Structures, Algorithms, Graph theory, Dynamic Programming, and spatial/time complexity optimization.",
    link: "https://leetcode.com/u/reteshgs2005/",
  },
];

// ── Contact ────────────────────────────────────────────────────
export const contactItems: ContactItem[] = [
  {
    icon: "email",
    label: "EMAIL",
    value: "reteshgs2005@gmail.com",
    href: "mailto:reteshgs2005@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LINKEDIN",
    value: "in/retesh-g-s",
    href: "https://linkedin.com/in/retesh-g-s",
  },
  {
    icon: "github",
    label: "GITHUB",
    value: "@Retesh07",
    href: "https://github.com/Retesh07",
  },
];

// ── Nav Links ──────────────────────────────────────────────────
export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];
