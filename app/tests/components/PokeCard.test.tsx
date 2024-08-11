import SearchPage from '../../pages/SearchPage';
import { store } from '../../store';
import { mockedPokemon, mockedPokemons } from '../mocks/mockedPokemon';
import { server } from '../mocks/server';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from '@remix-run/react';
import 'whatwg-fetch';
import userEvent from '@testing-library/user-event';
import PokeCard from '../../components/PokeCard';

describe('PokeCard', () => {
  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes>
            <Route index element={<SearchPage />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Loader should render in the document', async () => {
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
  test('PokeCard should render in the document', async () => {
    const card = await screen.findByTestId('poke-card');
    const cardName = await screen.findByText(mockedPokemon.name);
    expect(card).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
  });
  test('PokeCard should render relevant data', async () => {
    const name = await screen.findByText(mockedPokemon.name);
    const weight = await screen.findByText(`Weight: ${mockedPokemon.weight}`);
    const height = await screen.findByText(`Height: ${mockedPokemon.height}`);

    expect(name).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(height).toBeInTheDocument();
  });
});

// Mock navigate function
const mockedNavigate = jest.fn();
jest.mock('@remix-run/react', () => ({
  ...jest.requireActual('@remix-run/react'),
  useNavigate: () => mockedNavigate,
}));

describe('PokeCard Integration testing', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Click on a card should call a navigate function', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PokeCard name={mockedPokemon.name} isSelected={false} />
        </Provider>
      </MemoryRouter>
    );
    const card = await screen.findByTestId('poke-card');
    await user.click(card);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith(
      `/pokemon/${mockedPokemon.name}?page=${mockedPokemons.count}`
    );
  });
});
