import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/components/SearchBar';

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    query: { name: 'pikachu' },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('SearchBar', () => {
  it('Should render in the document', async () => {
    render(<SearchBar onSearch={jest.fn()} />);
    const componentByTestId = await screen.findByTestId('search-bar');

    expect(componentByTestId).toBeInTheDocument();
  });
});
