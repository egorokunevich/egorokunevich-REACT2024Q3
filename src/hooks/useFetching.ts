import { useState } from 'react';

interface FetchError extends Error {
  message: string;
  statusCode?: number;
}

export const useFetching = <T, Args extends unknown[]>(
  callback: (...args: Args) => Promise<T> | T
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setError] = useState('');

  function isFetchError(error: unknown): error is FetchError {
    return typeof error === 'object' && error !== null && 'statusCode' in error;
  }

  const fetchFunction = async (...args: Args) => {
    try {
      setIsLoading(true);
      return await callback(...args);
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
