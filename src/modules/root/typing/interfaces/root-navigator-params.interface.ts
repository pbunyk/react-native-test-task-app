import { ParamListBase } from '@react-navigation/native'

import { ERoutes } from '../enums'

export interface IDetailsScreenProps {
  activityId: number
}

export interface IRootStackNavigatorParams extends ParamListBase {
  [ERoutes.Home]: undefined
  [ERoutes.Details]: IDetailsScreenProps
}
