import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const headerItem = [
  {
    name: 'WORKS',
    link: '#works',
  },
  {
    name: 'SKILL',
    link: '#skill',
  },
  {
    name: 'ABOUT',
    link: '#link',
  },
];

const Header: React.VFC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      zIndex="10"
      width="100%"
      bgColor="white"
      shadow="md"
      py={6}
    >
      <Flex alignItems="center" justifyContent="space-between" px="20">
        <Heading as="h1" size="lg" color="blue.400">
          PPHOS
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
