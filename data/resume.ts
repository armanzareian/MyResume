import citations from "./citations.json";

/**
 * Citation count for the Games of GANs paper. The number lives in
 * citations.json so the deploy workflow can refresh it from Google Scholar
 * at build time (see scripts/update-citations.mjs); this value is the
 * committed fallback.
 */
export const citationCount = citations.count;

export const personalInfo = {
  name: "Arman Zareian",
  email: "armanzareian.az@gmail.com",
  phone: "(785) 323-0779",
  location: "Manhattan, KS, 66502",
  github: "https://github.com/armanzareian",
  linkedin: "https://www.linkedin.com/in/arman-zareian",
  scholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=d2_uHBcAAAAJ",
};

export const summary = `Machine Learning Engineer, Data Scientist, and Full Stack Developer with 5+ years of experience building scalable ML and data systems across industry and academia. Deep expertise in privacy-preserving diffusion models, Large Language Models (LLMs), multi-agent architectures, GANs, and vision transformers. Graduate research focused on differential privacy for generative AI, multi-agent LLM inference, and privacy-utility optimization in Stable Diffusion variants. Proven track record in latency optimization, large-scale model deployment, identity obfuscation techniques, and end-to-end ML pipelines. Published in Artificial Intelligence Review (Q1, ${citationCount}+ citations).`;

