import React, { useState } from 'react'

import { FieldDefaultProps, FieldProps } from '../../types'

type TextFieldProps = FieldProps

function TextField({ name, initialValue, onChange }: TextFieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match('^[a-zA-Z ]*$') !== null && e.target.value.length <= 30) {
      setValue(e.target.value)
      onChange(e)
    }
  }

  return (
    <input
      type="text"
      name={name}
      className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
      value={value}
      onChange={handleChange}
    />
  )
}

TextField.defaultProps = FieldDefaultProps

export default TextField
