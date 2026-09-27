import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activePage, setActivePage] = useState<'both' | 'page1' | 'page2'>('both');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
BHARATHAN K
Frontend Developer · Backend & Database · Data Analyst
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
GitHub: ${personalInfo.githubHandle} | LinkedIn: ${personalInfo.linkedinHandle}

CAREER OBJECTIVE
${personalInfo.objective}

EDUCATION
• B.Tech – Information Technology | P. S. R Engineering College, Sivakasi | 2024 – Present
• HSC | SRMS Matriculation Higher Secondary School, Sinthalakarai | 2024
• SSLC | SRMS Matriculation Higher Secondary School, Sinthalakarai | 2022

TECHNICAL SKILLS
• Frontend: HTML5, CSS3, JavaScript
• Programming: Java, Python, C/C++ (basic)
• Backend / Frameworks: Spring Boot, REST API, MVC, Microservices
• Database: MySQL, MySQL Workbench
• Analytics: Excel, SQL, Power BI, Tableau, Pandas, Matplotlib
• Tools: GitHub, Eclipse, VS Code, Android Studio, AI coding tools

INTERNSHIP EXPERIENCE
• Data Analytics Intern — InternCourse (17 May 2026 – 17 Aug 2026)
  Worked on data cleaning, visualization, dashboarding and business insights using Excel, SQL, Python/Pandas and Power BI. Completed a structured Data Analytics Training Program and received internship documentation.
• Web Development Intern — Blue Ball Technologies / BBT (Dec 2025)
  Hands-on work in frontend/web development with HTML, CSS and JavaScript, along with exposure to Java, MySQL and web application development.
• Web Development Internship (Feb 2026 – Apr 2026 | Bangalore)
  Gained practical exposure to web development workflows, frontend implementation and application development.

