import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import { FC } from 'react'

import { ButtonBack, EFontDesign, setFont, tw, useNav } from '~modules/common'
import { DetailsScreen, HomeScreen } from '~modules/home'

import { ERoutes } from '../typing'

const RootStack = createStackNavigator()

export const RootNavigationGroup: FC = () => {
  const nav = useNav()

  const renderButtonBack = () => <ButtonBack onPress={nav.goBack} />

  return (
    <RootStack.Navigator
      initialRouteName={ERoutes.Home}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: tw.style('font-abel', {
          ...setFont(EFontDesign.Headline3),
        }),
        headerLeft: navigation.canGoBack() ? renderButtonBack : () => null,

        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <RootStack.Screen
        name={ERoutes.Home}
        component={HomeScreen}
        options={{ title: 'Activities' }}
      />
      <RootStack.Screen
        name={ERoutes.Details}
        component={DetailsScreen}
        options={{ headerTransparent: true, title: '' }}
      />
    </RootStack.Navigator>
  )
}
