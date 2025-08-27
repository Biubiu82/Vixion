"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface Voice {
  id: string
  name: string
  color: string
}

const voices: Voice[] = [
  { id: "rachel", name: "Rachel", color: "bg-purple-600" },
  { id: "adam", name: "Adam", color: "bg-blue-600" },
  { id: "bella", name: "Bella", color: "bg-pink-600" },
  { id: "charlie", name: "Charlie", color: "bg-green-600" },
]

interface VoiceSelectorProps {
  selectedVoice: Voice
  onVoiceChange: (voice: Voice) => void
}

export function VoiceSelector({ selectedVoice, onVoiceChange }: VoiceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between glassmorphism bg-white/20 p-3 rounded-lg cursor-pointer hover:bg-white/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 ${selectedVoice.color} rounded-full`}></div>
          <span className="text-smaller text-gray-800">{selectedVoice.name}</span>
        </div>
        <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glassmorphism bg-white/90 rounded-lg border border-white/30 z-50">
          {voices.map((voice) => (
            <div
              key={voice.id}
              className={`flex items-center gap-2 p-3 cursor-pointer hover:bg-white/30 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                selectedVoice.id === voice.id ? "bg-white/20" : ""
              }`}
              onClick={() => {
                onVoiceChange(voice)
                setIsOpen(false)
              }}
            >
              <div className={`w-5 h-5 ${voice.color} rounded-full`}></div>
              <span className="text-smaller text-gray-800">{voice.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
