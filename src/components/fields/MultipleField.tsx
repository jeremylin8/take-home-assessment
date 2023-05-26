import React, { useState } from 'react'

import NumberField from './NumberField'
import BooleanField from './BooleanField'
import { FieldDefaultProps, FieldProps } from '../../types'

type TextFieldProps = FieldProps

interface MultipleFieldProps extends FieldProps {
  multiple: string[];
}

function MultipleField({
  name, initialValue, multiple, onChange,
}: MultipleFieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }

  return (
    <>
      <NumberField name={name} onChange={onChange} />
      <BooleanField name={name} onChange={onChange} />
    </>
  )
}

MultipleField.defaultProps = FieldDefaultProps

export default MultipleField
