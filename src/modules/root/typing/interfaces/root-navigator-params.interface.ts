import { ParamListBase } from '@react-navigation/native'

import { IActivity } from '~modules/common'

import { ERoutes } from '../enums'

export interface IDetailsScreenProps {
  activity: IActivity
}

export interface IRootStackNavigatorParams extends ParamListBase {
  [ERoutes.Home]: undefined
  [ERoutes.Details]: IDetailsScreenProps
}
