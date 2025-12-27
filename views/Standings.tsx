
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_TEAMS } from '../constants';

const Standings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white max-w-md mx-auto shadow-2xl">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-slate-950/90 backdrop-blur-md p-4 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold leading-tight">Standings</h1>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-800 text-white">
          <span className="material-symbols-outlined text-[24px]">sort</span>
        </button>
      </header>

      <section className="p-4">
        <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700">
          <div className="h-20 w-20 rounded-lg bg-cover bg-center shadow-inner" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkhGMJSOwSgSWGDAkDwwk05EwV1EJMXOaq3vFeNkT7zRRsRQYywCOBebKYxdd2at3v_nHfAQJ-l6InTyObvH8ivX7PJLsrY8ti_JIkOsiLjAAGEINb7jOliHzeM7RLc5wXtNc3O6iFFYL0IiYRT9CyNdaPcnhxnh8PZ4etNf9qo883ZUs1uLDInHCYHhBUQd54FA6vWViyvOqIwxKVdC-HiTWRQq_65mFCloiwreoy3JikUSIo_P0KtCLU-CAfSXm8DAR1kFlYpKs")` }}></div>
          <div className="flex flex-col flex-1 min-w-0 justify-center h-20">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/20 text-blue-400">Live</span>
              <span className="text-xs text-slate-500 font-medium">Round 3 of 5</span>
            </div>
            <h2 className="text-xl font-bold leading-tight truncate">Summer Slam 2024</h2>
            <p className="text-sm text-slate-500 mt-1">Co-ed Division • Phoenix, AZ</p>
          </div>
        </div>
      </section>

      <nav className="px-4">
        <div className="flex border-b border-slate-800">
          <button className="flex-1 pb-3 pt-2 text-center border-b-[3px] border-primary text-primary font-bold text-sm">Group A</button>
          <button className="flex-1 pb-3 pt-2 text-center border-b-[3px] border-transparent text-slate-500 font-medium text-sm">Group B</button>
          <button className="flex-1 pb-3 pt-2 text-center border-b-[3px] border-transparent text-slate-500 font-medium text-sm">Finals</button>
        </div>
      </nav>

      <div className="sticky top-[73px] z-40 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 px-4 py-3 grid grid-cols-[2rem_1fr_2rem_2rem_2.5rem_2rem] gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider items-center">
        <div className="text-center">#</div>
        <div>Team</div>
        <div className="text-center">W</div>
        <div className="text-center">L</div>
        <div className="text-center">Diff</div>
        <div className="text-center text-primary font-bold">Pts</div>
      </div>

      <div className="flex flex-col pb-24">
        {MOCK_TEAMS.sort((a,b) => b.points - a.points).map((team, idx) => (
          <div key={team.id} className={`group flex flex-col border-b border-slate-800 hover:bg-slate-800 transition-colors ${idx === 3 ? 'bg-primary/10 border-l-4 border-l-primary' : ''}`}>
            <div className="px-4 py-3 grid grid-cols-[2rem_1fr_2rem_2rem_2.5rem_2rem] gap-2 items-center">
              <div className="flex justify-center">
                <div className={`size-6 rounded-full flex items-center justify-center text-xs font-bold ${idx < 3 ? (idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-700 text-white') : 'text-slate-500'}`}>
                  {idx + 1}
                </div>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold border border-slate-600">
                  {team.shortName}
                </div>
                <span className={`font-semibold text-sm truncate ${idx === 3 ? 'text-primary' : 'text-white'}`}>
                  {team.name} {idx === 3 ? '(You)' : ''}
                </span>
              </div>
              <div className="text-center text-sm font-medium text-slate-300">{team.wins}</div>
              <div className="text-center text-sm font-medium text-slate-500">{team.losses}</div>
              <div className={`text-center text-sm font-medium ${team.pointDiff > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {team.pointDiff > 0 ? `+${team.pointDiff}` : team.pointDiff}
              </div>
              <div className="text-center text-sm font-bold text-white">{team.points}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Standings;
