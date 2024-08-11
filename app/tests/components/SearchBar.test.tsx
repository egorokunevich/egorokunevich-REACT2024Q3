import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createRemixStub } from '@remix-run/testing';
import Index from '@/routes/_index';
import { mockedPokemon } from '../mocks/mockedPokemon';
import { json } from '@remix-run/node';

describe('SearchBar', () => {
  it('Should render in the document', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Index,
        loader() {
          return json({ pokemons: [mockedPokemon], totalCount: 1 });
        },
      },
    ]);

    render(
      <Provider store={store}>
        <RemixStub />
      </Provider>
    );

    const componentByTestId = await screen.findByTestId('search-bar');

    expect(componentByTestId).toBeInTheDocument();
  });
});
