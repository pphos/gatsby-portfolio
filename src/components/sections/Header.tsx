import React from 'react';
import { Box, Flex, Heading, Stack } from '@chakra-ui/react';

import { NavMenuType } from '../../types';
import Nav from '../parts/Nav';
import NavDrawer from '../parts/NavDrawer';

const navMenus: NavMenuType[] = [
  {
    label: 'WORKS',
    href: '#works',
  },
  {
    label: 'ABOUT',
    href: '#about',
  },
  {
    label: 'SKILL',
    href: '#skill',
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
          <Stack direction="row" display={{ base: 'block', md: 'none' }}>
            <NavDrawer menus={navMenus} />
          </Stack>
          <Stack
            direction="row"
            display={{ base: 'none', md: 'block' }}
            spacing="4"
          >
            <Nav menus={navMenus} />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
