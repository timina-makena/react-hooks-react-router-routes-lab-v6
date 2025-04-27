import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from '../components/App';

test('renders the Movies component', () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <App />,
        children: [
          { path: 'movies', element: <h1>Movies Page</h1> }
        ]
      }
    ],
    {
      initialEntries: ['/movies']
    }
  );

  render(<RouterProvider router={router} />);
  expect(screen.getByRole('heading', { name: /Movies Page/i })).toBeInTheDocument();
});