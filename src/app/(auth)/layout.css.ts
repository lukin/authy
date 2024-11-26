import { css } from '@/styled-system/css';

export const container = css({
  backgroundColor: 'white',
  blockSize: 'full',
  display: 'grid',
});

export const card = css({
  display: 'grid',
  gap: '12',
  margin: 'auto',
  maxInlineSize: 'lg',
  padding: '12',
  width: 'full',
});

export const header = css({
  justifySelf: 'center',
});

export const logo = css({
  fontFamily: 'cal',
  fontSize: '6xl',
});

export const main = css({
  display: 'grid',
  gap: '12',
});
