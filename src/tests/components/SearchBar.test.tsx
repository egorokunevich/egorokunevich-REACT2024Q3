import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/components/SearchBar';
import userEvent from '@testing-library/user-event';

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
  const mockedHandleSearch = jest.fn();
  beforeEach(() => {
    render(<SearchBar onSearch={mockedHandleSearch} />);
  });
  it('Should render in the document', async () => {
    const searchBar = await screen.findByTestId('search-bar');

    expect(searchBar).toBeInTheDocument();
  });
  it('Should call a handler on button click', async () => {
    const user = userEvent.setup();

    const searchBtn = await screen.findByTestId('search-btn');
    await user.click(searchBtn);
    expect(mockedHandleSearch).toHaveBeenCalledTimes(1);
  });
  it('Should call a handler on Enter press', async () => {
    const searchBar = await screen.findByTestId('search-bar');

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    searchBar.dispatchEvent(event);
    expect(mockedHandleSearch).toHaveBeenCalledTimes(1);
  });
});
