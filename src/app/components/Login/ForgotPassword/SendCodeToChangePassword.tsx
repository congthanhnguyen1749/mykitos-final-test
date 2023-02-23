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
import * as React from 'react';
import { languageData } from '../../Header/data/data';
import { LanguageSwitch } from '../../Header/LanguageSwitch';
import OtpInput from 'react-otp-input';
import { Link, NavLink, useNavigate } from 'react-router-dom';
export const SendCodeToChangePassword = () => {
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const [Num, setNum] = React.useState();
  const changval = e => {
    setNum(e);
  };
  const navigate = useNavigate();
  const backRole = () => {
    navigate('/login/porgotpw/compareusername/GetOtp');
  };
  const nextRole = () => {
    navigate(
      '/login/porgotpw/compareusername/GetOtp/sendcodetochangepassword/resetpassword',
    );
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
            <Flex mt={20}>
              <img onClick={() => backRole()} src={arl} alt="" />
              <Text ml={6} fw={600} fz={20} color="white">
                Quên mật khẩu{' '}
              </Text>
            </Flex>
          </Flex>
          <Text fz={18} color="white" mt={20} mb={23} fw={600}>
            Nhập mã OTP xác nhận:
          </Text>
          <Flex>
            {/* enter the code */}
            <OtpInput
              value={Num}
              onChange={e => changval(e)}
              numInputs={6}
              isInputNum
              separator={' '}
              inputStyle={{
                color: 'white',
                border: '1px solid white',
                boxShadow:
                  '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                margin: mobile ? '4px' : '8px',
                background: 'rgba(0,0,0,.4)',
                outline: 'none',
              }}
              containerStyle={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
              }}
            ></OtpInput>
            {/* end enter the code */}
          </Flex>
          <Text
            sx={{ textAlign: 'center' }}
            fz={16}
            color="white"
            mt={20}
            mb={20}
            fw={500}
          >
            Mã OTP có hiệu lực trong 300s!{' '}
            <span style={{ color: 'white' }}>
              <Link to={''}>
                <span
                  style={{
                    color: 'white',
                    borderBottom: '1px solid',
                    textDecoration: 'none',
                    listStyleType: 'none',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  Gửi lại
                </span>
              </Link>
            </span>
          </Text>
          <Flex
            sx={{
              marginTop: '30px',
            }}
            justify={'center'}
            align={'center'}
          >
            <Button
              onClick={() => nextRole()}
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
