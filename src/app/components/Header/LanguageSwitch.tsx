import * as React from 'react';
import styled from '@emotion/styled';
import { Menu, Button, Avatar, Text, Box, Stack } from '@mantine/core';
import arrowDown from '../../../assets/images/icons/iconChangeLang/Arrow/down/Frame3466310.svg';
import i18n from 'i18next';
import { LanguageConfig } from './data/data';

export interface HeaderMenuselectData {
  data: LanguageConfig[];
}

export const LanguageSwitch = (props: HeaderMenuselectData) => {
  const [opened, setOpened] = React.useState(false);
  const [setlanguage, setSetlanguage] = React.useState('Eng');
  const [setlanguageAvt, setSetlanguageAvt] = React.useState(
    props.data[0].icon,
  );
  React.useLayoutEffect(() => {
    i18n.changeLanguage('en');
  }, []);
  const handleChangeLanguage = v => {
    i18n.changeLanguage(v.key);
    setSetlanguage(v.value);
    setSetlanguageAvt(v.icon);
    setOpened(!opened);
  };
  return (
    <Stack>
      <CreateSelectDown>
        <Menu
          transitionDuration={150}
          onChange={setOpened}
          opened={opened}
          shadow="md"
          width={'98px'}
        >
          <Menu.Target>
            <Button
              sx={{
                height: '38.5px',
                width: '100%',
                background: 'transparent',
                outline: 'none',
                padding: '5px',
                borderRadius: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderRadius: 'none',
                },
              }}
            >
              <Box
                sx={{
                  width: '100px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  borderRadius: 'none',
                }}
              >
                <Avatar size={25} src={`${setlanguageAvt}`} />
                <Text
                  sx={{
                    fontWeight: 600,
                  }}
                  size={15}
                >
                  {setlanguage}
                </Text>
                <Avatar
                  sx={{
                    marginBottom: '2px',
                  }}
                  size={10}
                  src={arrowDown}
                />
              </Box>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {props.data.map(value => {
              return (
                <Box
                  onClick={() => handleChangeLanguage(value)}
                  key={value.key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    padding: '6px 6px 6px 6px',
                    '&:hover': {
                      opacity: '.5',
                    },
                  }}
                >
                  <Avatar size={17} src={`${value.icon}`} />
                  <Text
                    sx={{
                      width: '100%',
                      marginLeft: '5px',
                      whiteSpace: 'nowrap',
                      lineHeight: '10px',
                    }}
                    fz={12}
                  >
                    {value.label}
                  </Text>
                </Box>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </CreateSelectDown>
    </Stack>
  );
};

const CreateSelectDown = styled.div`
  width: 95px;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52,
      0 0 0.1rem #ff2c52, 0 0 1rem #ff2c52, inset 0 0 0.5rem #ff2c52;
  }
`;
