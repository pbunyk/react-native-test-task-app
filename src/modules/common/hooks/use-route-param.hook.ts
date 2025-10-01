import { useRoute } from '@react-navigation/native'

import { ERoutes, TRootNavigationScreenRouteProp } from '~modules/root/typing'

export const useRouteParam = <TRouteKey extends ERoutes>() => {
  return useRoute<TRootNavigationScreenRouteProp<TRouteKey>>()
}
