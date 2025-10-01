import { NavigationContainer } from '@react-navigation/native'

import { FC } from 'react'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'

import { Root } from '~modules/root'

const App: FC = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar backgroundColor="transparent" translucent />
          <Root />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App
