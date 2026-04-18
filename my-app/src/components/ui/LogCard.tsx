import Link from 'next/link';

interface LogCardProps {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

export default function LogCard({ id, title, date, tags }: LogCardProps) {
  return (
    <Link href={`/logs/${id}`} className="group block">
      <div className="rugged-border border-slate-800 bg-slate-900/40 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-abyssinian-gold hover:bg-abyssinian-gold/5 transition-all">
        <div className="flex flex-col gap-1">
          {/* Metadata */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              ENTRY_ID: {id.slice(0, 8)}
            </span>
            <span className="font-mono text-[10px] text-abyssinian-gold italic">
              // {date}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-pixel text-2xl text-white group-hover:text-abyssinian-gold transition-colors">
            {title}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 md:mt-0">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="text-[9px] font-mono border border-white/10 px-2 py-1 text-slate-400 uppercase group-hover:border-abyssinian-gold/30"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}