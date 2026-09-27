import React, { useState } from 'react';
import { Project, RoleCategory } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowRight, Play, Code2, Globe, BarChart3 } from 'lucide-react';

interface ProjectsSectionProps {
  activeRole: RoleCategory;
  onSelectRole: (role: RoleCategory) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ activeRole }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects according to activeRole
  const filteredProjects =
    activeRole === 'all'
      ? projectsData
      : projectsData.filter((p) => p.roleTags.includes(activeRole));

  const getRoleIcon = (tags: string[]) => {
    if (tags.includes('analytics')) return BarChart3;
    if (tags.includes('webdev')) return Globe;
    return Code2;
  };

  return (
    <section id="projects" className="py-14 md:py-18 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Projects & Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Web applications, hospital queue systems, and analytics dashboards built from resume.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Showing <span className="text-cyan-400 font-bold">{filteredProjects.length}</span> projects
          </div>
        </div>

        {/* Clean Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => {
            const Icon = getRoleIcon(project.roleTags);

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-[#0F1624] border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 transition-colors flex flex-col justify-between cursor-pointer space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="font-mono text-slate-400">{project.timeframe}</span>
                    </div>

                    {project.interactiveType && (
                      <span className="flex items-center gap-1 text-[11px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded font-medium">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Try Demo</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-800/70">
                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400 font-mono">
                    {project.techStack.map((tech, i) => (
                      <React.Fragment key={i}>
                        <span className="text-slate-300">{tech}</span>
                        {i < project.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View Details {project.interactiveType ? '& Simulator' : ''}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 hover:text-cyan-200 border border-cyan-700/60 text-[11px] font-medium"
                          title="Open Live Website"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      )}

                      {project.githubUrl && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                          className="p-1 text-slate-400 hover:text-white"
                          title="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
