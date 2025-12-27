
export interface Team {
  id: string;
  name: string;
  shortName: string;
  logoColor?: string;
  playersCount: number;
  group: string;
  wins: number;
  losses: number;
  pointDiff: number;
  points: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  setsWonHome: number;
  setsWonAway: number;
  court: string;
  startTime: string;
  status: 'upcoming' | 'live' | 'finished';
  currentSet: number;
  elapsedTime?: string;
}

export interface Tournament {
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  status: 'active' | 'upcoming' | 'past';
  type: 'Volleython' | 'Friendly';
  courtCount: number;
  activeMatches: Match[];
}
