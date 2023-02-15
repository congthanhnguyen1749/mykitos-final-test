import { Box, Flex, Image } from '@mantine/core';
import React from 'react';
import menuLogo from '../../../../../assets/mobile/user/Component 64.svg';
import { HeaderUserGroup } from '../../HeaderUserGroup';
import { ListMenuUser } from './ListMenuUser';
import usericon1 from '../../../../../assets/mobile/user/iconsettinguser/1.svg';
import usericon2 from '../../../../../assets/mobile/user/iconsettinguser/2.svg';
import usericon3 from '../../../../../assets/mobile/user/iconsettinguser/3.svg';
import usericon4 from '../../../../../assets/mobile/user/iconsettinguser/4.svg';
import usericon5 from '../../../../../assets/mobile/user/iconsettinguser/5.svg';
import usericon6 from '../../../../../assets/mobile/user/iconsettinguser/6.svg';
import usericon7 from '../../../../../assets/mobile/user/iconsettinguser/7.svg';
import usericon8 from '../../../../../assets/mobile/user/iconsettinguser/8.svg';
import usericon9 from '../../../../../assets/mobile/user/iconsettinguser/9.svg';
const DatalistMenu: Object[] = [
  { icons: usericon1, label: 'Thông tin tài khoản', active: '0' },
  { icons: usericon2, label: 'Liên kết tài khoản', active: '1' },
  { icons: usericon3, label: 'Nhật ký', active: '2' },
  { icons: usericon4, label: 'Lịch sử dòng tiền', active: '3' },
  { icons: usericon5, label: 'Cài đặt và trợ giúp', active: '4' },
  { icons: usericon6, label: 'Đánh giá', active: '5' },
  { icons: usericon7, label: 'Mời bạn bè', active: '6' },
  { icons: usericon8, label: 'Chính sách bảo mật', active: '7' },
  { icons: usericon9, label: 'Đăng xuất', active: '8' },
];
export const UserListTask = () => {
  const [changevalue, setchangevalue] = React.useState(false);
  const getref: any = React.useRef();
  React.useLayoutEffect(() => {
    setchangevalue(e => !changevalue);
  }, []);
  const UnHideMenu: any = e => {
    getref.current.style.top = '0px';
    getref.current.style.right = '0px';
    getref.current.style.opacity = '1';
    getref.current.style.transition = 'all .5s linear ';
    getref.current.style.borderBottom = '.2px solid white';
    getref.current.style.dis = '.2px solid white';
  };
  const HideMenu: any = e => {
    getref.current.style.display = changevalue ? 'block' : 'none';
    getref.current.style.top = '0px';
    getref.current.style.right = '-100%';
    getref.current.style.opacity = '0';
    getref.current.style.transition = 'all .5s linear  ';
  };
  const [changeActiveValue, setChangeActiveValue] = React.useState();
  const changeActive: any = e => {
    setChangeActiveValue(e);
  };
  return (
    <Flex>
      <Box onClick={() => UnHideMenu()} style={{ color: 'white' }}>
        <Image src={menuLogo}></Image>
      </Box>
      <Flex
        direction={'column'}
        onClick={e => HideMenu()}
        ref={getref}
        style={{
          color: 'white',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: '0',
          right: '-100%',
          transition: 'all .5s linear ',
          zIndex: '100',
          opacity: '1',
          // background: '#090F1B',
        }}
      >
        <Flex justify={'flex-end'} align={'center'} h={'100px'} w={'100%'}>
          <Box sx={{ borderBottom: '2px solid gray' }}>
            <HeaderUserGroup></HeaderUserGroup>
          </Box>
        </Flex>
        <Flex
          align={'flex-end'}
          // sx={{ borderRight: '1px solid gray' }}
          direction={'column'}
          w={'100%'}
          h={'calc(100vh - 100px)'}
        >
          {DatalistMenu.map((value, index) => {
            return (
              <Flex
                w={200}
                justify={'center'}
                h={'100%'}
                sx={{
                  background: '#090F1B',
                  borderLeft: '1px solid gray',
                }}
                key={index}
                onClick={() => changeActive(index)}
              >
                <ListMenuUser
                  active={changeActiveValue}
                  data={value}
                ></ListMenuUser>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
