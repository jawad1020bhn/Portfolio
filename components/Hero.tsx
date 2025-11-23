

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ChevronRight, Download, MapPin } from 'lucide-react';
import Section from './ui/Section';
import { RESUME_URL_FR } from '../constants';
import { useLanguage } from './LanguageContext';
import ResumeModal from './ui/ResumeModal';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (language === 'fr') {
      window.open(RESUME_URL_FR, '_blank');
    } else {
      setIsResumeModalOpen(true);
    }
  };

  return (
    <>
    <Section id="home" className="min-h-[90vh] flex items-center pt-28 md:pt-20 relative overflow-hidden">
      {/* Floating Elements (Subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 md:opacity-60">
        <div className="absolute top-20 right-10 w-16 h-16 md:w-32 md:h-32 bg-accent/10 border-2 border-dark rounded-full animate-bounce duration-[3000ms]"></div>
        <div className="absolute bottom-40 left-5 w-12 h-12 md:w-24 md:h-24 bg-primary/10 border-2 border-dark rounded-full animate-pulse duration-[4000ms]"></div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 w-full items-center relative z-10">
        
        {/* Text Content - F-Pattern Priority */}
        <motion.div 
          className="md:col-span-7 flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           {/* 1. Who I am (Immediate Clarity) */}
           <div className="flex flex-col">
             <span className="font-mono text-sm font-bold text-secondary uppercase mb-2 tracking-wide flex items-center gap-2">
               <MapPin size={14} /> 
               {language === 'en' ? 'Based in Algeria. Open to work In & Outside Algeria.' : 'Basé en Algérie. Disponible en Algérie et à l\'étranger.'}
             </span>
             <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight uppercase text-dark">
               Bahaa Eddine <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gotai</span>
             </h1>
           </div>

          {/* 2. What I Do (Specifics, No Slogans) */}
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mt-2">
            {t.hero.role}
          </h2>

          <p className="text-base md:text-lg text-gray-700 max-w-lg leading-relaxed font-medium">
            {t.hero.description}
          </p>

          {/* 3. Action (Low Risk) */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <motion.a 
              href="#projects" 
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-dark font-bold px-6 py-3 md:px-8 md:py-4 border-2 border-dark shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {t.hero.cta_work} <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-dark font-bold px-6 py-3 md:px-8 md:py-4 border-2 border-dark shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t.hero.cta_cv}
            </motion.a>
          </div>

          {/* 4. Competence Signals (Marquee) */}
          <div className="mt-8 py-3 border-y-2 border-dashed border-dark/20 w-full overflow-hidden">
             <p className="font-mono text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">{t.hero.core_stack}</p>
             <div className="flex gap-4 font-bold text-sm md:text-base text-dark opacity-80 flex-wrap">
                <span>✓ S7-1500 (SCL/LAD)</span>
                <span>✓ STM32 (C++)</span>
                <span>✓ WinCC</span>
                <span>✓ PackML</span>
                <span>✓ Preventive Maintenance</span>
             </div>
          </div>
        </motion.div>

        {/* Image / Visual - Warmth Indicator */}
        <motion.div 
          className="md:col-span-5 flex justify-center md:justify-end mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Purple accent for Wisdom/Creativity */}
            <div className="absolute inset-0 bg-secondary translate-x-3 translate-y-3 border-2 border-dark"></div>
            
            <div className="absolute inset-0 bg-white border-2 border-dark overflow-hidden flex items-center justify-center">
              {/* Placeholder for smiling photo (Safety Signal) */}
               <img 
                src="https://picsum.photos/seed/engineer_smile/800/800" 
                alt="Bahaa eddine GOTAI" 
                className="w-full h-full object-cover filter hover:brightness-110 transition-all"
              />
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white p-3 border-2 border-dark shadow-neo z-20 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="font-bold text-xs font-mono">
                {t.hero.status}: <br/> {t.hero.status_text}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs font-mono font-bold uppercase">Scroll</span>
        <ArrowDownCircle size={24} />
      </motion.div>
    </Section>
    <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
};

export default Hero;