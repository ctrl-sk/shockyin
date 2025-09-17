export default function Home() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      {/* Logo */}
      <div className="mb-12 logo-container">
              <div className="logo">
                  <h1>shocky</h1>
                  <span className="in-text"><span className="text-primary" id="dot">.</span>in</span>
              </div>
          </div>

      {/* Description paragraphs */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">
            Hi! I'm Shashank.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-justify">
          A journalist-turned-marketing professional based in Gurugram, India. I write and edit, research and analyse, and design amazing things. I pride myself on lucid communication and being an easy to work with, friendly guy.
          </p>
        </div>
      </div>
    </div>
  );
}