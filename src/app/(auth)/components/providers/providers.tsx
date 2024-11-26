'use client';

import { type FormEvent, useState } from 'react';

import { Button } from '@/components';
import { GithubIcon, GoogleIcon } from '@/icons';

import { useAuthForm } from '../../hooks/use-auth-form';
import * as styles from './providers.css';

const Providers = () => {
  const [provider, setProvider] = useState('');

  const { error, isLoading, handleSubmit } = useAuthForm();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const provider = formData.get('provider');

    setProvider(provider as string);

    await handleSubmit(
      formData,
      `https://example.com/auth/providers/${provider}`,
    );
  };

  return (
    <section>
      <ul className={styles.list}>
        <li>
          <form onSubmit={handleFormSubmit}>
            <input name="x-csrf-token" value="x-csrf-token" type="hidden" />
            <input name="provider" value="github" type="hidden" />
            <Button
              color="secondary"
              disabled={isLoading && provider === 'github'}
              fullWidth
              type="submit"
            >
              <GithubIcon className={styles.icon} />{' '}
              {isLoading && provider === 'github'
                ? 'Loading...'
                : 'Continue with GitHub'}
            </Button>
          </form>
        </li>
        <li>
          <form onSubmit={handleFormSubmit}>
            <input name="x-csrf-token" value="x-csrf-token" type="hidden" />
            <input name="provider" value="google" type="hidden" />
            <Button
              color="secondary"
              disabled={isLoading && provider === 'google'}
              fullWidth
              type="submit"
            >
              <GoogleIcon className={styles.icon} />{' '}
              {isLoading && provider === 'google'
                ? 'Loading...'
                : 'Continue with Google'}
            </Button>
          </form>
        </li>
      </ul>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </section>
  );
};

export default Providers;
