import Index from '@/pages/index';
import { render, screen } from '@testing-library/react';
import { mockedPokemon } from '../mocks/mockedPokemon';

const mockedUseRouter = jest.fn();
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => mockedUseRouter,
}));
describe('Index', () => {
  test('Index should render in the document', async () => {
    render(
      <Index pokes={[mockedPokemon]} totalCount={[mockedPokemon].length} />
    );
    const card = await screen.findByTestId('poke-card');
    const cardName = await screen.findByText(mockedPokemon.name);
    expect(card).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
  });
});
