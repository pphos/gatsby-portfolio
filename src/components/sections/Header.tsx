import React, { useContext } from 'react';
import { Box, Flex, Heading, Stack } from '@chakra-ui/react';

import Nav from '../parts/Nav';
import NavDrawer from '../parts/NavDrawer';
import { PortfolioContext } from '../../context';

const Header: React.VFC = () => {
  const { headerData } = useContext(PortfolioContext);
  const { title, menus } = headerData;

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
          {title}
        </Heading>
        <Box>
          <Stack direction="row" display={{ base: 'block', md: 'none' }}>
            <NavDrawer menus={menus} />
          </Stack>
          <Stack
            direction="row"
            display={{ base: 'none', md: 'block' }}
            spacing="4"
          >
            <Nav menus={menus} />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
