
import React from 'react';
import Section from './ui/Section';
import { SKILLS_DATA, CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Search, Terminal, FileText, Users, Eye, Lightbulb, Settings, Cpu, Network, Layers } from 'lucide-react';
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

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Automation': return 'text-primary border-primary';
      case 'Embedded': return 'text-secondary border-secondary';
      case 'IoT': return 'text-accent border-accent';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Automation': return <Settings size={12} />;
      case 'Embedded': return <Cpu size={12} />;
      case 'IoT': return <Network size={12} />;
      default: return <Layers size={12} />;
    }
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'SYSTEM EXPERT';
    if (level >= 80) return 'ADVANCED';
    if (level >= 70) return 'PROFICIENT';
    return 'COMPETENT';
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
          
          <div className="grid sm:grid-cols-2 gap-4">
            {SKILLS_DATA.map((skill, index) => {
              const segments = 5;
              const activeSegments = Math.ceil((skill.level / 100) * segments);
              const colorClass = skill.category === 'Automation' ? 'bg-primary' : 
                                 skill.category === 'Embedded' ? 'bg-secondary' : 
                                 skill.category === 'IoT' ? 'bg-accent' : 'bg-gray-400';

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-dark p-4 shadow-neo-sm hover:shadow-neo transition-all relative overflow-hidden group"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gray-50 -translate-y-1/2 translate-x-1/2 rotate-45 border border-dark/20"></div>

                  <div className="flex justify-between items-start mb-3">
                    <div className={`text-[10px] font-bold font-mono px-2 py-0.5 border rounded-sm flex items-center gap-1 uppercase tracking-wider ${getCategoryColor(skill.category)}`}>
                       {getCategoryIcon(skill.category)} {skill.category}
                    </div>
                    <span className="font-mono font-bold text-lg text-dark/30 group-hover:text-dark transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="font-bold text-dark text-lg leading-tight mb-4 min-h-[3.5rem] flex items-center">
                    {skill.name}
                  </h3>

                  {/* Segmented Bar */}
                  <div className="flex gap-1.5 mb-3">
                    {[...Array(segments)].map((_, i) => (
                       <div 
                         key={i} 
                         className={`h-2.5 flex-1 border border-dark/10 skew-x-[-12deg] transition-all duration-500 ${i < activeSegments ? colorClass : 'bg-gray-100'}`}
                       />
                    ))}
                  </div>

                  <div className="flex justify-between items-end">
                     <span className="text-[9px] font-mono text-gray-400 uppercase">SYS.ID: 0{index+1}</span>
                     <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                       STATUS: <span className="text-dark">{getProficiencyLabel(skill.level)}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
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
                
                <div className="relative z-10 space-y-6">
                  {CERTIFICATES.map((cert, index) => (
                    <motion.div 
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-accent group-hover:bg-primary transition-colors"></div>
                      <p className="font-mono font-bold text-sm leading-relaxed border-b border-white/10 pb-2 w-full group-hover:text-accent transition-colors">
                        {cert}
                      </p>
                    </motion.div>
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
                     {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-5 bg-dark skew-x-[-12deg]"></div>)}
                  </div>
               </div>

               {/* French */}
               <div className="border-2 border-dark bg-white p-4 shadow-neo-sm hover:translate-x-1 transition-transform flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-base md:text-lg uppercase">{t.about.lang_french}</span>
                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1">{t.about.fluent}</span>
                  </div>
                  <div className="flex gap-1">
                     {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-5 bg-dark skew-x-[-12deg]"></div>)}
                     <div className="w-1.5 h-5 bg-gray-200 skew-x-[-12deg]"></div>
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
