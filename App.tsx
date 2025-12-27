
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home';
import TournamentDetails from './views/TournamentDetails';
import NewTournament from './views/NewTournament';
import Scoreboard from './views/Scoreboard';
import Settings from './views/Settings';
import AdminLogin from './views/AdminLogin';
import Teams from './views/Teams';
import EditTeam from './views/EditTeam';
import Standings from './views/Standings';
import Navigation from './components/Navigation';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavPaths = ['/scoreboard', '/login', '/teams/edit', '/tournament/new'];
  const showNav = !hideNavPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="max-w-md mx-auto bg-background-dark min-h-screen relative shadow-2xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Home />} />
        <Route path="/tournament/new" element={<NewTournament />} />
        <Route path="/tournament/:id" element={<TournamentDetails />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/edit/:id" element={<EditTeam />} />
        <Route path="/standings" element={<Standings />} />
        {/* Simple fallback for new routes requested in UI but not fully defined logic-wise yet */}
        <Route path="*" element={<Home />} />
      </Routes>
      {showNav && <Navigation />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
