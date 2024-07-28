import { useState } from 'react';
import useLoading from './useLoading';

interface FetchError extends Error {
  message: string;
  statusCode?: number;
}

function isFetchError(error: unknown): error is FetchError {
  return typeof error === 'object' && error !== null && 'statusCode' in error;
}

export const useFetching = <T, Args extends unknown[]>(
  callback: (...args: Args) => Promise<T>
) => {
  const [results, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useLoading();
  const [errorMessage, setError] = useState('');

  const fetchFunction = async (...args: Args) => {
    try {
      setIsLoading('loading');
      const response = await callback(...args);
      setResult(response);
      setIsLoading('success');
    } catch (error) {
      if (isFetchError(error)) {
        setError(error.message);
      }

      setIsLoading('error');
      setResult(null);
    }
  };

  return { fetchFunction, results, isLoading, errorMessage };
};
