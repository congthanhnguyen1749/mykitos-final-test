import * as React from 'react';

// cart
import Icon_ActiveCart from '../../../../assets/images/icons/card/card.svg';
import Icon_UnActiveCart from '../../../../assets/images/icons/card/card2.svg';
import Icon_ActiveCartMobile from '../../../../assets/images/Header/cart/active.svg';
import Icon_UnActiveCartMobile from '../../../../assets/images/Header/cart/uncactive.svg';

// center
import Icon_ActiveCenter from '../../../../assets/images/icons/center/Component 59.svg';
import Icon_UnActiveCenter from '../../../../assets/images/icons/center/center.svg';
import Icon_ActiveCenterMobile from '../../../../assets/images/Header/card/active.svg';
import Icon_UnActiveCenterMobile from '../../../../assets/images/Header/card/unactive.svg';

// snowBall
import Icon_ActiveSnowball from '../../../../assets/images/icons/iconSnowBall/Frame 3466290.svg';
import Icon_UnActiveSnowball from '../../../../assets/images/icons/iconSnowBall/iconNoColorDailyCard.svg';
import Icon_ActiveSnowballMobile from '../../../../assets/images/Header/snowball/active.svg';
import Icon_UnActiveSnowballMobile from '../../../../assets/images/Header/snowball/unac.svg';

// change language
import Icon_Vi from '../../../../assets/images/icons//iconChangeLang/Flag/FlagVietNam/flagvie.svg';
import Icon_En from '../../../../assets/images/icons//iconChangeLang/Flag/FlagUSA/flageng.svg';

//login user
import user1 from '../../../../assets/images/icons/loginAndCoin/iconLogin/backgroundUser/user1.svg';
import userUnactive from '../../../../assets/images/icons/loginAndCoin/iconLogin/backgroundUserUnActive/iconusernone.svg';
import userCircle from '../../../../assets/images/icons/loginAndCoin/iconLogin/iconWarning/WarningCircle.svg';

export const iconData: Object[] = [
  {
    iconActived: Icon_ActiveSnowball,
    iconMobileActived: Icon_UnActiveSnowballMobile,
    Icon_UnActiveSnowballMobile: Icon_UnActiveSnowballMobile,
    iconInactived: Icon_UnActiveSnowball,
    Icon_UnActiveCenterMobile: Icon_ActiveSnowballMobile,
    key: 'daily',
    label: 'Header.iconMenu.iconSnowBall',
    link: 'dailycard',
  },
  {
    iconActived: Icon_ActiveCenter,
    iconInactived: Icon_UnActiveCenter,
    iconMobileActived: Icon_UnActiveCenterMobile,
    Icon_UnActiveCenterMobile: Icon_ActiveCenterMobile,
    key: 'get',
    label: 'Header.iconMenu.iconCard',
    link: 'getreading',
  },
  {
    iconActived: Icon_ActiveCart,
    iconMobileActived: Icon_UnActiveCartMobile,
    iconInactived: Icon_UnActiveCart,
    Icon_UnActiveCenterMobile: Icon_ActiveCartMobile,
    Icon_ActiveCartMobile: Icon_ActiveCartMobile,
    key: 'cart',
    label: 'Header.iconMenu.iconCart',
    link: 'cart',
  },
];

export interface LanguageConfig {
  icon: React.ReactNode;
  label: string;
  value: string;
  key: string;
}

export const languageData: LanguageConfig[] = [
  {
    icon: Icon_En,
    label: 'English',
    value: 'Eng',
    key: 'en',
  },
  {
    icon: Icon_Vi,
    label: 'Tiếng Việt',
    value: 'Vie',
    key: 'vi',
  },
];

export const loginUserInfo: Object[] = [
  {
    user: 0,
    iconUser: [`${userUnactive}`, `${userCircle}`],
    active: 0,
    coin: 10,
    money: 10,
  },
  {
    user: 1,
    iconUser: `${user1}`,
    active: 1,
    coin: 100,
    money: 100,
  },
];
