import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <section>
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-center mb-10 max-w-2xl mx-auto">
          A collection of my work that showcases my skills and experience in various technologies and domains.
        </p>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["all", "web", "mobile", "design"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category === "all" ? "All Projects" : `${category} Projects`}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveDemo && (
                    <Button asChild size="sm">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Mock data for projects
const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with a clean user interface and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience.",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "web",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A productivity app that helps teams organize and track their projects and tasks.",
    image: "https://images.unsplash.com/photo-1611224923853-ab2bc1f6b12a?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Firebase"],
    category: "web",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    title: "Weather Mobile App",
    description: "A mobile app that provides real-time weather forecasts and alerts.",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=800&auto=format&fit=crop",
    technologies: ["React Native", "Redux", "Weather API"],
    category: "mobile",
    github: "https://github.com",
    liveDemo: null
  },
  {
    title: "Travel Blog",
    description: "A blog platform for sharing travel experiences and recommendations.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
    category: "web",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    title: "UI Component Library",
    description: "A collection of reusable UI components designed for modern web applications.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Storybook", "TypeScript"],
    category: "design",
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app to track workouts, set goals, and monitor fitness progress.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    technologies: ["React Native", "Firebase", "Health API"],
    category: "mobile",
    github: "https://github.com",
    liveDemo: null
  },
  {
    title: "Brand Style Guide",
    description: "A comprehensive style guide for a technology startup including logo variations, color palette, and typography.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    technologies: ["Figma", "Illustrator", "Design Systems"],
    category: "design",
    github: null,
    liveDemo: "https://example.com"
  },
  {
    title: "Music Streaming App",
    description: "A web application for streaming music with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Spotify API"],
    category: "web",
    github: "https://github.com",
    liveDemo: "https://example.com"
  }
];