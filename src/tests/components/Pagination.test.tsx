import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination, {
  PaginationProps,
} from '@/components/Pagination/Pagination';

const mockedPaginationProps: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
};

describe('Pagination', () => {
  it('Should render in the document', async () => {
    render(
      <Pagination
        totalPages={mockedPaginationProps.totalPages}
        currentPage={mockedPaginationProps.currentPage}
      />
    );
    const pagination = await screen.findByTestId('pagination');

    expect(pagination).toBeInTheDocument();
  });
});
