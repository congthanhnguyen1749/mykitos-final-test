import { Box, Flex, Text } from '@mantine/core';
import React from 'react';
import { ReactComponent as IconLeft } from '../../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import '../../Body/Dailycard/spreadCard/style.css'
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { SpreadCardHome } from './spreadCard/spreadCardHome';
import './spreadCard/style.css'
import { InfomationsCart } from '../data/data';
import { RegisterDailyCard } from 'store/slice/DaiLycard/selectors';
import { useSelector } from 'react-redux';

export const DailyCardSpreadEveryday = () => {
  const [FreeSpreadCard, setFreeSpreadCard]: any = React.useState(0);
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const navigate: any = useNavigate();
  const spreadCardFirst: any = () => {
    setFreeSpreadCard(FreeSpreadCard + 1);
  };
  const backRole = () => {
    navigate('/daily/dailycard');
  }
  const selecIndexCard = useSelector(RegisterDailyCard)
  const openInfoCard = () => {
    console.log(selecIndexCard.getIdCard);
    navigate(selecIndexCard.getIdCard == 0 ? '' : '/daily/openinfocard');
  }
  return (
    <Flex className='chnagehidebut' opacity={0} w={'100%'} h={'100vh'}>
      {/* header */}
      <Flex w={'80vw'} direction={'column'} h={'100%'}>
        <Flex mt={mobile ? 20 : 70} w={'100%'} h={50} justify={'space-between'}>
          <Flex
            onClick={() => backRole()}
            w={mobile ? 35 : 50}
            mb={20}
            justify={'center'}
            align={'center'}
          >
            <IconLeft />
          </Flex>
          <Text color="white" fz={mobile ? 20 : 32} fw={600}>
            Trải bài hàng ngày
          </Text>
          <Text
            w={mobile ? 35 : 50}
            opacity={0}
            color="white"
            fz={mobile ? 20 : 32}
            fw={600}
          ></Text>
        </Flex>
        {/* end header */}
        {/* card */}
        <Flex
          mt={mobile ? 10 : 50}
          w={'100%'}
          justify={'center'}
          align={'center'}
        >
          <Flex
            w={130}
            onClick={() => openInfoCard()}
            className="card"
            h={227}
            sx={{ background: `url(${InfomationsCart.Court[selecIndexCard.getIdCard].frontCart})`, border: '2px solid white', ":hover": { boxShadow: '1px 2px 3px white', transition: 'all .3s ease' }, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          ></Flex>
        </Flex>
        {/* end card */}
        {/* spread card */}
        <Flex justify={'center'} align={'center'} w={'100%'}
          h={'500px'} direction={'column'}>
          <Text fz={mobile ? 18 : 20} fw={600} color='#9FBBD8'>Chọn một lá bài</Text>
          <SpreadCardHome data={InfomationsCart} />
        </Flex>
        {/* end spread card */}
      </Flex>
    </Flex>
  );
};
