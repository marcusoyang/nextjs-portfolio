import { Box, chakra } from '@chakra-ui/react';

export const BioText = chakra(Box, {
  baseStyle: {
    pl: '3.5em',
    textIndent: '-3.5em',
  },
});

export const BioYear = chakra('span', {
  baseStyle: {
    float: 'left',
    w: '3.5em',
    // mr: '1em',
    fontWeight: 800,
  },
});
