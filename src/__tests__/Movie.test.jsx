import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from '../components/App';
import Movie from '../components/Movie';

test('renders Movie component', () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        { path: 'movie/:id', element: <Movie /> }
      ]
    }
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/movie/1']
  });

  render(<RouterProvider router={router} />);
  expect(screen.getByRole('heading', { name: /Inception/i })).toBeInTheDocument();
});