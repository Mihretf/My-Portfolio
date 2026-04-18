import { getSortedLogsData } from '@/lib/logs';
import LogCard from '@/components/ui/LogCard';
import Link from 'next/link';

export default function LogsPage() {
  const allLogsData = getSortedLogsData();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-slate-800 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-pixel text-3xl text-abyssinian-gold">LOGS - 03</h1>
          <Link href="/" className="font-mono text-sm text-slate-400 hover:text-abyssinian-gold transition-colors">
            [BACK_TO_ROOT]
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allLogsData.map((log) => (
            <LogCard
              key={log.id}
              id={log.id}
              title={log.title}
              date={log.date}
              tags={log.tags || []}
            />
          ))}
        </div>
      </main>
    </div>
  );
}