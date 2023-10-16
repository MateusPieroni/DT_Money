import { ComponentProps } from 'react'

export type IconProps = ComponentProps<'div'>

export const Icon = (props: IconProps) => {
  return <div {...props} />
}