export const researchInterests = [
  "Machine Learning",
  "Multi-Agent Systems with LLMs",
  "Generative Models",
  "Privacy-Preserving AI",
  "Game Theory",
];

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: citationCount, suffix: "+", label: "Citations" },
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
    category: "LLM / Agents",
    color: "#ec4899",
    skills: [
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "Tool Calling",
      "Model Context Protocol (MCP)",
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
    category: "Visualization / Automation",
    color: "#06b6d4",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Selenium", "Scrapy"],
  },
  {
    category: "Systems / Hardware",
    color: "#84cc16",
    skills: ["Linux", "macOS", "Windows", "ESP32", "UART", "Device-to-Cloud Integration"],
  },
  {
    category: "Other",
    color: "#f97316",
    skills: ["MATLAB", "R", "IPFS", "Team Leadership", "Communication"],
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
    company: "Nexlife Inc.",
    role: "AI/ML Software Intern",
    period: "May 2026 – Aug 2026",
    accent: "#ec4899",
    bullets: [
      "Developed and tested AI/ML-powered software applications in a production environment",
      "Worked on ML pipeline development, LLM integration, and backend engineering",
      "Supported real-world software solutions through debugging, testing, and feature development",
    ],
  },
  {
    company: "Kansas State University",
    role: "Graduate Research & Teaching Assistant",
    period: "Dec 2024 – Present",
    accent: "#00f5ff",
    bullets: [
      "Designed and implemented an IoT-to-web communication pipeline between ESP32-based devices and a Django backend",
      "Developed UART-based data protocols and REST APIs for real-time logging, monitoring, and scalable log visualization",
      "Built backend architecture ensuring reliability & data integrity across the embedded-to-web stack",
      "Collaborated with hardware researchers on backend, networking, and system integration",
      "Led labs on pipelining, memory hierarchy, and MIPS programming; graded assignments",
      "Mentored Agile student teams on workflows, code quality, and project development",
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
    period: "Nov 2023 – Dec 2024",
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
    title: "Multi-Agent Reasoning and Stance Detection with Large Language Models",
    period: "Sep 2025 – Present",
    accent: "#00f5ff",
    bullets: [
      "Developing multi-agent LLM architectures for target-aware stance detection and contextual reasoning",
      "Designing adaptive worker-allocation strategies to improve reasoning efficiency and classification performance",
      "Developing modular prompt-optimization methods for robust stance detection across diverse targets",
      "Conducting comparative evaluations of LLM reasoning, aggregation, and prompt-optimization strategies",
    ],
  },
  {
    institution: "Kansas State University",
    title: "Privacy Auditing and Privacy-Preserving Generative Models",
    period: "Sep 2025 – Present",
    accent: "#7c3aed",
    bullets: [
      "Developing statistical methods for measuring identity leakage and privacy guarantees in generative image models",
      "Designing and evaluating identity-level privacy audits for diffusion models and face-swapping anonymization systems",
      "Investigating noise injection, latent-space perturbation, and privacy–utility trade-offs across image-generation settings",
      "Extending privacy-preserving learning methods to scarce medical-video data",
    ],
  },
  {
    institution: "Kansas State University",
    title: "Multimodal Facial Representation Learning",
    period: "Sep 2025 – Present",
    accent: "#ec4899",
    bullets: [
      "Developing multi-representation facial feature-fusion methods for cross-domain affect and distress recognition",
      "Evaluating representation robustness under domain shifts and limited-data settings",
    ],
  },
  {
    institution: "Isfahan University of Technology",
    title: "Non-Regret Learning for Multi-Generative GANs",
    period: "Oct 2020 – Jan 2025",
    accent: "#10b981",
    bullets: [
      "Applied game-theoretic learning to stabilize GAN training; improved classification robustness",
      `Published: Games of GANs — Artificial Intelligence Review (Q1, IF 15.5, ${citationCount}+ citations)`,
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
    period: "Dec 2024 – Aug 2026",
    gpa: "4.0 / 4.0",
    note: "",
    accent: "#7c3aed",
  },
  {
    institution: "Isfahan University of Technology",
    degree: "B.S. in Artificial Intelligence & Robotics",
    period: "2017 – 2022",
    gpa: "3.98 / 4.0",
    note: "Top 5 students",
    accent: "#10b981",
  },
  {
    institution: "Isfahan University of Technology",
    degree: "B.S. in Applied Mathematics (Second Major)",
    period: "2019 – 2022",
    gpa: "3.98 / 4.0",
    note: "Top 5 students",
    accent: "#f59e0b",
  },
];

/**
 * Publication types drive the badge/label in PublicationsSection:
 *  - "journal"    → published journal article
 *  - "review"     → submitted and under review at a venue
 *  - "manuscript" → preprint / manuscript being prepared for submission
 */
export type PublicationType = "journal" | "review" | "manuscript";

export interface Publication {
  type: PublicationType;
  authors: string;
  title: string;
  venue: string;
  details: string;
  impact: string;
  links: { label: string; url: string }[];
  accent: string;
}

export const publications: Publication[] = [
  {
    type: "journal",
    authors: "M. Moghaddam, A. Zareian, et al.",
    title:
      "Games of GANs: Game-Theoretical Models for Generative Adversarial Networks",
    venue: "Artificial Intelligence Review",
    details: "Volume 56, pages 9771–9807, 2023",
    impact: `Impact Factor: 13.9 | Q1 | ${citationCount}+ citations`,
    links: [
      {
        label: "Springer",
        url: "https://link.springer.com/article/10.1007/s10462-023-10395-6",
      },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=d2_uHBcAAAAJ&citation_for_view=d2_uHBcAAAAJ:u-x6o8ySG0sC",
      },
    ],
    accent: "#00f5ff",
  },
  {
    type: "review",
    authors: "V. Bondalakunta, A. Zareian, et al.",
    title:
      "Toward Interpretable Privacy Guarantees in Face-Swapping Anonymization",
    venue: "IEEE Symposium on Security and Privacy",
    details: "arXiv:2608.25750",
    impact: "",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2608.25750" }],
    accent: "#f59e0b",
  },
  {
    type: "review",
    authors: "M. A. B. Shah, A. Zareian, et al.",
    title:
      "Multi-Representation Facial Feature Fusion for Cross-Domain Infant Distress Recognition",
    venue: "ICTAI 2026",
    details: "",
    impact: "",
    links: [],
    accent: "#ec4899",
  },
  {
    type: "review",
    authors: "V. Bondalakunta, A. Zareian, et al.",
    title:
      "A Privacy-Preserving Framework for Sharing and Learning from Scarce Medical Video",
    venue: "HealthSec'26 · Cybersecurity in Healthcare Workshop",
    details: "Poster paper",
    impact: "",
    links: [],
    accent: "#06b6d4",
  },
  {
    type: "manuscript",
    authors: "A. Zareian, et al.",
    title:
      "Picture the Epsilon: Pursuing Identity-Level Privacy Guarantees for Images",
    venue: "Preparing for PoPETs",
    details: "arXiv:2608.17147",
    impact: "",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2608.17147" }],
    accent: "#10b981",
  },
  {
    type: "manuscript",
    authors: "M. Sabbaghan, A. Zareian, et al.",
    title:
      "Multi-Agent Reasoning with Adaptive Worker Allocation for Stance Detection",
    venue: "Preparing for NAACL",
    details: "arXiv:2606.11609",
    impact: "",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2606.11609" }],
    accent: "#7c3aed",
  },
  {
    type: "manuscript",
    authors: "A. Zareian, et al.",
    title: "MoPrO-SD: Modular Prompt Optimization for Stance Detection",
    venue: "Preparing for NAACL",
    details: "",
    impact: "",
    links: [],
    accent: "#84cc16",
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

export interface Certification {
  issuer: string;
  title: string;
  date: string;
  /** Public verification page (Skilljar for Anthropic Academy courses). */
  url?: string;
}

export const certifications: Certification[] = [
  {
    issuer: "Anthropic",
    title: "Introduction to Subagents",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/j9wz76gk9ubc",
  },
  {
    issuer: "Anthropic",
    title: "Introduction to Agent Skills",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/riedf2h6omup",
  },
  {
    issuer: "Anthropic",
    title: "Model Context Protocol: Advanced Topics",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/o9hgkv9b2nhb",
  },
  {
    issuer: "Anthropic",
    title: "Introduction to Model Context Protocol",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/xz3rwz2ixdgv",
  },
  {
    issuer: "Anthropic",
    title: "Building with the Claude API",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/cbcvnbpcuwe4",
  },
  { issuer: "Hugging Face", title: "LLM Agents", date: "May 2025" },
];
