import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders New York as one destination', () => {
  render(<App />);
  const destinationElement = screen.getByText(/New York/i);
  expect(destinationElement).toBeInTheDocument();
});
