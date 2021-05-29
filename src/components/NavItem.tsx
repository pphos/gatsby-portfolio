import React from 'react';
import { Box, Link, SlideFade } from '@chakra-ui/react';

type Props = {
  label: string;
  href: string;
};

const NavItem: React.VFC<Props> = ({ label, href }) => {
  return (
    <Link
      color="blue.500"
      fontWeight="semibold"
      _hover={{ textDecoration: 'none' }}
    >
      {label}
    </Link>
  );
};

export default NavItem;
