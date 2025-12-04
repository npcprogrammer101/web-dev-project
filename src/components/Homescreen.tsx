export const Homescreen = () => {
  return (
    <section
      id="homescreen"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6-xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Data structure &  </span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary">
              {" "}
              Algorithms{" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            consectetur veritatis dolorum fugit voluptates! Repellendus numquam
            nisi repudiandae modi asperiores.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              Explore
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div
            className="flex flex-col items-center gap-2 animate-scroll"
            
          >
            <span className="text-sm uppercase tracking-[0.2rem] text-neutral-400 dark:text-neutral-100">Scroll</span>
            <div className="w-px h-12 bg-neutral-400 dark:bg-neutral-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
