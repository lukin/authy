import { useState } from 'react';

import { useAuth } from '@/contexts/auth';

type UseAuthForm = {
  error: string | null;
  handleSubmit: (formData: FormData, endpoint: string) => Promise<void>;
  isLoading: boolean;
};

export const useAuthForm = (): UseAuthForm => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (
    formData: FormData,
    endpoint: string,
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        body: formData,
        method: 'post',
      });

      if (!response.ok) throw new Error('Failed to submit the form');

      const data = await response.json();

      login(data.user);
    } catch (error) {
      setError(
        (error as Record<string, string>).message ??
          'An unknown error occurred',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    handleSubmit,
    isLoading,
  };
};
