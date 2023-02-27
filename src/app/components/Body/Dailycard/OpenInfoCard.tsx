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
import { useDispatch, useSelector } from 'react-redux';
import { DailyCardReducer } from 'store/slice/DaiLycard';

export const OpenInfoCard = () => {
    const [FreeSpreadCard, setFreeSpreadCard]: any = React.useState(0);
    const mobile: any = useMediaQuery('(max-width: 768px)');
    const navigate: any = useNavigate();
    const spreadCardFirst: any = () => {
        setFreeSpreadCard(FreeSpreadCard + 1);
    };
    const backRole = () => {
        navigate('/daily/dailycardspreadeveryday');
    }
    const { DailyCardRDucer } = DailyCardReducer()
    const dispatch = useDispatch()
    const selecIndexCard = useSelector(RegisterDailyCard)
    const openInfoCard = () => {
        navigate('/daily/infoitems');
        // xử lý lưu dữ liệu sau khi nhấn mở info card
        dispatch(DailyCardRDucer.SetFilter(true))
    }
    // Lấy thời gian hiện tại
    const currentTime = new Date();
    // Tìm thời gian bắt đầu của ngày mới nhất
    const midnight = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1);
    // Tính khoảng thời gian còn lại đến nửa đêm
    const timeUntilMidnight = midnight.getTime() - currentTime.getTime();
    // Cập nhật state sau khi hết khoảng thời gian đó
    setTimeout(() => {
        // Cập nhật state ở đây
        dispatch(DailyCardRDucer.SetFilter(false))
    }, timeUntilMidnight);

    return (
        <Flex className='chnagehidebut' opacity={0} w={'100%'} h={'100vh'}>
            {/* header */}
            <Flex w={'80vw'} direction={'column'} align={'center'} h={'100%'}>
                <Flex mt={mobile ? 20 : 70} w={'100%'} h={50} justify={'space-between'}>
                    <Flex
                        onClick={() => backRole()}
                        w={mobile ? 35 : 50}
                        mb={10}
                        justify={'center'}
                        align={'center'}
                    >
                        <IconLeft />
                    </Flex>
                    <Text color="white" fz={mobile ? 26 : 32} fw={600}>
                        Trải bài hằng ngày
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
                    direction={'column'}
                >
                    <Text
                        mb={25}
                        align='center'
                        color="white" fz={mobile ? 12 : 18} fw={600}>
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
                    <Text fz={mobile ? 18 : 20} color='white' fw={600}>Giải bài</Text>
                </Flex>
                {/* end spread card */}
            </Flex>
        </Flex>
    );
};
