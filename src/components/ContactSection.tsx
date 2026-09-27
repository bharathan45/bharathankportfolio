import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleType, setRoleType] = useState('Frontend Developer');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const subject = encodeURIComponent(`Inquiry for ${roleType} — ${name}`);
    const body = encodeURIComponent(
      `Hello Bharathan,\n\nName: ${name}\nEmail: ${email}\nRole: ${roleType}\n\nMessage:\n${message}\n\nSent from Portfolio.`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 md:py-18 bg-[#0B0F17]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Contact</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Open for Frontend Developer, Website Developer, and Data Analyst opportunities.
              </p>
            </div>

            <div className="space-y-2.5">
              {/* Email */}
              <div className="bg-[#0F1624] border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 font-mono"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-cyan-400"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & WhatsApp */}
              <div className="bg-[#0F1624] border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 font-mono"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/91${personalInfo.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-0.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-md hover:bg-emerald-900/60"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-400 hover:text-cyan-400"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Profiles */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 bg-[#0F1624] border border-slate-800 rounded-lg hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 bg-[#0F1624] border border-slate-800 rounded-lg hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-[#0F1624] border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-3">Send a Message</h3>

            {submitted ? (
              <div className="bg-[#121A2B] border border-emerald-500/40 rounded-lg p-5 text-center space-y-2">
                <Check className="w-6 h-6 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Message Formulated</h4>
                <p className="text-xs text-slate-300">
                  Your message was prepared. You can also chat directly on WhatsApp at +91 86681 30425.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-3 py-1 text-xs text-slate-300 bg-slate-800 rounded mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#090E17] border border-slate-700 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#090E17] border border-slate-700 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Role Interest</label>
                  <select
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full bg-[#090E17] border border-slate-700 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Freelance Web Project">Freelance Web / Dashboard Project</option>
                    <option value="Frontend Developer">Frontend Developer Role</option>
                    <option value="Website Developer">Website Developer Role</option>
                    <option value="Data Analyst">Data Analyst Role</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#090E17] border border-slate-700 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
