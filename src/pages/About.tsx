import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileDown } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* About Me Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-slate-900 dark:text-white">
            About Me
          </h1>
          
          <div className="md:flex items-start gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
              <div className="aspect-square w-full max-w-[300px] mx-auto overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Your Name
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I'm a passionate full-stack developer with over 5 years of experience building web applications and 
                user interfaces. I specialize in React, Node.js, and modern JavaScript frameworks.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                With a background in both design and development, I bring a unique perspective to projects, 
                focusing on creating beautiful, intuitive experiences that are also technically sound and performant.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with 
                new cooking recipes.
              </p>
              
              <Button asChild>
                <a href="/resume.pdf" download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">
            My Journey
          </h2>
          
          <div className="relative border-l border-slate-200 dark:border-slate-700 ml-4 md:ml-6 pl-8 md:pl-10 pb-8">
            {timeline.map((item, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[35px] md:-left-[43px] top-1.5 border-4 border-white dark:border-slate-900"></div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.period}</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-1">{item.company}</p>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">
            Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{edu.period}</p>
                <p className="text-slate-700 dark:text-slate-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">
            When I'm Not Coding
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-3 mx-auto">{interest.icon}</div>
                <p className="font-medium text-slate-900 dark:text-white">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data for timeline
const timeline = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading the frontend development team, implementing new features, and mentoring junior developers."
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions Group",
    period: "2019 - 2022",
    description: "Developed responsive web applications using React, Redux, and modern CSS frameworks."
  },
  {
    title: "UI/UX Designer & Developer",
    company: "Creative Digital Agency",
    period: "2017 - 2019",
    description: "Created user interfaces and implemented designs for various client projects."
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Tech",
    period: "2015 - 2017",
    description: "Assisted in developing web applications and gained experience in frontend technologies."
  }
];

// Mock data for education
const education = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2013 - 2015",
    description: "Specialized in Human-Computer Interaction and Web Technologies."
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "State University",
    period: "2009 - 2013",
    description: "Graduated with honors. Focused on software development and design principles."
  }
];

// Mock data for interests
const interests = [
  { name: "Hiking", icon: "🏔️" },
  { name: "Reading", icon: "📚" },
  { name: "Photography", icon: "📷" },
  { name: "Cooking", icon: "🍳" }
];