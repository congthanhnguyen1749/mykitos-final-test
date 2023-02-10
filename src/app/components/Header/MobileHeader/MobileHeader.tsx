import { Box, Flex } from '@mantine/core';
import React from 'react';
import { MenuHeaderMobile } from './menuHeader';
import logo from '../../../../assets/mobile/avatar/logo 1.svg';
import { UserListTask } from './UserTask';
export const MobileHeader = () => {
  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      w={'100%'}
      bg={'rgba(9, 15, 27, 1)'}
      h={'10vh'}
      sx={{ zIndex: 11111111111 }}
    >
      <Box p={'5px 20px 5px 20px'}>
        <MenuHeaderMobile></MenuHeaderMobile>
      </Box>
      <Box>
        <img src={logo} alt="" />
      </Box>
      <Box p={'5px 20px 5px 20px'}>
        <UserListTask></UserListTask>
      </Box>
    </Flex>
  );
};
