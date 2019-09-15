import React from 'react';
import { Animated, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Routes from '~/routes';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

import { Container } from './styles';

import Tab from '~/components/Tab';
import { primary, primaryLight } from '~/utils/colors';
import BottomController from '~/components/BottomController';

const _scrollX = new Animated.Value(0);
// 6 is a quantity of tabs
const interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
  scale: _scrollX.interpolate({
    inputRange: [idx - 1, idx, idx + 1],
    outputRange: [1, 1.2, 1],
    extrapolate: 'clamp',
  }),
  opacity: _scrollX.interpolate({
    inputRange: [idx - 1, idx, idx + 1],
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  }),
  textColor: _scrollX.interpolate({
    inputRange: [idx - 1, idx, idx + 1],
    outputRange: [primary, '#fff', primary],
  }),
  backgroundColor: _scrollX.interpolate({
    inputRange: [idx - 1, idx, idx + 1],
    outputRange: ['rgba(0,0,0,0.1)', primary, 'rgba(0,0,0,0.1)'],
    extrapolate: 'clamp',
  }),
}));

const Main = () => (
  <Container>
    <ScrollableTabView
      renderTabBar={() => (
        <TabBar
          underlineColor={primaryLight}
          tabBarStyle={{
            backgroundColor: '#fff',
            borderTopColor: '#d2d2d2',
            borderTopWidth: 1,
          }}
          renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
            <Tab
              key={page}
              tab={tab}
              page={page}
              isTabActive={isTabActive}
              onPressHandler={onPressHandler}
              onTabLayout={onTabLayout}
              styles={interpolators[page]}
            />
          )}
        />
      )}
      onScroll={x => _scrollX.setValue(x)}
    >
      {Routes.map(Screen => (
        <Screen />
      ))}
    </ScrollableTabView>
    <BottomController />
  </Container>
);

export default Main;
