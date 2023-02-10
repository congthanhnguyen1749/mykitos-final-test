import { Image, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import * as React from 'react';

export function MoneyPanel(props: { iconUrl?: string; amount: number }) {
  const mobile = useMediaQuery('(max-width: 755px)');
  const margintopLabel: any = mobile ? '13px' : '20px';
  const changeWidth: any = mobile ? '600px' : '400';
  return (
    <Flex justify={'center'} align={'center'}>
      <Image src={props.iconUrl} />
      <Text color={'white'} ml={3} fz={margintopLabel} fw={changeWidth}>
        {props.amount}
      </Text>
    </Flex>
  );
}
