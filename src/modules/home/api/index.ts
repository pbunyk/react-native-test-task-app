import { AxiosResponse } from 'axios'

import { api, IActivity } from '~modules/common'

import { IPayloadAddFavorites } from './interfaces'

const getActivitiesReq = (): Promise<AxiosResponse<IActivity[]>> =>
  api.get('activities')

const addToFavoritesReq = (payload: IPayloadAddFavorites) =>
  api.post('favorites', payload)

export { getActivitiesReq, addToFavoritesReq }
