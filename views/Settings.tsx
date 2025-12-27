
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-background-dark">
      <header className="flex items-center px-4 py-3 bg-background-dark sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-white">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-white text-lg font-bold flex-1 text-center pr-10">Settings</h1>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-10">
        <section className="mt-4">
          <h3 className="text-white text-base font-bold px-6 pb-2">Account</h3>
          <div className="px-4">
            <div className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-gradient-to-br from-background-dark to-[#1a2632] p-5 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[28px]">admin_panel_settings</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-base font-bold">For Tournament Organizers</p>
                  <p className="text-slate-400 text-sm">
                    Log in to manage teams, edit tournament rules, and reset scores.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/login')}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Login as Administrator</span>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-white text-base font-bold px-6 pb-2">App Preferences</h3>
          <div className="flex flex-col bg-slate-900/50">
            <PreferenceItem icon="volume_up" label="Scoreboard Sound" checked={true} />
            <PreferenceItem icon="vibration" label="Haptic Feedback" checked={true} />
            <PreferenceItem icon="brightness_medium" label="Keep Screen Awake" checked={false} />
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-white text-base font-bold px-6 pb-2">Support</h3>
          <div className="flex flex-col bg-slate-900/50">
            <SupportItem icon="help" label="How to Use" />
            <SupportItem icon="policy" label="Privacy Policy" />
            <SupportItem icon="info" label="About VolleyBoard" />
          </div>
        </section>

        <div className="mt-8 mb-4 text-center">
          <p className="text-slate-500 text-xs">VolleyBoard v1.0.2</p>
        </div>
      </main>
    </div>
  );
};

const PreferenceItem = ({ icon, label, checked }: { icon: string, label: string, checked: boolean }) => (
  <div className="flex items-center gap-4 px-6 min-h-[60px] justify-between border-b border-slate-800/50">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-slate-400 text-[22px]">{icon}</span>
      <p className="text-white text-base font-normal">{label}</p>
    </div>
    <div className="shrink-0">
      <label className="relative flex h-[28px] w-[46px] cursor-pointer items-center rounded-full bg-slate-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-all">
        <div className="h-full w-[24px] rounded-full bg-white shadow-sm"></div>
        <input defaultChecked={checked} className="invisible absolute" type="checkbox"/>
      </label>
    </div>
  </div>
);

const SupportItem = ({ icon, label }: { icon: string, label: string }) => (
  <button className="flex items-center gap-4 px-6 min-h-[60px] justify-between border-b border-slate-800/50 hover:bg-white/5 transition-colors group">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-slate-400 text-[22px]">{icon}</span>
      <p className="text-white text-base font-normal">{label}</p>
    </div>
    <span className="material-symbols-outlined text-slate-600 text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
  </button>
);

export default Settings;
