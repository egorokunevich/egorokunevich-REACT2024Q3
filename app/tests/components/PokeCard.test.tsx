import { store } from '../../store';
import { mockedPokemon } from '../mocks/mockedPokemon';
import { server } from '../mocks/server';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import 'whatwg-fetch';
import userEvent from '@testing-library/user-event';
import { json } from '@remix-run/node';

import { createRemixStub } from '@remix-run/testing';
import Index from '@/routes/_index';

describe('PokeCard', () => {
  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => {
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
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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

  test('Click on a card should call a navigate function with relevant data', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: Index,
        loader() {
          return json({ pokemons: [mockedPokemon], totalCount: 1 });
        },
      },
    ]);

    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <RemixStub />
      </Provider>
    );
    const card = await screen.findByTestId('poke-card');
    const checkbox = await screen.findByTestId('card-checkbox');
    await user.click(card);
    await user.click(checkbox);

    expect(mockedNavigate).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith(
      `/pokemon/${mockedPokemon.name}?page=${1}`
    );
  });
});
