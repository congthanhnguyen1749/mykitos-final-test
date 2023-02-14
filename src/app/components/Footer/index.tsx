import { Anchor, Flex, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import logoCompany from '../../../assets/images/footer/logo/Frame 3466324.svg';
import QR from '../../../assets/images/footer/QR/clarity_qr-code-line.svg';
import GG from '../../../assets/images/footer/cart/ggs.svg';
import AP from '../../../assets/images/footer/cart/aps.svg';
import { useMediaQuery } from '@mantine/hooks';
import { useScrollIntoView } from '@mantine/hooks';
const Footer = () => {
  const mobile: any = useMediaQuery('(max-width: 1450px)');
  const setTextPD = mobile ? '0px' : '45px';
  const setmb = mobile ? '18px' : '0px';
  const setFlex = mobile ? 'flex-start' : 'flex-end';
  const sethContact = mobile ? '125%' : '100%';
  const setwicon = mobile ? '130%' : '100%';
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} w={'100vw'}>
      <Flex
        justify={'center'}
        align={'center'}
        w={'100%'}
        bg={'#090F1B'}
        mih={'414px'}
      >
        <Flex
          w={'80%'}
          justify={'center'}
          sx={{ borderBottom: '1px solid white' }}
          h={'100%'}
          p={'40px 0px'}
        >
          <SimpleGrid
            w={'100%'}
            h={'100%'}
            cols={3}
            breakpoints={[
              { maxWidth: 955, cols: 1 },
              { maxWidth: 800, cols: 1 },
            ]}
          >
            <Flex justify={'center'} direction={'column'} w={'80%'} h={'100%'}>
              <img
                src={logoCompany}
                style={{ width: '94px', height: '116px' }}
                alt="logo"
              />
              <Text m={'10px 0'} color={'white'} fw={700} fz={24} align="left">
                Về Mystikos
              </Text>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Text m={'2px 0'} color={'white'} fw={400} fz={18} align="left">
                  Trải bài hàng ngày
                </Text>
              </Anchor>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Text m={'2px 0'} color={'white'} fw={400} fz={18} align="left">
                  Trải bài theo chủ đề
                </Text>
              </Anchor>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Text m={'2px 0'} color={'white'} fw={400} fz={18} align="left">
                  Điều khoản và điều kiện
                </Text>
              </Anchor>
              <Anchor href="https://mantine.dev/" target="_blank">
                <Text m={'2px 0'} color={'white'} fw={400} fz={18} align="left">
                  Chính sách bảo mật
                </Text>
              </Anchor>
            </Flex>
            <Flex justify={'center'} w={'100%'} h={'100%'}>
              <Flex w={'100%'} h={'100%'}>
                <Flex
                  justify={'center'}
                  direction={'column'}
                  w={'80%'}
                  h={sethContact}
                >
                  <Text
                    m={'10px 0'}
                    color={'white'}
                    fw={700}
                    fz={24}
                    align="left"
                    pt={setTextPD}
                  >
                    Liên hệ
                  </Text>
                  <Anchor href="https://mantine.dev/" target="_blank">
                    <Text
                      m={'2px 0'}
                      color={'white'}
                      fw={400}
                      fz={18}
                      align="left"
                    >
                      Email: borostudio2018@gmail.com
                    </Text>
                  </Anchor>
                  <Anchor href="https://mantine.dev/" target="_blank">
                    <Text
                      m={'2px 0'}
                      color={'white'}
                      fw={400}
                      fz={18}
                      align="left"
                    >
                      Hotline:0392202429
                    </Text>
                  </Anchor>
                </Flex>
              </Flex>
            </Flex>
            <Flex mb={setmb} justify={setFlex} w={'100%'}>
              <Flex align={'center'} h={setwicon}>
                <img src={QR} style={{ height: '145px' }} alt="logo" />
                <Flex
                  h={'100%'}
                  direction={'column'}
                  justify={'center'}
                  ml={10}
                >
                  <img
                    src={GG}
                    style={{ height: '67px', marginBottom: '10px' }}
                    alt="logo"
                  />
                  <img src={AP} style={{ height: '65px' }} alt="logo" />
                </Flex>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex justify={'center'} w={'100%'} bg={'#090F1B'} h={'146px'}>
        <Flex w={'80%'} direction={'column'}>
          <Text m={'2px 0'}  color={'white'} fw={400} fz={18} align="left">
            Công ty TNHH VIETDEFI
          </Text>
          <Text m={'2px 0'} color={'white'} fw={400} fz={18} align="left">
            Địa chỉ công ty: Lô 6 khu đô thị Nam Thanh, ngõ 1 đường Nguyễn Thị
            Duệ, Yên Hòa, Cầu Giấy, Hà Nội
          </Text>
          <Text m={'2px 0'} color={'white'} fw={400} fz={18} align="left">
            © 2021 VIETDEFI
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footer;
