import React from 'react';
import { Box, Flex } from '@mantine/core';
import { HeaderMenuIcon } from './HeaderMenuIcon';
import { HeaderMenuIconGroupProps } from '../interface/interface';
import { useTranslation } from 'react-i18next';

import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { LanguageSwitch } from './LanguageSwitch';
export function HeaderMenuIconGroup(props: HeaderMenuIconGroupProps) {
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const params: any = useParams<{ keyactive: string }>();
  const [ChangeActive, setChangeActive]: any = React.useState();
  const { t }: any = useTranslation();
  React.useLayoutEffect(() => {
    props.ChangeActive(ChangeActive);
  }, [ChangeActive]);
  const ItemActive: any = (v, i) => {
    setChangeActive(v.key);
  };
  const changedirection: any = mobile ? 'column' : ' row ';
  const changewidth: any = mobile ? '100%' : '600px';
  const changealign: any = mobile ? 'flex-start' : 'center';
  const changejustify: any = mobile ? 'flex-start' : 'space-between';
  return (
    <Flex
      direction={changedirection}
      justify={changejustify}
      align={changealign}
      w={changewidth}
    >
      {props.data.map((v, i) => {
        return (
          <Box key={i} onClick={e => ItemActive(v)}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/${v.key}/${v.link}`}
              key={v.key}
              state={'hello, im a passed message!'}
            >
              <HeaderMenuIcon
                active={params.keyactive == v.key}
                iconActived={v.iconActived}
                iconInactived={v.iconInactived}
                label={t(v.label)}
              />
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
}
