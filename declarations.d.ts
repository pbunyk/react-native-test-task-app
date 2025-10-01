declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string
  }

  export const Config: NativeConfig
  export default Config
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  import { FC } from 'react'
  const content: FC<SvgProps>

  export default content
}

declare module '*.png' {
  const value: string

  export default value
}
