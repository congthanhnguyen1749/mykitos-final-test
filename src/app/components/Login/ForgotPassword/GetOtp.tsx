import { Box, Flex, Text } from '@mantine/core';
import React from 'react';

import { useForm } from '@mantine/form';
import Footer from '../../Footer';

import Tw from '../../../../assets/images/Login/SocialMedia/logostelegram.svg';
import Me from '../../../../assets/images/Login/SocialMedia/logosmessenger.svg';
import { MobileHeader } from '../../Header/MobileHeader/MobileHeader';
import { WebHeader } from '../../Header/WebHeader';
import { useMediaQuery } from '@mantine/hooks';
import BackgroundWeb from '../../../../assets/images/Login/bg/BackgroundWebNgoai.png';
import arl from '../../../../assets/images/Login/arowleft/Frame 625.svg';
import '../../Body/GetReading/flipCard.css';
import logoText from '../../../../assets/images/Login/LogoLogin/Group.svg';

import { useNavigate } from 'react-router-dom';

const data: any = [
  {
    id: 1,
    userName: 'Nguyễn Thành Công',
    socialMediaName: 'mes',
    socialMediaImg: Me,
  },
  {
    id: 2,
    userName: 'Nguyễn Thành Công',
    socialMediaName: 'tlg',
    socialMediaImg: Tw,
  },
];

export const GetOtp = () => {
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const backRole = () => {
    navigate('/login/porgotpw/compareusername');
  };
  const nextRole = (v, i) => {
    navigate('/login/porgotpw/compareusername/GetOtp/sendcodetochangepassword');
  };
  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
      {mobile ? <MobileHeader /> : <WebHeader />}
      <Flex
        w={'100%'}
        h={`${mobile ? '100vh' : '90vh'}`}
        bg={`url(${BackgroundWeb})`}
        justify={'center'}
        align={'center'}
        bgr={'no-repeat'}
        bgsz={mobile ? 'cover' : 'cover'}
        sx={{
          objectFit: 'contain',
          backgroundPositionY: 'center',
        }}
      >
        <Flex
          w={mobile ? 343 : 570}
          h={mobile ? 602 : 664}
          direction={'column'}
        >
          <Flex justify={'center'}>
            {/* logo */}
            <img
              style={{
                width: mobile ? '180px' : '215px',
                height: mobile ? '30px' : '50px',
                objectFit: 'contain',
              }}
              src={`${logoText}`}
            />
          </Flex>
          {/* end logo */}
          {/* validatae */}
          <Flex w={'100%'} justify={'space-between'} mt={30}>
            <Flex>
              <img onClick={() => backRole()} src={arl} alt="" />
              <Text ml={6} fw={600} fz={20} color="white">
                Quên mật khẩu{' '}
              </Text>
            </Flex>
          </Flex>
          <Flex direction={'column'}>
            <Text mb={10} mt={15} fw={600} fz={18} color="white">
              Nhận mã OTP qua:
            </Text>
            <Flex direction={'column'} w={'100%'}>
              {data.map((v, i) => {
                return (
                  <Flex
                    key={i}
                    mt={15}
                    h={mobile ? 48 : 58}
                    onClick={() => nextRole(v, i)}
                    w={mobile ? 343 : 570}
                    bg={'rgba(0, 0, 0, 0.4)'}
                    justify={'flex-start'}
                    align={'center'}
                    sx={{
                      borderRadius: '8px',
                      border: '1px solid white',
                      boxShadow: '4px 4px 4px rgba(255, 255, 255, 0.25)',
                    }}
                  >
                    <Box ml={15}>
                      <img src={v.socialMediaImg} alt="" />
                    </Box>
                    <Text mb={2} ml={10} fw={500} fz={18} color="white">
                      {v.userName}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};
