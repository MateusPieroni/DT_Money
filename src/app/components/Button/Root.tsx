import { ComponentProps, ForwardedRef, forwardRef } from 'react'

export type RootProps = ComponentProps<'button'>

export const Root = forwardRef(
  (props: RootProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return <button {...props} ref={ref} />
  },
)

Root.displayName = 'Root'
