/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';

test('renders Home Page heading', () => {
  const router = createMemoryRouter(
    [{
      path: "/",
      element: <Home />,
    }],
    { initialEntries: ["/"] }
  );

  render(<RouterProvider router={router} />);
  expect(screen.getByRole('heading', { name: /Home Page/ })).toBeInTheDocument();
});