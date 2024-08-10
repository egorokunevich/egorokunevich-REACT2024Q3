import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageButton from '@/components/Pagination/PageButton';

const mockProps = [
  {
    txt: '1',
    isActive: false,
  },
  {
    txt: '2',
    isActive: false,
  },
];

describe('PageButton', () => {
  it('Should render in the document', async () => {
    render(
      <>
        <PageButton txt={mockProps[0].txt} isActive={mockProps[0].isActive} />
        <PageButton txt={mockProps[1].txt} isActive={mockProps[1].isActive} />
      </>
    );
    const buttonByTestId = await screen.findAllByTestId('page-btn');
    const buttonByText = await screen.findByText(mockProps[1].txt);
    expect(buttonByTestId[0]).toBeInTheDocument();
    expect(buttonByTestId[1]).toBeInTheDocument();
    expect(buttonByText).toBeInTheDocument();
  });
});
