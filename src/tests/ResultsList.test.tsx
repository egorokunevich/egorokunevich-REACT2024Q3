import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ResultsList from '../components/ResultsList';

const mockData = [
  {
    name: 'Poke1',
    sprites: {
      front_default: '',
      front_shiny: '',
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    height: 10,
    weight: 10,
    id: 1,
  },
  {
    name: 'Poke2',
    sprites: {
      front_default: '',
      front_shiny: '',
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    height: 20,
    weight: 20,
    id: 2,
  },
];

describe('ResultList tests', () => {
  test('ResultsList renders in document', () => {
    render(
      <BrowserRouter>
        <ResultsList items={mockData} />
      </BrowserRouter>
    );
    const resultListWrapper = screen.getByTestId('resultsListWrapper');

    expect(resultListWrapper).toBeInTheDocument();
  });
  test(`ResultsList renders ${mockData.length} cards`, () => {
    render(
      <BrowserRouter>
        <ResultsList items={mockData} />
      </BrowserRouter>
    );
    const cards = screen.getAllByTestId('card');

    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });

    expect(cards.length).toBe(mockData.length);
  });
});
