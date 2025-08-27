"use client"

import { useState } from "react"

interface CustomToggleProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export function CustomToggle({ defaultChecked = false, onChange }: CustomToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange?.(newChecked)
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={handleToggle} />
      <span className="toggle-slider"></span>
    </label>
  )
}
