import { TextProps, TextStyle } from 'react-native'

import { TFontDesign } from '~modules/common/typing'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITxtProps extends TextProps {
  children: any

  style?: TextStyle | TextStyle[]

  color?: string
  mod?: TFontDesign

  hide?: boolean
}
