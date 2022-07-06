import { Box, chakra } from '@chakra-ui/react';

export const BioText = chakra(Box, {
  baseStyle: {
    pl: '3.4em',
    textIndent: '-3.4em',
  },
});

export const BioYear = chakra('span', {
  baseStyle: {
    mr: '1em',
    fontWeight: 800,
  },
});
