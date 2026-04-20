import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rugged-border bg-slate-900/40 p-6 flex flex-col h-full hover:border-abyssinian-gold transition-all group">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[10px] text-abyssinian-gold uppercase tracking-widest">
          {project.type}
        </span>
        <span className={`text-[10px] font-pixel ${project.status === 'STABLE' ? 'text-green-500' : 'text-yellow-500'}`}>
          {project.status}
        </span>
      </div>

      <h3 className="font-pixel text-2xl mb-2 text-white group-hover:text-abyssinian-gold transition-colors">
        {project.title}
      </h3>

      <p className="font-sans text-sm text-slate-400 mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-[9px] font-mono border border-white/10 px-2 py-1 text-slate-500 uppercase">
            {t}
          </span>
        ))}
      </div>

      {/* THE ROUTE LINK */}
      <Link 
        href={`/forge/${project.id}`} 
        className="mt-auto font-pixel text-xs text-white border border-white/20 py-2 text-center hover:bg-white hover:text-black transition-all"
      >
        OPEN_PROJECT_FILE
      </Link>
    </div>
  );
}