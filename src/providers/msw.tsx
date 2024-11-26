'use client';

import { type ReactNode, Suspense, use } from 'react';

import handlers from '@/mocks/handlers';

const mockingEnabledPromise =
  typeof window !== 'undefined'
    ? import('@/mocks/worker').then(async (worker) => {
        await worker.default.start({
          onUnhandledRequest(request, print) {
            if (
              request.url.includes('_next') ||
              request.url.includes('styled-system')
            )
              return;

            print.warning();
          },
        });

        worker.default.use(...handlers);

        console.log(worker.default.listHandlers());
      })
    : Promise.resolve();

const MSWProviderWrapper = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  use(mockingEnabledPromise);

  return children;
};

const MSWProvider = ({ children }: Readonly<{ children: ReactNode }>) => (
  <Suspense fallback={null}>
    <MSWProviderWrapper>{children}</MSWProviderWrapper>
  </Suspense>
);

export default MSWProvider;
