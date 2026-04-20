export interface Project {
  id: string;
  title: string;
  type: string;
  tech: string[];
  description: string; // Short blurb for cards
  longDescription: string; // Extensive detail for dedicated page
  role: string;
  achievements: string[];
  status: "STABLE" | "IN_DEV" | "ARCHIVED";
  year: string;
}

export const projects: Project[] = [
  {
    id: "fraud-detect",
    title: "FRAUD_DETECTION_AI",
    type: "DATA_ENGINEERING",
    tech: ["Kafka", "Apache Spark", "HDFS", "Airflow"],
    role: "Big Data Engineer",
    year: "2026",
    description: "Production-scale Medallion pipeline handling high-volume transactional data with PII protection.",
    longDescription: "Collaborated with ML teams to design an end-to-end data pipeline. The architecture utilizes a layered data lake approach to ensure original data integrity while providing cleaned, standardized formats for downstream analytics.",
    achievements: [
      "Designed Bronze layer for raw, immutable data storage via Kafka streams.",
      "Implemented Silver layer transformation logic with PII masking and schema standardization.",
      "Built a 'Dead Letter' pipeline to isolate malformed data without disrupting main flows.",
      "Developed independent monitoring dashboards for real-time system health observability."
    ],
    status: "IN_DEV"
  },
  {
    id: "online-auction",
    title: "AUCTION_PRO_PLATFORM",
    type: "FULLSTACK_SYSTEM",
    tech: ["Node.js", "React", "JWT", "PostgreSQL"],
    role: "Team Leader / Full-Stack Developer",
    year: "2025",
    description: "Real-time bidding system built with feature-based architecture and secure JWT authentication.",
    longDescription: "Led a team of developers using a modular architecture. We managed independent feature branches for authentication, bidding, and payments, ensuring a seamless integration into a production-ready system.",
    achievements: [
      "Implemented real-time bidding logic with strict race-condition handling.",
      "Architected a feature-based branch workflow to allow parallel development of 5+ modules.",
      "Integrated secure payment processing and automated audit logging for transparency.",
      "Developed secure token-based authentication (JWT) with role-based access control."
    ],
    status: "STABLE"
  },
  {
    id: "church-manager",
    title: "CHURCH_MANAGEMENT_OS",
    type: "FULLSTACK_CMS",
    tech: ["React", "Express.js", "MySQL", "Bootstrap"],
    role: "Lead Developer",
    year: "2025",
    description: "Full-stack organizational platform supporting administrative operations and member engagement.",
    longDescription: "Designed a production-ready system for real-world stakeholders. The project bridged the gap between manual communication and digital efficiency for large organizations.",
    achievements: [
      "Built a multi-role responsive UI for Admins, Members, and Content Managers.",
      "Developed RESTful APIs for managing users, events, and automated announcements.",
      "Implemented role-based access control (RBAC) to protect sensitive organizational data.",
      "Optimized deployment for stability, ensuring reliable 24/7 uptime for users."
    ],
    status: "STABLE"
  },
  {
    id: "examlee",
    title: "EXAMLEE_HUB",
    type: "FULLSTACK_PLATFORM",
    tech: ["Next.js", "Node.js", "Figma", "Postman"],
    role: "Project Manager / Lead Designer",
    year: "2026",
    description: "Academic resource hub designed for high-speed retrieval and student collaboration.",
    longDescription: "A specialized platform created to solve resource fragmentation in academic settings, focusing on high-speed data retrieval and intuitive UI/UX.",
    achievements: [
      "Engineered comprehensive API documentation using Swagger/Postman.",
      "Designed high-fidelity Figma prototypes with complex user flows.",
      "Optimized frontend performance for high-speed resource retrieval."
    ],
    status: "STABLE"
  }
];