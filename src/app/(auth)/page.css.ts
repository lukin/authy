import { css } from '@/styled-system/css';

export const heading = css({
  fontSize: '2xl',
  fontWeight: 'medium',
});

export const container = css({
  display: 'grid',
  gap: '4',
});

export const separator = css({
  color: 'gray.500',
  textAlign: 'center',
});

export const paragraph = css({
  textAlign: 'center',
});

export const link = css({
  fontWeight: 'medium',

  '&:hover': {
    textDecoration: 'underline',
  },
});
