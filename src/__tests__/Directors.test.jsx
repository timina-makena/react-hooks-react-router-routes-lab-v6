/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Directors from '../components/Directors';

const mockDirectors = [
  { name: "Director 1", movies: ["Movie 1"] }
];

test('renders each director\'s name', () => {
  const router = createMemoryRouter(
    [{
      path: "/directors",
      element: <Directors directors={mockDirectors} />,
    }],
    { initialEntries: ["/directors"] }
  );

  render(<RouterProvider router={router} />);
  expect(screen.getByText(mockDirectors[0].name)).toBeInTheDocument();
});