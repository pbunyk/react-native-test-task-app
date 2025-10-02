import { useMutation, useQueryClient } from '@tanstack/react-query'

import Toast from 'react-native-toast-message'

import { EQuery } from '~modules/common'

import { addToFavoritesReq } from '../api'

export const useAddFavoritesMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addToFavoritesReq,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [EQuery.Activities] })

      Toast.show({
        type: 'success',
        text1: 'Successfully added!',
      })
    },
    onError: error => {
      if (__DEV__) {
        console.warn('Failed to add to favorites', error)
      }
      Toast.show({
        type: 'error',
        text1: 'Some error occurred',
      })
    },
  })
}
