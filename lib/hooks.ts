import { useState, useEffect } from 'react';
import { tournamentService, teamService, matchService } from './database';
import type { Tournament, Team, Match } from '../types';

// Hook for fetching tournaments
export function useTournaments() {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchTournaments = async () => {
        try {
            setLoading(true);
            const data = await tournamentService.getAll();
            setTournaments(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching tournaments:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments();
    }, []);

    return { tournaments, loading, error, refetch: fetchTournaments };
}

// Hook for fetching tournaments by status
export function useTournamentsByStatus(status: 'active' | 'upcoming' | 'completed') {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchTournaments = async () => {
        try {
            setLoading(true);
            const data = await tournamentService.getByStatus(status);
            setTournaments(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching tournaments:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments();
    }, [status]);

    return { tournaments, loading, error, refetch: fetchTournaments };
}

// Hook for fetching a single tournament
export function useTournament(id: string) {
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchTournament = async () => {
        try {
            setLoading(true);
            const data = await tournamentService.getById(id);
            setTournament(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching tournament:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchTournament();
        }
    }, [id]);

    return { tournament, loading, error, refetch: fetchTournament };
}

// Hook for fetching teams
export function useTeams() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchTeams = async () => {
        try {
            setLoading(true);
            const data = await teamService.getAll();
            setTeams(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching teams:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    return { teams, loading, error, refetch: fetchTeams };
}

// Hook for fetching a single team
export function useTeam(id: string) {
    const [team, setTeam] = useState<Team | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchTeam = async () => {
        try {
            setLoading(true);
            const data = await teamService.getById(id);
            setTeam(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching team:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchTeam();
        }
    }, [id]);

    return { team, loading, error, refetch: fetchTeam };
}

// Hook for fetching matches by tournament
export function useMatches(tournamentId?: string) {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchMatches = async () => {
        try {
            setLoading(true);
            const data = tournamentId
                ? await matchService.getByTournament(tournamentId)
                : await matchService.getAll();
            setMatches(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
            console.error('Error fetching matches:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMatches();
    }, [tournamentId]);

    return { matches, loading, error, refetch: fetchMatches };
}
