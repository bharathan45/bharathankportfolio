import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Target, Briefcase } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-800/80 bg-[#0A0E17]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Award className="w-4 h-4" />
            <span>CREDENTIALS & SPECIALIZED TRAINING</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Formal technical certifications validating core programming syntax, network security
            fundamentals, and data analytics competencies.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#0F1624] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-800/50">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cert.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{cert.title}</h3>
                  <div className="text-xs text-cyan-300 font-medium mt-0.5">{cert.issuer}</div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{cert.highlight}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/70 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Verified Documentation</span>
                <span className="text-slate-300">Ready for Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Career Brief Callout */}
        <div className="bg-[#0F1624] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Target className="w-4 h-4" />
                <span>Interested Roles</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Frontend Developer, Web Developer, Java Developer / Software Developer Intern, and Data
                Analyst.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Briefcase className="w-4 h-4" />
                <span>Engagement Availability</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available for full-time entry-level opportunities, corporate internships, and
                project-based web/analytics contracts.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Award className="w-4 h-4" />
                <span>Portfolio Focus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Practical working projects, responsive human-first UI engineering, robust
                database-connected web architectures, and production deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
