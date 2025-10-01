import { useNavigation } from '@react-navigation/native'

import { TRootNavigationProp } from '~modules/root/typing'

export const useNav = () => {
  return useNavigation<TRootNavigationProp>()
}
