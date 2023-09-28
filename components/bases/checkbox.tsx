import React from 'react'

type CheckboxProps = {
  name: string
  text: string
}

export default function Checkbox({ name, text }: CheckboxProps) {
  return (
    <div>
      <label htmlFor={name}>
        <input id={name} name={name} type="checkbox" />
        {text}
      </label>
    </div>
  )
}
