import { FC, useCallback } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, View } from 'react-native'

import { IActivity, scale, tw, Txt, useAppInsets } from '~modules/common'
import { ActivityItem } from '~modules/home/components'
import { useActivitiesQuery } from '~modules/home/hooks'

export const HomeScreen: FC = () => {
  const insets = useAppInsets()

  const { data = [], isLoading, refetch } = useActivitiesQuery()

  const renderItem = useCallback<ListRenderItem<IActivity>>(
    ({ item }) => <ActivityItem activity={item} />,
    [],
  )

  const renderListEmptyComponent = () => (
    <View style={tw`grow items-center justify-center`}>
      <Txt>No activities found</Txt>
    </View>
  )

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator color={tw.color('text-black')} />
      </View>
    )
  }

  return (
    <View
      style={tw.style(`flex-1 p-4 bg-white`, {
        paddingBottom: scale(insets.bottom),
      })}
    >
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `activity-${item.id}`}
        contentContainerStyle={tw`grow gap-3`}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isLoading}
        ListFooterComponentStyle={tw`grow`}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  )
}
