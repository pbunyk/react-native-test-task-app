import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('screen').height
const BASIC_HEIGHT = 812
const coff = (screenHeight / BASIC_HEIGHT) * 100

const maxSize = (size: number) => size + (size / 100) * 20
const prepareRes = (res: number, size: number) => Math.min(res, maxSize(size))

export const scale = (size: number, min?: number) => {
  const res = size * (coff / 100)

  if (min) {
    return Math.max(prepareRes(res, size), min)
  }
  return prepareRes(res, size)
}
