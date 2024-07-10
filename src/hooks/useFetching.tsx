import { Pokemons } from 'api/PokeApi';
import { useState } from 'react';

interface FetchError extends Error {
  message: string;
  statusCode?: number;
}

// type FetchedData = [() => Promise<Pokemons | null>, boolean, string];

export const useFetching = (callback: () => Pokemons) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setError] = useState('');

  function isFetchError(error: unknown): error is FetchError {
    return typeof error === 'object' && error !== null && 'statusCode' in error;
  }

  const fetchFunction = async (): Promise<Pokemons | null> => {
    try {
      setIsLoading(true);
      return await callback();
    } catch (error) {
      if (isFetchError(error)) {
        setError(error.message);
      }
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchFunction, isLoading, errorMessage] as const;
};
