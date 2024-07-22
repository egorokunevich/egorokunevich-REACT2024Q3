import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ResultsList from '../components/ResultsList';

const mockData = [{ name: 'Name1' }, { name: 'Name2' }];
describe('ResultsList', () => {
  test('Should render specified number of cards', async () => {
    await render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ResultsList />}></Route>
        </Routes>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByTestId('loader').length).toBe(mockData.length);
    });
  });
  test('Should display a message if no cards present', async () => {
    await render(<ResultsList />);
    expect(screen.getByTestId('no-results')).toBeInTheDocument();
  });
});
