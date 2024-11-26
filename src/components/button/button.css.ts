import { cva } from '@/styled-system/css';

const styles = cva({
  base: {
    alignItems: 'center',
    borderRadius: 'md',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    gap: '2',
    minBlockSize: '12',
    paddingInline: '4',
  },
  defaultVariants: {
    color: 'primary',
    fullWidth: false,
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'black',
        color: 'white',

        '&:hover': {
          backgroundColor: 'black/90',
        },
      },
      secondary: {
        backgroundColor: 'gray.100',

        '&:hover': {
          backgroundColor: 'gray.200',
        },
      },
    },
    disabled: {
      true: {
        opacity: '80%',
        pointerEvents: 'none',
      },
    },
    fullWidth: {
      true: {
        justifyContent: 'center',
        inlineSize: 'full',
      },
    },
  },
});

export default styles;
