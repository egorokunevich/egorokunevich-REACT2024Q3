import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '@/components/Loader';

describe('Loader', () => {
  it('Should render in the document', async () => {
    render(<Loader />);
    const componentByTestId = await screen.findByTestId('loader');
    expect(componentByTestId).toBeInTheDocument();
  });
});
