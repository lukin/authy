'use client';

import Link from 'next/link';

import { Button } from '@/components';
import { useAuth } from '@/contexts/auth';

import { Credentials, Providers } from './components';
import * as styles from './page.css';

const AuthPage = () => {
  const { user } = useAuth();

  return user ? (
    <h1 className={styles.heading}>Hey {user.name}! Good to see you.</h1>
  ) : (
    <>
      <h1 className={styles.heading}>Hey friend! Welcome back.</h1>
      <div className={styles.container}>
        <Providers />
        <p className={styles.separator}>Or</p>
        <Credentials />
      </div>
      <p className={styles.paragraph}>
        No account?{' '}
        <Link className={styles.link} href="/">
          Create one
        </Link>
      </p>
    </>
  );
};

export default AuthPage;
