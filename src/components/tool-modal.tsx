"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Tool {
  title: string
  description: string
  icon: string
  url: string
  features: string[]
  instructions: string
}

interface ToolModalProps {
  tool: Tool | null
  isOpen: boolean
  onClose: () => void
}

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  if (!tool) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="text-4xl">{tool.icon}</div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold mb-2">{tool.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {tool.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">How to Use</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {tool.instructions}
            </p>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={() => window.open(tool.url, '_blank')}
              className="flex-1"
            >
              Open Tool
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
