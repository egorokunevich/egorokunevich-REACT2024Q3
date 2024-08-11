import SearchPage from '@/pages/SearchPage';
import { store } from '@/store';
import { mockedPokemons } from '@/tests/mocks/mockedPokemon';
import { server } from '@/tests/mocks/server';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from '@remix-run/react';

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
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchPage />
        </Provider>
      </MemoryRouter>
    );
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Click on a main section should call a navigate function', async () => {
    const user = userEvent.setup();

    const mainSection = await screen.findByTestId('searchPage-mainSection');
    await user.click(mainSection);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith(
      `/?page=${mockedPokemons.count}`
    );
  });
});
