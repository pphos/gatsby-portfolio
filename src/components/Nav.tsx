import React from 'react';
import { Link } from '@chakra-ui/react';

import { NavMenusType } from '../types';

type Props = {
  menus: NavMenusType;
};

const Nav: React.VFC<Props> = ({ menus }) => {
  return (
    <>
      {menus.map((menu, index) => {
        return (
          <Link
            href={menu.href}
            key={index}
            color="blue.400"
            fontWeight="semibold"
            _hover={{ textDecoration: 'none' }}
          >
            {menu.label}
          </Link>
        );
      })}
    </>
  );
};
export default Nav;
