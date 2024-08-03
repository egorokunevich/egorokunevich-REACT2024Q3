import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import SearchPage from '@/components/pages/SearchPage';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

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
