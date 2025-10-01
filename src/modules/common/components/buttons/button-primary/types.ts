import { TextStyle, ViewStyle } from 'react-native'

import { TFontDesign } from '~modules/common/typing'

export interface IButtonPrimaryProps {
  disabled?: boolean
  loading?: boolean

  txtMod?: TFontDesign
  txtColor?: string

  style?: ViewStyle | ViewStyle[]
  txtStyle?: TextStyle

  onPress: () => void
}
