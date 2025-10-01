import { FC } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

import { Icon, scale, tw, Txt, useNav } from '~modules/common'
import { ERoutes } from '~modules/root/typing'

import { IActivityItemProps } from './types'

export const ActivityItem: FC<IActivityItemProps> = ({ activity }) => {
  const nav = useNav()

  const navigateToActivity = () => {
    nav.navigate(ERoutes.Details, { activityId: activity.id })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`gap-1`}
      onPress={navigateToActivity}
    >
      <Image
        source={{ uri: activity.photoUrl }}
        style={tw.style('w-full rounded-3xl', { height: scale(140) })}
        resizeMode="cover"
      />

      <View
        style={tw.style('bg-neural-10 rounded-lg', {
          padding: scale(20),
          gap: scale(12),
        })}
      >
        <View style={tw`flex-row justify-between items-center`}>
          <Txt numberOfLines={1} style={tw`flex-1`}>
            {activity.name}
          </Txt>
          <View style={tw`flex-row items-center gap-1`}>
            <Icon.star
              width={scale(16)}
              height={scale(16)}
              color={tw.color('golden')}
            />
            <Txt>{activity.rating.toFixed(1)}</Txt>
          </View>
        </View>

        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-1 flex-row items-center gap-1`}>
            <Icon.locationPin
              width={scale(16)}
              height={scale(16)}
              color={tw.color('black')}
            />
            <Txt numberOfLines={1} style={tw`flex-1`}>
              {activity.location}
            </Txt>
          </View>

          <Txt>
            ${activity.price.toFixed(2)}{' '}
            <Txt color={tw.color('neural-75')}>/ night</Txt>
          </Txt>
        </View>
      </View>
    </TouchableOpacity>
  )
}
