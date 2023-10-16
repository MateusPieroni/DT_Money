import { ComponentProps } from 'react'

export type TriggerProps = ComponentProps<'label'>

export const Trigger = (props: TriggerProps) => {
  return <label {...props} />
}
