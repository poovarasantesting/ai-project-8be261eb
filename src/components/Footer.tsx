import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://github.com" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:email@example.com" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Your Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}