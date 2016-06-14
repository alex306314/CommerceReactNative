import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import {
  SplashView,
  MainView,
  NewsDetailView,
} from '../views';

export default Actions.create(
  <Scene key="root">
    <Scene key="splash" component={SplashView} initial={true} />
    <Scene key="main" component={MainView} />
    <Scene key="newsDetail" component={NewsDetailView} />
  </Scene>
);