import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Settings from '../views/Settings';

describe('Settings Component', () => {
    it('renders settings page title', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    it('displays account section', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Account')).toBeInTheDocument();
    });

    it('shows app preferences section', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('App Preferences')).toBeInTheDocument();
    });

    it('displays sound effects toggle', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Sound Effects')).toBeInTheDocument();
    });

    it('displays haptic feedback toggle', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Haptic Feedback')).toBeInTheDocument();
    });

    it('shows support section', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Support')).toBeInTheDocument();
    });

    it('displays help center option', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Help Center')).toBeInTheDocument();
    });

    it('shows admin login option', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('Administrator Login')).toBeInTheDocument();
    });

    it('has back button', () => {
        render(
            <BrowserRouter>
                <Settings />
            </BrowserRouter>
        );

        expect(screen.getByText('arrow_back')).toBeInTheDocument();
    });
});
