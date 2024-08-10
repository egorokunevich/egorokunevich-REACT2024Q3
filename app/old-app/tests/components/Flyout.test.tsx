import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Flyout from '@/components/Flyout';
import { mockedPokemon } from '../mocks/mockedPokemon';
import { Provider } from 'react-redux';
import { store } from '@/store';

const mockData = [mockedPokemon];
jest.mock('@/hooks/reduxHooks');
// Mock URL.createObjectURL function
window.URL.createObjectURL = jest.fn();

describe('Flyout', () => {
  it('Should render in the document', async () => {
    render(
      <Provider store={store}>
        <Flyout selectedPokemons={mockData} />
      </Provider>
    );
    const componentByTestId = await screen.findByTestId('flyout');
    const componentByText = await screen.findByText(
      `Pokemons selected: ${mockData.length}`
    );
    expect(componentByTestId).toBeInTheDocument();
    expect(componentByText).toBeInTheDocument();
  });
});
