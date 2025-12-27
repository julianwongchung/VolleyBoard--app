
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Scoreboard: React.FC = () => {
  const navigate = useNavigate();
  const [score1, setScore1] = useState(24);
  const [score2, setScore2] = useState(22);
  const [serving, setServing] = useState(1);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-950 text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 shadow-sm z-20 shrink-0 border-b border-slate-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-white text-lg font-bold">Court 3 • Men's Varsity</h2>
          <p className="text-slate-400 text-xs font-medium">Semi-Finals</p>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      {/* Set Tracking */}
      <div className="flex shrink-0 items-center justify-center gap-3 py-3 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-primary/20">
          <span className="text-primary text-xs font-bold uppercase tracking-wider">Set 2</span>
        </div>
        <div className="flex items-center gap-4 text-white font-bold text-xl">
          <span>1</span>
          <span className="text-slate-500 text-sm font-normal">Sets</span>
          <span>0</span>
        </div>
      </div>

      {/* Scoring Area */}
      <div className="flex-1 flex flex-col p-4 pb-28 overflow-y-auto no-scrollbar">
        <div className="w-full flex flex-col items-center justify-center flex-1 gap-6">
          <div className="w-full grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* Team 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 flex items-center justify-center">
                {serving === 1 && (
                  <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[16px] filled">sports_volleyball</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Serving</span>
                  </div>
                )}
              </div>
              <h3 className="text-white text-xl font-bold truncate">Eagles</h3>
              <div className="flex flex-col items-center gap-2 w-full">
                <div
                  onClick={() => setServing(1)}
                  className={`relative w-full aspect-square max-w-[160px] bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden transition-all ${serving === 1 ? 'ring-2 ring-primary ring-offset-2 ring-offset-slate-950 scale-105' : 'border border-slate-800 opacity-90'}`}
                >
                  <span className="text-7xl sm:text-8xl font-black text-white tracking-tighter">{score1}</span>
                  <div className="absolute top-2 right-2 pointer-events-none opacity-50">
                    <span className="material-symbols-outlined text-slate-400 text-sm">edit</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 w-full">
                  <button onClick={() => setScore1(s => Math.max(0, s - 1))} className="size-12 bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all rounded-full flex items-center justify-center text-slate-300">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <button onClick={() => setScore1(s => s + 1)} className="size-12 bg-primary hover:bg-blue-600 active:scale-95 transition-all rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-2xl">add</span>
                  </button>
                </div>
              </div>
              <div className="h-6">
                {score1 >= 24 && score1 > score2 && (
                  <div className="bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border border-orange-500/20">
                    Set Point
                  </div>
                )}
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 flex items-center justify-center">
                {serving === 2 && (
                  <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[16px] filled">sports_volleyball</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Serving</span>
                  </div>
                )}
              </div>
              <h3 className="text-white text-xl font-bold truncate">Tigers</h3>
              <div className="flex flex-col items-center gap-2 w-full">
                <div
                  onClick={() => setServing(2)}
                  className={`relative w-full aspect-square max-w-[160px] bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden transition-all ${serving === 2 ? 'ring-2 ring-primary ring-offset-2 ring-offset-slate-950 scale-105' : 'border border-slate-800 opacity-90'}`}
                >
                  <span className="text-7xl sm:text-8xl font-black text-white tracking-tighter">{score2}</span>
                  <div className="absolute top-2 right-2 pointer-events-none opacity-0 focus-within:opacity-50 hover:opacity-50">
                    <span className="material-symbols-outlined text-slate-400 text-sm">edit</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 w-full">
                  <button onClick={() => setScore2(s => Math.max(0, s - 1))} className="size-12 bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all rounded-full flex items-center justify-center text-slate-300">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <button onClick={() => setScore2(s => s + 1)} className="size-12 bg-slate-800 hover:bg-slate-700 active:scale-95 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-2xl">add</span>
                  </button>
                </div>
              </div>
              <div className="h-6">
                {score2 >= 24 && score2 > score1 && (
                  <div className="bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border border-orange-500/20">
                    Set Point
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 px-6 pb-6 pt-4 border-t border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-center max-w-lg mx-auto">
          <button className="flex items-center gap-2 px-8 h-14 bg-red-950/30 text-red-400 rounded-xl hover:bg-red-900/50 active:scale-95 transition-all border border-red-900/30 shadow-lg">
            <span className="material-symbols-outlined text-xl">flag</span>
            <span className="text-base font-bold">End Set</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
