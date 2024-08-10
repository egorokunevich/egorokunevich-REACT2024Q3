import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  return [loading, setLoading] as const;
};
export default useLoading;
