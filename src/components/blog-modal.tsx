"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

interface BlogModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

export function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{post.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </DialogDescription>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </DialogHeader>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
