"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogModal } from "@/components/blog-modal"

const notes = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large React applications, from component organization to state management patterns.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    content: `Building scalable React applications requires careful planning and adherence to best practices. Here are the key principles that will help you create maintainable and performant applications.

## Component Organization

The foundation of any scalable React application lies in how you organize your components. Start by creating a clear folder structure that separates components by their purpose and scope.

### Atomic Design Principles
- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple groups of UI elements (search form, navigation item)
- **Organisms**: Complex UI components (header, product list)
- **Templates**: Page-level objects that place components into a layout
- **Pages**: Specific instances of templates

## State Management Patterns

As your application grows, managing state becomes increasingly complex. Here are the patterns that work best:

### 1. Local State for Component-Specific Data
Use useState for data that only affects a single component or its immediate children.

### 2. Context for Cross-Component Communication
Create context providers for data that needs to be shared across multiple components without prop drilling.

### 3. External State Management
For complex applications, consider libraries like Redux Toolkit, Zustand, or Jotai for predictable state management.

## Performance Optimization

### Code Splitting
Implement lazy loading for routes and components to reduce the initial bundle size.

### Memoization
Use React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders.

### Virtual Scrolling
For large lists, implement virtual scrolling to maintain performance.

## Testing Strategy

A comprehensive testing strategy is crucial for maintaining code quality:

- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test component interactions
- **End-to-End Tests**: Test complete user workflows

Remember, scalability isn't just about code organization—it's about creating a system that can grow and evolve with your application's needs.`
  },
  {
    id: 2,
    title: "TypeScript Tips for Better Development",
    excerpt: "Discover advanced TypeScript features that can improve your code quality and developer experience.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["TypeScript", "Development", "Tips"],
    content: `TypeScript has revolutionized how we write JavaScript applications. Here are some advanced tips that will elevate your TypeScript skills and improve your development workflow.

## Advanced Type Patterns

### Discriminated Unions
Use discriminated unions to create type-safe state machines and handle different data shapes elegantly.

### Template Literal Types
Create dynamic string types that can validate URL patterns, CSS classes, or any string-based API.

### Conditional Types
Build complex type transformations that adapt based on input types.

## Utility Types Mastery

### Mapped Types
Transform existing types by iterating over their properties and creating new types.

### Keyof and Indexed Access Types
Access type information dynamically using keyof and indexed access patterns.

## Generic Constraints

### Using Extends for Type Bounds
Create generic functions that work with specific type families while maintaining type safety.

### Conditional Generic Types
Make your generics more intelligent by adding conditional logic.

## Error Handling Patterns

### Result Types
Implement functional error handling using Result types instead of throwing exceptions.

### Branded Types
Create unique types for values that might otherwise be confused (like UserId vs OrderId).

## Performance Considerations

### Type-Only Imports
Use 'type' imports to ensure types are stripped from runtime code.

### Avoiding 'any'
Learn when and how to avoid 'any' type while maintaining flexibility.

These TypeScript patterns will help you write more robust, maintainable, and type-safe applications.`
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that are shaping the future of web development.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Web Development", "Future", "Technology"],
    content: `The web development landscape is evolving rapidly. Let's explore the technologies and trends that are shaping the future of how we build and deploy web applications.

## Emerging Technologies

### WebAssembly (WASM)
WebAssembly is revolutionizing web performance by allowing languages like Rust, C++, and Go to run in browsers at near-native speed.

### Web Components
Native browser APIs for creating reusable custom elements that work across all frameworks.

### Progressive Web Apps (PWAs)
The line between web and native apps continues to blur with enhanced offline capabilities and native-like experiences.

## Framework Evolution

### Server Components
React's Server Components and similar patterns in other frameworks are changing how we think about client-server boundaries.

### Edge Computing
Deploying applications closer to users for reduced latency and improved performance.

### Streaming and Suspense
New patterns for loading data and rendering content progressively.

## Development Experience

### AI-Assisted Development
AI tools are becoming integral to the development workflow, from code generation to debugging.

### Better Build Tools
Next-generation bundlers and build tools are making development faster and more efficient.

### Type Safety Everywhere
The push for better type safety across the entire stack, from database to UI.

## Performance and User Experience

### Core Web Vitals
Google's focus on user experience metrics is driving performance improvements across the web.

### Accessibility First
Building inclusive applications from the ground up, not as an afterthought.

### Sustainable Web Development
Considering the environmental impact of our applications and optimizing for efficiency.

The future of web development is exciting, with technologies that promise better performance, improved developer experience, and enhanced user satisfaction.`
  },
  {
    id: 4,
    title: "Optimizing Performance in Next.js",
    excerpt: "A comprehensive guide to improving your Next.js application performance through various optimization techniques.",
    date: "2023-12-28",
    readTime: "12 min read",
    tags: ["Next.js", "Performance", "Optimization"],
    content: `Next.js provides powerful built-in optimization features, but knowing how to use them effectively is key to building fast, scalable applications.

## Built-in Optimizations

### Image Optimization
The next/image component automatically optimizes images with lazy loading, responsive sizing, and modern formats.

### Font Optimization
next/font automatically optimizes Google Fonts and custom fonts for better performance.

### Script Optimization
next/script provides fine-grained control over third-party scripts with different loading strategies.

## Rendering Strategies

### Static Generation (SSG)
Pre-generate pages at build time for maximum performance and SEO benefits.

### Server-Side Rendering (SSR)
Render pages on-demand for dynamic content while maintaining SEO benefits.

### Incremental Static Regeneration (ISR)
Combine the benefits of SSG with the flexibility of dynamic content updates.

### Client-Side Rendering (CSR)
For highly interactive applications where initial load time is less critical.

## Bundle Optimization

### Code Splitting
Automatic code splitting by route and dynamic imports for optimal bundle sizes.

### Tree Shaking
Eliminate unused code from your bundles automatically.

### Bundle Analysis
Use tools like @next/bundle-analyzer to identify optimization opportunities.

## Caching Strategies

### Data Fetching
Implement proper caching strategies for your data fetching methods.

### CDN Integration
Leverage CDNs for static assets and API routes.

### Edge Functions
Deploy serverless functions at the edge for reduced latency.

## Performance Monitoring

### Core Web Vitals
Monitor and optimize for Google's Core Web Vitals metrics.

### Real User Monitoring (RUM)
Track actual user performance data, not just lab metrics.

### Performance Budgets
Set and enforce performance budgets in your CI/CD pipeline.

These optimization techniques will help you build Next.js applications that are fast, scalable, and provide excellent user experiences.`
  },
  {
    id: 5,
    title: "Design Systems in Modern Web Apps",
    excerpt: "How to create and maintain effective design systems that scale across teams and projects.",
    date: "2023-12-20",
    readTime: "7 min read",
    tags: ["Design", "Systems", "UI/UX"],
    content: `Design systems are more than just a collection of components—they're the foundation for consistent, scalable user experiences across your entire product ecosystem.

## What Makes a Great Design System

### Consistency
A design system ensures visual and functional consistency across all touchpoints of your application.

### Scalability
Components and patterns that work from small projects to enterprise-scale applications.

### Accessibility
Built-in accessibility features that make your applications inclusive by default.

### Developer Experience
Clear documentation, easy-to-use APIs, and tools that make implementation straightforward.

## Building Your Design System

### Design Tokens
Start with foundational design tokens: colors, typography, spacing, and other visual properties.

### Component Library
Build a comprehensive set of reusable components with consistent APIs.

### Documentation
Create living documentation that serves as the single source of truth for your design system.

### Governance
Establish processes for maintaining and evolving your design system over time.

## Implementation Strategies

### Atomic Design
Structure your components using atomic design principles for better organization.

### Design-First Development
Collaborate closely with designers to ensure implementation matches design intent.

### Version Control
Use semantic versioning and proper change management for your design system.

## Tools and Technologies

### Storybook
Document and test your components in isolation.

### Design Tools Integration
Connect your design tools (Figma, Sketch) with your development workflow.

### Automated Testing
Implement visual regression testing and accessibility testing for your components.

A well-designed system is an investment that pays dividends in consistency, efficiency, and user satisfaction.`
  },
  {
    id: 6,
    title: "Getting Started with Tailwind CSS",
    excerpt: "A beginner's guide to using Tailwind CSS effectively in your projects, from basics to advanced techniques.",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["Tailwind", "CSS", "Styling"],
    content: `Tailwind CSS has transformed how we approach styling in modern web applications. This utility-first framework offers a new way to build beautiful, responsive designs.

## Why Tailwind CSS?

### Utility-First Approach
Instead of writing custom CSS, you compose designs using pre-defined utility classes.

### Rapid Prototyping
Build and iterate on designs quickly without switching between HTML and CSS files.

### Consistency
Built-in design system ensures consistent spacing, colors, and typography.

### Performance
Purge unused styles in production for minimal CSS bundle sizes.

## Getting Started

### Installation
Add Tailwind to your project using npm or yarn, then configure your build process.

### Configuration
Customize your design tokens, add custom utilities, and configure plugins.

### Base Setup
Set up your base styles, typography, and component styles.

## Core Concepts

### Utility Classes
Learn the most commonly used utility classes for layout, spacing, colors, and typography.

### Responsive Design
Use Tailwind's responsive prefixes to create mobile-first designs.

### State Variants
Style components based on hover, focus, and other interactive states.

### Dark Mode
Implement dark mode using Tailwind's dark mode utilities.

## Advanced Techniques

### Component Extraction
Extract repeated utility combinations into reusable components.

### Custom Utilities
Create your own utility classes for project-specific needs.

### Plugin Development
Build custom plugins to extend Tailwind's functionality.

### Performance Optimization
Configure PurgeCSS properly to remove unused styles.

## Best Practices

### Naming Conventions
Develop consistent naming patterns for your utility combinations.

### Component Organization
Structure your components to maximize reusability and maintainability.

### Design System Integration
Integrate Tailwind with your existing design system and brand guidelines.

Tailwind CSS isn't just a CSS framework—it's a new way of thinking about styling that can transform your development workflow.`
  }
]

export default function Notes() {
  const [selectedPost, setSelectedPost] = useState<typeof notes[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNoteClick = (note: typeof notes[0]) => {
    setSelectedPost(note)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Notes & Thoughts</h1>
        <p className="text-lg text-muted-foreground">
          My thoughts on web development, technology, and the journey of building great software.
        </p>
      </div>

      <div className="space-y-6">
        {notes.map((note) => (
          <Card 
            key={note.id} 
            className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            onClick={() => handleNoteClick(note)}
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {note.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {note.readTime}
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{new Date(note.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                {note.excerpt}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
