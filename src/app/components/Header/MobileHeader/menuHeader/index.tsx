import { Box, Flex, Image } from '@mantine/core';
import React from 'react';
import logo from '../../../../../assets/mobile/avatar/logo 1.svg';
import menuLogo from '../../../../../assets/mobile/menu/Component 92.svg';
import { iconData } from '../../data/data';
import { HeaderMenuIconGroup } from '../../HeaderMenuIconGroup';
export const MenuHeaderMobile = () => {
  const [changevalue, setchangevalue] = React.useState(false);

  const getref: any = React.useRef();
  React.useLayoutEffect(() => {
    setchangevalue(e => !changevalue);
  }, []);
  const UnHideMenu: any = e => {
    getref.current.style.top = '0px';
    getref.current.style.left = '0px';
    getref.current.style.opacity = '1';
    getref.current.style.transition = 'all .5s linear ';
    getref.current.style.borderBottom = '.2px solid white';
    getref.current.style.dis = '.2px solid white';
  };
  const HideMenu: any = e => {
    getref.current.style.display = changevalue ? 'block' : 'none';
    getref.current.style.top = '0px';
    getref.current.style.left = '-100%';
    getref.current.style.opacity = '0';
    getref.current.style.transition = 'all .5s linear  ';
  };
  const [keyActive, setKeyActive] = React.useState(8);
  return (
    <Box sx={{ zIndex: 111111111111 }}>
      <Box
        onClick={e => UnHideMenu()}
        style={{ position: 'relative', color: 'red' }}
      >
        <Image src={menuLogo}></Image>
      </Box>
      <Flex
        direction={'column'}
        onClick={e => HideMenu()}
        ref={getref}
        style={{
          color: 'white',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '-100%',
          transition: 'all .5s linear ',
          zIndex: '100111111111',
          opacity: '0',
        }}
      >
        <Flex
          align={'center'}
          justify={'space-between'}
          h={100}
          w={'268px'}
          sx={{
            borderBottom: ' 1px solid gray',
            borderRight: '1px solid gray',
            background: '#090F1B',
          }}
        >
          <img
            style={{ padding: '6px', width: '60px', height: '60px' }}
            src={logo}
            alt=""
          />
        </Flex>
        <Flex
          align={'center'}
          justify={'flex-start'}
          w={268}
          h={'100vh'}
          sx={{ background: '#090F1B', borderRight: '1px solid gray' }}
          direction={'column'}
        >
          <HeaderMenuIconGroup
            data={iconData}
            active={keyActive}
            ChangeActive={setKeyActive}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
