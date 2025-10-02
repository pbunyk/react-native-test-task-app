import { ViewStyle } from 'react-native'

export interface IBackButtonProps {
  colorIcon?: string
  sizeIcon?: number
  style?: ViewStyle

  onPress: () => void
}
