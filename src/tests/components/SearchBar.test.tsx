import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  it('Should render in the document', async () => {
    render(<SearchBar onSearch={jest.fn()} />);
    const componentByTestId = await screen.findByTestId('search-bar');

    expect(componentByTestId).toBeInTheDocument();
  });
});
