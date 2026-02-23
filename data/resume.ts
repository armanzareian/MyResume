export const personalInfo = {
  name: "Arman Zareian",
  email: "armanzareian.az@gmail.com",
  phone: "(785) 323-0779",
  location: "Manhattan, KS, 66502",
  github: "https://github.com/armanzareian",
  linkedin: "https://www.linkedin.com/in/arman-zareian",
  scholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=d2_uHBcAAAAJ",
};

export const summary =
  "Machine Learning Engineer, Data Scientist, and Full Stack Developer with 5+ years of experience building scalable ML and data systems across industry and academia. Deep expertise in privacy-preserving diffusion models, Large Language Models (LLMs), multi-agent architectures, GANs, and vision transformers. Graduate research focused on differential privacy for generative AI, multi-agent LLM inference, and privacy-utility optimization in Stable Diffusion variants. Proven track record in latency optimization, large-scale model deployment, identity obfuscation techniques, and end-to-end ML pipelines. Published in Artificial Intelligence Review (Q1, 70+ citations).";

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 70, suffix: "+", label: "Citations" },
  { value: 99.9, suffix: "%", label: "Service Uptime" },
  { value: 40, suffix: "%", label: "Latency Cut" },
];

export interface SkillCategory {
  category: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Machine Learning",
    color: "#00f5ff",
    skills: [
      "PyTorch",
      "Keras",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Vision Transformers",
      "GANs",
      "Diffusion Models",
    ],
  },
  {
    category: "Backend / APIs",
    color: "#7c3aed",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Next.js",
      "PHP (Laravel)",
      "REST APIs",
    ],
  },
  {
    category: "Data / MLOps / Cloud",
    color: "#10b981",
    skills: [
      "Docker",
      "Git",
      "CI/CD",
      "Airflow",
      "RabbitMQ",
      "AWS",
      "GCP",
      "Azure",
      "Data Pipelines",
      "Model Deployment",
    ],
  },
  {
    category: "Databases",
    color: "#f59e0b",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Visualization",
    color: "#ec4899",
    skills: ["Matplotlib", "Seaborn", "Plotly"],
  },
  {
    category: "Automation",
    color: "#06b6d4",
    skills: ["Selenium", "Scrapy"],
  },
  {
    category: "Systems / Hardware",
    color: "#84cc16",
    skills: ["Linux", "macOS", "Windows", "ESP32", "UART", "IoT"],
  },
  {
    category: "Other",
    color: "#f97316",
    skills: ["MATLAB", "R", "IPFS", "Leadership", "Communication"],
  },
];

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  accent: string;
}

export const workExperience: WorkExperience[] = [
  {
    company: "Kansas State University",
    role: "Graduate Research & Teaching Assistant",
    period: "Dec 2024 – Present",
    accent: "#00f5ff",
    bullets: [
      "Designed and implemented an IoT-to-web communication pipeline between ESP32-based devices and a Django backend",
      "Developed UART-based data protocols and REST APIs for real-time logging, monitoring, and scalable log visualization",
      "Built backend architecture ensuring reliability & data integrity across the embedded-to-web stack",
      "Led labs on pipelining, memory hierarchy, and MIPS programming; mentored Agile student teams",
    ],
  },
  {
    company: "Pattern",
    role: "Senior Back-End Developer",
    period: "Jan 2024 – Dec 2024",
    accent: "#7c3aed",
    bullets: [
      "Led development of FaceDancer (cross-platform identity sync), cutting identity management time by 40%",
      "Integrated Ergo & Cardano smart contracts into Hummingbot, enabling DeFi automation",
      "Deployed high-availability services with Docker/RabbitMQ/IPFS; achieved 99.9% uptime; cut request latency 30%",
      "Built LLM-powered Google Sheets analytics add-on; reduced reporting effort 50%",
    ],
  },
  {
    company: "Westview",
    role: "Full-Stack Developer",
    period: "Jan 2024 – Mar 2024",
    accent: "#10b981",
    bullets: [
      "Built Django admin for inventory; cut stock discrepancies by 30%",
      "Developed ML demand forecasting; reduced waste 20%",
      "Automated order tracking; lowered errors 60%; enabled 5 new B2B clients",
    ],
  },
  {
    company: "Ergo Foundation",
    role: "Full-Stack Developer",
    period: "Dec 2021 – Jan 2024",
    accent: "#f59e0b",
    bullets: [
      "Tripled ErgoAuctionHouse throughput; improved UX significantly",
      "Built React front-ends & blockchain wallets; reduced checkout time 40%",
      "Implemented IPFS thumbnail caching; cut load time 60%",
    ],
  },
];

