import { Box } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Invoid = () => {
  return (
    <Box w={'100%'} h={'100%'}>
      <Outlet></Outlet>
    </Box>
  );
};
