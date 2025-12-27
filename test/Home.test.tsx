import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';

// Mock the navigate function
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Home Component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('renders the home page with correct title', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('displays search input', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search events...');
        expect(searchInput).toBeInTheDocument();
    });

    it('shows Active/Upcoming and Past tabs', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Active/Upcoming')).toBeInTheDocument();
        expect(screen.getByText('Past')).toBeInTheDocument();
    });

    it('displays Live Now section', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Live Now')).toBeInTheDocument();
    });

    it('displays Upcoming section', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Upcoming')).toBeInTheDocument();
    });

    it('shows live tournament with LIVE badge', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Summer Slam 2024')).toBeInTheDocument();
        expect(screen.getByText('LIVE')).toBeInTheDocument();
    });

    it('displays New Tournament button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('New Tournament')).toBeInTheDocument();
    });

    it('navigates to new tournament page when clicking New Tournament button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const newTournamentButton = screen.getByText('New Tournament');
        fireEvent.click(newTournamentButton);

        expect(mockNavigate).toHaveBeenCalledWith('/tournament/new');
    });

    it('navigates to tournament details when clicking on a tournament card', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const tournamentCard = screen.getByText('Summer Slam 2024');
        fireEvent.click(tournamentCard.closest('div[class*="cursor-pointer"]')!);

        expect(mockNavigate).toHaveBeenCalledWith('/tournament/t1');
    });

    it('renders filter button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const filterButton = screen.getByText('filter_list');
        expect(filterButton).toBeInTheDocument();
    });
});