export interface ResearchProject {
  institution: string;
  title: string;
  period: string;
  accent: string;
  bullets: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    institution: "Kansas State University",
    title: "Multi-Agent Sentiment Analysis with Large Language Models",
    period: "Sep 2025 – Present",
    accent: "#00f5ff",
    bullets: [
      "Developing multi-agent architectures using LLMs for stance detection and sentiment classification",
      "Implementing comparative analysis of large language models for contextual understanding",
      "Analyzing sentiment-target relationships in structured datasets to improve classification accuracy",
    ],
  },
  {
    institution: "Kansas State University",
    title: "Privacy-Preserving Diffusion Models",
    period: "Sep 2025 – Present",
    accent: "#7c3aed",
    bullets: [
      "Designing noise-injection and latent-space perturbation techniques for secure generative image models",
      "Evaluating privacy-utility trade-offs in Stable Diffusion variants using CelebA and other datasets",
      "Developing statistical metrics for identity obfuscation and DP compliance",
    ],
  },
  {
    institution: "Isfahan University of Technology",
    title: "Non-Regret Learning for Multi-Generative GANs",
    period: "Oct 2020 – Jan 2025",
    accent: "#10b981",
    bullets: [
      "Applied game-theoretic learning to stabilize GAN training; improved classification robustness",
      "Published: Games of GANs — Artificial Intelligence Review (Q1, IF 15.5, 70+ citations)",
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  note: string;
  accent: string;
}

export const education: Education[] = [
  {
    institution: "Kansas State University",
    degree: "PhD in Computer Science (Direct-PhD)",
    period: "Dec 2024 – Present",
    gpa: "4.0 / 4.0",
    note: "",
    accent: "#00f5ff",
  },
  {
    institution: "Kansas State University",
    degree: "M.S. in Computer Science",
    period: "Dec 2024 – May 2026",
    gpa: "4.0 / 4.0",
    note: "",
    accent: "#7c3aed",
  },
  {
    institution: "Isfahan University of Technology",
    degree: "B.S. in Artificial Intelligence & Robotics",
    period: "2017 – 2022",
    gpa: "3.98 / 4.0",
    note: "Top 7% among 83 students",
    accent: "#10b981",
  },
  {
    institution: "Isfahan University of Technology",
    degree: "B.S. in Applied Mathematics (Second Major)",
    period: "2019 – 2022",
    gpa: "3.98 / 4.0",
    note: "Top 5% among 60 students",
    accent: "#f59e0b",
  },
];

export const publications = [
  {
    type: "journal",
    authors: "M. Moghaddam, A. Zareian, et al.",
    title:
      'Games of GANs: Game-Theoretical Models for Generative Adversarial Networks',
    venue: "Artificial Intelligence Review",
    details: "Volume 56, pages 9771–9807, 2023",
    impact: "Impact Factor: 13.9 | Q1 | 70+ citations",
    links: [
      {
        label: "Springer",
        url: "https://link.springer.com/article/10.1007/s10462-023-10395-6",
      },
    ],
    accent: "#00f5ff",
  },
  {
    type: "manuscript",
    authors: "A. Zareian et al.",
    title:
      "SMART-D: Structured Multi-Agent Reasoning with Dynamic Worker Allocation for Target-Aware Stance Detection",
    venue: "Ready to submit to EMNLP 2026",
    details: "",
    impact: "",
    links: [],
    accent: "#7c3aed",
  },
  {
    type: "manuscript",
    authors: "A. Zareian et al.",
    title:
      "Privacy-Preserving Diffusion Models via Latent-Space Perturbation",
    venue: "In preparation for USENIX Security 2026",
    details: "",
    impact: "",
    links: [],
    accent: "#10b981",
  },
];

export const awards = [
  {
    title: "Competitive Entrepreneurship Award",
    event: "MANGT 840: Advanced Entrepreneurship, Fall 2025",
    accent: "#f59e0b",
  },
];

export const peerReviews = [
  { venue: "IEEE Signal Processing Letters", date: "Apr 2025" },
  { venue: "IEEE Signal Processing Letters", date: "Jan 2025" },
];
