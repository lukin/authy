import type { ComponentProps } from 'react';

const GoogleIcon = ({ className }: ComponentProps<'svg'>) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    focusable="false"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.363 16.337c0-.987-.088-1.925-.238-2.837H16v5.637h8.087c-.362 1.85-1.424 3.413-3 4.476v3.75h4.826c2.825-2.613 4.45-6.463 4.45-11.026"
      fill="#4285F4"
    />
    <path
      d="M16 31c4.05 0 7.438-1.35 9.913-3.637l-4.826-3.75c-1.35.9-3.062 1.45-5.087 1.45-3.912 0-7.225-2.638-8.413-6.2H2.612v3.862C5.075 27.625 10.137 31 16 31"
      fill="#34A853"
    />
    <path
      d="M7.588 18.863A8.7 8.7 0 0 1 7.112 16c0-1 .175-1.963.476-2.863V9.275H2.612a14.83 14.83 0 0 0 0 13.45z"
      fill="#FBBC05"
    />
    <path
      d="M16 6.938c2.212 0 4.188.762 5.75 2.25l4.275-4.276C23.438 2.487 20.05 1 16 1 10.137 1 5.075 4.375 2.612 9.275l4.975 3.862c1.188-3.562 4.5-6.2 8.413-6.2Z"
      fill="#EA4335"
    />
  </svg>
);

export default GoogleIcon;