import { Center, Stack, BackgroundImage, Box, Flex } from '@mantine/core';
import * as React from 'react';
import Background from '../../../../assets/images/background/galaxy.jpg';
import { WebHeader } from 'app/components/Header/WebHeader';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { MobileHeader } from 'app/components/Header/MobileHeader/MobileHeader';
import Footer from 'app/components/Footer';
import { RegisterAndLoginSelector } from 'store/slice/Login/selectors';
import { useSelector } from 'react-redux';
export function AppMykitos() {
  const loca = useLocation();
  const tablet = useMediaQuery('(max-width: 992px)');
  const mobile = useMediaQuery('(max-width: 768px)');
  const selec = useSelector(RegisterAndLoginSelector);

  return (
    <BackgroundImage
      src={Background}
      sx={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
      p={0}
      m={0}
    >
      <Box w={'100%'} h={'100%'}>
        <Flex
          sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: 11111,
          }}
          h={'10vh'}
          w={'100%'}
        >
          {mobile ? <MobileHeader /> : <WebHeader />}
        </Flex>
        <Center
          sx={{
            position: 'relative',
            marginTop: '10vh',
            left: '0',
            right: '0',
          }}
          w={'100%'}
          h={'100%'}
        >
          <Stack>
            {selec.isLogined ? <Outlet></Outlet> : <Navigate to="/login" />}
          </Stack>
        </Center>
        <Box>
          <Footer></Footer>
        </Box>
      </Box>
    </BackgroundImage>
  );
}
