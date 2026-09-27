import React from 'react';
import { skillGroups } from '../data/portfolioData';
import { RoleCategory } from '../types/portfolio';
import { Code2, Server, BarChart, Database, Terminal } from 'lucide-react';

interface SkillsSectionProps {
  activeRole: RoleCategory;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ activeRole }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return Code2;
      case 'Backend & Web Architecture':
        return Server;
      case 'Data Analytics & Business Intelligence':
        return BarChart;
      case 'Databases & Data Management':
        return Database;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="py-14 md:py-18 border-b border-slate-800/80 bg-[#0B0F17]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Technologies practiced through academic coursework, projects, and internships.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            const isHighlighted =
              activeRole === 'all' || group.roleAssociation === activeRole || group.roleAssociation === 'core';

            return (
              <div
                key={idx}
                className={`bg-[#0F1624] border rounded-xl p-5 transition-colors flex flex-col justify-between ${
                  isHighlighted ? 'border-slate-800 hover:border-slate-700' : 'border-slate-850 opacity-60'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#090E17] p-2 rounded-lg border border-slate-800/60"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200">{skill.name}</span>
                          <span className="text-cyan-400 font-mono text-[10px]">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
