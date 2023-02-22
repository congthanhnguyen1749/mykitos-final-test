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
} from '@mantine/core';
import React from 'react';
import { useForm } from '@mantine/form';
import Footer from '../../Footer';
import { MobileHeader } from '../../Header/MobileHeader/MobileHeader';
import { WebHeader } from '../../Header/WebHeader';
import { useMediaQuery } from '@mantine/hooks';
import BackgroundWeb from '../../../../assets/images/Login/bg/BackgroundWebNgoai.png';
import fb from '../../../../assets/images/Login/SocialMedia/facebook-3-3 logo.svg';
import gg from '../../../../assets/images/Login/SocialMedia/google logo.svg';
import ap from '../../../../assets/images/Login/SocialMedia/Apple logo.svg';
import arl from '../../../../assets/images/Login/arowleft/Icon.svg';
import '../../Body/GetReading/flipCard.css';
import logoText from '../../../../assets/images/Login/LogoLogin/Group.svg';
import { languageData } from '../../Header/data/data';
import { LanguageSwitch } from '../../Header/LanguageSwitch';
import { Link } from 'react-router-dom';
export const Register = () => {
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
                marginTop: mobile ? '25px' : '0',
                objectFit: 'contain',
              }}
              src={`${logoText}`}
            />
          </Flex>
          {/* end logo */}
          {/* validatae */}
          <Flex direction={'column'} align={'flex-end'} justify={'center'}>
            <Box m={'20px 0 5px 0'}>
              {' '}
              <LanguageSwitch data={languageData} />
            </Box>
            <form onSubmit={form.onSubmit(values => console.log(values))}>
              <TextInput
                withAsterisk
                onClick={() => setChangelaberWarnning(!changelaberWarnning)}
                mt="sm"
                placeholder="Tên đăng nhập"
                {...form.getInputProps('name')}
                sx={{
                  '& .mantine-Input-input': {
                    width: mobile ? '343px' : '570px',
                    height: mobile ? '47px' : '58px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#9FBBD8',
                    fontWeight: 'inherit',
                    fontSize: '20px',
                    borderRadius: '8px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    paddingLeft: '17px',
                  },
                  '& .mantine-Input-input input': {
                    color: '#9FBBD8',
                  },
                  '& ::placeholder': {
                    color: '#9FBBD8 !important',
                    fontSize: mobile ? '18px' : '20px',
                  },
                }}
              />
              {changelaberWarnning ? (
                <Text
                  sx={{
                    color: '#9FBBD8',
                    fontSize: mobile ? '11px' : '14px',
                    fontWeight: 'initial',
                    marginTop: mobile ? '7px' : '7px',
                    textAlign: 'left',
                  }}
                >
                  Chỉ bao gồm số và chữ cái thường, không bao gồm khoảng trắng
                </Text>
              ) : null}
              <PasswordInput
                mt="sm"
                placeholder="Mật khẩu"
                {...form.getInputProps('password')}
                sx={{
                  '& .mantine-Input-input': {
                    width: mobile ? '343px' : '570px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    height: mobile ? '47px' : '58px',
                    display: 'flex',
                    borderRadius: '8px',
                    alignItems: 'center',
                  },
                  '& ::placeholder': {
                    color: '#9FBBD8',
                    fontSize: mobile ? '18px' : '20px',
                  },
                  '& .mantine-Input-input input': {
                    width: '100%',
                    color: '#9FBBD8',
                    height: '100%',
                  },
                  '& .mantine-1jdmi3h': {
                    height: '100%',
                    width: mobile ? '20%' : '10%',
                    color: '#9FBBD8',
                  },
                  '& .mantine-1rzga8z': {
                    left: '5px',
                  },
                  '& .mantine-UnstyledButton-root': {
                    ':hover': {
                      background: 'none',
                    },
                  },
                  '& .mantine-UnstyledButton-root svg': {
                    height: '19px',
                    width: '18px',
                    color: '#9FBBD8',
                  },
                }}
              />
              <PasswordInput
                mt="sm"
                placeholder="Xác nhận mật khẩu"
                {...form.getInputProps('confirmPassword')}
                sx={{
                  '& .mantine-Input-input': {
                    width: mobile ? '343px' : '570px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    height: mobile ? '47px' : '58px',
                    display: 'flex',
                    borderRadius: '8px',
                    alignItems: 'center',
                  },
                  '& ::placeholder': {
                    color: '#9FBBD8',
                    fontSize: mobile ? '18px' : '20px',
                  },
                  '& .mantine-Input-input input': {
                    width: '100%',
                    color: '#9FBBD8',
                    height: '100%',
                  },
                  '& .mantine-1jdmi3h': {
                    height: '100%',
                    width: mobile ? '20%' : '10%',
                    color: '#9FBBD8',
                  },
                  '& .mantine-1rzga8z': {
                    left: '5px',
                  },
                  '& .mantine-UnstyledButton-root': {
                    ':hover': {
                      background: 'none',
                    },
                  },
                  '& .mantine-UnstyledButton-root svg': {
                    height: '19px',
                    width: '18px',
                    color: '#9FBBD8',
                  },
                }}
              />
              <Flex
                w={'100%'}
                h={'30px'}
                mt={5}
                justify={'space-between'}
                align={'center'}
              >
                <Flex mt={mobile ? 15 : 5}>
                  {' '}
                  <Checkbox
                    mt={5}
                    sx={{
                      '& .mantine-1jc5t4g': {
                        cursor: 'pointer',
                        marginLeft: '-3px',
                      },
                      '& .mantine-1137jyz': {
                        cursor: 'pointer',
                        background: 'none',
                        outline: 'none',
                        border: '2px solid white',
                      },
                    }}
                  />
                  <Text fz={mobile ? 12 : 14} ml={5} mt={4} color="white">
                    <Flex>
                      {' '}
                      Đồng ý với{' '}
                      <Link to={''}>
                        <Text m={'0 3px'} fw={700} color="white">
                          Điều khoản sử dụng
                        </Text>
                      </Link>{' '}
                      và{' '}
                      <Link to={''}>
                        <Text m={'0 3px'} fw={700} color="white">
                          Chính sách bảo mật
                        </Text>
                      </Link>{' '}
                      của Mystikos
                    </Flex>
                  </Text>
                </Flex>
              </Flex>
              <Group position="center" mt="lg">
                <Button
                  sx={{
                    width: mobile ? '150px' : '150px',
                    height: mobile ? '51px' : '58px',
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    fontSize: mobile ? '18px' : '20px',
                    borderRadius: '16px',
                    border: '1px solid white',
                    boxShadow:
                      '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
                    ':hover': {
                      background: 'rgba(0,0,0,0.7)',
                    },
                  }}
                  type="submit"
                >
                  Đăng ký
                </Button>
              </Group>
            </form>
            <Flex
              justify={'center'}
              align={'center'}
              direction={'column'}
              w={'100%'}
              h={'100%'}
            >
              <Flex
                w={'100%'}
                sx={{ align: 'center', justifyContent: 'center' }}
                mt={35}
              >
                <Divider w={29} mr={10} variant="solid" my="sm" />
                <Text color="white">Hoặc đăng nhập bằng</Text>
                <Divider w={29} ml={10} variant="solid" my="sm" />
              </Flex>
              <Flex mt={10} justify={'space-evenly'} w={'50%'}>
                <Anchor
                  m={'0 20px'}
                  sx={{
                    textDecoration: 'none',
                  }}
                  href="https://mantine.dev/"
                  mt={5}
                  target="_blank"
                >
                  <img src={fb} alt="" />
                </Anchor>
                <Anchor
                  m={'0 20px'}
                  sx={{
                    textDecoration: 'none',
                  }}
                  href="https://mantine.dev/"
                  mt={5}
                  target="_blank"
                >
                  <img src={gg} alt="" />
                </Anchor>
                <Anchor
                  m={'0 20px'}
                  sx={{
                    textDecoration: 'none',
                  }}
                  href="https://mantine.dev/"
                  mt={5}
                  target="_blank"
                >
                  <img src={ap} alt="" />
                </Anchor>
              </Flex>
              <Flex
                w={'100%'}
                sx={{ align: 'center', justifyContent: 'center' }}
                mt={5}
              >
                <Text color="white">Bạn đã có tài khoản?</Text>
                <Link
                  style={{ marginLeft: '5px', color: 'white' }}
                  to={'/login'}
                  color="white"
                >
                  <Text color="White" fw={700} fz={16}>
                    {' '}
                    Đăng nhập
                  </Text>
                </Link>
              </Flex>
             
            </Flex>
          </Flex>
          {/* end validatae */}
        </Flex>
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};
