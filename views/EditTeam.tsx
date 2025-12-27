
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_TEAMS } from '../constants';

const EditTeam: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const team = MOCK_TEAMS.find(t => t.id === id) || MOCK_TEAMS[0];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#101922] text-white">
      <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-[#101922]/95 backdrop-blur-sm border-b border-[#2a3844]">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">Edit Team</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="relative">
            <div className="size-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl ring-4 ring-[#1a2632]">
              <span className="text-white font-bold text-4xl">{team.shortName}</span>
            </div>
            <button className="absolute bottom-0 right-0 p-2.5 bg-primary rounded-full text-white shadow-lg border-2 border-[#101922]">
              <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">{team.name}</h2>
            <p className="text-slate-500 text-sm">Last updated: Today, 10:30 AM</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-400 ml-1">Team Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <span className="material-symbols-outlined text-[20px]">groups</span>
              </span>
              <input 
                className="w-full bg-[#1a2632] text-white rounded-xl pl-12 pr-4 py-4 border border-[#2a3844] focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                defaultValue={team.name}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-400 ml-1">Group Allocation</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <span className="material-symbols-outlined text-[20px]">category</span>
              </span>
              <select className="w-full appearance-none bg-[#1a2632] text-white rounded-xl pl-12 pr-10 py-4 border border-[#2a3844] focus:border-primary outline-none">
                <option selected={team.group === 'A'}>Group A</option>
                <option selected={team.group === 'B'}>Group B</option>
                <option selected={team.group === 'C'}>Group C</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </div>
          </div>

          <div className="bg-[#1a2632]/50 rounded-xl p-4 border border-[#2a3844]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500">Total Players</span>
              <span className="text-sm font-bold">{team.playersCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Matches Played</span>
              <span className="text-sm font-bold">{team.wins + team.losses}</span>
            </div>
          </div>
        </div>
      </main>

      <div className="p-6 bg-[#101922] border-t border-[#2a3844] space-y-3 pb-8">
        <button onClick={() => navigate(-1)} className="w-full py-4 rounded-xl font-bold text-white bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">save</span>
          Save Changes
        </button>
        <button className="w-full py-4 rounded-xl font-bold text-red-500 bg-[#1a2632] hover:bg-red-500/10 active:scale-[0.98] transition-all border border-[#2a3844] flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">delete</span>
          Delete Team
        </button>
      </div>
    </div>
  );
};

export default EditTeam;
