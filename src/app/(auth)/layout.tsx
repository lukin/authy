import Link from 'next/link';
import type { ReactNode } from 'react';

import * as styles from './layout.css';

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <header className={styles.header}>
        <Link
          aria-label="Visit Authy Homepage"
          className={styles.logo}
          href="/"
        >
          Authy
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  </div>
);

export default AuthLayout;
