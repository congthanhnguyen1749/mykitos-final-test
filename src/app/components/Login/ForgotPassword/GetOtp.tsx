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
import { ReactComponent as Tw } from '../../../../assets/images/Login/SocialMedia/logostelegram.svg';
import { ReactComponent as Me } from '../../../../assets/images/Login/SocialMedia/logosmessenger.svg';
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
export const GetOtp = () => {
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
          <Flex direction={'column'}>
            <Text mb={10} mt={15} fw={600} fz={18} color="white">
              Nhận mã OTP qua:
            </Text>
            <Flex direction={'column'} w={'100%'}>
              <Flex
                mt={15}
                h={mobile ? 48 : 58}
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
                  <Me />
                </Box>
                <Text ml={10} fw={500} fz={18} color="white">
                  Nguyễn Thành Công
                </Text>
              </Flex>
              <Flex
                mt={15}
                h={mobile ? 48 : 58}
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
                  <Tw />
                </Box>
                <Text ml={10} fw={500} fz={18} color="white">
                  Trần Tuấn Quốc
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};
