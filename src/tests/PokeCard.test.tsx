import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokeCard from '../components/PokeCard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

describe('PokeCard', () => {
  test('PokeCard should render in the document', async () => {
    await render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PokeCard name={'Pikachu'} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    waitFor(() => {
      expect(screen.getByTestId('poke-card')).toBeInTheDocument();
    });
  });
  test('Loader should render in the document', async () => {
    await render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PokeCard name={'Pikachu'} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
