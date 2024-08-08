import { store } from '@/store';
import { mockedPokemon, mockedPokemons } from '@/tests/mocks/mockedPokemon';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokeCard from '@/components/PokeCard';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

// Mock useRouter hook
jest.mock('next/navigation', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    query: { name: 'pikachu' },
  };

  const searchParams = {
    get: jest.fn(),
  };

  return {
    useRouter: jest.fn().mockReturnValue(router),
    useSearchParams: jest.fn().mockReturnValue(searchParams),
  };
});

describe('PokeCard', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PokeCard pokemon={mockedPokemon} isSelected={false} />
      </Provider>
    );
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

describe('PokeCard Integration testing', () => {
  test('Click on a card should call a navigate function', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <PokeCard pokemon={mockedPokemon} isSelected={false} />
      </Provider>
    );

    const card = await screen.findByTestId('poke-card');
    await user.click(card);

    expect(useRouter().push).toHaveBeenCalledTimes(1);
    expect(useRouter().push).toHaveBeenCalledWith(
      `/pokemon/${mockedPokemon.name}?page=${mockedPokemons.count}`
    );
  });
});
