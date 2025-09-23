export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto max-w-[640px] md:px-24 px-8 py-0">
        {/* Logo */}
        <div className="mb-8 logo-container">
          <div className="logo">
            <h1>shocky</h1>
            <span className="in-text">
              <span className="text-primary" id="dot">.</span>in
            </span>
          </div>
        </div>

        {/* Description paragraphs */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">
              Hi! I'm Shashank.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A journalist-turned-marketing professional based in Gurugram, India.  I write and edit, research and analyse, and design amazing things. Pride myself on lucid communication and being an easy to work with, friendly guy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}