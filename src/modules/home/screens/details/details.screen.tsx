import { FC } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'

import {
  ButtonPrimary,
  FallbackImage,
  scale,
  tw,
  Txt,
  useAppInsets,
  useRouteParam,
} from '~modules/common'
import { useAddFavoritesMutation } from '~modules/home/hooks'
import { ERoutes } from '~modules/root/typing'

export const DetailsScreen: FC = () => {
  const insets = useAppInsets()
  const { activity } = useRouteParam<ERoutes.Details>().params

  const { isPending, mutate: mutateAddFavorites } = useAddFavoritesMutation()

  const handleAddActivity = () => {
    mutateAddFavorites({ id: activity.id })
  }

  const renderDivider = () => (
    <View style={tw`h-0.5 rounded-full bg-neural-15`} />
  )

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={tw.style('grow bg-white', {
        paddingBottom: scale(insets.bottom),
      })}
    >
      <StatusBar barStyle="light-content" />

      <FallbackImage
        uri={activity.photoUrl}
        style={tw`w-full h-1/2 rounded-b-3xl`}
      />

      <View style={tw`flex-1 p-5`}>
        <View style={tw.style('flex-1', { gap: scale(20) })}>
          <Txt mod="3xl">{activity.name}</Txt>

          <View style={tw`flex-row items-center justify-between`}>
            <Txt mod="2xl">$ {activity.price.toFixed(2)}</Txt>
            <Txt mod="sm" style={tw`text-neural-75`}>
              Includes taxes and fees
            </Txt>
          </View>

          {renderDivider()}

          <View style={tw.style({ gap: scale(10) })}>
            <Txt>Description</Txt>
            <Txt mod="base" numberOfLines={4}>
              {activity.description || 'No description available.'}
            </Txt>
          </View>

          {renderDivider()}
        </View>

        <ButtonPrimary loading={isPending} onPress={handleAddActivity}>
          Add to Favorites
        </ButtonPrimary>
      </View>
    </ScrollView>
  )
}
