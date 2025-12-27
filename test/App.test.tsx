import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('displays navigation bar', () => {
        render(<App />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Tournaments')).toBeInTheDocument();
        expect(screen.getByText('Teams')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    it('renders home page by default', () => {
        render(<App />);

        expect(screen.getByText('Live Now')).toBeInTheDocument();
        expect(screen.getByText('Upcoming')).toBeInTheDocument();
    });

    it('displays search functionality', () => {
        render(<App />);

        expect(screen.getByPlaceholderText('Search events...')).toBeInTheDocument();
    });

    it('shows New Tournament button', () => {
        render(<App />);

        expect(screen.getByText('New Tournament')).toBeInTheDocument();
    });
});
