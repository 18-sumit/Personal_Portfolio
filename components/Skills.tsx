"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define our skill types and levels
interface Skill {
    name: string;
    level: number; // 0-100
    category: 'frontend' | 'backend' | 'tools' | 'other';
    color?: string;
}

const SkillsSection: React.FC = () => {
    // Client-side state initialization
    const [isMounted, setIsMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [hovered, setHovered] = useState<string | null>(null);

    // Handle client-side mounting
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Skills data - you can customize these
    const skills: Skill[] = [
        // Frontend
        { name: 'React', level: 70, category: 'frontend', color: '#61DAFB' },
        // { name: 'Next.js', level: 85, category: 'frontend', color: '#808080' },
        { name: 'JavaScript', level: 80, category: 'frontend', color: '#FFFF00' },
        // { name: 'Tailwind CSS', level: 85, category: 'frontend', color: '#06B6D4' },
        // { name: 'Framer Motion', level: 75, category: 'frontend', color: '#0055FF' },

        // Backend
        { name: 'MongoDB', level: 75, category: 'backend', color: '#47A248' },
        { name: 'Express', level: 80, category: 'backend', color: '#808080' },
        { name: 'RESTful APIs', level: 85, category: 'backend', color: '#FF5733' },
        { name: 'Node.js', level: 80, category: 'backend', color: '#339933' },

        // Tools
        { name: 'Git', level: 80, category: 'tools', color: '#F05032' },
        // { name: 'Docker', level: 70, category: 'tools', color: '#2496ED' },
        // { name: 'AWS', level: 65, category: 'tools', color: '#FF9900' },
        { name: 'Postman', level: 70, category: 'tools', color: '#FF9900' },

        // Other
        // { name: 'UI/UX', level: 75, category: 'other', color: '#FF61F6' },
        // { name: 'Testing', level: 70, category: 'other', color: '#00CC00' },
        // { name: 'Agile', level: 80, category: 'other', color: '#6200EA' },
    ];

    const categories = [
        { id: 'all', name: 'All Skills' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'tools', name: 'Tools' },
        { id: 'other', name: 'Other' },
    ];

    const filteredSkills = skills.filter(skill =>
        activeCategory === 'all' || skill.category === activeCategory
    );

    // Only render animations and interactive elements on the client-side
    // to prevent hydration mismatch
    return (
        <section className="min-h-screen relative py-20 flex flex-col justify-center" id="skills">
            {/* Background gradient similar to Hero section */}
            {isMounted ? (
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `
              radial-gradient(
                ellipse at center, 
                rgba(255,255,255,0.05) 0%, 
                rgba(240,240,240,0.1) 50%, 
                rgba(230,230,230,0.05) 100%
              ),
              repeating-linear-gradient(
                45deg, 
                rgba(250,250,250,0.02) 0, 
                rgba(240,240,240,0.04) 25px, 
                rgba(255,255,255,0.02) 50px
              )
            `,
                        backgroundSize: '400% 400%',
                        filter: 'blur(80px)',
                    }}
                    animate={{
                        backgroundPosition: [
                            '0% 0%',
                            '100% 100%',
                            '0% 100%',
                            '100% 0%'
                        ],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "easeInOut"
                    }}
                />
            ) : (
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `
              radial-gradient(
                ellipse at center, 
                rgba(255,255,255,0.05) 0%, 
                rgba(240,240,240,0.1) 50%, 
                rgba(230,230,230,0.05) 100%
              )
            `,
                        filter: 'blur(80px)',
                    }}
                />
            )}

            <div className="container max-w-5xl mx-auto px-4 relative z-10">
                {isMounted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Skills & Expertise
                        </h2>
                        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                            My technical toolkit has been refined through building web applications
                            and solving complex problems.
                        </p>
                    </motion.div>
                ) : (
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Skills & Expertise
                        </h2>
                        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                            My technical toolkit has been refined through building web applications
                            and solving complex problems.
                        </p>
                    </div>
                )}

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white"
                                    : "bg-black/40 text-neutral-400 hover:text-white border border-neutral-800"
                                }`}
                            style={{
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            onMouseEnter={() => isMounted && setHovered(skill.name)}
                            onMouseLeave={() => isMounted && setHovered(null)}
                            className={`relative overflow-hidden rounded-xl p-6 flex flex-col ${isMounted ? "transform transition-all duration-300" : ""
                                } ${isMounted && hovered === skill.name ? "translate-y-[-5px]" : ""}`}
                            style={{
                                backgroundColor: "rgba(0,0,0,0.4)",
                                backdropFilter: "blur(10px)",
                                borderWidth: "1px",
                                borderColor: isMounted && hovered === skill.name ? skill.color || "#1a1a1a" : "#1a1a1a",
                                boxShadow: isMounted && hovered === skill.name ? `0 0 15px rgba(${skill.color?.replace(/^#/, '') || '26, 26, 26'}, 0.15)` : "none",
                            }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                                <span className="text-neutral-400 text-sm">{skill.level}%</span>
                            </div>

                            <div className="w-full bg-black/50 rounded-full h-2 mb-2">
                                <div
                                    className="h-full rounded-full transition-all duration-1000"
                                    style={{
                                        width: isMounted ? `${skill.level}%` : "0%",
                                        background: `linear-gradient(90deg, ${skill.color || '#2DD4BF'} 0%, ${skill.color || '#14B8A6'} 100%)`,
                                    }}
                                />
                            </div>

                            {/* Skill glow effect */}
                            {isMounted && hovered === skill.name && (
                                <div
                                    className="absolute -inset-1 z-0 opacity-20 blur-xl"
                                    style={{
                                        background: skill.color || '#14B8A6',
                                        mixBlendMode: 'normal'
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;