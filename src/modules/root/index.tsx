import { FC } from 'react'
import Toast from 'react-native-toast-message'

import { RootNavigationGroup } from './navigation-groups'

export const Root: FC = () => {
  return (
    <>
      <RootNavigationGroup />
      <Toast />
    </>
  )
}
