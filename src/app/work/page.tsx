"use client";

import * as React from "react";
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
  type CarouselApi,
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
  const spacing = 24;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  function goToSlide(index: number) {
    if (!api) return;
    api.scrollTo(index);
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-6 md:px-24">
      <div className="w-full max-w-[640px] mx-auto">
        <div className="mb-12">
          <h1 className="text-lg font-semibold mb-4 text-accent">
            Work experience
          </h1>
        </div>

        <Carousel className="relative w-full max-w-[640px]" setApi={setApi}>
          <CarouselContent
            className="flex snap-x snap-mandatory"
            style={{ marginLeft: -spacing }}
          >
            {workExperience.map((job, index) => (
              <CarouselItem
                key={index}
                className="snap-start flex-shrink-0 w-full"
                style={{ paddingLeft: spacing, flex: "0 0 auto", maxWidth: 640 }}
              >
                <Card className="bg-muted/40 w-full max-w-full">
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
            <CarouselPrevious className="opacity-70 hover:opacity-100 transition rounded-full p-2 cursor-pointer bg-secondary-foreground/40" />
          </div>
          <div className="invisible md:visible absolute top-1/2 right-2 -translate-y-1/2 z-10">
            <CarouselNext className="opacity-70 hover:opacity-100 transition rounded-full p-2 cursor-pointer bg-secondary-foreground/40" />
          </div>
        </Carousel>

        {/* Dots below carousel */}
        <div className="flex justify-center mt-4 space-x-2">
          {workExperience.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current - 1 === index
                  ? "bg-primary"
                  : "bg-muted hover:bg-primary"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
