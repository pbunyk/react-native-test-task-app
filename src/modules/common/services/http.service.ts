import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Config from 'react-native-config'

export const axiosInstance = axios.create({
  baseURL: Config.API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 6000,
})

export const request = async <T>(
  func: () => Promise<AxiosResponse<T>>,
  retryCount = 0,
  maxRetry = 1,
): Promise<AxiosResponse<T>> => {
  try {
    if (__DEV__) {
      console.log('Sending request...')
    }

    const response = await func()
    return response
  } catch (error: any) {
    if (__DEV__) {
      console.warn('Request error', error?.response?.status || error)
    }

    const status = error?.response?.status

    if ((status === 401 || !status) && retryCount < maxRetry) {
      return request(func, retryCount + 1, maxRetry)
    }

    throw error
  }
}

export const api = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig,
    prefix = '/',
  ): Promise<AxiosResponse<T>> =>
    request<T>(() => axiosInstance.get<T>(`${prefix}${url}`, config)),

  post: async <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
    prefix = '/',
  ): Promise<AxiosResponse<T>> =>
    request<T>(() => axiosInstance.post<T>(`${prefix}${url}`, data, config)),
}
