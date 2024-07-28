import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageButton from '@/components/Pagination/PageButton';
import userEvent from '@testing-library/user-event';

const mockProps = [
  {
    txt: 'mock',
    isActive: false,
    handleClick: jest.fn(),
  },
];

describe('PageButton', () => {
  it('Should render in the document', async () => {
    const user = userEvent.setup();

    render(
      <PageButton
        txt={mockProps[0].txt}
        isActive={mockProps[0].isActive}
        handleClick={mockProps[0].handleClick()}
      />
    );
    const buttonByTestId = await screen.findByTestId('page-btn');
    const buttonByText = await screen.findByText(mockProps[0].txt);
    expect(buttonByTestId).toBeInTheDocument();
    expect(buttonByText).toBeInTheDocument();

    await user.click(buttonByTestId);
    expect(mockProps[0].handleClick).toHaveBeenCalled();
  });
});
