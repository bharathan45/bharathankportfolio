import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Check,
  Copy,
  Code2,
  Server,
  Database,
  BarChart2,
  GraduationCap,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { RoleCategory } from '../types/portfolio';

interface HeroProps {
  onOpenResume: () => void;
  activeRole: RoleCategory;
  onSelectRole: (role: RoleCategory) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, activeRole, onSelectRole }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="about" className="py-12 md:py-16 border-b border-slate-800/80 bg-[#0B0F17]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Status Indicator */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">Available for Freelance & Roles</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Fast Delivery & Affordable</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Remote / Sivakasi / Bangalore</span>
          </div>

          {/* Name & Roles */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-400">
              Frontend · Backend · Database · Data Analyst
            </p>
          </div>

          {/* College & Education Tagline */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{personalInfo.degree}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">{personalInfo.college}</span>
            </div>
          </div>

          {/* Career Objective Text */}
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {personalInfo.objective}
          </p>

          {/* Quick 4 Disciplines Selector Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <button
              onClick={() => onSelectRole('frontend')}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                activeRole === 'frontend'
                  ? 'bg-cyan-950/40 border-cyan-400'
                  : 'bg-[#101726] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Code2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Frontend
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                HTML5, CSS3, JS & Vercel
              </p>
            </button>

            <button
              onClick={() => onSelectRole('backend')}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                activeRole === 'backend'
                  ? 'bg-cyan-950/40 border-cyan-400'
                  : 'bg-[#101726] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Server className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Backend
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Java, Spring Boot & REST APIs
              </p>
            </button>

            <button
              onClick={() => onSelectRole('database')}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                activeRole === 'database'
                  ? 'bg-cyan-950/40 border-cyan-400'
                  : 'bg-[#101726] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Database className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Database
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                MySQL, Schema & SQL Joins
              </p>
            </button>

            <button
              onClick={() => onSelectRole('analytics')}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                activeRole === 'analytics'
                  ? 'bg-cyan-950/40 border-cyan-400'
                  : 'bg-[#101726] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <BarChart2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Data Analyst
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Power BI, Pandas, Excel & EDA
              </p>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>View Resume (PDF / Print)</span>
            </button>

            <a
              href="#projects"
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <span>Contact Details</span>
            </a>
          </div>

          {/* Contact and Links */}
          <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
              </button>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Click to copy phone"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.phoneDisplay}</span>
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`https://wa.me/91${personalInfo.phone}`}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 hover:bg-emerald-900 border border-emerald-800/80 text-xs font-medium"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
