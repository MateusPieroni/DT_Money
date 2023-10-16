import { ComponentProps } from 'react'

export type TextProps = ComponentProps<'span'>

export const Text = (props: TextProps) => {
  return <span {...props} />
}
