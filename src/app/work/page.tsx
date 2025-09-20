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
    duration: "2016 - present",
    description:
      "Over the last 9 years at Mastercard, I've donned many hats -- from researching and writing to designing reports and interactive demos. Today, I lead the design for the new website, vibe-code internal tools to help save outsourcing costs and collaborate with partners across the globe and the organisation to enhance the brand.",
    logo: "/mclogo.svg",
    technologies: ["Researching", "Designing", "Writing", "Coding", "Web", "Interactive"],
  },
  {
    company: "Hindustan Times",
    role: "Senior content producer",
    duration: "2015 - 2016",
    description:
      "Core editor of the integrated copy desk, writing breaking stories for print and the web. Covered the Bihar Legislative Assembly elections and collaborated with stringers/reporters across the country to develop well-rounded stories throughout my time at the English daily.",
    logo: "/htlogo.svg",
    technologies: ["Breaking news", "Election coverage", "Layout design", "Roving writer"],
  },
  {
    company: "Mindworks Global",
    role: "Copy editor",
    duration: "2013 - 2015",
    description:
      "Led the production of the Miami Herald International daily newspaper, from editing to layout. Worked with global clients to produce multiple monthly travel magazines, and wrote the guidelines for deliverables translated from various Indian languages.",
    logo: "/mwglogo.svg",
    technologies: ["International journalism", "Travel", "News", "Layout", "Editing"],
  },
  {
    company: "Open Magazine",
    role: "Features intern",
    duration: "2013",
    description:
      "The final internship brought me to Mumbai. Over my time at the renouned publisher, I wrote a double-page spread on my interview with Mr. Ian Livingstone, president of gaming behemoth Eidos, and a number of smaller articles about the happenings in the city and around the world.",
    logo: "/openmagazinelogo.webp",
    technologies: ["Features", "Interview", "Articles", "Reporting"],
  },
  {
    company: "Percept Profile",
    role: "Public relations intern",
    duration: "2012",
    description:
      "Switched gears for my second internship to experience first-hand the other side of journalism — public relations. The first half of my two-fold internship spanned business development, focusing on highend restaurants & bars, luxury lifestyle brands and automobile manufacturers. For the second part, I put on my creative hat to ideate and develop communication strategies for our clients.",
    logo: "/perceptlogo.webp",
    technologies: ["Public relations", "Business development", "Creative pitch", "Design"],
  },
  {
    company: "The Times of India",
    role: "Editorial intern",
    duration: "2011",
    description:
      "Working for the city edition of the newspaper, covered multiple live events — a singing competition and a writing competition. Secured two bylines and made my first foray into journalism in India.",
    logo: "/toilogo.webp",
    technologies: ["Reporting", "Writing", "Events"],
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
                        <CardTitle className="text-md">{job.role}</CardTitle>
                        <CardDescription className="text-md font-semibold text-primary">
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
                          className="px-3 py-1 bg-secondary-foreground/10 text-secondary-foreground/60 rounded-full text-xs font-medium"
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
