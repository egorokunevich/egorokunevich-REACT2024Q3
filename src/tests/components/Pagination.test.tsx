import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination, {
  PaginationProps,
} from '@/components/Pagination/Pagination';
import userEvent from '@testing-library/user-event';

const mockedPaginationProps: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  handleClick: jest.fn(),
};

describe('Pagination', () => {
  it('Should render in the document', async () => {
    render(
      <Pagination
        totalPages={mockedPaginationProps.totalPages}
        currentPage={mockedPaginationProps.currentPage}
        handleClick={mockedPaginationProps.handleClick}
      />
    );
    const pagination = await screen.findByTestId('pagination');

    expect(pagination).toBeInTheDocument();
  });
  it('Should call a handler on button click', async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        totalPages={mockedPaginationProps.totalPages}
        currentPage={mockedPaginationProps.currentPage}
        handleClick={mockedPaginationProps.handleClick}
      />
    );
    // render(
    //   <Pagination
    //     totalPages={mockedPaginationProps.totalPages}
    //     currentPage={mockedPaginationProps.currentPage}
    //     handleClick={mockedPaginationProps.handleClick}
    //   />
    // );
    const btns = await screen.findAllByTestId('page-btn');
    await user.click(btns[1]);
    expect(mockedPaginationProps.handleClick).toHaveBeenCalled();
  });
  it('Should not call a handler on button without page number click', async () => {
    const user = userEvent.setup();
    const mockedHandler = jest.fn();
    render(
      <Pagination
        totalPages={mockedPaginationProps.totalPages}
        currentPage={mockedPaginationProps.currentPage}
        handleClick={mockedHandler}
      />
    );
    const btns = await screen.findAllByTestId('page-btn');
    await user.click(btns[btns.length - 2]);
    expect(mockedHandler).toHaveBeenCalledTimes(0);
  });
});
