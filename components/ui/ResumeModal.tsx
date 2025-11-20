
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { RESUME_URL_EN, RESUME_URL_FR } from '../../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white border-4 border-dark shadow-neo p-6 md:p-8 max-w-md w-full z-10"
          >
             <button onClick={onClose} className="absolute top-2 right-2 p-2 hover:bg-gray-100 border-2 border-transparent hover:border-dark transition-all">
                <X size={20} />
             </button>

             <h3 className="text-2xl font-bold mb-6 text-center uppercase text-dark">Select Version</h3>

             <div className="flex flex-col gap-4">
                <a href={RESUME_URL_EN} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border-2 border-dark hover:bg-primary hover:shadow-neo transition-all group">
                   <div className="bg-dark text-white p-2 group-hover:bg-white group-hover:text-dark transition-colors">
                      <span className="font-bold font-mono">EN</span>
                   </div>
                   <div className="flex-1 text-dark">
                      <span className="block font-bold text-lg leading-none mb-1">English Resume</span>
                      <span className="text-xs text-gray-500 font-mono">International Version</span>
                   </div>
                   <Download size={20} className="text-dark" />
                </a>

                <a href={RESUME_URL_FR} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border-2 border-dark hover:bg-secondary hover:text-white hover:shadow-neo transition-all group">
                   <div className="bg-dark text-white p-2 group-hover:bg-white group-hover:text-dark transition-colors">
                      <span className="font-bold font-mono">FR</span>
                   </div>
                   <div className="flex-1 text-dark group-hover:text-white">
                      <span className="block font-bold text-lg leading-none mb-1">CV Français</span>
                      <span className="text-xs text-gray-500 group-hover:text-white/80 font-mono">Version Algérie/France</span>
                   </div>
                   <Download size={20} className="text-dark group-hover:text-white" />
                </a>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
