import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className="flex flex-col gap-2 rounded-md bg-gray-3 p-6 lg:flex-row lg:gap-40 lg:px-8 lg:py-5"
      {...props}
    />
  )
}
