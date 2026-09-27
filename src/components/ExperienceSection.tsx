import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { RoleCategory } from '../types/portfolio';

interface ExperienceSectionProps {
  activeRole: RoleCategory;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ activeRole }) => {
  return (
    <section id="experience" className="py-14 md:py-18 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Internship Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Internship Experience
              </h2>
            </div>

            <div className="space-y-3">
              {experienceData.map((exp) => {
                const isRoleMatch =
                  activeRole === 'all' || exp.roleType === activeRole;

                return (
                  <div
                    key={exp.id}
                    className={`bg-[#0F1624] border rounded-xl p-4 space-y-2 transition-colors ${
                      isRoleMatch ? 'border-slate-800' : 'border-slate-850 opacity-60'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                        <div className="text-xs text-cyan-400">{exp.company}</div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-1 text-xs text-slate-300">
                      {exp.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-3">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[#0F1624] border border-slate-800 rounded-xl p-4 space-y-1.5"
                >
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <span className="text-[11px] font-mono text-cyan-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300">{edu.institution}</div>
                  {edu.details && (
                    <p className="text-xs text-slate-400 pt-1 leading-snug">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
