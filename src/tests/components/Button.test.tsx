import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Buttons/Button';

const mockProps = {
  txt: 'mockText',
};

describe('Button', () => {
  it('Should render in the document', async () => {
    render(<Button txt={mockProps.txt} />);
    const buttonByTestId = await screen.findByTestId('button');
    const buttonByText = await screen.findByText(mockProps.txt);
    expect(buttonByTestId).toBeInTheDocument();
    expect(buttonByText).toBeInTheDocument();
  });
});
