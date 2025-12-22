export const Homescreen: React.FC = () => {
  return (
    <>
      <section
        id="homescreen"
        className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-3 py-12 mt-22 scroll-mt-24"
      >
        {/* Description */}
        <div className="container">
          <h1 className="opacity-0 animate-fade-in text-5xl sm:text-6xl font-extrabold leading-tight">
            Learn
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Algorithms
            </span>
            Visually.
          </h1>

          <p className="opacity-0 animate-fade-in-delay-1 mt-6 text-lg text-foreground max-w-xl">
            Interactive, intuitive visualisations of data structures and
            algorithms. Understand concepts faster through animation,
            simulation, and hands-on experimentation.
          </p>

          <div className="opacity-0 animate-fade-in-delay-1 mt-8 flex gap-3">
            <a
              className="inline-flex items-center gap-2 px-5 py-3 cosmic-button text-white rounded-lg shadow-md"
              href="#visualiser"
            >
              Visualize
            </a>
            <a
              className="inline-flex items-center gap-2 px-5 py-3 border border-slate-700 rounded-lg text-foreground hover:text-primary"
              href="#algorithms"
            >
              Browse Algorithms
            </a>
          </div>

          <div className="opacity-0 animate-fade-in-delay-2 mt-8 flex items-center gap-6 text-sm text-foreground">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <div>Interactive visualiser</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
              <div>Multiple languages</div>
            </div>
          </div>
        </div>

        {/* Column Chart */}
        <div className="opacity-0 animate-fade-in bg-foreground rounded-2xl mr-8 ml-8 p-6 backdrop-blur-md shadow-lg">
          <div className="w-full h-64 flex items-end gap-3 px-6">
            <div className="flex-1 h-40 rounded-lg fade-up bg-linear-to-b from-indigo-400 to-purple-500 flex items-end justify-center text-white font-semibold">
              5
            </div>
            <div className="flex-1 h-28 rounded-lg bg-linear-to-b from-indigo-300 to-indigo-500 flex items-end justify-center text-white font-semibold">
              2
            </div>
            <div className="flex-1 h-36 rounded-lg bg-linear-to-b from-indigo-300 to-violet-500 flex items-end justify-center text-white font-semibold">
              4
            </div>
            <div className="flex-1 h-24 rounded-lg bg-linear-to-b from-indigo-200 to-indigo-400 flex items-end justify-center text-white font-semibold">
              1
            </div>
          </div>
          <div className="mt-6 text-sm text-background px-2">
            Preview: Merge sort step animation
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="relative flex justify-center mt-10 md:mt-0">
        <div className="flex flex-col items-center gap-2 animate-scroll">
          <span className="text-sm uppercase tracking-[0.2rem] text-neutral-400 dark:text-neutral-100">
            Scroll
          </span>
          <div className="w-px h-12 bg-neutral-400 dark:bg-neutral-100"></div>
        </div>
      </div>
    </>
  );
};
