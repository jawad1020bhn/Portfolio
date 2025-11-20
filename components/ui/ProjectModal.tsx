
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText, Github, Server, Cpu, Layers } from 'lucide-react';
import { Project } from '../../types';
import { useLanguage } from '../LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('commercial') || s.includes('progress') || s.includes('cours')) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (s.includes('abandoned') || s.includes('abandonné')) return 'text-red-400 border-red-500/30 bg-red-500/10';
    if (s.includes('prototype')) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    return 'text-zinc-400 border-zinc-700 bg-zinc-800';
  };

  // Helper to map link types to localized labels if needed
  const getLinkLabel = (link: {label: string, type: string}) => {
     // If the label matches standard keys, translate it, otherwise keep it
     if (link.type === 'github' && link.label === 'View Code') return t.projects.view_code;
     if (link.type === 'pdf' && link.label === 'Read Thesis') return t.projects.read_thesis;
     return link.label;
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content - Dark Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-[#09090b] border border-zinc-700 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col"
          >
            {/* Header - Sticky */}
            <div className="sticky top-0 bg-[#09090b]/95 backdrop-blur border-b border-zinc-800 p-6 md:p-8 z-10 flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {project.subtitle && (
                    <span className="font-mono text-sm font-bold text-zinc-500 uppercase block tracking-widest">
                      {project.subtitle}
                    </span>
                  )}
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase font-mono tracking-wide border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold text-white uppercase leading-none mb-4">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                   <span className="text-black bg-primary px-2 py-1 text-xs font-mono font-bold uppercase">
                      {t.projects.sw_only}
                   </span>
                   {project.tags.map((tag, i) => (
                    <span key={i} className="bg-zinc-800 text-zinc-300 px-2 py-1 text-xs font-mono font-bold border border-zinc-700 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-zinc-400 p-2 hover:text-white hover:bg-zinc-800 transition-colors rounded-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Main Description */}
              <div>
                <p className="text-lg md:text-xl font-medium text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              {/* Specs Grid */}
              {project.specs && (
                <div className="bg-zinc-900/50 border border-zinc-800 p-6">
                  <h3 className="font-bold text-lg uppercase mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2 text-white">
                    <Server size={20} className="text-primary" /> Technical Specs
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-dashed border-zinc-800 pb-1">
                        <span className="font-mono text-sm text-zinc-500 font-bold">{spec.label}</span>
                        <span className="font-bold text-right text-zinc-200 text-sm md:text-base">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features & Architecture Layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Architecture */}
                {project.architecture && (
                  <div>
                    <h3 className="font-bold text-lg uppercase mb-4 flex items-center gap-2 text-white bg-zinc-800 px-3 py-1 inline-block border border-zinc-700">
                      <Layers size={18} className="text-secondary" /> Architecture
                    </h3>
                    <ul className="space-y-2">
                      {project.architecture.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-medium text-zinc-400">
                          <span className="text-secondary font-bold font-mono">0{i+1}.</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features */}
                {project.features && (
                  <div className="space-y-6">
                    {project.features.map((feature, i) => (
                      <div key={i}>
                         <h3 className="font-bold text-lg uppercase mb-3 flex items-center gap-2 text-black bg-primary px-3 py-1 inline-block">
                          <Cpu size={18} /> {feature.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          {feature.items.map((item, j) => (
                            <li key={j} className="text-zinc-400 leading-relaxed text-sm md:text-base">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Links Footer */}
              {project.links && project.links.length > 0 && (
                <div className="pt-8 border-t border-zinc-800 flex flex-wrap gap-4">
                  {project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 font-bold text-sm md:text-base hover:bg-primary hover:text-black transition-all border border-zinc-700 hover:border-primary font-mono uppercase"
                    >
                      {link.type === 'github' && <Github size={18} />}
                      {link.type === 'pdf' && <FileText size={18} />}
                      {link.type === 'external' && <ExternalLink size={18} />}
                      {getLinkLabel(link)}
                    </a>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
