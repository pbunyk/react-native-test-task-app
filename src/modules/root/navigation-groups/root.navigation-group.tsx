import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import { FC } from 'react'

import { tw } from '~modules/common'
import { DetailsScreen, HomeScreen } from '~modules/home'

import { ERoutes } from '../typing'

const RootStack = createStackNavigator()

export const RootNavigationGroup: FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={ERoutes.Home}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerShadowVisible: false,
        gestureEnabled: true,
        headerTitleStyle: tw.style('font-abel text-xl'),
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <RootStack.Screen
        name={ERoutes.Home}
        component={HomeScreen}
        options={{ title: 'Activities' }}
      />
      <RootStack.Screen name={ERoutes.Details} component={DetailsScreen} />
    </RootStack.Navigator>
  )
}
