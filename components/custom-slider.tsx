"use client"

import React from "react"

import { useState, useRef, useCallback } from "react"

interface CustomSliderProps {
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

export function CustomSlider({ defaultValue = 50, min = 0, max = 100, step = 1, onChange }: CustomSliderProps) {
  const [value, setValue] = useState(defaultValue)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const updateValue = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      const newValue = Math.round((min + percentage * (max - min)) / step) * step

      setValue(newValue)
      onChange?.(newValue)
    },
    [min, max, step, onChange],
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true)
      updateValue(e.clientX)
    },
    [updateValue],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        updateValue(e.clientX)
      }
    },
    [isDragging, updateValue],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add global mouse event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div ref={sliderRef} className="custom-slider cursor-pointer" onMouseDown={handleMouseDown}>
      <div className="slider-track">
        <div className="slider-range" style={{ width: `${percentage}%` }} />
      </div>
      <div
        role="slider"
        className={`transition-transform ${isDragging ? "scale-110" : "hover:scale-105"}`}
        style={{
          left: `${percentage}%`,
          transform: "translateX(-50%)",
        }}
        tabIndex={0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
    </div>
  )
}
