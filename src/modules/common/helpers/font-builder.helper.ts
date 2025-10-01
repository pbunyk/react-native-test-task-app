import { TextStyle } from 'react-native'

import { EFontDesign, TFontDesign } from '../typing'
import { scale } from './scale.helper'

type TFontTextStyle = Pick<
  TextStyle,
  'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight'
>

const setFontTypeParams = () => ({
  [EFontDesign.Headline1]: {
    fontSize: scale(28, 26),
    lineHeight: scale(30, 28),
  },
  [EFontDesign.Headline2]: {
    fontSize: scale(24, 22),
    lineHeight: scale(26, 24),
  },
  [EFontDesign.Headline3]: {
    fontSize: scale(20, 18),
    lineHeight: scale(22, 20),
  },
  [EFontDesign.Headline4]: {
    fontSize: scale(16, 14),
    lineHeight: scale(18, 16),
  },
  [EFontDesign.Headline5]: {
    fontSize: scale(14, 12),
    lineHeight: scale(16, 14),
  },
  [EFontDesign.LargeBody]: {
    fontSize: scale(18, 16),
    lineHeight: scale(20, 18),
  },
  [EFontDesign.Base]: {
    fontSize: scale(16, 14),
    lineHeight: scale(18, 16),
  },
  [EFontDesign.Small]: {
    fontSize: scale(14, 12),
    lineHeight: scale(16, 14),
  },
  [EFontDesign.ExtraSmall]: {
    fontSize: scale(11, 9),
    lineHeight: scale(13, 11),
  },
})

export const setFont = (fontDesign: TFontDesign): TFontTextStyle => {
  return setFontTypeParams()[fontDesign]
}
