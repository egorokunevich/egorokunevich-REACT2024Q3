import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '@/store';
import App from '@/root';

describe('Header', () => {
  it('Should render in the document', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const themeToggler = await screen.findByTestId('theme-toggler');
    await user.click(themeToggler);
    const header = await screen.findByTestId('header');

    expect(header).toBeInTheDocument();
    expect(themeToggler).toBeInTheDocument();
  });
});
