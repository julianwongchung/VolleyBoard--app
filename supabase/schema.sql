-- VolleyBoard Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tournaments Table
CREATE TABLE tournaments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'upcoming', 'completed')),
  format TEXT NOT NULL,
  teams_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Teams Table
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  players JSONB NOT NULL DEFAULT '[]',
  wins INTEGER DEFAULT 0,
  losses INTEGER DEFAULT 0,
  points_for INTEGER DEFAULT 0,
  points_against INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Matches Table
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tournament_id UUID REFERENCES tournaments(id) ON DELETE CASCADE,
  team1_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  team2_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  team1_name TEXT NOT NULL,
  team2_name TEXT NOT NULL,
  team1_score INTEGER DEFAULT 0,
  team2_score INTEGER DEFAULT 0,
  status TEXT NOT NULL CHECK (status IN ('scheduled', 'in_progress', 'completed')),
  sets JSONB DEFAULT '[]',
  current_set INTEGER DEFAULT 1,
  match_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Settings Table (for app configuration)
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  points_per_set INTEGER DEFAULT 25,
  sets_to_win INTEGER DEFAULT 3,
  theme TEXT DEFAULT 'dark',
  notifications_enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_tournaments_status ON tournaments(status);
CREATE INDEX idx_matches_tournament ON matches(tournament_id);
CREATE INDEX idx_matches_status ON matches(status);
CREATE INDEX idx_teams_name ON teams(name);

-- Enable Row Level Security (RLS)
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust based on your needs)
-- For now, allowing all operations for development
CREATE POLICY "Enable read access for all users" ON tournaments FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON tournaments FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON tournaments FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON tournaments FOR DELETE USING (true);

CREATE POLICY "Enable read access for all users" ON teams FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON teams FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON teams FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON teams FOR DELETE USING (true);

CREATE POLICY "Enable read access for all users" ON matches FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON matches FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON matches FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON matches FOR DELETE USING (true);

CREATE POLICY "Enable read access for all users" ON settings FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON settings FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON settings FOR DELETE USING (true);

-- Insert sample data (matching your mock data)
INSERT INTO tournaments (id, name, location, date, time, status, format, teams_count) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Beach Volleyball Championship 2024', 'Santa Monica Beach', 'Dec 15', '2 hours ago', 'active', 'Double Elimination', 16),
  ('550e8400-e29b-41d4-a716-446655440002', 'City League Finals', 'Downtown Sports Complex', 'Dec 20', '10:00 AM', 'upcoming', 'Round Robin', 8),
  ('550e8400-e29b-41d4-a716-446655440003', 'Summer Smash Tournament', 'Riverside Park', 'Dec 22', '2:00 PM', 'upcoming', 'Single Elimination', 12),
  ('550e8400-e29b-41d4-a716-446655440004', 'College Championship', 'University Arena', 'Dec 25', '9:00 AM', 'upcoming', 'Pool Play', 20);

-- Insert sample teams
INSERT INTO teams (id, name, players, wins, losses, points_for, points_against) VALUES
  ('650e8400-e29b-41d4-a716-446655440001', 'Spike Masters', '["Player 1", "Player 2"]', 5, 2, 150, 120),
  ('650e8400-e29b-41d4-a716-446655440002', 'Net Ninjas', '["Player 3", "Player 4"]', 4, 3, 140, 130),
  ('650e8400-e29b-41d4-a716-446655440003', 'Block Party', '["Player 5", "Player 6"]', 6, 1, 160, 100);
