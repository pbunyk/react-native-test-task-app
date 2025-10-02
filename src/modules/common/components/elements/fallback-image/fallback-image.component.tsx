import { FC, useEffect, useState, useRef, useCallback } from 'react'
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

  const prefetchImage = useCallback(async () => {
    if (!uri) {
      return
    }

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
  }, [uri])

  useEffect(() => {
    isMounted.current = true

    setIsValid(false)
    setHasRenderError(false)

    prefetchImage()

    return () => {
      isMounted.current = false
    }
  }, [prefetchImage])

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
