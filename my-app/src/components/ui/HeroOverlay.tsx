"use client";

import { useState } from "react";
import Link from "next/link";
import RuggedButton from "./RuggedButton";
import IdentityModal from "./IdentityModal";

export default function HeroOverlay() {
  const [showModal, setShowModal] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  // Logic to map the selected role to a specific "Level"
  const handleRoleSelect = (role: string) => {
    setShowModal(false);
    if (role === "dev") setRecommendation("03_LOGS");
    if (role === "recruiter") setRecommendation("02_FORGE");
    if (role === "other") setRecommendation("01_ABOUT");
  };

  return (
    <div className="relative z-10 flex h-screen w-full flex-col pointer-events-none">
      
      {/* --- THE TOP NAV (HUD) --- */}
      <nav className="w-full p-6 flex justify-between items-start pointer-events-auto">
        {/* Logo */}
        <div className="font-pixel text-2xl text-white">
          M_OS <span className="text-abyssinian-gold italic text-sm">v1.0</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 font-pixel text-lg">
          <Link 
            href="/about" 
            className={`transition-all duration-300 ${recommendation === '01_ABOUT' ? 'text-white border-b-2 border-abyssinian-gold scale-110' : 'text-slate-400 hover:text-abyssinian-gold'}`}
          >
            01_ABOUT
          </Link>
          
          <Link 
            href="/forge" 
            className={`transition-all duration-300 ${recommendation === '02_FORGE' ? 'text-white border-b-2 border-abyssinian-gold scale-110' : 'text-slate-400 hover:text-abyssinian-gold'}`}
          >
            02_FORGE
          </Link>
          
          <Link 
            href="/logs" 
            className={`transition-all duration-300 ${recommendation === '03_LOGS' ? 'text-white border-b-2 border-abyssinian-gold scale-110' : 'text-slate-400 hover:text-abyssinian-gold'}`}
          >
            03_LOGS
          </Link>
          
          <Link href="/" className="text-white border-b-2 border-slate-500">
            00_HOME
          </Link>
        </div>
      </nav>

      {/* --- THE CENTER CONTENT (Command Center) --- */}
      <div className="flex-1 flex flex-col items-start justify-center p-12 lg:p-24 text-left">
        <div className="max-w-2xl pointer-events-auto flex flex-col items-start">
          
          {/* Tagline */}
          <div className="bg-black/40 border-l-2 border-abyssinian-gold px-3 py-1 mb-6 font-mono text-[10px] text-white uppercase tracking-[0.2em]">
            ROOTED_IN_FAITH // GROWING_IN_CODE
          </div>

          {/* Main Title */}
          <h1 className="font-pixel text-6xl md:text-8xl text-white leading-tight mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
            MERCY'S <br /> 
            <span className="text-abyssinian-gold">OVERWORLD</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-slate-300 text-base mb-10 max-w-md leading-relaxed">
            CS Researcher • Backend Engineer • Pianist
          </p>

          {/* Action Button */}
          <div onClick={() => setShowModal(true)}>
            <RuggedButton text="START_INITIALIZATION" />
          </div>

          {/* Dynamic Recommendation Link */}
          {recommendation && (
            <Link 
              href={`/${recommendation.split('_')[1].toLowerCase()}`}
              className="mt-6 font-pixel text-abyssinian-gold animate-pulse hover:scale-105 transition-transform cursor-pointer"
            >
              {"> "} SYSTEM RECOMMENDS: {recommendation} [CLICK_TO_ENTER]
            </Link>
          )}
        </div>
      </div>

      {/* --- THE BOTTOM BAR (Status Feed) --- */}
      <footer className="w-full p-6 flex justify-between items-end font-mono text-[10px] text-slate-500 uppercase tracking-widest pointer-events-auto">
        <div>LOC: ADDIS_ABABA_ETH</div>
        <div>MEM_USAGE: 3.8_GPA_OPTIMIZED</div>
      </footer>

      {/* --- IDENTITY PROTOCOL MODAL --- */}
      {showModal && (
        <IdentityModal 
          onSelect={handleRoleSelect} 
          onClose={() => setShowModal(false)} 
        />
      )}

    </div>
  );
}