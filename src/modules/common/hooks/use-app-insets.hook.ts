import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { scale } from '../helpers'

interface IProps {
  top?: number
  bottom?: number
  right?: number
  left?: number
}
export const useAppInsets = ({
  top = 15,
  right = 0,
  bottom = 15,
  left = 0,
}: IProps = {}) => {
  const insets = useSafeAreaInsets()

  const topInset = insets.top || top
  const bottomInset = insets.bottom || bottom

  return {
    top: scale(topInset),
    right,
    bottom: scale(bottomInset),
    left,
  }
}
