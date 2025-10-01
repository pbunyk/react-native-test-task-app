import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'

import { FC } from 'react'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'

import { queryClient } from '~modules/common'
import { Root } from '~modules/root'

const App: FC = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StatusBar backgroundColor="transparent" translucent />
            <Root />
          </SafeAreaProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App
