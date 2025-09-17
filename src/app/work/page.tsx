import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const workExperience = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions for a team of 8 engineers.",
    logo: "🏢",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Built and maintained the core platform serving 100K+ users. Implemented real-time features, payment processing, and optimized database performance resulting in 40% faster load times.",
    logo: "🚀",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Docker"]
  },
  {
    company: "Digital Agency Pro",
    role: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Developed responsive websites and web applications for diverse clients. Collaborated with designers to implement pixel-perfect UIs and optimized for performance across all devices.",
    logo: "🎨",
    technologies: ["React", "Sass", "Webpack", "Figma", "Git"]
  },
  {
    company: "WebDev Inc",
    role: "Junior Developer",
    duration: "2018 - 2019",
    description: "Started my professional journey building websites using HTML, CSS, and JavaScript. Gained experience in responsive design, cross-browser compatibility, and version control.",
    logo: "💻",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
  }
]

export default function Work() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Work Experience</h1>
        <p className="text-lg text-muted-foreground">
          A journey through my professional career, from junior developer to senior engineer.
        </p>
      </div>

      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="text-4xl">{job.logo}</div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{job.role}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {job.company}
                  </CardDescription>
                  <CardDescription className="text-sm text-muted-foreground">
                    {job.duration}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
