import { useSafeAreaInsets } from 'react-native-safe-area-context'

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
    top: topInset,
    right,
    bottom: bottomInset,
    left,
  }
}
