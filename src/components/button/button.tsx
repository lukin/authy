import { type ComponentProps, forwardRef } from 'react';

import type { RecipeVariantProps } from '@/styled-system/css';

import styles from './button.css';

export type ButtonVariants = RecipeVariantProps<typeof styles>;

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, color, disabled, fullWidth, type = 'button', ...props },
    ref,
  ) => (
    <button
      className={styles({ color, disabled, fullWidth })}
      disabled={disabled}
      ref={ref}
      type={type}
      {...props}
    >
      {children}
    </button>
  ),
);

export default Button;
