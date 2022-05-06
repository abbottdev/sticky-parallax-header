import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CardScreen } from '../screens';
import YodaScreen from '../screens/additionalExamples/YodaScreen';
import AppStoreHeader from '../screens/additionalExamples/SimsScreen';
import { AvatarHeaderFlatListExample } from '../screens/additionalExamples/AvatarHeaderFlatListExample';
import { AvatarHeaderScrollViewExample } from '../screens/additionalExamples/AvatarHeaderScrollViewExample';
import { AvatarHeaderSectionListExample } from '../screens/additionalExamples/AvatarHeaderSectionListExample';
import { StickyHeaderFlatListExample } from '../screens/additionalExamples/StickyHeaderFlatListExample';
import { StickyHeaderScrollViewExample } from '../screens/additionalExamples/StickyHeaderScrollViewExample';
import { StickyHeaderSectionListExample } from '../screens/additionalExamples/StickyHeaderSectionListExample';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="AppStore" component={AppStoreHeader} />
      <Stack.Screen name="Yoda" component={YodaScreen} />
      <Stack.Screen name="StickyHeaderFlatList" component={StickyHeaderFlatListExample} />
      <Stack.Screen name="StickyHeaderScrollView" component={StickyHeaderScrollViewExample} />
      <Stack.Screen name="StickyHeaderSectionList" component={StickyHeaderSectionListExample} />
      <Stack.Screen name="AvatarHeaderFlatList" component={AvatarHeaderFlatListExample} />
      <Stack.Screen name="AvatarHeaderScrollView" component={AvatarHeaderScrollViewExample} />
      <Stack.Screen name="AvatarHeaderSectionList" component={AvatarHeaderSectionListExample} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
