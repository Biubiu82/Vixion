"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { BlueOrbs } from "@/components/blue-orbs"
import { CustomSlider } from "@/components/custom-slider"
import { CustomToggle } from "@/components/custom-toggle"
import { VoiceSelector } from "@/components/voice-selector"
import { ModelSelector } from "@/components/model-selector"
import {
  Home,
  Mic,
  Plus,
  Settings,
  Download,
  RefreshCw,
  ChevronDown,
  Volume2,
  Wand2,
  FileText,
  Bell,
} from "lucide-react"

export default function TextToSpeech() {
  const [selectedVoice, setSelectedVoice] = useState({
    id: "rachel",
    name: "Rachel",
    color: "bg-purple-600",
  })

  const [selectedModel, setSelectedModel] = useState({
    id: "v2",
    name: "Eleven Multilingual v2",
    version: "v2",
    description: "The most expressive Text to Speech",
    isAlpha: false,
  })

  const handleSliderChange = (name: string) => (value: number) => {
    console.log(`${name} changed to:`, value)
  }

  const handleToggleChange = (checked: boolean) => {
    console.log("Speaker boost:", checked)
  }

  const handleResetValues = () => {
    console.log("Reset values clicked")
    window.location.reload()
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blue orbs background */}
      <BlueOrbs />

      <div className="flex h-screen relative z-10">
        {/* Sidebar */}
        <div className="w-[200px] glassmorphism border-r border-white/20 flex flex-col text-gray-800">
          <div className="p-4 border-b border-white/20 flex items-center">
            <span className="font-bold">Vixion</span>
            <div className="ml-auto flex items-center gap-2">
              <button className="p-1">
                <div className="w-5 h-5 border border-gray-400 flex items-center justify-center rounded-sm">
                  <span className="text-xs">⋮</span>
                </div>
              </button>
            </div>
          </div>

          <div className="p-2">
            <div className="flex flex-col space-y-1">
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                <Home className="w-4 h-4" />
                <span className="text-smaller">Home</span>
              </a>
              <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  <span className="text-smaller">Voices</span>
                </div>
                <Plus className="w-3 h-3" />
              </div>
            </div>
          </div>

          <div className="mt-2 px-4 text-smallest text-gray-600">Playground</div>
          <div className="p-2">
            <div className="flex flex-col space-y-1">
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/30 backdrop-blur-sm">
                <FileText className="w-4 h-4" />
                <span className="text-smaller">Text to Speech</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                <Wand2 className="w-4 h-4" />
                <span className="text-smaller">Voice Changer</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                <Volume2 className="w-4 h-4" />
                <span className="text-smaller">Sound Effects</span>
              </a>
            </div>
          </div>

          <div className="mt-auto p-2">
            <div className="flex flex-col space-y-1">
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                <Volume2 className="w-4 h-4" />
                <span className="text-smaller flex items-center">
                  Audio Tools
                  <ChevronDown className="w-3 h-3 ml-auto" />
                </span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="text-smaller">Notifications</span>
              </a>
            </div>
          </div>

          <div className="p-2 border-t border-white/20">
            <div className="flex items-center gap-2 p-2">
              <div className="w-7 h-7 bg-blue-500/70 rounded-full flex items-center justify-center">
                <span className="text-smallest text-white">MK</span>
              </div>
              <div className="text-smaller">
                <div>Manh Kieu</div>
                <div className="text-smallest text-gray-600">My Workspace</div>
              </div>
              <ChevronDown className="w-3 h-3 ml-auto" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col glassmorphism">
          <header className="border-b border-white/20 p-4 flex items-center flex-shrink-0">
            <h1 className="text-base font-medium text-gray-800">Text to Speech</h1>
            <div className="ml-auto flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="sr-only">Feedback</span>
              </button>
              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                <FileText className="w-4 h-4" />
                <span className="sr-only">Documentation</span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-smallest text-white">T</span>
                </div>
                <span className="text-smaller text-gray-800">Talk to EI</span>
              </div>
            </div>
          </header>

          <div className="flex-1 flex min-h-0">
            {/* Text Input Area */}
            <div className="flex-1 p-6 flex flex-col">
              <Textarea
                placeholder="Enter text here"
                className="flex-1 glassmorphism bg-white/10 border-white/30 text-gray-800 resize-none focus-visible:ring-blue-400 focus-visible:ring-offset-0 rounded-xl mb-4"
                defaultValue="hello"
              />
              <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                    <span className="text-smallest">i</span>
                  </div>
                  <span className="text-smaller">10,000 credits remaining</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-smaller text-gray-600">5 / 5,000 characters</span>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 text-smaller">
                    Generate speech
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            <div className="w-[300px] border-l border-white/20 glassmorphism flex flex-col">
              <Tabs defaultValue="settings" className="flex flex-col h-full">
                <TabsList className="grid w-full grid-cols-2 bg-transparent flex-shrink-0 mx-4 mt-4">
                  <TabsTrigger
                    value="settings"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-black rounded-none text-black text-smaller font-medium"
                  >
                    Settings
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-black rounded-none text-black text-smaller font-medium"
                  >
                    History
                  </TabsTrigger>
                </TabsList>

                <div className="flex-1 px-4 pb-4 min-h-0">
                  <TabsContent value="settings" className="mt-3 space-y-4 h-full">
                    <div>
                      <h3 className="font-medium mb-2 text-smaller text-black">Voice</h3>
                      <VoiceSelector selectedVoice={selectedVoice} onVoiceChange={setSelectedVoice} />
                    </div>

                    <div>
                      <h3 className="font-medium mb-2 text-smaller text-black">Model</h3>
                      <ModelSelector selectedModel={selectedModel} onModelChange={setSelectedModel} />
                    </div>

                    <div>
                      <h3 className="font-medium text-smaller text-gray-800 mb-1">Speed</h3>
                      <div className="flex items-center justify-between text-smallest text-gray-600 mb-1">
                        <span>Slower</span>
                        <span>Faster</span>
                      </div>
                      <CustomSlider defaultValue={50} min={0} max={100} onChange={handleSliderChange("Speed")} />
                    </div>

                    <div>
                      <h3 className="font-medium text-smaller text-gray-800 mb-1">Stability</h3>
                      <div className="flex items-center justify-between text-smallest text-gray-600 mb-1">
                        <span>More variable</span>
                        <span>More stable</span>
                      </div>
                      <CustomSlider defaultValue={60} min={0} max={100} onChange={handleSliderChange("Stability")} />
                    </div>

                    <div>
                      <h3 className="font-medium text-smaller text-gray-800 mb-1">Similarity</h3>
                      <div className="flex items-center justify-between text-smallest text-gray-600 mb-1">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                      <CustomSlider defaultValue={75} min={0} max={100} onChange={handleSliderChange("Similarity")} />
                    </div>

                    <div>
                      <h3 className="font-medium text-smaller text-gray-800 mb-1">Style Exaggeration</h3>
                      <div className="flex items-center justify-between text-smallest text-gray-600 mb-1">
                        <span>None</span>
                        <span>Exaggerated</span>
                      </div>
                      <CustomSlider
                        defaultValue={0}
                        min={0}
                        max={100}
                        onChange={handleSliderChange("Style Exaggeration")}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium text-smaller text-gray-800">Speaker boost</h3>
                        <CustomToggle defaultChecked={true} onChange={handleToggleChange} />
                      </div>
                      <button
                        onClick={handleResetValues}
                        className="text-smallest text-gray-500 flex items-center gap-1 hover:text-gray-700 transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Reset values
                      </button>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="mt-4">
                    <div className="py-8 text-center text-gray-500 text-smaller">
                      <p>History will appear here</p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
