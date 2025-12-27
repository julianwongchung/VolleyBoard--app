import { describe, it, expect } from 'vitest';
import { MOCK_TEAMS, MOCK_TOURNAMENTS } from '../constants';

describe('Constants and Mock Data', () => {
    describe('MOCK_TEAMS', () => {
        it('should have correct number of teams', () => {
            expect(MOCK_TEAMS).toHaveLength(6);
        });

        it('should have all required team properties', () => {
            MOCK_TEAMS.forEach(team => {
                expect(team).toHaveProperty('id');
                expect(team).toHaveProperty('name');
                expect(team).toHaveProperty('shortName');
                expect(team).toHaveProperty('playersCount');
                expect(team).toHaveProperty('group');
                expect(team).toHaveProperty('wins');
                expect(team).toHaveProperty('losses');
                expect(team).toHaveProperty('pointDiff');
                expect(team).toHaveProperty('points');
            });
        });

        it('should have unique team IDs', () => {
            const ids = MOCK_TEAMS.map(team => team.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(MOCK_TEAMS.length);
        });

        it('should have valid player counts', () => {
            MOCK_TEAMS.forEach(team => {
                expect(team.playersCount).toBeGreaterThan(0);
                expect(team.playersCount).toBeLessThanOrEqual(20);
            });
        });

        it('should have valid group assignments', () => {
            MOCK_TEAMS.forEach(team => {
                expect(['A', 'B', 'C']).toContain(team.group);
            });
        });

        it('should have non-negative wins and losses', () => {
            MOCK_TEAMS.forEach(team => {
                expect(team.wins).toBeGreaterThanOrEqual(0);
                expect(team.losses).toBeGreaterThanOrEqual(0);
            });
        });
    });

    describe('MOCK_TOURNAMENTS', () => {
        it('should have correct number of tournaments', () => {
            expect(MOCK_TOURNAMENTS).toHaveLength(3);
        });

        it('should have all required tournament properties', () => {
            MOCK_TOURNAMENTS.forEach(tournament => {
                expect(tournament).toHaveProperty('id');
                expect(tournament).toHaveProperty('name');
                expect(tournament).toHaveProperty('location');
                expect(tournament).toHaveProperty('date');
                expect(tournament).toHaveProperty('time');
                expect(tournament).toHaveProperty('status');
                expect(tournament).toHaveProperty('type');
                expect(tournament).toHaveProperty('courtCount');
                expect(tournament).toHaveProperty('activeMatches');
            });
        });

        it('should have unique tournament IDs', () => {
            const ids = MOCK_TOURNAMENTS.map(tournament => tournament.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(MOCK_TOURNAMENTS.length);
        });

        it('should have valid statuses', () => {
            MOCK_TOURNAMENTS.forEach(tournament => {
                expect(['active', 'upcoming', 'completed']).toContain(tournament.status);
            });
        });

        it('should have valid tournament types', () => {
            MOCK_TOURNAMENTS.forEach(tournament => {
                expect(['Volleython', 'Friendly']).toContain(tournament.type);
            });
        });

        it('should have at least one active tournament', () => {
            const activeTournaments = MOCK_TOURNAMENTS.filter(t => t.status === 'active');
            expect(activeTournaments.length).toBeGreaterThan(0);
        });

        it('should have valid court counts', () => {
            MOCK_TOURNAMENTS.forEach(tournament => {
                expect(tournament.courtCount).toBeGreaterThan(0);
                expect(tournament.courtCount).toBeLessThanOrEqual(20);
            });
        });

        it('should have activeMatches as an array', () => {
            MOCK_TOURNAMENTS.forEach(tournament => {
                expect(Array.isArray(tournament.activeMatches)).toBe(true);
            });
        });
    });
});
