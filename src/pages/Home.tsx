import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                {skill.icon}
              </div>
              <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <Button asChild variant="outline">
            <Link to="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Let's work together on your next project
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            Contact Me
          </Link>
        </Button>
      </section>
    </div>
  );
}

// Mock data for skills
const skills = [
  { name: "JavaScript", icon: <span className="text-yellow-500 text-xl">JS</span> },
  { name: "React", icon: <span className="text-blue-500 text-xl">⚛️</span> },
  { name: "Node.js", icon: <span className="text-green-500 text-xl">N</span> },
  { name: "TypeScript", icon: <span className="text-blue-700 text-xl">TS</span> },
  { name: "HTML/CSS", icon: <span className="text-orange-500 text-xl">{"</>"}</span> },
  { name: "UI/UX Design", icon: <span className="text-purple-500 text-xl">🎨</span> },
  { name: "GraphQL", icon: <span className="text-pink-500 text-xl">GQL</span> },
  { name: "Tailwind CSS", icon: <span className="text-teal-500 text-xl">TW</span> },
];

// Mock data for featured projects
const featuredProjects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with a clean user interface and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience.",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity app that helps teams organize and track their projects and tasks.",
    image: "https://images.unsplash.com/photo-1611224923853-ab2bc1f6b12a?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Firebase"],
    link: "#"
  }
];