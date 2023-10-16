import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export const Root = (props: RootProps) => {
  return <div className="w-full" {...props} />
}
