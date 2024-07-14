import { expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PokeCard from '../components/PokeCard';
import { BrowserRouter } from 'react-router-dom';

const mockData = {
  id: 7,
  name: 'Name',
  imgUrl: 'imgUrl',
  shinyImgUrl: 'shinyImgUrl',
  artWork: 'artWorkUrl',
  height: 20,
  weight: 10,
};

test('PokeCard test', async () => {
  vi.spyOn(console, 'warn');
  const mockHandleClick = vi.fn();
  render(
    <BrowserRouter>
      <PokeCard
        id={mockData.id}
        name={mockData.name}
        imgUrl={mockData.imgUrl}
        shinyImgUrl={mockData.shinyImgUrl}
        artWork={mockData.artWork}
        height={mockData.height}
        weight={mockData.weight}
      />
    </BrowserRouter>
  );

  const element = screen.getByText(mockData.name);
  const user = userEvent.setup();
  await user.click(element);

  waitFor(() => {
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
