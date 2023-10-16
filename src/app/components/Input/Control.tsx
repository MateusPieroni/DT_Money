import { ComponentProps, ForwardedRef, forwardRef } from 'react'

export type ControlProps = ComponentProps<'input'>

export const Control = forwardRef(
  (props: ControlProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        {...props}
        className="w-full rounded-md  bg-gray-1 p-4 text-gray-5 outline-none placeholder:text-gray-5 focus:border focus:border-green-light"
        ref={ref}
      />
    )
  },
)

Control.displayName = 'Control'
