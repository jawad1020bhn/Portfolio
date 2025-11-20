
import React, { useState } from 'react';
import Section from './ui/Section';
import { Project } from '../types';
import ProjectModal from './ui/ProjectModal';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Cpu, Wifi, GraduationCap, Microscope, AlertTriangle, Github } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Automation': return <Layers size={24} />;
      case 'IoT': return <Wifi size={24} />;
      case 'Embedded': return <Cpu size={24} />;
      case 'Research': return <Microscope size={24} />;
      default: return <GraduationCap size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('commercial') || s.includes('progress') || s.includes('cours')) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (s.includes('abandoned') || s.includes('abandonné')) return 'text-red-400 border-red-500/30 bg-red-500/10';
    if (s.includes('prototype')) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    return 'text-zinc-400 border-zinc-700 bg-zinc-800';
  };

  return (
    <Section id="projects" className="bg-[#09090b] border-b-4 border-black relative overflow-hidden">
      {/* Dark Industrial Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#27272a 1px, transparent 1px), linear-gradient(to right, #27272a 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]/80 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative z-10">
              {t.projects.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.projects.subtitle}</span>
            </h2>
            
            {/* Disclaimer - Sci-fi Style */}
            <div className="inline-flex items-start gap-3 bg-zinc-900/80 border-l-4 border-primary p-4 max-w-2xl backdrop-blur-sm shadow-[0_0_15px_rgba(45,212,191,0.05)]">
              <AlertTriangle className="text-primary shrink-0 mt-0.5" size={20} />
              <p className="text-sm md:text-base font-medium text-zinc-400 leading-snug">
                {t.projects.disclaimer}
              </p>
            </div>
          </div>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-primary border border-primary/30 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all font-mono font-bold px-6 py-3 uppercase tracking-wider group">
            <Github size={18} className="group-hover:rotate-12 transition-transform" /> {t.projects.github_btn}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-primary p-3 bg-primary/5 border border-primary/20 rounded-sm shrink-0 group-hover:bg-primary/10 transition-colors">
                    {getIcon(project.category)}
                  </div>
                  <div> 
                     {project.subtitle && <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{project.subtitle}</span>}
                     <h3 className="text-xl md:text-2xl font-bold leading-none uppercase text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed flex-grow font-medium text-sm md:text-base">
                  {project.shortDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-800 group-hover:border-primary/20 transition-colors flex items-center justify-between">
                   <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] font-bold font-mono text-black bg-primary px-2 py-0.5 uppercase">
                      {t.projects.sw_only}
                    </span>
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold font-mono text-zinc-400 border border-zinc-700 px-2 py-0.5 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="text-zinc-600 group-hover:text-primary transition-colors" size={20} />
                </div>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Github Button */}
         <a href="https://github.com" target="_blank" rel="noreferrer" className="md:hidden mt-8 w-full flex justify-center items-center gap-2 bg-zinc-900 text-white border border-zinc-700 py-4 font-mono font-bold uppercase hover:bg-zinc-800 transition-colors">
            <Github size={18} /> {t.projects.github_btn}
          </a>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
};

export default Projects;
