import { TextProps, TextStyle } from 'react-native'

import { TFontDesign } from '~modules/common/typing'

export interface ITxtProps extends TextProps {
  children: any

  style?: TextStyle | TextStyle[]

  color?: string
  mod?: TFontDesign

  hide?: boolean
}
