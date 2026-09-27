import React, { useState } from 'react';
import { RoleCategory } from './types/portfolio';
import { projectsData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoleFilter } from './components/RoleFilter';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { HospitalQueueSimulator } from './components/HospitalQueueSimulator';
import { AnalyticsDashboardWidget } from './components/AnalyticsDashboardWidget';
import { QrFoodOrderingSimulator } from './components/QrFoodOrderingSimulator';
import { Play, Building2, BarChart3, Utensils } from 'lucide-react';

export default function App() {
  const [activeRole, setActiveRole] = useState<RoleCategory>('all');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeDemoTab, setActiveDemoTab] = useState<'hospital' | 'analytics' | 'qr_food'>('hospital');

  const counts = {
    all: projectsData.length,
    frontend: projectsData.filter((p) => p.roleTags.includes('frontend')).length,
    webdev: projectsData.filter((p) => p.roleTags.includes('webdev')).length,
    analytics: projectsData.filter((p) => p.roleTags.includes('analytics')).length,
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Simple Clean Hero without Photo */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          activeRole={activeRole}
          onSelectRole={(role) => setActiveRole(role)}
        />

        {/* Role Filter Section */}
        <section id="roles" className="py-5 border-b border-slate-800/80 bg-[#0E1422]/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RoleFilter
              activeRole={activeRole}
              onSelectRole={(role) => setActiveRole(role)}
              counts={counts}
            />
          </div>
        </section>

        {/* All Projects Section */}
        <ProjectsSection
          activeRole={activeRole}
          onSelectRole={(role) => setActiveRole(role)}
        />

        {/* Interactive Live Demonstrations Spotlight Showcase */}
        <section className="py-14 md:py-18 border-b border-slate-800/80 bg-[#0A0E17]/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                  <Play className="w-3 h-3 fill-current" />
                  <span>INTERACTIVE PROTOTYPES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Live Project Demos
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Test functional prototypes of hospital queue system, analytics dashboard, and cafe ordering.
                </p>
              </div>

              {/* Demo Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#131B2B] rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveDemoTab('hospital')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                    activeDemoTab === 'hospital'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Hospital Queue</span>
                </button>

                <button
                  onClick={() => setActiveDemoTab('analytics')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                    activeDemoTab === 'analytics'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Vexa E-Commerce</span>
                </button>

                <button
                  onClick={() => setActiveDemoTab('qr_food')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                    activeDemoTab === 'qr_food'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>QR Food Order</span>
                </button>
              </div>
            </div>

            {/* Active Demo Container */}
            <div className="transition-all duration-300">
              {activeDemoTab === 'hospital' && <HospitalQueueSimulator />}
              {activeDemoTab === 'analytics' && <AnalyticsDashboardWidget />}
              {activeDemoTab === 'qr_food' && <QrFoodOrderingSimulator />}
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <SkillsSection activeRole={activeRole} />

        {/* Experience & Education Timeline */}
        <ExperienceSection activeRole={activeRole} />

        {/* Certifications & Additional Info */}
        <CertificationsSection />

        {/* Contact & Hire Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable 2-Page Official Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
