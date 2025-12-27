
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MOCK_TOURNAMENTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTournamentsView = location.pathname === '/tournaments';

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-xl border-b border-divider-dark transition-colors">
        <div className="flex items-center p-4 justify-between">
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-white">
            {isTournamentsView ? 'Tournaments' : 'Home'}
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-surface-elevated transition-colors text-white">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="flex w-full items-center rounded-xl bg-surface-dark border border-divider-dark focus-within:ring-2 focus-within:ring-primary overflow-hidden h-11">
            <div className="flex items-center justify-center pl-3 text-slate-500">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-base font-normal placeholder:text-slate-500 text-white h-full px-3" 
              placeholder="Search events..."
            />
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex h-10 w-full items-center rounded-lg bg-surface-dark p-1 border border-divider-dark">
            <button className={`flex-1 h-full rounded-md shadow-sm text-sm font-medium transition-all ${isTournamentsView ? 'bg-primary text-white' : 'bg-surface-elevated text-white'}`}>
              Active/Upcoming
            </button>
            <button className="flex-1 h-full rounded-md text-slate-500 hover:text-white text-sm font-medium transition-colors">
              Past
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 px-4 py-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 pl-1">Live Now</h3>
          {MOCK_TOURNAMENTS.filter(t => t.status === 'active').map(tournament => (
            <div 
              key={tournament.id}
              onClick={() => navigate(`/tournament/${tournament.id}`)}
              className="group relative flex items-center justify-between gap-4 rounded-2xl bg-surface-elevated p-4 shadow-lg border border-divider-dark active:scale-[0.98] transition-transform cursor-pointer hover:bg-[#2a2f38]"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">sports_volleyball</span>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h4 className="text-base font-semibold leading-tight text-white truncate">{tournament.name}</h4>
                  <p className="text-sm text-slate-500 truncate">{tournament.location}</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-bold text-red-400 ring-1 ring-inset ring-red-500/20">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  LIVE
                </div>
                <span className="text-xs text-slate-500 font-medium">Started {tournament.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 pl-1">Upcoming</h3>
          {MOCK_TOURNAMENTS.filter(t => t.status === 'upcoming').map(tournament => (
            <div 
              key={tournament.id}
              onClick={() => navigate(`/tournament/${tournament.id}`)}
              className="group relative flex items-center justify-between gap-4 rounded-2xl bg-surface-elevated p-4 shadow-lg border border-divider-dark active:scale-[0.98] transition-transform cursor-pointer hover:bg-[#2a2f38]"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-surface-dark text-gray-400 border border-divider-dark">
                  <span className="material-symbols-outlined text-3xl">
                    {tournament.id === 't2' ? 'trophy' : tournament.id === 't3' ? 'groups' : 'school'}
                  </span>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h4 className="text-base font-semibold leading-tight text-white truncate">{tournament.name}</h4>
                  <p className="text-sm text-slate-500 truncate">{tournament.location}</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  {tournament.date}
                </div>
                <span className="text-xs text-slate-500">{tournament.time}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none flex justify-end px-4 z-40">
        <button 
          onClick={() => navigate('/tournament/new')}
          className="pointer-events-auto group flex items-center justify-center gap-2 rounded-full bg-primary h-14 px-6 text-white shadow-xl hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-2xl">add</span>
          <span className="font-semibold text-base">New Tournament</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
