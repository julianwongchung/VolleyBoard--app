
import { Team, Tournament, Match } from './types';

export const MOCK_TEAMS: Team[] = [
  { id: '1', name: 'Spike Force', shortName: 'SF', playersCount: 12, group: 'A', wins: 5, losses: 0, pointDiff: 12, points: 15 },
  { id: '2', name: 'Net Ninjas', shortName: 'NN', playersCount: 10, group: 'B', wins: 3, losses: 2, pointDiff: 4, points: 9 },
  { id: '3', name: 'Block Party', shortName: 'BP', playersCount: 11, group: 'A', wins: 4, losses: 1, pointDiff: 8, points: 12 },
  { id: '4', name: 'Ace Ventures', shortName: 'AV', playersCount: 9, group: 'B', wins: 2, losses: 3, pointDiff: -2, points: 6 },
  { id: '5', name: 'Volley Llamas', shortName: 'VL', playersCount: 12, group: 'C', wins: 1, losses: 4, pointDiff: -8, points: 3 },
  { id: '6', name: 'Sandy Cheeks', shortName: 'SC', playersCount: 10, group: 'A', wins: 0, losses: 5, pointDiff: -14, points: 0 },
];

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    name: 'Summer Slam 2024',
    location: 'Central Gym • Court 1',
    date: 'Active',
    time: '2h ago',
    status: 'active',
    type: 'Volleython',
    courtCount: 3,
    activeMatches: []
  },
  {
    id: 't2',
    name: 'City League Finals',
    location: 'Downtown Arena',
    date: 'Nov 12',
    time: '09:00 AM',
    status: 'upcoming',
    type: 'Volleython',
    courtCount: 2,
    activeMatches: []
  },
  {
    id: 't3',
    name: 'Beach Open Qualifiers',
    location: 'Santa Monica Beach',
    date: 'Nov 18',
    time: '11:30 AM',
    status: 'upcoming',
    type: 'Friendly',
    courtCount: 10,
    activeMatches: []
  }
];
