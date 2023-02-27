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
import ChangeDate from './date'
export const GetUsedCard = () => {
    const [FreeSpreadCard, setFreeSpreadCard]: any = React.useState(0);
    const mobile: any = useMediaQuery('(max-width: 768px)');
    const navigate: any = useNavigate();
    const spreadCardFirst: any = () => {
        setFreeSpreadCard(FreeSpreadCard + 1);
    };
    const selecIndexCard = useSelector(RegisterDailyCard)
    const openInfoCard = () => {
        console.log('hoi');
    }
    return (
        <Flex className='chnagehidebut' opacity={0} w={'100%'} h={'100vh'}>
            {/* header */}
            <Flex w={'80vw'} direction={'column'} align={'center'} h={'100%'}>
                <Flex direction={'column'} align={'center'} mt={mobile ? 20 : 70} w={'100%'} h={50} justify={'center'}>
                    <Text
                        fw={700}
                        color={'rgba(159, 187, 216, 1)'}
                        fz={mobile ? '16px' : '20px'}
                    >
                        {/* date */}
                        <ChangeDate />
                    </Text>
                    <Text color="white" fz={mobile ? 26 : 32} fw={600}>
                        Trải bài hằng ngày
                    </Text>
                </Flex>
                {/* end header */}
                {/* card */}
                <Flex
                    mt={mobile ? 10 : 20}
                    w={'100%'}
                    justify={'center'}
                    align={'center'}
                    direction={'column'}
                >
                    <Text
                        mb={25}
                        w={mobile ? 320 : 486}
                        align='center'
                        color="white" fz={mobile ? 12 : 18} fw={600}>
                        Chào Trung Hiếu, hãy đón nhận thông điệp của bạn hôm nay:
                        “Ta là chủ nhân vận mệnh ta,
                        ta là thủ lĩnh của tâm hồn ta”.

                    </Text>
                    <Flex
                        w={mobile ? 174 : 261}
                        h={mobile ? 304 : 456}
                        sx={{ background: `url(${InfomationsCart.Court[selecIndexCard.getIdCard].frontCart})`, border: '2px solid white', ":hover": { boxShadow: '1px 2px 3px white', transition: 'all .3s ease' }, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    ></Flex>
                </Flex>
                {/* end card */}
                {/* spread card */}
                <Flex mt={30} justify={'center'} align={'center'} w={mobile ? 150 : 150}
                    onClick={() => openInfoCard()}

                    h={mobile ? 51 : 58} bg={'rgba(0,0,0,.4)'} sx={{
                        borderRadius: '16px', border: 'white 2px solid', boxShadow: '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
                        ":hover": {
                            background: 'rgba(0,0,0,.3)'

                        },
                        cursor: 'pointer'
                    }}>
                    <Text fz={mobile ? 18 : 20} color='white' fw={600}>Viết nhật ký</Text>
                </Flex>
                {/* end spread card */}
            </Flex>
        </Flex>
    );
};
