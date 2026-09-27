import React from 'react';
import { RoleCategory } from '../types/portfolio';
import { Layout, Globe, BarChart3, Layers } from 'lucide-react';

interface RoleFilterProps {
  activeRole: RoleCategory;
  onSelectRole: (role: RoleCategory) => void;
  counts: {
    all: number;
    frontend: number;
    webdev: number;
    analytics: number;
  };
}

export const RoleFilter: React.FC<RoleFilterProps> = ({ activeRole, onSelectRole, counts }) => {
  const roles: { id: RoleCategory; label: string; icon: React.ComponentType<{ className?: string }>; count: number; desc: string }[] = [
    {
      id: 'all',
      label: 'All Disciplines',
      icon: Layers,
      count: counts.all,
      desc: 'Complete overview of web, frontend, and analytics engineering',
    },
    {
      id: 'frontend',
      label: 'Frontend Developer',
      icon: Layout,
      count: counts.frontend,
      desc: 'UI/UX interfaces, responsive layouts, HTML5/CSS3/JavaScript & Vercel',
    },
    {
      id: 'webdev',
      label: 'Website Developer',
      icon: Globe,
      count: counts.webdev,
      desc: 'Java, Spring Boot, REST APIs, MVC architecture & MySQL databases',
    },
    {
      id: 'analytics',
      label: 'Data Analyst',
      icon: BarChart3,
      count: counts.analytics,
      desc: 'Power BI dashboards, Python/Pandas, SQL queries & business insights',
    },
  ];

  return (
    <div className="w-full">
      {/* Segmented Control Bar */}
      <div className="bg-[#131B2B] p-1.5 rounded-xl border border-slate-800/90 flex flex-wrap md:flex-nowrap gap-1.5 shadow-inner">
        {roles.map((role) => {
          const Icon = role.icon;
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-lg text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span className="text-xs sm:text-sm truncate whitespace-nowrap">{role.label}</span>
              </div>
              <span
                className={`text-xs tabular-nums px-1.5 py-0.5 rounded font-mono shrink-0 ${
                  isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {role.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Role Explainer Banner */}
      <div className="mt-3 px-4 py-2.5 bg-[#0F1726]/60 rounded-lg border border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="text-slate-300 font-medium">Viewing role focus:</span>
          <span className="text-cyan-300 font-semibold">
            {roles.find((r) => r.id === activeRole)?.label}
          </span>
        </div>
        <p className="text-slate-400 sm:text-right">
          {roles.find((r) => r.id === activeRole)?.desc}
        </p>
      </div>
    </div>
  );
};
