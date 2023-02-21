import * as React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { AppMykitos } from './pages/Demo/components/Loadable';
import { DemoPhaser } from './pages/Demo/phaser/Loadable';
import { DemoPiXi } from './pages/Demo/pixi/Loadable';
import { DemoThree } from './pages/Demo/threejs/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { BodyCartGroup } from './components/Body/Cart/BodyCartGroup';
import { Invoid } from './components/Header/Invoid';
import { BodyContentItems } from './components/Body/GetReading/contentItem/BodyContentItems';
import { BodyContentItemsChild } from './components/Body/GetReading/ContentItemsChild/BodyContentItemsChild';
import { Box } from '@mantine/core';
import { StoneSliceReduce } from 'store/slice/changeStone';
import { ContentItemsflashesStone } from './components/Body/GetReading/flashesStone/ContentItemsflashesStone';
import { ContentItemsChooseStone } from './components/Body/GetReading/ChooseStone/ContentItemsChooseStone';
import { BodyDailyCardGroup } from './components/Body/Dailycard/BodyDailyCardGroup';
import { BodyGetReading } from './components/Body/GetReading/Group/BodyGetReading';
import { Login } from './components/Login';
import { PorgotPW } from './components/Login/ForgotPassword/PorgotPW';
import { LoginPage } from './components/Login/LoginPage/LoginPage';
import { Register } from './components/Login/Register/Register';
export function App() {
  const { i18n } = useTranslation();
  StoneSliceReduce();
  return (
    <BrowserRouter>
      <Box w={'100%'} h={'100%'}>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Routes>
          <Route path="/" element={<AppMykitos />}>
            <Route path=":keyactive" element={<Invoid />}>
              <Route path="dailycard" element={<BodyDailyCardGroup />}></Route>
              <Route path="getreading" element={<BodyGetReading />}></Route>
              <Route path="cart" element={<BodyCartGroup />}></Route>
              <Route
                path="contentItem/*"
                element={<BodyContentItems />}
              ></Route>
              <Route
                path="contentItemsChild/*"
                element={<BodyContentItemsChild />}
              ></Route>
              <Route
                path="contentItemsChooseStone/*"
                element={<ContentItemsChooseStone />}
              ></Route>
              <Route
                path="contentItemsflashesStone/*"
                element={<ContentItemsflashesStone />}
              ></Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}>
            <Route path="/login/porgotpw" element={<PorgotPW />}></Route>
            <Route path="/login/loginpage" element={<LoginPage />}></Route>
            <Route path="/login/register" element={<Register />}></Route>
          </Route>
          <Route path="/demo/three" element={<DemoThree />}></Route>
          <Route path="/demo/phaser" element={<DemoPhaser />}></Route>
          <Route path="/demo/pixi" element={<DemoPiXi />}></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
