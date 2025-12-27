import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Scoreboard from '../views/Scoreboard';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Scoreboard Component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('renders scoreboard with team names', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText('Eagles')).toBeInTheDocument();
        expect(screen.getByText('Tigers')).toBeInTheDocument();
    });

    it('displays initial scores correctly', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        const scores = screen.getAllByText('24');
        expect(scores.length).toBeGreaterThan(0);
        expect(screen.getByText('22')).toBeInTheDocument();
    });

    it('displays set information', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText('Set 2')).toBeInTheDocument();
        expect(screen.getByText('Sets')).toBeInTheDocument();
    });

    it('increments Eagles score when clicking add button', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        const addButtons = screen.getAllByText('add');
        fireEvent.click(addButtons[0]); // Click Eagles' add button

        expect(screen.getByText('25')).toBeInTheDocument();
    });

    it('decrements Eagles score when clicking remove button', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        const removeButtons = screen.getAllByText('remove');
        fireEvent.click(removeButtons[0]); // Click Eagles' remove button

        expect(screen.getByText('23')).toBeInTheDocument();
    });

    it('increments Tigers score when clicking add button', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        const addButtons = screen.getAllByText('add');
        fireEvent.click(addButtons[1]); // Click Tigers' add button

        expect(screen.getByText('23')).toBeInTheDocument();
    });

    it('does not allow negative scores', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        const removeButtons = screen.getAllByText('remove');
        // Click remove many times
        for (let i = 0; i < 30; i++) {
            fireEvent.click(removeButtons[0]);
        }

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('displays serving indicator', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText('Serving')).toBeInTheDocument();
    });

    it('shows set point indicator when score is 24 or higher', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText('Set Point')).toBeInTheDocument();
    });

    it('displays End Set button', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText('End Set')).toBeInTheDocument();
    });

    it('navigates back when clicking back button', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        const backButton = screen.getByText('arrow_back');
        fireEvent.click(backButton);

        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('displays court and match information', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText("Court 3 • Men's Varsity")).toBeInTheDocument();
        expect(screen.getByText('Semi-Finals')).toBeInTheDocument();
    });

    it('has settings button', () => {
        render(
            <BrowserRouter>
                <Scoreboard />
            </BrowserRouter>
        );

        expect(screen.getByText('settings')).toBeInTheDocument();
    });
});
