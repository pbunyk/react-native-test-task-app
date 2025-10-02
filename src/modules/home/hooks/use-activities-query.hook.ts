import { useQuery } from '@tanstack/react-query'

import { AxiosResponse } from 'axios'

import { EQuery, IActivity } from '~modules/common'

import { getActivitiesReq } from '../api'

export const useActivitiesQuery = () => {
  return useQuery<IActivity[], Error>({
    queryKey: [EQuery.Activities],
    queryFn: async () => {
      const res: AxiosResponse<IActivity[]> = await getActivitiesReq()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })
}
