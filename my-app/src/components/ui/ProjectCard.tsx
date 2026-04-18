import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rugged-border bg-slate-900/80 p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform group">
      <div className="flex justify-between items-start">
        <span className="font-mono text-[10px] text-abyssinian-gold uppercase tracking-tighter">
          TYPE: {project.type}
        </span>
        <span className={`font-mono text-[10px] px-2 border ${project.status === 'STABLE' ? 'border-green-500 text-green-500' : 'border-yellow-500 text-yellow-500'}`}>
          {project.status}
        </span>
      </div>

      <h3 className="font-pixel text-3xl text-white group-hover:text-abyssinian-gold transition-colors">
        {project.title}
      </h3>

      <p className="font-sans text-sm text-slate-400 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="bg-white/5 border border-white/10 px-2 py-1 font-mono text-[9px] text-slate-300">
            {t}
          </span>
        ))}
      </div>
      
      <button className="mt-4 border border-abyssinian-gold/30 hover:bg-abyssinian-gold hover:text-black font-pixel text-xs py-2 transition-all">
        OPEN_PROJECT_FILE
      </button>
    </div>
  );
}