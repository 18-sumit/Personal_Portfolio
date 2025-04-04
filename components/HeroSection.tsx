"use client";
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle resume download without navigation
  const handleResumeDownload = (e: React.MouseEvent) => {
    // No need to prevent default if you want the browser to handle the download
    // Just make sure the file exists at the specified path
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Water Wave Background */}
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
            duration: 10,
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

      {/* Water Wave Overlay */}
      {isMounted ? (
        <motion.div 
          className="absolute inset-0 z-1"
          style={{
            background: `
              linear-gradient(
                transparent, 
                rgba(240,240,240,0.05), 
                rgba(250,250,250,0.1)
              )
            `,
            maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
          }}
          animate={{
            backgroundPosition: [
              '0% 0%', 
              '0% 100%', 
              '0% 0%'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ) : (
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: `
              linear-gradient(
                transparent, 
                rgba(240,240,240,0.05), 
                rgba(250,250,250,0.1)
              )
            `,
            maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Sumit Singh
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300">
          {isMounted ? (
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'MERN Stack Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          ) : (
            <span>Software Engineer</span>
          )}
        </div>
        
        <a 
          href="/Sumit_Singh_Resume.pdf"
          onClick={handleResumeDownload}
          download="Sumit_Singh_Resume.pdf"
          className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg py-3 px-6 font-medium hover:opacity-90 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;