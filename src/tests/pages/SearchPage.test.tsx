import SearchPage from '@/components/pages/SearchPage';
import { store } from '@/store';
import { mockedPokemons } from '@/tests/mocks/mockedPokemon';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

// Mock useRouter hook
jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    query: { name: 'pikachu' },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('PokeCard Integration testing', () => {
  test('Click on a main section should call a navigate function', async () => {
    render(
      <Provider store={store}>
        <SearchPage pokemons={[]} totalCount={0} />
      </Provider>
    );

    const user = userEvent.setup();

    const mainSection = await screen.findByTestId('searchPage-mainSection');
    await user.click(mainSection);

    expect(useRouter().push).toHaveBeenCalledTimes(1);
    expect(useRouter().push).toHaveBeenCalledWith(
      `/?page=${mockedPokemons.count}`
    );
  });
});
