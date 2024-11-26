import { type ComponentProps, forwardRef, useId } from 'react';

import * as styles from './input.css';

type InputProps = ComponentProps<'input'> & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    const id = useId();

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input className={styles.input} id={id} ref={ref} {...props} />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
