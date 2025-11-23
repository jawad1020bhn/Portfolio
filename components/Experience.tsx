

import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" className="bg-paper">
      <div className="mb-10 md:mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold inline-block bg-white px-6 py-3 border-2 border-dark shadow-neo transform -rotate-1">
          {t.experience.title}
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl font-medium text-sm md:text-base mx-auto md:mx-0">
          {t.experience.subtitle}
        </p>
      </div>

      {/* Timeline Container - reduced margin on mobile */}
      <div className="relative border-l-4 border-dark ml-2 md:ml-12 space-y-10 md:space-y-12 pb-4">
        {t.experience.list.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[10px] md:-left-[14px] top-0 w-5 h-5 md:w-6 md:h-6 bg-primary border-2 border-dark rounded-full z-10"></div>

            {/* Content Card */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '8px 8px 0px 0px rgba(24, 24, 27, 1)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border-2 border-dark shadow-neo p-5 md:p-8 transition-all duration-300 rounded-sm"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight">{exp.role}</h3>
                  <h4 className="text-lg md:text-xl text-secondary font-bold">{exp.company}</h4>
                </div>
                <div className="flex flex-wrap items-center md:flex-col md:items-end gap-2 md:gap-1">
                  <span className="font-mono bg-dark text-white px-2 py-1 md:px-3 text-xs md:text-sm font-bold whitespace-nowrap">
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs md:text-sm font-bold text-gray-500">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-base md:text-lg leading-none">▸</span>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t_tech, i) => (
                  <span key={i} className="bg-gray-50 text-dark border border-dark px-2 py-1 text-[10px] md:text-xs font-bold font-mono uppercase tracking-tight">
                    {t_tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;