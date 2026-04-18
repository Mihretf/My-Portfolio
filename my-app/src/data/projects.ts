export interface Project {
  id: string;
  title: string;
  type: string; // e.g., "BACKEND_SYSTEM", "FULLSTACK_APP"
  tech: string[];
  description: string;
  status: "STABLE" | "IN_DEV" | "ARCHIVED";
}

export const projects: Project[] = [
  {
    id: "fraud-detect",
    title: "FRAUD_DETECTION_AI",
    type: "DATA_ENGINEERING",
    tech: ["Spark", "Kafka", "Hadoop"],
    description: "Real-time transaction monitoring using Medallion Architecture (Bronze/Silver/Gold).",
    status: "IN_DEV"
  },
  {
    id: "examlee",
    title: "EXAMLEE_HUB",
    type: "FULLSTACK_PLATFORM",
    tech: ["Next.js", "Node.js", "Figma"],
    description: "Academic resource hub for students. Designed for scale and high-speed retrieval.",
    status: "STABLE"
  }
];