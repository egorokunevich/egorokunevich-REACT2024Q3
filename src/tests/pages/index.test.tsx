import Index from '@/pages/index';
import { render, screen } from '@testing-library/react';
import { mockedPokemon } from '../mocks/mockedPokemon';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@testing-library/jest-dom';

jest.mock('next/router', () => {
  const router = {
    query: { page: 1 },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('Index', () => {
  test('Index should render in the document', async () => {
    render(
      <Provider store={store}>
        <Index pokes={[mockedPokemon]} totalCount={[mockedPokemon].length} />
      </Provider>
    );
    const card = await screen.findByTestId('poke-card');
    const cardName = await screen.findByText(mockedPokemon.name);
    expect(card).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
  });
});
