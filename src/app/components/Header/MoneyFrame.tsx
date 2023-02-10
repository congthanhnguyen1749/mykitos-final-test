import { Avatar, Box, Divider, Flex, Image, Text } from '@mantine/core';
import * as React from 'react';
import { MoneyPanel } from './MoneyPanel';
import IconMoneyGreen from '../../../assets/images/icons/loginAndCoin/iconCoin/moneyGreen.svg';
import { ReactComponent as IconButtonPlus } from '../../../assets/images/icons/loginAndCoin/iconCoin/PlusCircle.svg';
import IconCoinGold from '../../../assets/images/icons/loginAndCoin/iconCoin/coinGold.svg';
import { useMediaQuery } from '@mantine/hooks';
//Host for money and icon and frame
export function MoneyFrame() {
  const mobile = useMediaQuery('(max-width: 755px)');
  const changewidth: any = mobile ? '144px' : '188px';
  const changeheight: any = mobile ? '30px' : '42px';
  const changediv: any = mobile ? '16px' : '28px';

  return (
    <Flex
      justify="space-evenly"
      align="center"
      sx={{
        width: changewidth,
        height: changeheight,
        borderRadius: '16px',
        border: '.5px solid white',
        marginRight:'4px',
        boxShadow:
          ' 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52,0 0 0.1rem #ff2c52, 0 0 .4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
      }}
    >
      {<IconButtonPlus />}
      <MoneyPanel iconUrl={`${IconCoinGold}`} amount={100} />
      <Divider orientation="vertical" size="sm" h={changediv} mt={7} />
      <MoneyPanel iconUrl={`${IconMoneyGreen}`} amount={100} />
    </Flex>
  );
}
