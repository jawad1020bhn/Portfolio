
import React from 'react';
import Section from './ui/Section';
import { SKILLS_DATA, CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Search, Terminal, FileText, Users, Eye, Lightbulb } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const getSkillIcon = (label: string) => {
    // Simple keyword matching that works for both EN and FR roughly
    if (label.includes('AI') || label.includes('IA')) return <Brain size={16} />;
    if (label.includes('Analysis') || label.includes('Analyse')) return <Search size={16} />;
    if (label.includes('Documentation')) return <FileText size={16} />;
    if (label.includes('Communication')) return <Users size={16} />;
    if (label.includes('Detail') || label.includes('Détail')) return <Eye size={16} />;
    if (label.includes('Adaptability') || label.includes('Adaptabilité')) return <Lightbulb size={16} />;
    return <Terminal size={16} />;
  };

  return (
    <Section id="skills" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Tech Skills */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-3">
            <span className="bg-primary w-6 h-6 md:w-8 md:h-8 border-2 border-dark block"></span>
            {t.skills.tech_title}
          </h2>
          <div className="space-y-5 md:space-y-6">
            {SKILLS_DATA.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 items-end">
                  <span className="font-bold text-base md:text-lg leading-none">{skill.name}</span>
                  <span className="font-mono text-gray-500 text-xs md:text-sm">{skill.category}</span>
                </div>
                <div className="h-3 md:h-4 w-full bg-gray-100 border-2 border-dark rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 pt-8 border-t-2 border-dashed border-dark/20">
             <h3 className="font-bold text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
               <Brain className="text-secondary" /> {t.skills.soft_title}
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               {t.skills.soft_list.map((skill, index) => (
                 <div key={index} className="border-2 border-dark bg-paper p-3 shadow-neo-sm hover:translate-y-[-2px] transition-transform flex items-start gap-3">
                   <div className="mt-1 text-dark">
                     {getSkillIcon(skill.label)}
                   </div>
                   <div>
                     <h4 className="font-bold text-sm md:text-base leading-tight">{skill.label}</h4>
                     <p className="text-xs text-gray-600 font-mono mt-1">{skill.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Languages & Certificates */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-3">
            <span className="bg-accent w-6 h-6 md:w-8 md:h-8 border-2 border-dark block"></span>
            {t.skills.cert_title}
          </h2>
          
          <div className="grid gap-3 md:gap-4">
            {CERTIFICATES.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-paper p-3 md:p-4 border-2 border-dark flex items-start gap-3 md:gap-4"
              >
                <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                <span className="font-medium font-sans text-base md:text-lg leading-tight">{cert}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4 border-b-2 border-dark inline-block">{t.skills.lang_title}</h3>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <div className="bg-white px-4 py-3 border-2 border-dark shadow-neo flex-1">
                <span className="block font-bold text-lg">{t.about.lang_arabic}</span>
                <span className="text-xs text-gray-500">{t.about.native}</span>
              </div>
              <div className="bg-white px-4 py-3 border-2 border-dark shadow-neo flex-1">
                <span className="block font-bold text-lg">{t.about.lang_english}</span>
                <span className="text-xs text-gray-500">{t.about.pro}</span>
              </div>
              <div className="bg-white px-4 py-3 border-2 border-dark shadow-neo flex-1">
                <span className="block font-bold text-lg">{t.about.lang_french}</span>
                <span className="text-xs text-gray-500">{t.about.fluent}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Skills;
