import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', async () => {
  render(<App />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
