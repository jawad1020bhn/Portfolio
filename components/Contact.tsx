import React from 'react';
import Section from './ui/Section';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const parseDescription = (text: string) => {
    const parts = text.split('*');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span 
            key={index} 
            className="inline-block relative group mx-1.5 align-middle"
          >
             {/* Shadow Block */}
             <span className="absolute inset-0 bg-primary translate-x-1 translate-y-1 border-2 border-dark transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
             
             {/* Text Block */}
             <span className="relative block bg-dark text-white px-3 py-1 border-2 border-dark font-mono text-sm md:text-base font-bold transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
               {part}
             </span>
          </span>
        );
      }
      return <span key={index} className="relative z-10 align-middle">{part}</span>;
    });
  };

  return (
    <Section id="contact" className="bg-primary border-t-4 border-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#18181b 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="bg-white border-4 border-dark shadow-neo p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto relative z-10">
        
        {/* Status Badge - Reduces Uncertainty */}
        <div className="inline-flex items-center gap-2 bg-dark text-white px-4 py-1 font-mono text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {t.contact.status}
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-dark uppercase leading-[0.9]">
          {t.contact.title_start}<br/> <span className="text-secondary">{t.contact.title_end}</span>
        </h2>
        
        <p className="text-base md:text-xl text-gray-800 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          {parseDescription(t.contact.desc)}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <motion.a 
            href="mailto:bahaa.gotai@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-dark text-white px-8 py-4 font-bold text-lg border-2 border-dark hover:bg-gray-800 hover:shadow-lg transition-all shadow-neo group"
          >
            <Mail size={22} />
            <span>{t.contact.btn_email}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com" // Replace with actual LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-dark px-8 py-4 font-bold text-lg border-2 border-dark hover:bg-gray-50 transition-all shadow-neo"
          >
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </motion.a>
        </div>

        <div className="mt-8 text-sm font-mono text-gray-500">
          {t.contact.response_time}
        </div>
      </div>
    </Section>
  );
};

export default Contact;