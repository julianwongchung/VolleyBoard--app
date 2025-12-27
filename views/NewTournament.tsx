
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTournament: React.FC = () => {
  const navigate = useNavigate();
  const [tournamentType, setTournamentType] = useState<'volleython' | 'friendly'>('volleython');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [teamCount, setTeamCount] = useState('');

  // Helper to trigger native date picker on container click
  const handleDateContainerClick = (id: string) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el && 'showPicker' in el) {
      el.showPicker();
    } else if (el) {
      el.focus();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f1115] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-[#1c1f26] sticky top-0 z-50 bg-[#0f1115]/95 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <h1 className="text-lg font-bold">New Tournament</h1>
        <button 
          className="text-primary font-bold px-2 hover:opacity-80 transition-opacity disabled:opacity-30"
          disabled={!name}
          onClick={() => navigate('/')}
        >
          Save
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
        {/* Tournament Name */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Tournament Name</label>
          <div className="relative">
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Summer Beach Bash 2024"
              className="w-full bg-[#1c1f26] border-none rounded-xl py-4 px-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Location</label>
          <div className="relative group">
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Santa Monica Pier"
              className="w-full bg-[#1c1f26] border-none rounded-xl py-4 px-4 pr-12 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </span>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold ml-1">Schedule</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Start Date</label>
              <div 
                className="relative cursor-pointer" 
                onClick={() => handleDateContainerClick('start-date-input')}
              >
                <input 
                  id="start-date-input"
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#1c1f26] border-none rounded-xl py-4 px-4 pr-12 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary transition-all color-scheme-dark"
                  style={{ colorScheme: 'dark' }}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">End Date</label>
              <div 
                className="relative cursor-pointer"
                onClick={() => handleDateContainerClick('end-date-input')}
              >
                <input 
                  id="end-date-input"
                  type="date" 
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-[#1c1f26] border-none rounded-xl py-4 px-4 pr-12 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary transition-all color-scheme-dark"
                  style={{ colorScheme: 'dark' }}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Type */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold ml-1">Tournament Type</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setTournamentType('volleython')}
              className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all gap-2 ${tournamentType === 'volleython' ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-[#1c1f26] border-transparent hover:border-slate-700'}`}
            >
              {tournamentType === 'volleython' && (
                <div className="absolute top-2 right-2 flex size-5 items-center justify-center bg-primary rounded-full">
                  <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                </div>
              )}
              <span className={`material-symbols-outlined text-[32px] ${tournamentType === 'volleython' ? 'text-primary' : 'text-slate-400'}`}>emoji_events</span>
              <span className={`text-sm font-bold ${tournamentType === 'volleython' ? 'text-white' : 'text-slate-400'}`}>Volleython</span>
            </button>
            <button 
              onClick={() => setTournamentType('friendly')}
              className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all gap-2 ${tournamentType === 'friendly' ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-[#1c1f26] border-transparent hover:border-slate-700'}`}
            >
              {tournamentType === 'friendly' && (
                <div className="absolute top-2 right-2 flex size-5 items-center justify-center bg-primary rounded-full">
                  <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                </div>
              )}
              <span className={`material-symbols-outlined text-[32px] ${tournamentType === 'friendly' ? 'text-primary' : 'text-slate-400'}`}>handshake</span>
              <span className={`text-sm font-bold ${tournamentType === 'friendly' ? 'text-white' : 'text-slate-400'}`}>Friendly Match</span>
            </button>
          </div>
        </div>

        {/* Number of Teams */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Number of Teams</label>
          <div className="relative group">
            <input 
              type="number" 
              value={teamCount}
              onChange={(e) => setTeamCount(e.target.value)}
              placeholder="e.g., 16"
              className="w-full bg-[#1c1f26] border-none rounded-xl py-4 px-4 pr-12 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </span>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-6 bg-[#0f1115] border-t border-[#1c1f26] z-50">
        <button 
          onClick={() => navigate('/')}
          className="flex w-full items-center justify-center gap-2 rounded-2xl h-14 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 active:scale-[0.98] transition-all"
        >
          <span>Create Tournament</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default NewTournament;
