import React, { useRef } from 'react';
import {
  Link,
  Button,
  Stack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { NavMenuType } from '../types';

type Props = {
  menus: NavMenuType[];
};

const NavDrawer: React.VFC<Props> = ({ menus }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon w="6" h="6" color="blue.300" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack as="nav" mt="8">
                {menus.map((menu, index) => {
                  return (
                    <Link
                      key={index}
                      color="blue.500"
                      fontWeight="semibold"
                      fontSize="xl"
                      p="5"
                      _hover={{ textDecoration: 'none', bg: 'gray.100' }}
                    >
                      {menu.label}
                    </Link>
                  );
                })}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavDrawer;
