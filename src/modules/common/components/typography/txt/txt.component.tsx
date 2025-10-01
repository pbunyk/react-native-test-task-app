import { forwardRef } from 'react'
import { Text } from 'react-native'

import { tw } from '~modules/common/configs'
import { setFont } from '~modules/common/helpers'
import { EFontDesign } from '~modules/common/typing'

import { ITxtProps } from './types'

export const Txt = forwardRef<Text, ITxtProps>(
  (
    {
      children,

      style = {},

      mod = EFontDesign.Headline5,
      color,

      hide = false,

      ...props
    },
    ref,
  ) => {
    if (hide) {
      return null
    }

    return (
      <Text
        ref={ref}
        {...props}
        style={[
          {
            ...setFont(mod),
            ...(color ? { color } : tw.style('text-black')),
          },
          style,
        ]}
      >
        {children}
      </Text>
    )
  },
)
