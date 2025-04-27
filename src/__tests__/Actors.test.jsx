/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Actors from '../components/Actors';

const mockActors = [
  { name: "Actor 1", movies: ["Movie 1"] },
  { name: "Actor 2", movies: ["Movie 2"] }
];

test('renders each actor\'s name', () => {
  const router = createMemoryRouter(
    [{
      path: "/actors",
      element: <Actors actors={mockActors} />,
    }],
    { initialEntries: ["/actors"] }
  );

  render(<RouterProvider router={router} />);
  
  mockActors.forEach(actor => {
    expect(screen.getByText(actor.name)).toBeInTheDocument();
  });
});