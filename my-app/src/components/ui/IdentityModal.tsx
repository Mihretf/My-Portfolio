"use client";

interface IdentityModalProps {
  onSelect: (role: string) => void;
  onClose: () => void;
}

export default function IdentityModal({ onSelect, onClose }: IdentityModalProps) {
  const roles = [
    { id: 'dev', label: 'FELLOW_DEVELOPER', sub: 'Show me the code & logs' },
    { id: 'recruiter', label: 'RECRUITER', sub: 'Show me the impact & projects' },
    { id: 'other', label: 'EXPLORER', sub: 'Just wandering the overworld' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
      <div className="rugged-border bg-slate-900 p-8 max-w-md w-full text-center relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-4 font-pixel text-slate-500 hover:text-white"
        >
          [X]
        </button>

        <h2 className="font-pixel text-3xl text-abyssinian-gold mb-2">IDENTIFICATION_REQUIRED</h2>
        <p className="font-mono text-[10px] text-slate-400 mb-8 uppercase tracking-widest">
          Please select your access level to proceed
        </p>

        <div className="flex flex-col gap-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelect(role.id)}
              className="group border border-slate-700 p-4 hover:border-abyssinian-gold hover:bg-abyssinian-gold/5 transition-all text-left"
            >
              <div className="font-pixel text-xl text-white group-hover:text-abyssinian-gold">
                {role.label}
              </div>
              <div className="font-sans text-xs text-slate-500 group-hover:text-slate-300">
                {role.sub}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}