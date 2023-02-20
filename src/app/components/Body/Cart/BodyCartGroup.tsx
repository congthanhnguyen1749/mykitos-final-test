import { Box } from '@mantine/core';
import React from 'react';
import Icon_ActiveCart from '../../../../assets/images/icons/card/card.svg';
export const BodyCartGroup = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={Icon_ActiveCart} alt="" />
    </Box>
  );
};
