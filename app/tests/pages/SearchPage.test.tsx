import { store } from '../../store';
import { mockedPokemon, mockedPokemons } from '../mocks/mockedPokemon';
import { server } from '../mocks/server';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { json } from '@remix-run/node';
import { createRemixStub } from '@remix-run/testing';
import Index from '@/routes/_index';

const mockedNavigate = jest.fn();
const mockedParams = {
  pokeName: mockedPokemon.name,
};

jest.mock('@remix-run/react', () => ({
  ...jest.requireActual('@remix-run/react'),
  useNavigate: () => mockedNavigate,
  useParams: () => mockedParams,
}));

describe('SearchPage Integration testing', () => {
  beforeAll(() => {
    server.listen();
    const IndexStub = createRemixStub([
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
        <IndexStub />
      </Provider>
    );
  });

  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Should navigate to Index if the DetailsPage is open', async () => {
    const user = userEvent.setup();
    const mainSection = await screen.findByTestId('searchPage-mainSection');

    await user.click(mainSection);

    expect(mockedNavigate).toHaveBeenCalledWith(
      `/?page=${mockedPokemons.count}`
    );
  });
});
