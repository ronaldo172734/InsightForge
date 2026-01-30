// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InsightForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/InsightForge/i);
    expect(titleElement).toBeInTheDocument();
});
