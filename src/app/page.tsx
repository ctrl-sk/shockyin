export default function Home() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      {/* Logo */}
      <div className="mb-12">
        <div className="text-4xl font-bold text-primary mb-2">
          Shashank
        </div>
        <div className="text-lg text-muted-foreground">
          Full Stack Developer & Problem Solver
        </div>
      </div>

      {/* Description paragraphs */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
            With experience spanning from frontend frameworks to backend architectures, I enjoy building applications 
            that make a real difference in people&apos;s lives. My journey in tech has taken me through various domains, 
            from e-commerce platforms to data visualization tools.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            What I Do
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. 
            I&apos;m particularly drawn to the intersection of design and functionality, always striving to create 
            user experiences that are both beautiful and intuitive. Whether it&apos;s building responsive interfaces, 
            optimizing performance, or architecting scalable systems, I approach every challenge with curiosity and determination.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Beyond Code
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community. I believe in continuous learning and enjoy diving deep 
            into emerging technologies. I also love documenting my journey and insights, which you can explore in my notes section.
          </p>
        </div>
      </div>
    </div>
  );
}