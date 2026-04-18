import { getAllLogIds, getLogData } from '@/lib/logs';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllLogIds();
  return paths;
}

interface LogPageProps {
  params: Promise<{ id: string }>;
}

export default async function LogPage({ params }: LogPageProps) {
  const { id } = await params;
  
  let logData;
  try {
    logData = await getLogData(id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-slate-800 p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-pixel text-2xl text-abyssinian-gold mb-1">{logData.title}</h1>
            <p className="font-mono text-sm text-slate-400">{logData.date}</p>
          </div>
          <Link href="/logs" className="font-mono text-sm text-slate-400 hover:text-abyssinian-gold transition-colors">
            [BACK_TO_LOGS]
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: logData.contentHtml }} />
        </div>
      </main>
    </div>
  );
}