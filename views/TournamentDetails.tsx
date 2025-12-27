
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_TOURNAMENTS } from '../constants';

const TournamentDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tournament = MOCK_TOURNAMENTS.find(t => t.id === id) || MOCK_TOURNAMENTS[0];

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-[#0f1721] text-white">
      {/* Header */}
      <header className="flex items-center p-4 justify-between sticky top-0 z-10 bg-[#0f1721]/90 backdrop-blur-md">
        <div className="flex size-10 items-center justify-center rounded-full bg-slate-800/50">
          <span className="material-symbols-outlined text-primary text-[24px]">sports_volleyball</span>
        </div>
        <h2 className="text-white text-lg font-bold flex-1 text-center">Summer Slam 2</h2>
        <button onClick={() => navigate('/match/setup')} className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 active:scale-95">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-5">
        {/* Status Line */}
        <div className="flex items-center justify-between px-1">
          <div className="flex gap-2">
            <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-red-950/40 pl-2 pr-3 border border-red-900/20">
              <span className="material-symbols-outlined text-red-500 text-[12px] filled">fiber_manual_record</span>
              <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">Live</p>
            </div>
            <div className="flex h-7 items-center justify-center gap-x-2 rounded-lg bg-slate-800/80 px-3 border border-slate-700/50">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Finals</p>
            </div>
          </div>
          <p className="text-slate-400 text-[11px] font-medium opacity-80">Court A • 00:45 Elapsed</p>
        </div>

        {/* Scoreboard Card */}
        <section 
          onClick={() => navigate('/scoreboard')}
          className="relative w-full rounded-3xl bg-[#1a2632] shadow-2xl border border-slate-800/50 overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
        >
          <div className="relative flex flex-col items-center p-8 gap-6">
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-1 flex-col items-center gap-3">
                <div className="size-16 rounded-full bg-slate-800/80 flex items-center justify-center text-xl font-bold text-slate-500 border border-slate-700/50">SP</div>
                <div className="text-center">
                  <h3 className="text-white text-base font-bold">Spikers</h3>
                  <div className="mx-auto mt-2 h-[3px] w-8 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center gap-3">
                <div className="size-16 rounded-full bg-slate-800/80 flex items-center justify-center text-xl font-bold text-slate-500 border border-slate-700/50">NP</div>
                <div className="text-center">
                  <h3 className="text-white text-base font-bold">Net Pros</h3>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-center justify-center w-full my-2">
              <span className="text-6xl font-black text-primary tracking-tighter">24</span>
              <span className="text-5xl font-black text-slate-700 mx-2">-</span>
              <span className="text-6xl font-black text-white tracking-tighter">22</span>
            </div>
          </div>
          
          <div className="w-full border-t border-slate-700/30 bg-slate-800/10 p-4 flex justify-between items-center px-8">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-primary"></div>
              <div className="size-2.5 rounded-full bg-primary"></div>
              <div className="size-2.5 rounded-full bg-slate-700"></div>
            </div>
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-slate-500">Sets Won</span>
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-primary"></div>
              <div className="size-2.5 rounded-full bg-slate-700"></div>
              <div className="size-2.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section className="grid grid-cols-3 gap-3">
          <button onClick={() => navigate('/scoreboard')} className="flex flex-col items-center justify-center gap-3 bg-[#1a2632] py-6 px-2 rounded-2xl border border-slate-800/50 shadow-sm active:scale-95 transition-all">
            <div className="size-12 flex items-center justify-center rounded-full bg-slate-800/80 text-primary">
              <span className="material-symbols-outlined text-[20px]">edit_note</span>
            </div>
            <span className="text-slate-100 text-[11px] font-bold text-center leading-tight">Update<br/>Score</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 bg-[#1a2632] py-6 px-2 rounded-2xl border border-slate-800/50 shadow-sm active:scale-95 transition-all">
            <div className="size-12 flex items-center justify-center rounded-full bg-slate-800/80 text-slate-400">
              <span className="material-symbols-outlined text-[20px]">info</span>
            </div>
            <span className="text-slate-100 text-[11px] font-bold text-center leading-tight">Details</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 bg-[#1a2632] py-6 px-2 rounded-2xl border border-slate-800/50 shadow-sm active:scale-95 transition-all">
            <div className="size-12 flex items-center justify-center rounded-full bg-slate-800/80 text-slate-400">
              <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
            </div>
            <span className="text-slate-100 text-[11px] font-bold text-center leading-tight">Switch<br/>Sides</span>
          </button>
        </section>

        {/* Standing Score Banner */}
        <section>
          <div 
            onClick={() => navigate('/standings')}
            className="flex items-center justify-between w-full p-5 rounded-2xl bg-[#1a2632] border border-slate-800/50 shadow-xl group cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[28px]">bar_chart</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-white text-base font-bold leading-tight">Standing Score</span>
                <span className="text-slate-500 text-xs font-medium">View tournament rankings</span>
              </div>
            </div>
            <div className="flex items-center justify-center size-10 rounded-full bg-slate-800/80 text-slate-400">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </section>

        {/* Up Next Section */}
        <section className="mt-2">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-white text-base font-bold">Up Next</h3>
            <button className="text-primary text-[11px] font-bold hover:underline tracking-tight">View Schedule</button>
          </div>
          <div className="flex flex-col gap-3">
            {[1].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-[#1a2632]/80 rounded-2xl border border-slate-800/40">
                <div className="flex flex-col items-center justify-center min-w-[60px] border-r border-slate-700/50 pr-4">
                  <span className="text-sm font-bold text-slate-300">14:00</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mt-0.5">PM</span>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-100">Eagles</span>
                    <span className="text-slate-600 font-bold">-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-100">Sharks</span>
                    <span className="text-slate-600 font-bold">-</span>
                  </div>
                </div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">
                  Court 1
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TournamentDetails;
