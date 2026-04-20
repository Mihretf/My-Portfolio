import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-abyssinian-gold/10 via-black to-black -z-10" />

      {/* HEADER SECTION */}
      <header className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
        <div>
          <h2 className="font-pixel text-abyssinian-gold text-lg mb-2 underline tracking-tighter">LEVEL_01</h2>
          <h1 className="font-pixel text-6xl uppercase tracking-tighter">The_Outpost</h1>
          <p className="font-mono text-[10px] text-slate-500 mt-2 uppercase tracking-[0.2em]">
            Personnel_File // Mercy_Engineering_Profile
          </p>
        </div>
        <Link href="/" className="font-pixel text-slate-500 hover:text-white transition-colors">
          {"<"} RETURN_TO_ROOT
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Character Stats */}
        <section className="flex flex-col gap-8">
          <div className="rugged-border bg-slate-900/50 p-6">
            <h3 className="font-pixel text-xl text-abyssinian-gold mb-4 border-b border-white/10 pb-2 uppercase">Core_Attributes</h3>
            <ul className="font-mono text-sm space-y-4">
              <li className="flex justify-between"><span>ROLE:</span> <span className="text-white">TEAM_LEAD</span></li>
              <li className="flex justify-between"><span>CLASS:</span> <span className="text-white">DATA_ENG_FULLSTACK</span></li>
              <li className="flex justify-between"><span>LOCATION:</span> <span className="text-white">ADDIS_ABABA_ETH</span></li>
              <li className="flex justify-between"><span>OPTIMIZATION:</span> <span className="text-green-500">3.8_GPA</span></li>
            </ul>
          </div>

          <div className="rugged-border border-slate-800 p-6">
            <h3 className="font-pixel text-sm text-slate-400 mb-4 uppercase tracking-widest">Mastered_Tech</h3>
            <div className="flex flex-wrap gap-2">
              {['Kafka', 'Apache Spark', 'Docker', 'Airflow', 'HDFS', 'PostgreSQL', 'MERN Stack', 'Python', 'Java', 'C++', 'Figma', 'Streamlit'].map(skill => (
                <span key={skill} className="border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-mono hover:border-abyssinian-gold hover:text-abyssinian-gold transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: The Path & Vision */}
        <section className="lg:col-span-2 flex flex-col gap-12">
          
          {/* Timeline Section */}
          <div className="space-y-8">
            <h3 className="font-pixel text-xl text-slate-500 uppercase tracking-widest mb-6">// Deployment_History</h3>
            
            {/* INSA & AAU - SIMULTANEOUS CURRENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative pl-8 border-l-2 border-abyssinian-gold bg-abyssinian-gold/5 p-5 transition-all hover:bg-abyssinian-gold/10">
                <div className="absolute -left-[10px] top-4 h-4 w-4 bg-black border-2 border-abyssinian-gold rotate-45" />
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-pixel text-lg text-white">INSA — Team Lead</h4>
                  <span className="font-mono text-[8px] border border-abyssinian-gold text-abyssinian-gold px-1 animate-pulse">ACTIVE</span>
                </div>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">
                  Leading full-stack & big data teams. Architecting Medallion pipelines with real-time transactional monitoring.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-abyssinian-gold bg-abyssinian-gold/5 p-5 transition-all hover:bg-abyssinian-gold/10">
                <div className="absolute -left-[10px] top-4 h-4 w-4 bg-black border-2 border-abyssinian-gold rotate-45" />
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-pixel text-lg text-white">AAU — CS Student</h4>
                  <span className="font-mono text-[8px] border border-abyssinian-gold text-abyssinian-gold px-1">ACTIVE</span>
                </div>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">
                  Year 2 // Exploring algorithmic complexity, distributed systems, and Calculus-level optimization.
                </p>
              </div>
            </div>

            {/* EVANGADI */}
            <div className="relative pl-8 border-l-2 border-white/10 opacity-60 hover:opacity-100 transition-opacity">
              <div className="absolute -left-[5px] top-0 h-2 w-2 bg-slate-700 rotate-45" />
              <h4 className="font-pixel text-xl text-slate-200">Evangadi Tech</h4>
              <p className="font-sans text-slate-400 mt-1 text-[10px] uppercase tracking-widest">Boot_Camp // Training_Phase_Complete</p>
            </div>
          </div>

          {/* VISION MODULES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rugged-border bg-blue-900/5 border-blue-500/30 p-6">
              <h3 className="font-pixel text-xl text-blue-400 mb-4 uppercase">Sign_Link_AR</h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                Researching the intersection of computer vision and AR. Developing a system to live-transcribe audio into sign language visuals via smart glasses.
              </p>
              <span className="font-mono text-[9px] text-blue-500/60 uppercase tracking-tighter">Hardware_Integration // CV</span>
            </div>

            <div className="rugged-border bg-abyssinian-gold/5 border-abyssinian-gold/30 p-6">
              <h3 className="font-pixel text-xl text-abyssinian-gold mb-4 uppercase">Hamer_Trans_AI</h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                Utilizing agentic AI to bridge translation gaps for oral languages. Focused on preserving the cultural richness of the Hamer people.
              </p>
              <span className="font-mono text-[9px] text-abyssinian-gold/50 uppercase tracking-tighter">NLP // Cultural_Preservation</span>
            </div>
          </div>

          {/* SECTION: INTERNAL_LOGIC (The Human Element) */}
          <div className="mt-4 border-t border-white/10 pt-12">
            <h3 className="font-pixel text-xl text-abyssinian-gold mb-8 uppercase tracking-widest">
              // Internal_Logic
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="font-sans text-slate-300 leading-relaxed italic border-l-2 border-slate-700 pl-4">
                  "I view code as a medium for solving deeply human problems—bridging communication gaps and preserving tradition through AI."
                </p>
                <p className="font-sans text-slate-400 text-sm leading-relaxed">
                  Beyond the terminal, I am a second-generation thinker who values professional 
                  integrity. My work is fueled by a commitment to tech-driven philanthropy—creating 
                  self-sustaining engines for global change.
                </p>
              </div>

              {/* RECHARGE PROTOCOLS (Hobbies) */}
              <div className="bg-slate-900/30 rugged-border p-8 border-slate-800">
                <h4 className="font-pixel text-sm text-white mb-6 uppercase tracking-wider underline underline-offset-4">Recharge_Protocols</h4>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex gap-4 items-start">
                    <span className="font-mono text-abyssinian-gold text-[10px]">[01]</span>
                    <div className="flex flex-col">
                      <span className="font-pixel text-[10px] text-slate-300 uppercase">Analog_Input</span>
                      <span className="font-mono text-[10px] text-slate-500">Deep reading & historical research.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-mono text-abyssinian-gold text-[10px]">[02]</span>
                    <div className="flex flex-col">
                      <span className="font-pixel text-[10px] text-slate-300 uppercase">System_Update</span>
                      <span className="font-mono text-[10px] text-slate-500">Curating knowledge via YouTube (Tech, Science, Philosophy).</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-mono text-abyssinian-gold text-[10px]">[03]</span>
                    <div className="flex flex-col">
                      <span className="font-pixel text-[10px] text-slate-300 uppercase">Kinetic_Sync</span>
                      <span className="font-mono text-[10px] text-slate-500">Daily walks for mental clarity & perspective.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
      
      {/* FOOTER */}
      <footer className="mt-24 pt-8 border-t border-white/5 flex justify-between font-mono text-[10px] text-slate-600 uppercase tracking-[0.5em]">
        <span>LOC: ADDIS_ABABA // 9.03N 38.74E</span>
        <span>STATUS: OPTIMIZED_FOR_GROWTH</span>
      </footer>
    </main>
  );
}