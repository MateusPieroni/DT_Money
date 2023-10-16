import { ComponentProps } from 'react'

export type ContentProps = ComponentProps<'span'>

export function Content(props: ContentProps) {
  return <span {...props} />
}
