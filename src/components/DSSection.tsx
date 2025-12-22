import {
  ArrowRight,
  ExternalLinkIcon,
  Github,
  ProjectorIcon,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Array",
    description:
      "Binary search is an efficient search algorithm \
      that finds the position of a target value within \
       a sorted array by repeatedly dividing the search interval in half",
    image: "/binarysearch.png",
    tags: ["Searching", "Divide and Conquer"],
    demoUrl: "/algo/binarysearch",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Linked List",
    description: "Placeholder",
    image: "/Euclid.png",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Stack",
    description: "Placeholder",
    image: "#",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Queue & Deque",
    description: "Placeholder",
    image: "/projects/sakura.png",
    tags: ["Greedy", "Dynamic Programming"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Tree",
    description: "Placeholder",
    image: "/projects/Acheron.png",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Heap",
    description: "Placeholder",
    image: "/projects/Arona.png",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const DSSection = () => {
  return (
    <section id="ds" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Data Structures </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure
          inventore totam odit, magnam nobis velit, at nemo voluptatum, atque
          odio veritatis reiciendis dignissimos. Reprehenderit magnam atque
          quibusdam soluta labore!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border"
            >
              <div className="h-48 overflow-hidden">
                <a href={project.demoUrl} target="_self">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              {/* Description of each Project */}
              <div className="p-6">
                <a href={project.demoUrl} target="_self">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
