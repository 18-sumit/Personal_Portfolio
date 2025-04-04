"use client";
import React from 'react';
import ErrorBoundary from '../components/ErrorBouboundary';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '../components/Skills';
import { ContactSection } from '@/components/ContactSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <ErrorBoundary>
      <main>
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </ErrorBoundary>
  );
}