import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import TimeframeSelector from './TimeframeSelector';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders timeframe selector', () => {
  const { getByText } = render(<TimeframeSelector />);
  const dropdown = getByText(/Past 60 Days/i);
  expect(dropdown).toBeInTheDocument();
});
