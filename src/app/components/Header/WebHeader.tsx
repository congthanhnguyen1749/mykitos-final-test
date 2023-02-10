import { Header, Box, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { HeaderMenuIconGroup } from './HeaderMenuIconGroup';
import { HeaderUserGroup } from './HeaderUserGroup';
import { iconData, languageData } from 'app/components/Header/data/data';
import { ReactComponent as Logo } from '../../../assets/images/logo/logo1.svg';
import { LanguageSwitch } from './LanguageSwitch';
export const WebHeader: any = () => {
  const [keyActive, setKeyActive] = React.useState(8);
  const lg = useMediaQuery('(min-width: 1200px)');
  let logoWidth = lg ? 260 : 60;
  return (
    <Header
      height={'10vh'}
      w={'100%'}
      withBorder={false}
      sx={{
        backgroundColor: 'rgba(9, 15, 27, 1)',
        margin: '0',
        padding: '0',
      }}
    >
      <Flex align="center" justify="space-around" h={'100%'}>
        <Box w={logoWidth}>
          <Logo />
        </Box>
        {lg ? (
          <HeaderMenuIconGroup
            data={iconData}
            active={keyActive}
            ChangeActive={setKeyActive}
          />
        ) : null}
        <HeaderUserGroup />
        {/* <LanguageSwitch data={languageData} /> */}
      </Flex>
    </Header>
  );
};
