import { FC, useEffect, useState, useRef } from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import { Images } from '../images'
import { IFallbackImageProps } from './types'

const FALLBACK_SOURCE = Images.fallback as ImageSourcePropType

export const FallbackImage: FC<IFallbackImageProps> = ({
  uri,
  style,
  resizeMode = 'cover',
  ...rest
}) => {
  const [isValid, setIsValid] = useState(false)
  const [hasRenderError, setHasRenderError] = useState(false)

  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true
    setIsValid(false)
    setHasRenderError(false)

    if (!uri) {
      return
    }

    const prefetchImage = async () => {
      try {
        const result = await Image.prefetch(uri)
        if (isMounted.current) {
          setIsValid(result)
        }
      } catch {
        if (isMounted.current) {
          setIsValid(false)
        }
      }
    }

    prefetchImage()

    return () => {
      isMounted.current = false
    }
  }, [uri])

  const source: ImageSourcePropType =
    !uri || !isValid || hasRenderError ? FALLBACK_SOURCE : { uri }

  return (
    <Image
      source={source}
      style={style}
      resizeMode={resizeMode}
      onError={() => setHasRenderError(true)}
      {...rest}
    />
  )
}
