import {
  BackgroundImage,
  Box,
  Button,
  Flex,
  Group,
  Image,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import React from 'react';
import { useForm } from '@mantine/form';
import Footer from '../Footer';
import { MobileHeader } from '../Header/MobileHeader/MobileHeader';
import { WebHeader } from '../Header/WebHeader';
import { useMediaQuery } from '@mantine/hooks';
import BackgroundWeb from '../../../assets/images/Login/bg/BackgroundWebNgoai.png';
import logoText from '../../../assets/images/Login/LogoLogin/Group.svg';
import { languageData } from '../Header/data/data';
import { LanguageSwitch } from '../Header/LanguageSwitch';

export const Login = () => {
  const mobile = useMediaQuery('(max-width: 768px)');
  const form = useForm({
    initialValues: {
      password: 'Admin',
      confirmPassword: 'Admin',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });
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
        bgsz={'145vh'}
        sx={{ objectFit: 'cover' }}
      ></Flex>
      <Footer></Footer>
    </Flex>
  );
};
