import { ComponentProps, ForwardedRef, forwardRef } from 'react'

export type PriceProps = ComponentProps<'div'>

export const Price = forwardRef(
  (props: PriceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <div {...props} ref={ref} />
  },
)

Price.displayName = 'Price'
