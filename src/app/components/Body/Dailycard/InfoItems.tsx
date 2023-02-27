import { Box, Flex, Image, Text } from '@mantine/core';
import React from 'react';
import { ReactComponent as IconLeft } from '../../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import '../../Body/Dailycard/spreadCard/style.css'
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { SpreadCardHome } from './spreadCard/spreadCardHome';
import arrowBottom from '../../../../assets/images/Body/icon/arrow/arrowBottom.svg';
import './spreadCard/style.css'
import arrowTop from '../../../../assets/images/Body/icon/arrow/arrowTop.svg';
import { InfomationsCart } from '../data/data';
import { RegisterDailyCard } from 'store/slice/DaiLycard/selectors';
import { useSelector } from 'react-redux';

export const InfoItems = () => {
    const mobile: any = useMediaQuery('(max-width: 768px)');
    const [FreeSpreadCard, setFreeSpreadCard]: any = React.useState(0);
    const [arrowAndShowBox, setArrowAndShowBox] = React.useState(true);
    const ref: any = React.useRef(null);
    const widthMobileInfoItems = mobile ? '343px' : '1170px';

    const sizeTextLable = mobile ? 18 : 24;
    const changeTextSizeTop = mobile ? 'auto' : 270;
    const navigate: any = useNavigate();
    const spreadCardFirst: any = () => {
        setFreeSpreadCard(FreeSpreadCard + 1);
    };
    const backRole = () => {
        navigate('/daily/openinfocard');
    }
    const selecIndexCard = useSelector(RegisterDailyCard)
    const openInfoCard = () => {
        navigate('/daily/infoitems');
    }
    const changeActive = () => {
        setArrowAndShowBox(!arrowAndShowBox);
    };
    return (
        <Flex className='chnagehidebut' opacity={0} mih={'100vh'} w={'100%'} >
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
                    {/* card */}
                    <Flex sx={{ border: '2px solid white', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} m={'20px 0'} bg={`url(${InfomationsCart.Court[selecIndexCard.getIdCard].frontCart})`} w={130}
                        h={227}>

                    </Flex>
                    {/* /end card */}
                    {/* item */}
                    <Flex
                        mt={5}
                        opacity={0}
                        ref={ref}
                        className="chnagehidebut"
                        justify={'center'}
                        onClick={() => changeActive()}
                        bg={'rgba(0, 0, 0, 0.4)'}
                        sx={{
                            boxShadow: '4px 4px 4px rgba(255, 255, 255, 0.25)',
                            border: '1px solid #FFFFFF',
                        }}
                        w={widthMobileInfoItems}
                    >
                        {/* right */}
                        <Box mih={'109px'} p={15} w={'100%'}>
                            <Flex justify={'center'} align={'center'} w={'100%'} h={109}>
                                <Flex
                                    justify={'flex-left'}
                                    align={'center'}
                                    w={'90%'}
                                    h={79}
                                    sx={{ borderBottom: '0.5px solid #FFFFFF' }}
                                >
                                    <Image src={InfomationsCart.Court[selecIndexCard.getIdCard].frontCart} width={34} />
                                    <Box ml={10}>
                                        <Text fw={700} fz={18} lh={2} color={'rgba(255, 255, 255, 1)'}>
                                            {InfomationsCart.Court[selecIndexCard.getIdCard].textIntroduce}
                                        </Text>
                                        <Text fw={500} fz={13} lh={1.4} color={'rgba(159, 187, 216, 1)'}>
                                            {InfomationsCart.Court[selecIndexCard.getIdCard].textSubtitle}
                                        </Text>
                                    </Box>
                                </Flex>
                                {/* left */}
                                <Flex
                                    justify={'center'}
                                    align={'center'}
                                    w={'10%'}
                                    h={79}
                                    sx={{ borderBottom: '0.5px solid #FFFFFF' }}
                                >
                                    {arrowAndShowBox ? (
                                        <Image
                                            width={50}
                                            height={50}
                                            sx={{ objectFit: 'contain' }}
                                            src={arrowTop}
                                        />
                                    ) : (
                                        <Image
                                            width={50}
                                            height={50}
                                            sx={{ objectFit: 'contain' }}
                                            src={arrowBottom}
                                        />
                                    )}
                                </Flex>
                            </Flex>
                            {/* bottom */}
                            {arrowAndShowBox ? (
                                <Flex direction={'column'} w={'100%'}>
                                    <Flex align={'flex-start'} w={'100%'} h={changeTextSizeTop}>
                                        <Image
                                            sx={{ marginTop: '14px' }}
                                            src={InfomationsCart.Court[selecIndexCard.getIdCard].frontCart}
                                            width={130}
                                        ></Image>
                                        <Box w={'100%'} h={'100%'} ml={8}>
                                            <Text fw={700} size={sizeTextLable} lh={2.3} color={'white'}>
                                                {InfomationsCart.Court[selecIndexCard.getIdCard].nameCard}
                                            </Text>
                                            <Text fw={400} size={15} color={'rgba(159, 187, 216, 1)'}>
                                                {InfomationsCart.Court[selecIndexCard.getIdCard].labelCard}
                                            </Text>
                                            <br />
                                            <Text fw={400} size={15} color={'rgba(159, 187, 216, 1)'}>
                                                {InfomationsCart.Court[selecIndexCard.getIdCard].describeCard}
                                            </Text>
                                        </Box>
                                    </Flex>
                                    <Flex m={'10px 0 10px 0'} w={'100%'}>
                                        <Text
                                            mt={10}
                                            align="left"
                                            fw={400}
                                            size={mobile ? 15 : 20}
                                            lh={1.5}
                                            color={'white'}
                                        >
                                            {InfomationsCart.Court[selecIndexCard.getIdCard].descriptionCard}
                                        </Text>
                                    </Flex>
                                </Flex>
                            ) : (
                                ''
                            )}
                        </Box>
                    </Flex>
                    {/* end item */}
                </Flex>
                {/* end card */}
                {/* spread card */}
                <Flex mb={100} mt={30} justify={'center'} align={'center'} w={mobile ? 150 : 150}
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
