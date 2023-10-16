import { ComponentProps, ForwardedRef, forwardRef } from 'react'

export type RootProps = ComponentProps<'div'>

export const Root = forwardRef(
  (props: RootProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <div {...props} ref={ref} />
  },
)

Root.displayName = 'Root'
