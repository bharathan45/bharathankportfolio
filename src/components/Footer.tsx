import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080C14] border-t border-slate-800 text-slate-400 py-8 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Frontend Developer · Website Developer · Data Analyst
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="text-cyan-400 hover:underline cursor-pointer text-xs"
            >
              Resume PDF
            </button>
            <span className="text-slate-600">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <span className="text-slate-600">·</span>
            <button
              onClick={scrollToTop}
              className="p-1 text-slate-400 hover:text-cyan-400 cursor-pointer"
              title="Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span>{personalInfo.college}</span>
        </div>
      </div>
    </footer>
  );
};
