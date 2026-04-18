import RuggedButton from "./RuggedButton";

export default function HeroOverlay() {
  return (
    <div className="relative z-10 flex h-screen w-full flex-col pointer-events-none">
      
      {/* --- THE TOP NAV (The HUD) --- */}
      <nav className="w-full p-6 flex justify-between items-start pointer-events-auto">
        {/* Logo / System ID */}
        <div className="font-pixel text-2xl text-white">
          M_OS <span className="text-abyssinian-gold italic text-sm">v1.0</span>
        </div>

        {/* Level Navigation */}
        <div className="flex gap-8 font-pixel text-lg text-slate-400">
          <button className="hover:text-abyssinian-gold transition-colors">01_ABOUT</button>
          <button className="hover:text-abyssinian-gold transition-colors">02_FORGE</button>
          <button className="hover:text-abyssinian-gold transition-colors">03_LOGS</button>
          <button className="hover:text-abyssinian-gold transition-colors text-white border-b-2 border-abyssinian-gold">
            00_HOME
          </button>
        </div>
      </nav>

      {/* --- THE CENTER CONTENT (The Command Center) --- */}
<div className="flex-1 flex flex-col items-start justify-center p-12 lg:p-24 text-left">
  <div className="max-w-2xl pointer-events-auto flex flex-col items-start">
    
    <div className="bg-black/40 border-l-2 border-abyssinian-gold px-3 py-1 mb-6 font-mono text-[10px] text-white uppercase tracking-[0.2em]">
      ROOTED_IN_FAITH // GROWING_IN_CODE
    </div>

    {/* Use a negative margin or shift the whole block left so the tree peeks out on the right */}
    <h1 className="font-pixel text-6xl md:text-8xl text-white leading-tight mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
      MERCY'S <br /> 
      <span className="text-abyssinian-gold">OVERWORLD</span>
    </h1>

    <p className="font-sans text-slate-300 text-base mb-10 max-w-md leading-relaxed">
      CS Researcher • Backend Engineer • Pianist
    </p>

    <RuggedButton text="START_INITIALIZATION" />
  </div>
</div>

      {/* --- THE BOTTOM BAR (Status Feed) --- */}
      <footer className="w-full p-6 flex justify-between items-end font-mono text-[10px] text-slate-500 uppercase tracking-widest pointer-events-auto">
        <div>LOC: ADDIS_ABABA_ETH</div>
        <div>MEM_USAGE: 3.8_GPA_OPTIMIZED</div>
      </footer>

    </div>
  );
}