import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Teams from '../views/Teams';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Teams Component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('renders team management page title', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        expect(screen.getByText('Team Management')).toBeInTheDocument();
    });

    it('displays all teams', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        expect(screen.getByText('Spike Force')).toBeInTheDocument();
        expect(screen.getByText('Net Ninjas')).toBeInTheDocument();
        expect(screen.getByText('Block Party')).toBeInTheDocument();
        expect(screen.getByText('Ace Ventures')).toBeInTheDocument();
        expect(screen.getByText('Volley Llamas')).toBeInTheDocument();
        expect(screen.getByText('Sandy Cheeks')).toBeInTheDocument();
    });

    it('shows team groups', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        const groupLabels = screen.getAllByText(/Group [AB]/);
        expect(groupLabels.length).toBeGreaterThan(0);
    });

    it('displays player count for teams', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        expect(screen.getByText('12 players')).toBeInTheDocument();
    });

    it('shows edit and delete buttons for each team', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        const editIcons = screen.getAllByText('edit');
        const deleteIcons = screen.getAllByText('delete');

        expect(editIcons.length).toBeGreaterThan(0);
        expect(deleteIcons.length).toBeGreaterThan(0);
    });

    it('has add team button', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        expect(screen.getByText('add')).toBeInTheDocument();
    });

    it('displays search input', () => {
        render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>
        );

        expect(screen.getByPlaceholderText('Search teams...')).toBeInTheDocument();
    });
});
