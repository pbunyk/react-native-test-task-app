import { FC, PropsWithChildren } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'

import { tw } from '~modules/common/configs'
import { scale } from '~modules/common/helpers'
import { EFontDesign } from '~modules/common/typing'

import { Txt } from '../../typography'
import { IButtonPrimaryProps } from './types'

export const ButtonPrimary: FC<PropsWithChildren<IButtonPrimaryProps>> = ({
  children,

  disabled = false,
  loading = false,

  txtMod = EFontDesign.LargeBody,
  txtColor = tw.color('text-white'),

  style = {},
  txtStyle = {},

  onPress,
}) => {
  const containerStyle = tw.style(
    'items-center justify-center rounded-full bg-black',
    { height: scale(56) },
  )

  if (loading) {
    return (
      <View style={[containerStyle, style]}>
        <ActivityIndicator color={tw.color('bg-white')} />
      </View>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}
      style={[containerStyle, style, { opacity: disabled ? 0.4 : 1 }]}
    >
      <Txt mod={txtMod} style={txtStyle} color={txtColor}>
        {children}
      </Txt>
    </TouchableOpacity>
  )
}
