"use client";

import React, { useState, useRef } from "react";
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
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
      imageUrl: "/ecommerce.png",
    },
    {
      title: "Modern Interia",
      description:
        "A contemporary interior design platform showcasing premium furniture collections and room design inspirations.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      category: "Frontend",
      githubLink: "https://github.com/18-sumit/Modern_Interia",
      liveLink: "https://modern-interia.vercel.app/",
      imageUrl: "/modern-interia.png",
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
      liveLink:"https://rag-eosin-chi.vercel.app/",
      imageUrl: "/RAGBot.png",
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
      imageUrl: "/crowdConnect.png",
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
      imageUrl: "/youtube.webp",
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

  const toggleExpandCard = (title: string) => {
    if (expandedCards.includes(title)) {
      setExpandedCards(expandedCards.filter(card => card !== title));
    } else {
      setExpandedCards([...expandedCards, title]);
    }
  };

  const isCardExpanded = (title: string) => {
    return expandedCards.includes(title);
  };

  return (
    <section className="bg-black text-white min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowDetails(false);
                  setSelectedProject(null);
                }}
                className={`px-6 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium"
                    : "text-gray-300 bg-[#282828] hover:text-white hover:bg-[#333]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] rounded-lg">
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
                    <div className="w-full h-full relative">
                      <Image
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
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
            // Project Cards View
            <motion.div
              className="p-4 relative"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Floating Glow Element */}
              {hoveredCard && (
                <motion.div
                  className="absolute pointer-events-none z-0"
                  initial={false}
                  animate={{
                    x: cardRefs.current[hoveredCard]?.offsetLeft || 0,
                    y: cardRefs.current[hoveredCard]?.offsetTop || 0,
                    width: cardRefs.current[hoveredCard]?.offsetWidth || 0,
                    height: cardRefs.current[hoveredCard]?.offsetHeight || 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="w-full h-full bg-teal-500 rounded-lg opacity-10 blur-xl"></div>
                </motion.div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    ref={el => cardRefs.current[project.title] = el}
                    className={`relative bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col z-10
                      ${hoveredCard === project.title ? 'shadow-teal-500/50 scale-105 z-20' : 
                      hoveredCard ? 'opacity-70 scale-95' : ''}`}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredCard(project.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Card Border Glow Effect */}
                    {hoveredCard === project.title && (
                      <motion.div 
                        className="absolute inset-0 rounded-lg z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="absolute inset-0 rounded-lg border border-teal-500"></div>
                      </motion.div>
                    )}
                
                    {/* Image Container with Fixed Aspect Ratio */}
                    <div 
                      className="w-full aspect-video relative cursor-pointer overflow-hidden"
                      onClick={() => {
                        setSelectedProject(project);
                        setShowDetails(true);
                      }}
                    >
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500"
                          style={{
                            transform: hoveredCard === project.title ? 'scale(1.1)' : 'scale(1)'
                          }}
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-[#282828] flex items-center justify-center">
                          <span className="text-6xl font-bold text-gray-400">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-2 right-2">
                        <span className="text-xs text-white bg-teal-500 bg-opacity-80 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col relative z-10">
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        {project.title}
                        {hoveredCard === project.title && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="ml-2"
                          >
                            <ChevronRight size={16} className="text-teal-500" />
                          </motion.div>
                        )}
                      </h3>
                      
                      <div className="mb-4 flex-grow">
                        <p className={`text-gray-300 text-sm ${isCardExpanded(project.title) ? '' : 'line-clamp-2'}`}>
                          {project.description}
                        </p>
                        {project.description.length > 100 && (
                          <button 
                            className="text-teal-500 text-xs mt-1 hover:underline"
                            onClick={() => toggleExpandCard(project.title)}
                          >
                            {isCardExpanded(project.title) ? 'Show less' : 'See more...'}
                          </button>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2 py-1 rounded-full transition-colors ${
                              hoveredCard === project.title 
                                ? 'text-white bg-teal-600' 
                                : 'text-gray-300 bg-[#333]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-400 px-2 py-1 bg-[#333] rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3 mt-auto">
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-white px-3 py-2 rounded-md transition-all text-sm flex-1 justify-center ${
                            hoveredCard === project.title
                              ? 'bg-[#444] shadow-md shadow-[#555]/20'
                              : 'bg-[#333]'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={16} />
                          GitHub
                        </motion.a>
                        {project.liveLink ? (
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 text-white px-3 py-2 rounded-md transition-all text-sm flex-1 justify-center ${
                              hoveredCard === project.title
                                ? 'bg-gradient-to-r from-teal-600 to-teal-800 shadow-md shadow-teal-500/20'
                                : 'bg-gradient-to-r from-teal-500 to-teal-700'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        ) : (
                          <motion.button
                            className="flex items-center gap-2 bg-[#222] text-gray-500 px-3 py-2 rounded-md text-sm flex-1 justify-center cursor-not-allowed"
                          >
                            <ExternalLink size={16} />
                            No Demo
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;