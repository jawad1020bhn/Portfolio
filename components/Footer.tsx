import React from 'react';
import { MapPin, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
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

  return (
    <footer className="bg-[#111] text-light border-t-4 border-dark relative overflow-hidden">
      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-bold text-3xl md:text-5xl tracking-tighter text-white uppercase leading-none">
                Bahaa Eddine
              </span>
              <span className="font-bold text-3xl md:text-5xl tracking-tighter text-primary uppercase leading-none">
                Gotai.
              </span>
            </div>
            <p className="text-gray-400 max-w-xs font-medium text-sm md:text-base border-l-2 border-primary pl-4">
              {language === 'en' 
                ? "Designing the nervous systems of modern industry." 
                : "Concevoir les systèmes nerveux de l'industrie moderne."}
            </p>
            <div className="flex items-center gap-2 text-secondary font-mono text-xs md:text-sm font-bold border border-zinc-700 inline-block px-4 py-3 bg-zinc-900 shadow-lg">
              <MapPin size={16} />
              <span>
                {language === 'en' 
                  ? "Algeria. Available In & Outside Country." 
                  : "Algérie. Disponible en Algérie et à l'étranger."}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-mono font-bold text-gray-500 uppercase mb-6 tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">{t.footer.menu_title}</h3>
            <ul className="space-y-4">
              {t.nav.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-lg font-bold hover:text-primary hover:translate-x-2 transition-all inline-block cursor-pointer text-gray-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
             <h3 className="font-mono font-bold text-gray-500 uppercase mb-6 tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">{t.footer.connect_title}</h3>
             <ul className="space-y-4">
               <li>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-lg font-bold text-gray-300 hover:text-secondary transition-colors">
                   <div className="bg-zinc-800 p-2 rounded-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                     <Linkedin size={18} /> 
                   </div>
                   LinkedIn 
                   <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </a>
               </li>
               <li>
                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-lg font-bold text-gray-300 hover:text-secondary transition-colors">
                   <div className="bg-zinc-800 p-2 rounded-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Github size={18} /> 
                   </div>
                   GitHub 
                   <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </a>
               </li>
               <li>
                 <a href="mailto:bahaa.gotai@gmail.com" className="group flex items-center gap-3 text-lg font-bold text-gray-300 hover:text-secondary transition-colors">
                   <div className="bg-zinc-800 p-2 rounded-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                     <Mail size={18} /> 
                   </div>
                   Email 
                   <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </a>
               </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Bahaa Eddine Gotai. {t.footer.rights}</p>
          <p className="flex items-center gap-2">
            {t.footer.engineered} <span className="text-primary font-bold">React</span> & <span className="text-secondary font-bold">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;