import { getSortedLogsData } from '@/lib/logs';
import LogCard from '@/components/ui/LogCard';
import Link from 'next/link';

export default function LogsPage() {
  const allLogs = getSortedLogsData();

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black -z-10" />

      {/* Header Section */}
      <header className="mb-16 flex justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h2 className="font-pixel text-abyssinian-gold text-lg mb-2 underline">LEVEL_03</h2>
          <h1 className="font-pixel text-6xl uppercase">The_Library</h1>
          <p className="font-mono text-[10px] text-slate-500 mt-2 tracking-widest">
            ARCHIVE_TOTAL: {allLogs.length} ENTRIES_FOUND
          </p>
        </div>
      </header>

      {/* The Logs List */}
      <div className="max-w-5xl flex flex-col gap-4">
        {allLogs.length > 0 ? (
          allLogs.map((log) => (
            <LogCard key={log.id} {...log} />
          ))
        ) : (
          <div className="rugged-border border-dashed border-white/5 p-12 text-center opacity-30">
            <span className="font-pixel text-slate-500">NO_RECORDS_FOUND_IN_THIS_SECTOR</span>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <footer className="mt-24 font-mono text-[10px] text-slate-700 uppercase tracking-[0.3em]">
        LOG_PROTOCOL: MARKDOWN_PARSER_ACTIVE
      </footer>
    </main>
  );
}