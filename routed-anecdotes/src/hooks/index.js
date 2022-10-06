import { useState } from 'react'

export const useField = (type, name) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    e ? setValue(e.target.value) : setValue('')
  }

  return {
    name,
    type,
    value,
    onChange,
  }
}
