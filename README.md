# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and shadcn/ui components.

## Features

- 🌙 **Dark/Light Mode**: Toggle between themes with a beautiful sun/moon icon
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS with Rose theme
- 🧭 **Bottom Navigation**: Easy navigation between sections with white borders
- 🎬 **Film Grain Effect**: Subtle animated film grain texture for enhanced visual appeal
- 📄 **Multiple Pages**: Home, Work, Tools, Notes, and Contact
- 🎭 **Modal System**: Interactive modals for blog posts and tool details
- ✉️ **Email Integration**: Working contact form with Nodemailer
- 🌫️ **Content Fade**: Smooth content fade-out behind navigation

## Pages

### Home
- Personal logo and tagline
- Three descriptive paragraphs about you
- Clean, focused design with max-width of 640px

### Work
- Professional experience timeline
- Company information with emoji logos
- Technology stacks for each position
- Card-based layout with hover effects

### Tools
- 2x3 grid of utility tools (2 columns, 3 rows)
- Clickable cards that open detailed modals
- Interactive hover animations
- Compact design optimized for 640px width
- Modal includes features, instructions, and direct links to tools

### Notes
- Blog-style layout for articles
- Post metadata (date, read time, tags)
- Clickable entries that open full blog posts in modals
- Rich content with detailed articles on web development topics
- Clean typography and spacing

### Contact
- Functional contact form that sends emails to shashank8kumar@gmail.com
- Name, Email, and Comments fields with validation
- Real-time form submission with loading states
- Success/error feedback
- Additional contact information and social links

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```bash
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**Note**: For Gmail, you'll need to:
- Enable 2-Step Verification
- Generate an App Password (Google Account Settings > Security > App passwords)
- Use the App Password instead of your regular password

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors and Theme
The app uses CSS variables for theming. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: 240 9% 9%;
  --secondary: 240 4.8% 95.9%;
  /* ... other color variables */
}
```

### Content
- Update personal information in `src/app/page.tsx` (Home page)
- Modify work experience in `src/app/work/page.tsx`
- Add tools in `src/app/tools/page.tsx`
- Create blog posts in `src/app/notes/page.tsx`
- Update contact information in `src/app/contact/page.tsx`

### Navigation
Edit the navigation items in `src/components/bottom-nav.tsx`:

```typescript
const navItems = [
  { name: "Home", href: "/", icon: Home },
  // Add or modify navigation items
]
```

## Deployment

The app is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this template for your own portfolio!