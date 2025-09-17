"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", comments: "" })
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Send me a message</CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-medium">
                Thank you for your message! I'll get back to you soon.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Message *</Label>
              <Textarea
                id="comments"
                name="comments"
                required
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Tell me about your project or just say hello!"
                className="w-full min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Or reach out to me directly:
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:hello@shashank.dev" className="text-primary hover:underline">
                    hello@shashank.dev
                  </a>
                </p>
                <p>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a href="https://linkedin.com/in/shashank" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/shashank
                  </a>
                </p>
                <p>
                  <span className="font-medium">GitHub:</span>{" "}
                  <a href="https://github.com/shashank" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    github.com/shashank
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
