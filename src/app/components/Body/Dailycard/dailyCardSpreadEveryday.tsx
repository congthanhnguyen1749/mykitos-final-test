import { Box, Flex, Text } from '@mantine/core';
import React from 'react';
import { ReactComponent as IconLeft } from '../../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import iconRight from '../../../../assets/images/Body/icon/coin/Frame 3466294.svg';
import ArrowLeft from '../../../../assets/images/Body/icon/coin/Xu.svg';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
export const DailyCardSpreadEveryday = () => {
  const [FreeSpreadCard, setFreeSpreadCard]: any = React.useState(0);
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const navigate: any = useNavigate();
  const spreadCardFirst: any = () => {
    navigate();
    setFreeSpreadCard(FreeSpreadCard + 1);
  };
  return (
    <Flex w={'100%'} h={'90vh'}>
      {/* header */}
      <Flex w={'80vw'} direction={'column'} h={'100%'}>
        <Flex mt={50} w={'100%'} h={50} justify={'space-between'}>
          <Flex
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
        <Flex
          mt={mobile ? 10 : 50}
          w={'100%'}
          justify={'center'}
          align={'center'}
        >
          <Flex
            w={130}
            h={227}
            sx={{ background: 'rgba(0,0,0,.4)', border: '2px solid white',boxShadow:'' }}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
