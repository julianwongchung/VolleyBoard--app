import { supabase } from './supabase';
import type { Tournament, Team, Match } from '../types';

// Tournament Operations
export const tournamentService = {
    // Get all tournaments
    async getAll() {
        const { data, error } = await supabase
            .from('tournaments')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Tournament[];
    },

    // Get tournament by ID
    async getById(id: string) {
        const { data, error } = await supabase
            .from('tournaments')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Tournament;
    },

    // Create new tournament
    async create(tournament: Omit<Tournament, 'id' | 'created_at' | 'updated_at'>) {
        const { data, error } = await supabase
            .from('tournaments')
            .insert([tournament])
            .select()
            .single();

        if (error) throw error;
        return data as Tournament;
    },

    // Update tournament
    async update(id: string, updates: Partial<Tournament>) {
        const { data, error } = await supabase
            .from('tournaments')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Tournament;
    },

    // Delete tournament
    async delete(id: string) {
        const { error } = await supabase
            .from('tournaments')
            .delete()
            .eq('id', id);

        if (error) throw error;
    },

    // Get tournaments by status
    async getByStatus(status: 'active' | 'upcoming' | 'completed') {
        const { data, error } = await supabase
            .from('tournaments')
            .select('*')
            .eq('status', status)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Tournament[];
    }
};

// Team Operations
export const teamService = {
    // Get all teams
    async getAll() {
        const { data, error } = await supabase
            .from('teams')
            .select('*')
            .order('name');

        if (error) throw error;
        return data as Team[];
    },

    // Get team by ID
    async getById(id: string) {
        const { data, error } = await supabase
            .from('teams')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Team;
    },

    // Create new team
    async create(team: Omit<Team, 'id' | 'created_at' | 'updated_at'>) {
        const { data, error } = await supabase
            .from('teams')
            .insert([team])
            .select()
            .single();

        if (error) throw error;
        return data as Team;
    },

    // Update team
    async update(id: string, updates: Partial<Team>) {
        const { data, error } = await supabase
            .from('teams')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Team;
    },

    // Delete team
    async delete(id: string) {
        const { error } = await supabase
            .from('teams')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};

// Match Operations
export const matchService = {
    // Get all matches
    async getAll() {
        const { data, error } = await supabase
            .from('matches')
            .select('*')
            .order('match_date', { ascending: false });

        if (error) throw error;
        return data as Match[];
    },

    // Get matches by tournament
    async getByTournament(tournamentId: string) {
        const { data, error } = await supabase
            .from('matches')
            .select('*')
            .eq('tournament_id', tournamentId)
            .order('match_date');

        if (error) throw error;
        return data as Match[];
    },

    // Get match by ID
    async getById(id: string) {
        const { data, error } = await supabase
            .from('matches')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Match;
    },

    // Create new match
    async create(match: Omit<Match, 'id' | 'created_at' | 'updated_at'>) {
        const { data, error } = await supabase
            .from('matches')
            .insert([match])
            .select()
            .single();

        if (error) throw error;
        return data as Match;
    },

    // Update match
    async update(id: string, updates: Partial<Match>) {
        const { data, error } = await supabase
            .from('matches')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Match;
    },

    // Delete match
    async delete(id: string) {
        const { error } = await supabase
            .from('matches')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};

// Settings Operations
export const settingsService = {
    // Get settings for a user
    async get(userId: string) {
        const { data, error } = await supabase
            .from('settings')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (error) {
            // If no settings exist, return defaults
            if (error.code === 'PGRST116') {
                return {
                    points_per_set: 25,
                    sets_to_win: 3,
                    theme: 'dark',
                    notifications_enabled: true
                };
            }
            throw error;
        }
        return data;
    },

    // Update or create settings
    async upsert(userId: string, settings: any) {
        const { data, error } = await supabase
            .from('settings')
            .upsert([{ user_id: userId, ...settings }])
            .select()
            .single();

        if (error) throw error;
        return data;
    }
};
