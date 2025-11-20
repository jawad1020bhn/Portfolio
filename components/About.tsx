
import React from 'react';
import Section from './ui/Section';
import { Shield, Users, PenTool } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" className="bg-white border-y-4 border-dark overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* The Narrative - Raw & Honest */}
        <div className="space-y-6">
          <div className="inline-block bg-secondary text-white font-bold px-3 py-1 border-2 border-dark shadow-neo-sm transform -rotate-1">
            {t.about.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            {t.about.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            {t.about.p1}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            {t.about.p2}
          </p>

          {/* Value Props - "Safe Bets" */}
          <div className="grid grid-cols-1 gap-4 mt-4">
             <div className="flex items-center gap-4 p-4 border-2 border-gray-100 bg-paper rounded-sm">
                <PenTool className="text-primary" size={28} />
                <div>
                  <h4 className="font-bold text-dark">{t.about.hands_on_title}</h4>
                  <p className="text-sm text-gray-600">{t.about.hands_on_desc}</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-4 border-2 border-gray-100 bg-paper rounded-sm">
                <Users className="text-secondary" size={28} />
                <div>
                  <h4 className="font-bold text-dark">{t.about.operator_title}</h4>
                  <p className="text-sm text-gray-600">{t.about.operator_desc}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Education & Competence - The "Evidence" */}
        <div className="bg-gray-50 p-6 md:p-8 border-2 border-dark shadow-neo">
           <h3 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">{t.about.education_title}</h3>
           
           <div className="space-y-6">
             <div>
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-bold text-lg">{t.about.edu_master_title}</h4>
                 <span className="text-xs font-mono font-bold bg-dark text-white px-2 py-1">2022 - 2024</span>
               </div>
               <p className="text-gray-600">USTO-MB University, Oran</p>
               <p className="text-sm text-gray-500 mt-2 italic">
                 {t.about.edu_master_desc}
               </p>
             </div>

             <div>
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-bold text-lg">{t.about.edu_bachelor_title}</h4>
                 <span className="text-xs font-mono font-bold bg-gray-200 text-dark px-2 py-1">2019 - 2022</span>
               </div>
               <p className="text-gray-600">USTO-MB University, Oran</p>
               <p className="text-sm text-gray-500 mt-2">
                 {t.about.edu_bachelor_desc}
               </p>
             </div>
           </div>

           <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
             <h4 className="font-bold text-sm uppercase text-gray-500 mb-3">{t.about.languages_title}</h4>
             <div className="flex flex-wrap gap-4">
               <span className="font-bold">{t.about.lang_arabic} <span className="font-normal text-gray-500">({t.about.native})</span></span>
               <span className="font-bold">{t.about.lang_english} <span className="font-normal text-gray-500">({t.about.pro})</span></span>
               <span className="font-bold">{t.about.lang_french} <span className="font-normal text-gray-500">({t.about.fluent})</span></span>
             </div>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default About;
