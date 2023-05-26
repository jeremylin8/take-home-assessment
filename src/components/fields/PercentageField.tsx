import React, { useState } from 'react'

import { FieldDefaultProps, FieldProps } from '../../types'

function PercentageField({ name, initialValue, onChange }: FieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match('^([0-9]|([1-9][0-9])|100)?$') !== null) {
      setValue(e.target.value)
      onChange(e)
    }
  }

  return (
    <>
      <input
        type="number"
        name={name}
        className="rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
        value={value}
        min="0"
        max="100"
        onChange={handleChange}
      /> %
    </>

  )
}

PercentageField.defaultProps = FieldDefaultProps

export default PercentageField
