import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@testing-library/jest-dom';
import IndexPage from '@/app/page';
import SubLayout from '@/app/SubLayout';

jest.mock('next/router', () => {
  const router = {
    query: { page: 1 },
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

const mockedSearchParams = {
  page: '1',
  search: '',
};

describe('Index', () => {
  test('Index should render in the document', async () => {
    render(
      <Provider store={store}>
        <SubLayout>
          <IndexPage searchParams={mockedSearchParams} />
        </SubLayout>
      </Provider>
    );
    const page = await screen.findByTestId('searchPage-mainSection');
    expect(page).toBeInTheDocument();
  });
});
