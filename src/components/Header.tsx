import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Stack } from '@chakra-ui/react';

import NavItem from './NavItem';
import NavDrawer from './NavDrawer';

const headerItem = [
  {
    label: 'WORKS',
    href: '#works',
  },
  {
    label: 'SKILL',
    href: '#skill',
  },
  {
    label: 'ABOUT',
    href: '#link',
  },
];

const Header: React.VFC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      zIndex="10"
      width="full"
      bgColor="white"
      shadow="md"
      py={{ base: 4, md: 5 }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 5, md: 20 }}
      >
        <Heading as="h1" size="lg" color="blue.400">
          PPHOS
        </Heading>
        <Box>
          <Stack
            direction="row"
            display={{ base: 'none', md: 'block' }}
            spacing="4"
          >
            {headerItem.map((item, index) => {
              return <NavItem label={item.label} href={item.href} />;
            })}
          </Stack>
          <Stack direction="row" display={{ base: 'block', md: 'none' }}>
            <NavDrawer />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
