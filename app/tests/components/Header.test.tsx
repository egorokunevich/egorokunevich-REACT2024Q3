import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

describe('Header', () => {
  it('Should render in the document', async () => {
    render(<Header />);
    await waitFor(() =>
      expect(screen.getByTestId('header')).toBeInTheDocument()
    );
  });
});
