import { FC } from 'react'
import { View, Text } from 'react-native'

import { tw } from '~modules/common'

export const HomeScreen: FC = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <Text style={tw`font-abel`}>HomeScreen</Text>
    </View>
  )
}
