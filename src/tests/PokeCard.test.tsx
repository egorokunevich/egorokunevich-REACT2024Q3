import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokeCard from '../components/PokeCard';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import { useGetPokemonQuery } from 'api/reduxApi';
jest.mock('./useGetPokemonQuery');
describe('PokeCard', () => {
  beforeEach(() => {
    useGetPokemonQuery.mockClear();
  });
  test('PokeCard should render in the document', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PokeCard name={'Pikachu'} />
        </Provider>
      </MemoryRouter>
    );

    const card = await screen.findByTestId('poke-card');
    expect(card).toBeInTheDocument();
  });
  test('Loader should render in the document', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PokeCard name={'Pikachu'} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
