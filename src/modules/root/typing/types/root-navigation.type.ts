import { RouteProp } from '@react-navigation/native'

import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

import { ERoutes } from '../enums'
import { IRootStackNavigatorParams } from '../interfaces'

export type TRootNavigationProp = NativeStackNavigationProp<
  IRootStackNavigatorParams,
  ERoutes
>

export type TRootNavigationScreenRouteProp<TRouteKey extends ERoutes> =
  RouteProp<IRootStackNavigatorParams, TRouteKey>
