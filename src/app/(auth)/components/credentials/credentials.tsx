'use client';

import type { FormEvent } from 'react';

import { Button, Input } from '@/components';

import { useAuthForm } from '../../hooks/use-auth-form';
import * as styles from './credentials.css';

const Credentials = () => {
  const { error, isLoading, handleSubmit } = useAuthForm();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await handleSubmit(formData, 'https://example.com/auth/credentials');
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input name="x-csrf-token" value="x-csrf-token" type="hidden" />
      <Input
        autoCapitalize="off"
        autoComplete="email"
        autoCorrect="off"
        autoFocus
        disabled={isLoading}
        inputMode="email"
        label="Email"
        name="email"
        required
        type="email"
      />
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <Button color="primary" disabled={isLoading} fullWidth type="submit">
        {isLoading ? 'Loading...' : 'Continue'}
      </Button>
    </form>
  );
};

export default Credentials;
