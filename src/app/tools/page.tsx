"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ToolModal } from "@/components/tool-modal"

const tools = [
  {
    title: "Code Formatter",
    description: "Format and beautify your code with support for multiple languages and style preferences.",
    icon: "🎨",
    url: "https://prettier.io/playground/",
    features: [
      "Supports 20+ programming languages",
      "Configurable formatting rules",
      "Real-time preview",
      "Copy formatted code with one click"
    ],
    instructions: "Simply paste your code into the editor, select your preferred language and formatting options, then click 'Format' to see the beautified result. You can customize indentation, line length, and other formatting preferences."
  },
  {
    title: "Password Generator",
    description: "Generate secure passwords with customizable length, complexity, and character sets.",
    icon: "🔐",
    url: "https://1password.com/password-generator/",
    features: [
      "Customizable length (4-100 characters)",
      "Include/exclude specific character types",
      "Avoid ambiguous characters",
      "Password strength indicator"
    ],
    instructions: "Adjust the slider to set your desired password length, then toggle the character sets you want to include (uppercase, lowercase, numbers, symbols). Click 'Generate' to create a new password, and use the copy button to save it."
  },
  {
    title: "JSON Validator",
    description: "Validate and format JSON data with syntax highlighting and error detection.",
    icon: "📋",
    url: "https://jsonlint.com/",
    features: [
      "Real-time validation",
      "Syntax highlighting",
      "Error location indicators",
      "Minify and beautify options"
    ],
    instructions: "Paste your JSON data into the editor. The tool will automatically validate it and highlight any syntax errors. Use the 'Validate' button to check for issues, and 'Format' to beautify your JSON with proper indentation."
  },
  {
    title: "Base64 Encoder",
    description: "Encode and decode text, images, and files to/from Base64 format quickly and easily.",
    icon: "🔢",
    url: "https://www.base64encode.org/",
    features: [
      "Text and file encoding",
      "Batch processing",
      "URL-safe encoding option",
      "Character set support"
    ],
    instructions: "Enter your text or upload a file to encode to Base64, or paste Base64 data to decode. Select 'URL Safe' if encoding for URLs. Click 'Encode' or 'Decode' to process your data, then copy the result."
  },
  {
    title: "URL Shortener",
    description: "Create short, memorable URLs for your long links with custom aliases and analytics.",
    icon: "🔗",
    url: "https://bit.ly/",
    features: [
      "Custom short URLs",
      "Click analytics",
      "QR code generation",
      "Link expiration settings"
    ],
    instructions: "Paste your long URL into the input field. Optionally, create a custom short link by entering your preferred alias. Click 'Shorten' to generate your short URL, then share it or download the QR code."
  },
  {
    title: "Color Palette",
    description: "Generate beautiful color palettes and get hex codes, RGB values, and accessibility info.",
    icon: "🌈",
    url: "https://coolors.co/",
    features: [
      "AI-powered palette generation",
      "Color harmony rules",
      "Accessibility checking",
      "Export to various formats"
    ],
    instructions: "Start with a base color or let the AI generate a random palette. Use the harmony tools to create complementary, triadic, or analogous color schemes. Check accessibility ratings and export your palette as CSS, SCSS, or image files."
  }
]

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState<typeof tools[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToolClick = (tool: typeof tools[0]) => {
    setSelectedTool(tool)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedTool(null)
  }

  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Tools & Utilities</h1>
        <p className="text-lg text-muted-foreground">
          Handy tools and utilities to make your development workflow more efficient.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
            onClick={() => handleToolClick(tool)}
          >
            <CardHeader className="text-center pb-3">
              <div className="text-3xl mb-2">{tool.icon}</div>
              <CardTitle className="text-lg">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed text-sm">
                {tool.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <ToolModal 
        tool={selectedTool} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
