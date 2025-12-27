import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
    it('renders all navigation items', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Tournaments')).toBeInTheDocument();
        expect(screen.getByText('Teams')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    it('displays navigation icons', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        // Check for material icons
        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('emoji_events')).toBeInTheDocument();
        expect(screen.getByText('groups')).toBeInTheDocument();
        expect(screen.getByText('settings')).toBeInTheDocument();
    });

    it('has correct number of navigation links', () => {
        const { container } = render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        const navLinks = container.querySelectorAll('a');
        expect(navLinks).toHaveLength(4);
    });

    it('applies correct styling to navigation container', () => {
        const { container } = render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        const nav = container.querySelector('nav');
        expect(nav).toHaveClass('fixed', 'bottom-0');
    });
});
