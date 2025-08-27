"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface Model {
  id: string
  name: string
  version: string
  description: string
  isAlpha?: boolean
}

const models: Model[] = [
  {
    id: "v2",
    name: "Eleven Multilingual v2",
    version: "v2",
    description: "The most expressive Text to Speech",
    isAlpha: false,
  },
  {
    id: "v3",
    name: "Eleven Multilingual v3",
    version: "v3",
    description: "Next generation voice synthesis",
    isAlpha: true,
  },
  {
    id: "turbo",
    name: "Eleven Turbo v2",
    version: "T2",
    description: "Fast and efficient voice generation",
    isAlpha: false,
  },
]

interface ModelSelectorProps {
  selectedModel: Model
  onModelChange: (model: Model) => void
}

export function ModelSelector({ selectedModel, onModelChange }: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-2">
      {/* Model Selector */}
      <div className="relative">
        <div
          className="flex items-center justify-between bg-white/40 backdrop-blur-sm border border-white/50 p-2.5 rounded-lg cursor-pointer hover:bg-white/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-md text-smallest font-medium">
              {selectedModel.version}
            </div>
            <span className="text-smaller text-black font-medium">{selectedModel.name}</span>
          </div>
          <ChevronRight className={`w-4 h-4 text-gray-700 transition-transform ${isOpen ? "rotate-90" : ""}`} />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg border border-white/60 shadow-lg z-50">
            {models.map((model) => (
              <div
                key={model.id}
                className={`p-2.5 cursor-pointer hover:bg-white/70 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  selectedModel.id === model.id ? "bg-white/60" : ""
                }`}
                onClick={() => {
                  onModelChange(model)
                  setIsOpen(false)
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-md text-smallest font-medium">
                      {model.version}
                    </div>
                    <span className="text-smaller text-black font-medium">{model.name}</span>
                  </div>
                  {model.isAlpha && (
                    <span className="text-smallest bg-orange-500 text-white px-2 py-1 rounded-full font-medium">
                      Try v3 (alpha)
                    </span>
                  )}
                </div>
                <p className="text-smallest text-gray-700 mt-1 ml-7">{model.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Model Description - Compact */}
        <div className="mt-2 p-2 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg">
          <p className="text-smallest text-black">{selectedModel.description}</p>
          {selectedModel.isAlpha && (
            <button className="mt-1 bg-orange-500 hover:bg-orange-600 text-white text-smallest px-2 py-1 rounded-full transition-colors font-medium">
              Try v3 (alpha)
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
