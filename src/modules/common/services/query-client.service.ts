import { QueryCache, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      if (__DEV__) {
        console.info(`Something went wrong: ${error.message}`)
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1 * (60 * (60 * 1000)), // stale for 1 hour
      gcTime: 1 * (60 * (60 * 1000)), // stale for 1 hour
    },
    mutations: {
      retry: 0,
      // mutation options
    },
  },
})
