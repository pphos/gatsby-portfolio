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

const NavDrawer: React.VFC = () => {
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
              <Stack as="nav" mt="5">
                <Link
                  color="blue.500"
                  fontWeight="semibold"
                  fontSize="xl"
                  p="3"
                  _hover={{ textDecoration: 'none', bg: 'gray.100' }}
                >
                  WORKS
                </Link>
                <Link
                  color="blue.500"
                  fontWeight="semibold"
                  fontSize="xl"
                  p="3"
                  _hover={{ textDecoration: 'none', bg: 'gray.100' }}
                >
                  SKILL
                </Link>
                <Link
                  color="blue.500"
                  fontWeight="semibold"
                  fontSize="xl"
                  p="3"
                  _hover={{ textDecoration: 'none', bg: 'gray.100' }}
                >
                  ABOUT
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavDrawer;
