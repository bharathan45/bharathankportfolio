import React from 'react';
import { X, Github, ExternalLink, Play, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { HospitalQueueSimulator } from './HospitalQueueSimulator';
import { AnalyticsDashboardWidget } from './AnalyticsDashboardWidget';
import { QrFoodOrderingSimulator } from './QrFoodOrderingSimulator';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0D131F] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-[#121A2B] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.timeframe}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Header Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-300 font-medium mt-1">{project.subtitle}</p>
          </div>

          {/* Interactive Simulation Container if applicable */}
          {project.interactiveType === 'hospital' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Interactive Live Demo</span>
              </div>
              <HospitalQueueSimulator />
            </div>
          )}

          {project.interactiveType === 'analytics' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Interactive Dashboard Simulation</span>
              </div>
              <AnalyticsDashboardWidget />
            </div>
          )}

          {project.interactiveType === 'qr_food' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Interactive Order Flow Simulator</span>
              </div>
              <QrFoodOrderingSimulator />
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Project Architecture & Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Verified Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#090E17] border border-slate-800 p-3 rounded-xl">
                  <div className="text-xs text-slate-400">{metric.label}</div>
                  <div className="text-base font-bold font-mono text-cyan-300 mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key Feature Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Engineered Capabilities & Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#090E17] border border-slate-800/80 p-3 rounded-lg flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List - Clean unboxed styling */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-mono text-cyan-300">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* External Action Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0F17] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Launch Live Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
