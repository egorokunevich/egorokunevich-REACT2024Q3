import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import SearchPage from '@/pages/SearchPage';
import { MemoryRouter, Routes, Route } from '@remix-run/react';

describe('SearchBar', () => {
  it('Should render in the document', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes>
            <Route index element={<SearchPage />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const componentByTestId = await screen.findByTestId('search-bar');

    expect(componentByTestId).toBeInTheDocument();
  });
});
