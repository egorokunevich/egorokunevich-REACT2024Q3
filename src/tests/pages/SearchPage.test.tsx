import SearchPage from '@/components/pages/SearchPage';
import { store } from '@/store';
import { mockedPokemons } from '@/tests/mocks/mockedPokemon';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';

// Mock useRouter hook
jest.mock('next/navigation', () => {
  const router = {
    push: jest.fn(),
  };

  const searchParams = {
    get: jest.fn(),
  };

  const params = { name: 'pikachu' };

  return {
    useRouter: jest.fn().mockReturnValue(router),
    useSearchParams: jest.fn().mockReturnValue(searchParams),
    useParams: jest.fn().mockReturnValue(params),
  };
});

describe('SearchPage Integration testing', () => {
  test('Click on a main section should call a navigate function', async () => {
    render(
      <Provider store={store}>
        <SearchPage pokemons={[]} totalCount={0} />
      </Provider>
    );

    const user = userEvent.setup();

    const mainSection = await screen.findByTestId('searchPage-mainSection');
    await user.click(mainSection);

    expect(useRouter().push).toHaveBeenCalled();
    expect(useRouter().push).toHaveBeenCalledWith(
      `/?page=${mockedPokemons.count}`
    );
  });
});