PROJECTS
• Siva Hospital – Hospital Appointment & Token Queue System (Live: https://siva-hospital.vercel.app/)
  Web application for visitor registration, appointment/token queue management and role-based workflows for nurse, doctor and admin. Includes token display, doctor actions, emergency/second-round handling, admin statistics and online registration rules. Deployed on Vercel; source maintained on GitHub.
• DreamSport – Sports & Fantasy Web Application (Live: https://dreamsport-eight.vercel.app/)
  Interactive sports and fantasy gaming web application delivering real-time team selection, match fixtures, player statistics, and leaderboard tracking. Deployed on Vercel; source maintained on GitHub.
• QR Smart Food / Cafe / Bakery Ordering System
  Web-based ordering system concept with QR access, product/menu display, order flow and planned payment integration using Spring Boot, REST API, MVC and MySQL.
• Airline Management System
  Java desktop application concept using Java Swing/JDBC and MySQL for airline management workflows.
• Social Media Engagement Analysis
  Data analytics project using Python, Pandas and Matplotlib to clean engagement data, calculate key metrics and visualize social media performance.
• Pharmacy Sales Analysis
  Sales analytics project focused on transaction analysis, product performance, trends and business reporting using analytics tools.
• Vexa E-Commerce & Customer Analytics Platform (Live: https://vexa-e-commerce.vercel.app/auth)
  End-to-end e-commerce platform and analytics system with secure authentication, modern catalog browsing, cart operations, and transactional retail reporting. Deployed on Vercel.

CERTIFICATIONS / TRAINING
• Python certification
• CCNA and Cyber Security training completed
• Data Analytics Internship / Training Program – InternCourse

ADDITIONAL INFORMATION
• Interested roles: Frontend Developer, Web Developer, Java Developer / Software Developer Intern.
• Available for project-based development, internship and entry-level opportunities.
• Portfolio emphasis: practical projects, responsive UI development, database-connected applications and deployment.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0D131F] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#121A2B] px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold text-white">Bharathan K — Official Resume</span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[#090D15] p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActivePage('both')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePage === 'both' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Continuous (Pages 1 & 2)
              </button>
              <button
                onClick={() => setActivePage('page1')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePage === 'page1' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setActivePage('page2')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePage === 'page2' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Page 2
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Copy Text Button */}
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Sheet Container */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-900/60 flex justify-center">
          <div className="w-full max-w-[850px] space-y-6">
            {/* PAGE 1 CONTAINER */}
            {(activePage === 'both' || activePage === 'page1') && (
              <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl border border-slate-300 text-[13px] leading-relaxed font-sans print:shadow-none print:border-none print:p-0">
                {/* Header */}
                <div className="text-center pb-5 border-b border-slate-300 space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    BHARATHAN K
                  </h2>
                  <div className="text-sm font-semibold text-slate-700">
                    Frontend Developer · Backend & Database · Data Analyst
                  </div>
                  <div className="text-xs text-slate-600 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1 font-mono">
                    <span>Phone: {personalInfo.phone}</span>
                    <span>|</span>
                    <span>Email: {personalInfo.email}</span>
                    <span>|</span>
                    <span>GitHub: {personalInfo.githubHandle}</span>
                    <span>|</span>
                    <span>LinkedIn: {personalInfo.linkedinHandle}</span>
                  </div>
                </div>

                {/* Section: Career Objective */}
                <div className="pt-4 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Career Objective
                  </h4>
                  <p className="text-slate-700 leading-normal pt-1">
                    B.Tech Information Technology student seeking a Frontend/Web Development
                    opportunity to build responsive, user-friendly web applications. Hands-on
                    exposure to HTML, CSS, JavaScript, Java, Spring Boot, MySQL and real-world web
                    development projects, with additional experience in data analytics and dashboard
                    development.
                  </p>
                </div>

                {/* Section: Education */}
                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Education
                  </h4>
                  <div className="space-y-1.5 text-slate-800">
                    <div className="flex justify-between font-semibold">
                      <span>B.Tech – Information Technology</span>
                      <span className="text-slate-600 font-normal">
                        P. S. R Engineering College, Sivakasi · 2024 – Present
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">HSC</span>
                      <span className="text-slate-600">
                        SRMS Matriculation Higher Secondary School, Sinthalakarai · 2024
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">SSLC</span>
                      <span className="text-slate-600">
                        SRMS Matriculation Higher Secondary School, Sinthalakarai · 2022
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section: Technical Skills */}
                <div className="pt-4 space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Technical Skills
                  </h4>
                  <div className="space-y-1 text-slate-800 text-xs">
                    <p>
                      <strong className="font-semibold text-slate-900">• Frontend:</strong> HTML5,
                      CSS3, JavaScript
                    </p>
                    <p>
                      <strong className="font-semibold text-slate-900">• Programming:</strong> Java,
                      Python, C/C++ (basic)
                    </p>
                    <p>
                      <strong className="font-semibold text-slate-900">• Backend / Frameworks:</strong>{' '}
                      Spring Boot, REST API, MVC, Microservices
                    </p>
                    <p>
                      <strong className="font-semibold text-slate-900">• Database:</strong> MySQL,
                      MySQL Workbench
                    </p>
                    <p>
                      <strong className="font-semibold text-slate-900">• Analytics:</strong> Excel,
                      SQL, Power BI, Tableau, Pandas, Matplotlib
                    </p>
                    <p>
                      <strong className="font-semibold text-slate-900">• Tools:</strong> GitHub,
                      Eclipse, VS Code, Android Studio, AI coding tools
                    </p>
                  </div>
                </div>

                {/* Section: Internship Experience */}
                <div className="pt-4 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Internship Experience
                  </h4>

                  <div className="space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Data Analytics Intern — InternCourse</span>
                      <span className="font-mono text-slate-600 text-xs font-normal">
                        17 May 2026 – 17 Aug 2026
                      </span>
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Worked on data cleaning, visualization, dashboarding and business insights
                      using Excel, SQL, Python/Pandas and Power BI. Completed a structured Data
                      Analytics Training Program and received internship documentation.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Web Development Intern — Blue Ball Technologies / BBT</span>
                      <span className="font-mono text-slate-600 text-xs font-normal">Dec 2025</span>
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Hands-on work in frontend/web development with HTML, CSS and JavaScript, along
                      with exposure to Java, MySQL and web application development.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Web Development Internship</span>
                      <span className="font-mono text-slate-600 text-xs font-normal">
                        Feb 2026 – Apr 2026 | Bangalore
                      </span>
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Gained practical exposure to web development workflows, frontend
                      implementation and application development.
                    </p>
                  </div>
                </div>

                {/* Section: Projects (Page 1 section) */}
                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Projects
                  </h4>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 flex flex-wrap items-center justify-between gap-1">
                      <span>Siva Hospital – Hospital Appointment & Token Queue System</span>
                      <a
                        href="https://siva-hospital.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 hover:underline font-mono text-[11px] font-normal"
                      >
                        siva-hospital.vercel.app [Live]
                      </a>
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Web application for visitor registration, appointment/token queue management
                      and role-based workflows for nurse, doctor and admin. Includes token display,
                      doctor actions, emergency/second-round handling, admin statistics and online
                      registration rules. Deployed on Vercel; source maintained on GitHub.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 flex flex-wrap items-center justify-between gap-1">
                      <span>DreamSport – Sports & Fantasy Web Application</span>
                      <a
                        href="https://dreamsport-eight.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 hover:underline font-mono text-[11px] font-normal"
                      >
                        dreamsport-eight.vercel.app [Live]
                      </a>
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Interactive sports and fantasy gaming web application delivering real-time team selection, match fixtures, player statistics, and leaderboard tracking. Deployed on Vercel; source maintained on GitHub.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">
                      QR Smart Food / Cafe / Bakery Ordering System
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Web-based ordering system concept with QR access, product/menu display, order
                      flow and planned payment integration using Spring Boot, REST API, MVC and MySQL.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">Airline Management System</div>
                    <p className="text-slate-700 text-xs">
                      • Java desktop application concept using Java Swing/JDBC and MySQL for airline
                      management workflows.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">
                      Social Media Engagement Analysis
                    </div>
                    <p className="text-slate-700 text-xs">
                      • Data analytics project using Python, Pandas and Matplotlib to clean engagement
                      data, calculate key metrics and visualize social media performance.
                    </p>
                  </div>

                  <div className="text-right text-[11px] text-slate-400 pt-2 border-t border-slate-200 font-mono">
                    Bharathan K | Frontend Developer Resume | Page 1
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2 CONTAINER */}
            {(activePage === 'both' || activePage === 'page2') && (
              <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl border border-slate-300 text-[13px] leading-relaxed font-sans print:shadow-none print:border-none print:p-0">
                {/* Continued Projects from Page 1 */}
                <div className="space-y-3 pb-4">
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">Pharmacy Sales Analysis</div>
                    <p className="text-slate-700 text-xs">
                      • Sales analytics project focused on transaction analysis, product performance,
                      trends and business reporting using analytics tools.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 flex flex-wrap items-center justify-between gap-1">
                      <span>Vexa E-Commerce & Customer Analytics Platform</span>
                      <a
                        href="https://vexa-e-commerce.vercel.app/auth"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 hover:underline font-mono text-[11px] font-normal"
                      >
                        vexa-e-commerce.vercel.app [Live]
                      </a>
                    </div>
                    <p className="text-slate-700 text-xs">
                      • End-to-end e-commerce platform and analytics system with secure authentication, modern catalog browsing, cart operations, and transactional retail reporting. Deployed on Vercel.
                    </p>
                  </div>
                </div>

                {/* Section: Certifications / Training */}
                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Certifications / Training
                  </h4>
                  <ul className="space-y-1 text-slate-800 text-xs">
                    <li>• Python certification</li>
                    <li>• CCNA and Cyber Security training completed</li>
                    <li>• Data Analytics Internship / Training Program – InternCourse</li>
                  </ul>
                </div>

                {/* Section: Additional Information */}
                <div className="pt-5 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-200">
                    Additional Information
                  </h4>
                  <ul className="space-y-1.5 text-slate-800 text-xs leading-normal">
                    <li>
                      • <strong className="font-semibold">Interested roles:</strong> Frontend
                      Developer, Web Developer, Java Developer / Software Developer Intern.
                    </li>
                    <li>
                      • <strong className="font-semibold">Availability:</strong> Available for
                      project-based development, internship and entry-level opportunities.
                    </li>
                    <li>
                      • <strong className="font-semibold">Portfolio emphasis:</strong> Practical
                      projects, responsive UI development, database-connected applications and
                      deployment.
                    </li>
                  </ul>
                </div>

                <div className="text-right text-[11px] text-slate-400 pt-8 mt-12 border-t border-slate-200 font-mono">
                  Bharathan K | Frontend Developer Resume | Page 2
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
