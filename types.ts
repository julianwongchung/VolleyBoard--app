
export interface Team {
  id: string;
  name: string;
  players: string[]; // Array of player names stored as JSONB
  wins: number;
  losses: number;
  points_for: number;
  points_against: number;
  created_at?: string;
  updated_at?: string;
  // Legacy fields for backward compatibility
  shortName?: string;
  logoColor?: string;
  playersCount?: number;
  group?: string;
  pointDiff?: number;
  points?: number;
}

export interface Match {
  id: string;
  tournament_id?: string;
  team1_id?: string;
  team2_id?: string;
  team1_name: string;
  team2_name: string;
  team1_score: number;
  team2_score: number;
  status: 'scheduled' | 'in_progress' | 'completed';
  sets: any[]; // JSONB array of set scores
  current_set: number;
  match_date?: string;
  created_at?: string;
  updated_at?: string;
  // Legacy fields for backward compatibility
  homeTeam?: Team;
  awayTeam?: Team;
  homeScore?: number;
  awayScore?: number;
  setsWonHome?: number;
  setsWonAway?: number;
  court?: string;
  startTime?: string;
  elapsedTime?: string;
}

export interface Tournament {
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  status: 'active' | 'upcoming' | 'completed';
  format: string; // e.g., 'Double Elimination', 'Round Robin'
  teams_count: number;
  created_at?: string;
  updated_at?: string;
  // Legacy fields for backward compatibility
  type?: 'Volleython' | 'Friendly';
  courtCount?: number;
  activeMatches?: Match[];
}

export interface Settings {
  id?: string;
  user_id: string;
  points_per_set: number;
  sets_to_win: number;
  theme: string;
  notifications_enabled: boolean;
  created_at?: string;
  updated_at?: string;
}
