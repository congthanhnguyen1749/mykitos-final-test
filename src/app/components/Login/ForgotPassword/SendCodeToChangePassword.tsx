import {
    Box,
    Button,
    Flex,
    Group,
    TextInput,
    PasswordInput,
    Checkbox,
    Text,
    Anchor,
    Divider,
    Input,
    Tooltip,
  } from '@mantine/core';
  import React from 'react';
  import {
    IconBrandTwitter,
    IconAlertCircle,
    IconUser,
    IconUserCircle,
  } from '@tabler/icons';
  import { useForm } from '@mantine/form';
  import Footer from '../../Footer';
  import { ReactComponent as UserLogo } from '../../../../assets/images/Login/logoUser/user.svg';
  import { MobileHeader } from '../../Header/MobileHeader/MobileHeader';
  import { WebHeader } from '../../Header/WebHeader';
  import { useMediaQuery } from '@mantine/hooks';
  import BackgroundWeb from '../../../../assets/images/Login/bg/BackgroundWebNgoai.png';
  import fb from '../../../../assets/images/Login/SocialMedia/facebook-3-3 logo.svg';
  import gg from '../../../../assets/images/Login/SocialMedia/google logo.svg';
  import ap from '../../../../assets/images/Login/SocialMedia/Apple logo.svg';
  import arl from '../../../../assets/images/Login/arowleft/Frame 625.svg';
  import '../../Body/GetReading/flipCard.css';
  import logoText from '../../../../assets/images/Login/LogoLogin/Group.svg';
  import { languageData } from '../../Header/data/data';
  import { LanguageSwitch } from '../../Header/LanguageSwitch';
  import { Link } from 'react-router-dom';
  export const SendCodeToChangePassword = () => {
    const [changelaberWarnning, setChangelaberWarnning] = React.useState(false);
    const mobile: any = useMediaQuery('(max-width: 768px)');
    const form = useForm({
      initialValues: {
        name: '',
        password: '',
        confirmPassword: '',
      },
      validate: {
        name: value =>
          value.length < 6 ? 'Độ dài của tên phải lớn hơn 6 !' : null,
        password: (value, values) =>
          value !== values.name ? 'Mật khẩu không khớp !' : null,
        confirmPassword: (value, values) =>
          value !== values.password ? 'Mật khẩu không khớp !' : null,
      },
    });
    const changeWarning: any = () => {
      console.log('object');
      setChangelaberWarnning(!changelaberWarnning);
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
                <img src={arl} alt="" />
                <Text ml={6} fw={600} fz={20} color="white">
                  Quên mật khẩu{' '}
                </Text>
              </Flex>
            </Flex>
            <TextInput
              withAsterisk
              icon={<UserLogo />}
              onClick={() => setChangelaberWarnning(!changelaberWarnning)}
              placeholder="Tên đăng nhập"
              {...form.getInputProps('name')}
              sx={{
                marginTop: '30px',
                '& .mantine-Input-input': {
                  width: mobile ? '343px' : '570px',
                  height: mobile ? '47px' : '58px',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(159, 187, 216, 1)',
                  fontWeight: 'inherit',
                  fontSize: '20px',
                  borderRadius: '8px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  paddingLeft: '50px',
                },
                '& .mantine-yxyjyg': {
                  marginLeft: '10px',
                },
                '& .mantine-Input-input input': {
                  color: 'rgba(159, 187, 216, 1)',
                },
                '& ::placeholder': {
                  color: 'rgba(159, 187, 216, 1) !important',
                  fontSize: mobile ? '18px' : '20px',
                },
              }}
            />{' '}
            <Text fz={16} fw={500} mt={10} color='rgba(159, 187, 216, 1)'>Vui lòng cung cấp tên đăng nhập để lấy lại mật khẩu.</Text>
            <Flex
              sx={{
                marginTop: '30px',
              }}
              justify={'center'}
              align={'center'}
            >
              <Button
                sx={{
                  width: '150px',
                  height: mobile ? '51px' : '58px',
                  background: 'rgba(0,0,0,0.4)',
                  color: 'white',
                  fontSize: mobile ? '18px' : '20px',
                  borderRadius: '16px',
                  border: '1px solid white',
                  boxShadow:
                    '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
                  ':hover': {
                    background: '#FF2C52',
                  },
                }}
                type="submit"
              >
                Tiếp tục
              </Button>
            </Flex>
            {/* end validatae */}
          </Flex>
        </Flex>
        <Footer></Footer>
      </Flex>
    );
  };
  