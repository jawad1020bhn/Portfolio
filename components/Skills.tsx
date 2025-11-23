
import React from 'react';
import Section from './ui/Section';
import { SKILLS_DATA, CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Search, Terminal, FileText, Users, Eye, Lightbulb, Settings, Cpu, Network, Layers, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const getSkillIcon = (label: string) => {
    if (label.includes('AI') || label.includes('IA')) return <Brain size={18} />;
    if (label.includes('Analysis') || label.includes('Analyse')) return <Search size={18} />;
    if (label.includes('Documentation')) return <FileText size={18} />;
    if (label.includes('Communication')) return <Users size={18} />;
    if (label.includes('Detail') || label.includes('Détail')) return <Eye size={18} />;
    if (label.includes('Adaptability') || label.includes('Adaptabilité')) return <Lightbulb size={18} />;
    return <Terminal size={18} />;
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes('Automation')) return <Settings size={20} />;
    if (title.includes('Embedded')) return <Cpu size={20} />;
    if (title.includes('SCADA')) return <Layers size={20} />;
    return <Network size={20} />;
  };

  const getCategoryColor = (title: string) => {
     if (title.includes('Automation')) return 'text-primary';
     if (title.includes('Embedded')) return 'text-secondary';
     if (title.includes('SCADA')) return 'text-accent';
     return 'text-blue-400';
  };

  return (
    <Section id="skills" className="bg-white">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Tech Skills (Takes 7 cols) */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="bg-primary w-8 h-8 border-2 border-dark flex items-center justify-center shadow-neo-sm">
               <Terminal size={18} className="text-dark" />
            </span>
            {t.skills.tech_title}
          </h2>
          
          <div className="grid gap-6">
            {SKILLS_DATA.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-dark p-6 shadow-neo-sm hover:shadow-neo transition-all relative group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 border-b-2 border-dashed border-gray-200 pb-3">
                   <div className={`${getCategoryColor(category.title)}`}>
                     {getCategoryIcon(category.title)}
                   </div>
                   <h3 className="font-bold text-lg md:text-xl uppercase tracking-tight text-dark">
                     {category.title}
                   </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                   {category.skills.map((skill, i) => (
                     <span 
                       key={i} 
                       className="font-mono text-sm font-bold bg-gray-50 text-dark border border-gray-200 px-3 py-1.5 hover:border-dark hover:bg-white transition-colors cursor-default"
                     >
                       {skill}
                     </span>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
           <div className="mt-12 pt-8 border-t-2 border-dashed border-dark/20">
             <h3 className="font-bold text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
               <Brain className="text-secondary" /> {t.skills.soft_title}
             </h3>
             <div className="grid sm:grid-cols-2 gap-4">
               {t.skills.soft_list.map((skill, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   whileHover={{ x: 5 }}
                   className="flex items-start gap-3 p-3 border-l-4 border-gray-200 hover:border-secondary transition-colors bg-gray-50"
                 >
                   <div className="mt-1 text-dark/70">
                     {getSkillIcon(skill.label)}
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wide">{skill.label}</h4>
                     <p className="text-xs text-gray-500 font-mono mt-1 leading-snug">{skill.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        {/* Right Column: Certs & Languages (Takes 5 cols) */}
        <div className="lg:col-span-5 space-y-12">
           {/* Certifications */}
           <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-accent w-8 h-8 border-2 border-dark flex items-center justify-center shadow-neo-sm">
                  <CheckCircle2 size={18} className="text-dark" />
                </span>
                {t.skills.cert_title}
              </h2>
              <div className="bg-dark p-6 shadow-neo text-white relative overflow-hidden border-2 border-dark">
                {/* Background grid for Cert card */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '12px 12px' }}>
                </div>
                
                <div className="relative z-10 space-y-4">
                  {CERTIFICATES.map((cert, index) => (
                    <motion.a 
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start group hover:bg-white/5 p-2 rounded-sm -mx-2 transition-colors cursor-pointer"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-accent group-hover:bg-primary transition-colors shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-mono font-bold text-sm leading-relaxed border-b border-white/10 pb-2 w-full group-hover:text-accent transition-colors flex items-center gap-2">
                          {cert.name}
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/20 flex justify-between items-center text-[10px] font-mono text-gray-400">
                   <span>VERIFIED CREDENTIALS</span>
                   <div className="flex items-center gap-2">
                     <span>ONLINE</span>
                     <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                   </div>
                </div>
              </div>
           </div>

           {/* Languages */}
           <div>
            <h3 className="text-2xl font-bold mb-6 border-b-4 border-primary inline-block pr-8 uppercase tracking-tight">
              {t.skills.lang_title}
            </h3>
            <div className="space-y-4">
               {/* Arabic */}
               <div className="border-2 border-dark bg-white p-4 shadow-neo-sm hover:translate-x-1 transition-transform flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-base md:text-lg uppercase">{t.about.lang_arabic}</span>
                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1">{t.about.native}</span>
                  </div>
                  <div className="flex gap-1">
                     {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-5 bg-dark skew-x-[-12deg]"></div>)}
                  </div>
               </div>
               
               {/* English */}
               <div className="border-2 border-dark bg-white p-4 shadow-neo-sm hover:translate-x-1 transition-transform flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-base md:text-lg uppercase">{t.about.lang_english}</span>
                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1">{t.about.pro}</span>
                  </div>
                  <div className="flex gap-1">
                     {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-5 bg-dark skew-x-[-12deg]"></div>)}
                     <div className="w-1.5 h-5 bg-gray-200 skew-x-[-12deg]"></div>
                  </div>
               </div>

               {/* French */}
               <div className="border-2 border-dark bg-white p-4 shadow-neo-sm hover:translate-x-1 transition-transform flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-base md:text-lg uppercase">{t.about.lang_french}</span>
                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1">{t.about.fluent}</span>
                  </div>
                  <div className="flex gap-1">
                     {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-5 bg-dark skew-x-[-12deg]"></div>)}
                  </div>
               </div>
            </div>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default Skills;