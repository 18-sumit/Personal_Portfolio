"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubLink: string;
  liveLink?: string;
  imageUrl?: string;
}

const categories = ["All", "Frontend", "Backend", "Full Stack", "AI/ML"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully-featured e-commerce solution with product catalog, shopping cart, and secure payment processing.",
      technologies: [
        "React.js",
        "JavaScript",
        "Context API",
        "Stripe",
        "MongoDB",
        "JWT",
        "Mongoose",
      ],
      category: "Full Stack",
      githubLink:
        "https://github.com/18-sumit/Full-Stack-E-commerce-With-Admin-Panel",
      liveLink:
        "https://full-stack-e-commerce-with-admin-panel-bz29.vercel.app/",
      imageUrl: "/Blue_Origin1.jpg",
    },
    {
      title: "Modern Interia",
      description:
        "A contemporary interior design platform showcasing premium furniture collections and room design inspirations.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      category: "Frontend",
      githubLink: "https://github.com/18-sumit/Modern_Interia",
      liveLink: "https://modern-interia.vercel.app/",
      imageUrl: "/Blue_Origin1.jpg",
    },
    {
      title: "SecureScan",
      description:
        "A secure scanning system for identifying malicious URLs and websites.",
      technologies: [
        "React.js",
        "JavaScript",
        "Redux toolkit",
        "Node.js",
        "MongoDB",
        "JWT",
        "Socket.io",
      ],
      category: "Full Stack",
      githubLink: "https://github.com/18-sumit/SecureScan",
      imageUrl: "/Blue_Origin1.jpg",
    },
    {
      title: "RAG Bot",
      description:
        "An AI-powered Retrieval Augmented Generation chatbot providing accurate responses from knowledge databases.",
      technologies: ["Python", "LangChain", "OpenAI", "FastAPI"],
      category: "AI/ML",
      githubLink: "https://github.com/18-sumit/RAG-BOT",
      imageUrl: "/Blue_Origin1.jpg",
    },
    {
      title: "Crowd Connect",
      description:
        "A social event management platform for organizing community gatherings and tracking attendance.",
      technologies: [
        "React",
        "Appwrite",
        "RazorPay",
        "JavaScript",
        "EmailJS",
      ],
      category: "Frontend",
      githubLink: "https://github.com/18-sumit/CrowdConnect",
      liveLink: "https://crowdconnect.vercel.app/",
      imageUrl: "/Blue_Origin1.jpg",
    },
    {
      title: "Youtube Backend",
      description:
        "A backend for a YouTube-like platform including video upload, user auth, interactions, and subscriptions.",
      technologies: [
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Bcrypt",
        "Mongoose",
      ],
      category: "Backend",
      githubLink:
        "https://github.com/18-sumit/Backend/tree/main/Youtube_Backend",
      imageUrl: "/Blue_Origin1.jpg",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleBackToList = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-black text-white min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-[#121212] rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowDetails(false);
                    setSelectedProject(null);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium"
                      : "text-gray-300 hover:text-white hover:bg-[#282828]"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-lg">
            {showDetails && selectedProject ? (
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={handleBackToList}
                  className="flex items-center text-gray-400 hover:text-white mb-6"
                  whileHover={{ x: -4 }}
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to projects
                </motion.button>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-64 h-64 bg-[#333] rounded-lg flex-shrink-0 overflow-hidden relative">
                    {selectedProject.imageUrl ? (
                      <Image
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-gray-300 flex justify-center items-center h-full">
                        {selectedProject.title.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <span className="text-sm text-[#0F766E] font-medium">
                      {selectedProject.category}
                    </span>
                    <h1 className="text-4xl font-bold mt-1">
                      {selectedProject.title}
                    </h1>
                    <p className="text-gray-300 mb-6 mt-3">
                      {selectedProject.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-sm text-gray-200 px-3 py-1 bg-[#333] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#333] hover:bg-[#444] text-white px-4 py-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        GitHub
                      </motion.a>
                      {selectedProject.liveLink && (
                        <motion.a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-4 py-2 rounded-full transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Project List View
              <motion.div
                className="p-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center text-xs text-gray-400 border-b border-[#282828] pb-2 px-4">
                  <div>#</div>
                  <div>PROJECT</div>
                  <div>TECHNOLOGIES</div>
                </div>

                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 rounded-md hover:bg-[#282828] cursor-pointer transition-colors group"
                    onClick={() => {
                      setSelectedProject(project);
                      setShowDetails(true);
                    }}
                    variants={itemVariants}
                  >
                    <div className="text-gray-400 group-hover:text-white flex items-center justify-center w-6">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <ChevronRight
                        size={16}
                        className="hidden group-hover:block text-[#0F766E]"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#333] rounded flex-shrink-0 relative overflow-hidden">
                        {project.imageUrl ? (
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 40px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="text-lg font-bold text-gray-300 flex items-center justify-center h-full">
                            {project.title.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-300 px-2 py-1 bg-[#333] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
