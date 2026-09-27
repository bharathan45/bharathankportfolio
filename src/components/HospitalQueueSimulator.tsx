import React, { useState } from 'react';
import {
  Users,
  Stethoscope,
  Tv,
  Plus,
  Play,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Volume2,
  Clock,
  Building2,
  Activity,
  ExternalLink,
} from 'lucide-react';

interface PatientToken {
  id: string;
  tokenNumber: string;
  name: string;
  department: string;
  priority: 'normal' | 'emergency' | 'senior';
  status: 'waiting' | 'in_consultation' | 'completed';
  roomNumber?: string;
  registeredAt: string;
}

export const HospitalQueueSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kiosk' | 'doctor' | 'tv' | 'admin'>('tv');
  const [tokenCounter, setTokenCounter] = useState(105);
  const [patientName, setPatientName] = useState('');
  const [department, setDepartment] = useState('General Medicine');
  const [priority, setPriority] = useState<'normal' | 'emergency' | 'senior'>('normal');
  const [doctorRoom, setDoctorRoom] = useState('Room 03');
  const [announcementFlash, setAnnouncementFlash] = useState(false);

  const [queue, setQueue] = useState<PatientToken[]>([
    {
      id: 'p-1',
      tokenNumber: 'T-101',
      name: 'Murugan R',
      department: 'General Medicine',
      priority: 'normal',
      status: 'completed',
      roomNumber: 'Room 03',
      registeredAt: '09:15 AM',
    },
    {
      id: 'p-2',
      tokenNumber: 'T-102',
      name: 'Anitha S',
      department: 'General Medicine',
      priority: 'normal',
      status: 'in_consultation',
      roomNumber: 'Room 03',
      registeredAt: '09:28 AM',
    },
    {
      id: 'p-3',
      tokenNumber: 'T-103',
      name: 'Karthik V',
      department: 'Cardiology',
      priority: 'emergency',
      status: 'waiting',
      registeredAt: '09:40 AM',
    },
    {
      id: 'p-4',
      tokenNumber: 'T-104',
      name: 'Lakshmi Ammal',
      department: 'General Medicine',
      priority: 'senior',
      status: 'waiting',
      registeredAt: '09:45 AM',
    },
  ]);

  const activeConsultation = queue.find((p) => p.status === 'in_consultation');
  const waitingPatients = queue.filter((p) => p.status === 'waiting');
  const completedPatients = queue.filter((p) => p.status === 'completed');

  const handleIssueToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) return;

    const newToken: PatientToken = {
      id: `p-${Date.now()}`,
      tokenNumber: `T-${tokenCounter}`,
      name: patientName.trim(),
      department,
      priority,
      status: 'waiting',
      registeredAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Emergency prioritizes to front of waiting
    if (priority === 'emergency') {
      setQueue((prev) => [
        ...prev.filter((p) => p.status !== 'waiting'),
        newToken,
        ...prev.filter((p) => p.status === 'waiting'),
      ]);
    } else {
      setQueue((prev) => [...prev, newToken]);
    }

    setTokenCounter((c) => c + 1);
    setPatientName('');
    setActiveTab('tv');
  };

  const handleCallNext = () => {
    // Complete current consultation if any
    const updated = queue.map((p) => {
      if (p.status === 'in_consultation') {
        return { ...p, status: 'completed' as const };
      }
      return p;
    });

    // Find next waiting (emergencies first, then seniors, then normal)
    const nextWaiting = updated
      .filter((p) => p.status === 'waiting')
      .sort((a, b) => {
        const order = { emergency: 0, senior: 1, normal: 2 };
        return order[a.priority] - order[b.priority];
      })[0];

    if (nextWaiting) {
      setQueue(
        updated.map((p) =>
          p.id === nextWaiting.id
            ? { ...p, status: 'in_consultation' as const, roomNumber: doctorRoom }
            : p
        )
      );

      // Flash announcement on TV
      setAnnouncementFlash(true);
      setTimeout(() => setAnnouncementFlash(false), 2500);
    } else {
      setQueue(updated);
    }
  };

  const handleResetQueue = () => {
    setTokenCounter(105);
    setQueue([
      {
        id: 'p-1',
        tokenNumber: 'T-101',
        name: 'Murugan R',
        department: 'General Medicine',
        priority: 'normal',
        status: 'completed',
        roomNumber: 'Room 03',
        registeredAt: '09:15 AM',
      },
      {
        id: 'p-2',
        tokenNumber: 'T-102',
        name: 'Anitha S',
        department: 'General Medicine',
        priority: 'normal',
        status: 'in_consultation',
        roomNumber: 'Room 03',
        registeredAt: '09:28 AM',
      },
      {
        id: 'p-3',
        tokenNumber: 'T-103',
        name: 'Karthik V',
        department: 'Cardiology',
        priority: 'emergency',
        status: 'waiting',
        registeredAt: '09:40 AM',
      },
      {
        id: 'p-4',
        tokenNumber: 'T-104',
        name: 'Lakshmi Ammal',
        department: 'General Medicine',
        priority: 'senior',
        status: 'waiting',
        registeredAt: '09:45 AM',
      },
    ]);
  };

  return (
    <div className="bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Bar for Simulator */}
      <div className="bg-[#121A2B] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-bold text-white">Siva Hospital Live Token System</span>
          <a
            href="https://siva-hospital.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors"
          >
            <span>Open Live App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#090D15] rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('tv')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'tv'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>TV Display</span>
          </button>
          <button
            onClick={() => setActiveTab('doctor')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'doctor'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Doctor Desk</span>
          </button>
          <button
            onClick={() => setActiveTab('kiosk')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'kiosk'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Nurse / Kiosk</span>
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'admin'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Admin Stats</span>
          </button>
        </div>
      </div>

      {/* Main Simulator Content Area */}
      <div className="p-4 sm:p-6 min-h-[380px]">
        {/* Tab 1: TV Display View */}
        {activeTab === 'tv' && (
          <div className="space-y-6">
            {/* Announcement Banner */}
            {announcementFlash && (
              <div className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-lg flex items-center justify-between animate-pulse">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span>Token Alert Chime: Now Calling {activeConsultation?.tokenNumber}!</span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider">
                  Proceed to {activeConsultation?.roomNumber || 'Room 03'}
                </span>
              </div>
            )}

            {/* Split TV Board */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Left: Big Now Serving Box */}
              <div className="md:col-span-7 bg-[#090E17] border border-cyan-500/40 rounded-xl p-6 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="absolute top-2 right-3 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE SCREEN</span>
                </div>

                <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                  Currently In Consultation
                </div>

                {activeConsultation ? (
                  <div className="space-y-3 py-4">
                    <div className="text-6xl sm:text-7xl font-extrabold font-mono text-cyan-400 tracking-tight tabular-nums">
                      {activeConsultation.tokenNumber}
                    </div>
                    <div className="text-lg font-bold text-white">{activeConsultation.name}</div>
                    <div className="text-sm text-slate-300 font-medium">
                      {activeConsultation.department} ·{' '}
                      <span className="text-cyan-300 font-semibold">
                        {activeConsultation.roomNumber || 'Room 03'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="py-10 text-slate-500">
                    <p className="text-lg">No active consultation</p>
                    <p className="text-xs mt-1">Doctor is preparing for next patient</p>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Siva Hospital Outpatient OPD</span>
                  <span>Audio & Token Sync Active</span>
                </div>
              </div>

              {/* Right: Upcoming Queue List */}
              <div className="md:col-span-5 bg-[#090E17] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Next in Queue ({waitingPatients.length})
                    </span>
                    <span className="text-xs text-cyan-400 font-mono">Real-time sync</span>
                  </div>

                  {waitingPatients.length === 0 ? (
                    <div className="text-center py-8 text-xs text-slate-500">
                      Waiting lounge empty. New tokens will appear here.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {waitingPatients.map((patient, index) => (
                        <div
                          key={patient.id}
                          className="bg-[#121A2B] p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-mono text-[10px]">
                              {index + 1}
                            </span>
                            <span className="font-mono font-bold text-cyan-300">
                              {patient.tokenNumber}
                            </span>
                            <span className="text-slate-200 truncate max-w-[100px]">
                              {patient.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {patient.priority === 'emergency' && (
                              <span className="text-[10px] text-rose-400 font-semibold flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" />
                                Emergency
                              </span>
                            )}
                            {patient.priority === 'senior' && (
                              <span className="text-[10px] text-amber-300 font-semibold">
                                Senior Citizen
                              </span>
                            )}
                            <span className="text-slate-400 font-mono">{patient.registeredAt}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Completed Today: {completedPatients.length}</span>
                  <button
                    onClick={() => setActiveTab('doctor')}
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Doctor Actions &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Doctor Desk View */}
        {activeTab === 'doctor' && (
          <div className="space-y-6">
            <div className="bg-[#090E17] border border-slate-800 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <h4 className="text-base font-bold text-white">Doctor Consultation Console</h4>
                  <p className="text-xs text-slate-400">
                    Dr. S. Sundaram, MD · Department of General Medicine · {doctorRoom}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={doctorRoom}
                    onChange={(e) => setDoctorRoom(e.target.value)}
                    className="bg-[#121A2B] border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Room 01">Room 01 (OPD)</option>
                    <option value="Room 02">Room 02 (Pediatrics)</option>
                    <option value="Room 03">Room 03 (Medicine)</option>
                    <option value="Room 04">Room 04 (Cardiology)</option>
                  </select>
                  <button
                    onClick={handleCallNext}
                    className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Call Next Patient</span>
                  </button>
                </div>
              </div>

              {/* Active Patient Details */}
              <div className="py-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Current Patient in Consultation
                </div>
                {activeConsultation ? (
                  <div className="bg-[#121A2B] border border-slate-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold font-mono text-cyan-400">
                          {activeConsultation.tokenNumber}
                        </span>
                        <span className="text-lg font-bold text-white">
                          {activeConsultation.name}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-3">
                        <span>Department: {activeConsultation.department}</span>
                        <span>·</span>
                        <span>Token Time: {activeConsultation.registeredAt}</span>
                        <span>·</span>
                        <span className="capitalize text-cyan-300">
                          Priority: {activeConsultation.priority}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCallNext}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 rounded-lg hover:bg-emerald-900/60 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Finish & Call Next</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#121A2B]/40 border border-dashed border-slate-800 rounded-lg p-6 text-center text-slate-400 text-xs">
                    No active consultation right now. Click "Call Next Patient" to admit the next
                    waiting person.
                  </div>
                )}
              </div>

              {/* Pending Queue in Room */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-300 mb-2">
                  Waiting Queue ({waitingPatients.length} remaining)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {waitingPatients.slice(0, 6).map((patient) => (
                    <div
                      key={patient.id}
                      className="bg-[#121A2B] p-2.5 rounded-lg border border-slate-800 text-xs flex items-center justify-between"
                    >
                      <div>
                        <div className="font-mono font-bold text-cyan-300">
                          {patient.tokenNumber}
                        </div>
                        <div className="text-slate-300 truncate max-w-[120px]">{patient.name}</div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {patient.registeredAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Nurse / Kiosk Registration */}
        {activeTab === 'kiosk' && (
          <div className="space-y-6">
            <div className="bg-[#090E17] border border-slate-800 rounded-xl p-5">
              <h4 className="text-base font-bold text-white mb-1">
                Nurse Station & Patient Token Generator
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Register incoming outpatients and immediately dispatch digital queue tokens.
              </p>

              <form onSubmit={handleIssueToken} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Patient Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full bg-[#121A2B] border border-slate-700 text-xs text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-[#121A2B] border border-slate-700 text-xs text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="General Medicine">General Medicine</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="ENT Specialist">ENT Specialist</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Priority Tier</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="w-full bg-[#121A2B] border border-slate-700 text-xs text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="normal">Normal Outpatient</option>
                    <option value="emergency">Emergency / Fast-Track</option>
                    <option value="senior">Senior Citizen / Specially-abled</option>
                  </select>
                </div>

                <div className="sm:col-span-3 flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-400">
                    Next token to be issued:{' '}
                    <span className="font-mono text-cyan-400 font-bold">T-{tokenCounter}</span>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Issue Token & Add to Queue</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tab 4: Admin Stats */}
        {activeTab === 'admin' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#090E17] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Total Tokens Generated</div>
                <div className="text-2xl font-bold font-mono text-white mt-1">
                  {queue.length}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1">100% Digital Flow</div>
              </div>

              <div className="bg-[#090E17] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Currently In Queue</div>
                <div className="text-2xl font-bold font-mono text-cyan-400 mt-1">
                  {waitingPatients.length}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Avg Wait: ~7.2 mins</div>
              </div>

              <div className="bg-[#090E17] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Consultations Completed</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                  {completedPatients.length}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">No missed patients</div>
              </div>
            </div>

            {/* Architecture Highlights Note */}
            <div className="bg-[#090E17] border border-slate-800 p-4 rounded-xl text-xs space-y-2 text-slate-300">
              <div className="font-semibold text-white">
                Technical Highlights of Siva Hospital Token System:
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Deployed live on Vercel with responsive desktop, tablet, and mobile views.</li>
                <li>Role-based access separating Nurse check-in, Doctor actions, and Admin KPIs.</li>
                <li>Real-time state synchronization matching TV token board with doctor desks.</li>
                <li>Clean GitHub repository with modular component structure.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Simulator Footer / Controls */}
      <div className="bg-[#090E17] px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>Real-time OPD Token Queue Engine</span>
        </div>
        <button
          onClick={handleResetQueue}
          className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Demo State</span>
        </button>
      </div>
    </div>
  );
};
