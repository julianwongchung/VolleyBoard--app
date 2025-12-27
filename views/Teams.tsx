
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_TEAMS } from '../constants';

const Teams: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-slate-950 text-white">
      <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="size-10"></div>
        <h1 className="text-lg font-bold tracking-tight text-center flex-1">Team Management</h1>
        <button className="flex items-center justify-center size-10 rounded-full text-primary hover:bg-primary/10">
          <span className="material-symbols-outlined text-[28px] font-semibold">add</span>
        </button>
      </header>

      <div className="px-4 py-4">
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </span>
          <input 
            className="w-full bg-slate-900 text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none border border-transparent focus:border-primary/50 transition-all placeholder:text-slate-500" 
            placeholder="Search teams..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-3">
        <div className="flex items-center justify-between pt-2 pb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 pl-1">
            Participating Teams ({MOCK_TEAMS.length})
          </span>
        </div>
        {MOCK_TEAMS.map((team) => (
          <div 
            key={team.id}
            onClick={() => navigate(`/teams/edit/${team.id}`)}
            className="group relative flex items-center gap-3 p-3 bg-slate-900 rounded-2xl active:scale-[0.99] transition-all border border-transparent hover:border-slate-800 cursor-pointer shadow-sm"
          >
            <div className="relative size-12 shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg ring-2 ring-slate-950">
              <span className="text-white font-bold text-lg">{team.shortName}</span>
            </div>
            <div className="flex-1 min-w-0 mr-2">
              <h3 className="text-base font-bold text-white truncate">{team.name}</h3>
              <p className="text-xs text-slate-500 truncate">{team.playersCount} Players • Group {team.group}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="size-9 flex items-center justify-center rounded-full text-slate-500 hover:text-primary hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
              <button className="size-9 flex items-center justify-center rounded-full text-slate-500 hover:text-red-500 hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
