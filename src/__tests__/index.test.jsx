import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from '../components/App';

test('renders home page by default', () => {
  const router = createMemoryRouter(
    [{
      path: "/",
      element: <App />,
    }],
    { initialEntries: ["/"] }
  );

  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});