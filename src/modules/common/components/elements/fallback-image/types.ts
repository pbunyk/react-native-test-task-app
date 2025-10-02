import { ImageProps } from 'react-native'

export interface IFallbackImageProps extends Omit<ImageProps, 'source'> {
  uri?: string
}
