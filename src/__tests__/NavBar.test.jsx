import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders a Movies <NavLink>', () => {
  const router = createMemoryRouter(
    [{
      path: "/",
      element: <NavBar />,
    }],
    { initialEntries: ["/"] }
  );
  
  render(<RouterProvider router={router} />);
  const moviesLink = screen.getByText(/movies/i);
  expect(moviesLink).toBeInTheDocument();
  expect(moviesLink).toHaveAttribute('href', '/movies');
});