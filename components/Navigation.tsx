
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Tournaments', icon: 'emoji_events', path: '/tournaments' },
    { label: 'Teams', icon: 'groups', path: '/teams' },
    { label: 'Settings', icon: 'settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-[#12141a]/95 backdrop-blur-lg border-t border-divider-dark pb-2">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          // Home is active only on the root path
          // Tournaments is active on /tournaments AND /tournament/:id
          const isHome = item.path === '/';
          const isTournaments = item.path === '/tournaments';
          
          const isActive = isHome 
            ? location.pathname === '/' 
            : location.pathname.startsWith(item.path) || (isTournaments && location.pathname.startsWith('/tournament'));

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all active:scale-90 touch-none ${
                isActive ? 'text-primary' : 'text-slate-500 hover:text-primary'
              }`}
            >
              <span className={`material-symbols-outlined text-[26px] transition-transform ${isActive ? 'filled scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold tracking-tight transition-colors ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
