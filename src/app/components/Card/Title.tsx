import { ComponentProps, ForwardedRef, forwardRef } from 'react'

export type TitleProps = ComponentProps<'div'>

export const Title = forwardRef(
  (props: TitleProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className="flex w-[18.5rem] items-start justify-between "
        {...props}
        ref={ref}
      />
    )
  },
)

Title.displayName = 'Title'
