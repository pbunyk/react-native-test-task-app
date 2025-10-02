import { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { scale } from '~modules/common/helpers'
import { tw } from '~modules/common/configs'

import { Icon } from '../../elements'
import { IBackButtonProps } from './types'

export const ButtonBack: FC<IBackButtonProps> = ({
  colorIcon,
  sizeIcon,
  style,

  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[tw`bg-white ml-5 mt-5 p-5 rounded-full`, style]}
      onPress={onPress}
    >
      <Icon.arrowLeft
        width={scale(sizeIcon ?? 24)}
        height={scale(sizeIcon ?? 24)}
        color={colorIcon ?? tw.color('black')}
      />
    </TouchableOpacity>
  )
}
