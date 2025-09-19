"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const workExperience = [
  {
    company: "Mastercard",
    role: "Manager, Creative Studio",
    duration: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions for a team of 8 engineers.",
    logo: "/mclogo.svg",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    company: "Hindustan Times",
    role: "Senior content producer",
    duration: "2020 - 2022",
    description:
      "Built and maintained the core platform serving 100K+ users. Implemented real-time features, payment processing, and optimized database performance resulting in 40% faster load times.",
    logo: "/htlogo.svg",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Docker"],
  },
  {
    company: "Mindworks Global",
    role: "Copy editor",
    duration: "2019 - 2020",
    description:
      "Developed responsive websites and web applications for diverse clients. Collaborated with designers to implement pixel-perfect UIs and optimized for performance across all devices.",
    logo: "/mwglogo.svg",
    technologies: ["React", "Sass", "Webpack", "Figma", "Git"],
  },
  {
    company: "WebDev Inc",
    role: "Junior Developer",
    duration: "2018 - 2019",
    description:
      "Started my professional journey building websites using HTML, CSS, and JavaScript. Gained experience in responsive design, cross-browser compatibility, and version control.",
    logo: "💻",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

export default function Work() {
  // Define spacing value (px) same for CarouselContent negative margin and CarouselItem padding-left
  const spacing = 24; // 24px spacing

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <div className="mb-12">
        <h1 className="text-lg font-semibold mb-4 text-accent">Work experience</h1>
      </div>
    
      <Carousel className="relative w-full">
        <CarouselContent
          // Negative left margin equal to spacing for consistent item spacing
          className={`flex snap-x snap-mandatory -ml-[${spacing}px]`}
        >
          {workExperience.map((job, index) => (
            <CarouselItem
              key={index}
              // basis-full for full width, padding-left for spacing
              className={`snap-start flex-shrink-0 basis-full pl-[${spacing}px] max-w-full`}
            >
              <Card className="bg-muted/40 w-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      {job.logo.startsWith("/") ? (
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-4xl">{job.logo}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{job.role}</CardTitle>
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
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary-foreground/10 text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="invisible md:visible absolute top-1/2 left-2 -translate-y-1/2 z-10">
          <CarouselPrevious className="opacity-70 hover:opacity-100 transition rounded-full p-2 cursor-pointer bg-ring" />
        </div>
        <div className="invisible md:visible absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <CarouselNext className="opacity-70 hover:opacity-100 transition rounded-full p-2 cursor-pointer bg-ring" />
        </div>
      </Carousel>
    </div>
    </div>
  );
}
