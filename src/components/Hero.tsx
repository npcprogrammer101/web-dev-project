export const Hero = () => {
  return (
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-12">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
    Learn
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Algorithms</span>
    Visually.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
          Interactive, intuitive visualisations of data structures and algorithms. Understand concepts
          faster through animation, simulation, and hands-on experimentation.
          </p>


          <div className="mt-8 flex gap-3">
            <a className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md" href="#visualiser">Start Learning</a>
            <a className="inline-flex items-center gap-2 px-5 py-3 border border-slate-700 rounded-lg text-slate-200 hover:text-white" href="#algorithms">Browse Algorithms</a>
          </div>


          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
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


        {/* Hero visual card */}
        <div className="bg-slate-900/40 rounded-2xl p-6 backdrop-blur-md shadow-lg">
    {/* simple illustrative sorting bars */}
          <div className="w-full h-64 flex items-end gap-3 px-6">
            <div className="flex-1 h-40 rounded-lg g-col flex items-end justify-center text-white font-semibold">5</div>
            <div className="flex-1 h-28 rounded-lg g-col from-indigo-300 to-indigo-500 flex items-end justify-center text-white font-semibold">2</div>
            <div className="flex-1 h-36 rounded-lg g-col from-indigo-300 to-violet-500 flex items-end justify-center text-white font-semibold">4</div>
            <div className="flex-1 h-24 rounded-lg g-col from-indigo-200 to-indigo-400 flex items-end justify-center text-white font-semibold">1</div>
          </div>
        <div className="mt-6 text-sm text-slate-400 px-2">Preview: Merge sort step animation</div>
      </div>
    </section>
  );
};