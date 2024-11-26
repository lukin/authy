import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { AuthProvider } from '@/contexts/auth';
import MSWProvider from '@/providers/msw';
import { cx } from '@/styled-system/css';
import '@/styles/globals.css';

import styles from './layout.css';

export const metadata: Metadata = {
  title: 'Authy Corporation',
};

const CalSans = localFont({
  src: '../../node_modules/cal-sans/fonts/webfonts/CalSans-SemiBold.woff2',
  variable: '--font-cal-sans',
});

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html
    className={cx(CalSans.variable, GeistSans.variable, styles)}
    dir="ltr"
    lang="en"
  >
    <body className={styles} suppressHydrationWarning>
      <MSWProvider>
        <AuthProvider>{children}</AuthProvider>
      </MSWProvider>
    </body>
  </html>
);

export default RootLayout;
