import { css } from '@/styled-system/css';

export const label = css({
  display: 'inline-block',
  fontWeight: 'medium',
  paddingBlockEnd: '2',
});

export const input = css({
  blockSize: '12',
  border: '1px solid',
  borderColor: 'gray.300',
  borderRadius: 'md',
  inlineSize: 'full',
  paddingInline: '4',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '80%',
  },
});
