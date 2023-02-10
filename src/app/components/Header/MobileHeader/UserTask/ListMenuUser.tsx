import { Box, Flex, Text } from '@mantine/core';
import React from 'react';

interface propsListMenuUser {
  data?: any;
  active?: number;
}

export const ListMenuUser = (props: propsListMenuUser) => {
  const [activelabel, setActivelabel]: any = React.useState();
  React.useLayoutEffect(() => {
    setActivelabel(props.data.active);
  }, [activelabel]);
  return (
    <Flex
      p={'10px 20px 10px 20px'}
      m={'10px 2px 10px 2px'}
      justify={'flex-start'}
      sx={{
        borderRadius: '12px',
        background:
          props.data.active == props.active ? 'rgba(255, 44, 82, 1)' : '',
      }}
      align={'center'}
      w={'140px'}
    >
      <img
        style={{ width: '16px', height: '16px' }}
        src={props.data.icons}
        alt=""
      />
      <Text fz={12} ml={10}>
        {props.data.label}
      </Text>
    </Flex>
  );
};
