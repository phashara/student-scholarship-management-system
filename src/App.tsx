/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  Award,
  Calendar,
  CheckCircle2,
  Facebook,
  FileText,
  Globe,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { ApplicationSlipModal } from './components/ApplicationSlipModal';
import { Header } from './components/Header';
import { ReviewerDashboard } from './components/ReviewerDashboard';
import { ScholarshipForm } from './components/ScholarshipForm';
import { ScoringCriteriaModal } from './components/ScoringCriteriaModal';
import { StatusTracker } from './components/StatusTracker';
import { TimelineSection } from './components/TimelineSection';
import { loadApplications } from './data/scholarshipData';
import { ScholarshipApplication } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'form' | 'timeline' | 'status' | 'admin'>('form');
  const [applications, setApplications] = useState<ScholarshipApplication[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<ScholarshipApplication | null>(null);
  const [trackingInitialQuery, setTrackingInitialQuery] = useState<string>('');
  const [isScoringModalOpen, setIsScoringModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setApplications(loadApplications());
  }, []);

  const refreshApplications = () => {
    setApplications(loadApplications());
  };

  const handleApplicationSubmitted = (newApp: ScholarshipApplication) => {
    refreshApplications();
    setSelectedApplication(newApp);
  };

  const handleTrackStudent = (studentId?: string) => {
    if (studentId) {
      setTrackingInitialQuery(studentId);
    }
    setActiveTab('status');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F7] text-[#1C1C1E] font-['-apple-system','BlinkMacSystemFont','SF_Pro_Display','SF_Pro_Text','Prompt','Sarabun',sans-serif]">
      {/* iOS Translucent Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        applicationCount={applications.length}
        onOpenScoringModal={() => setIsScoringModalOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 md:pb-8">
        {activeTab === 'form' && (
          <ScholarshipForm
            onSubmitSuccess={handleApplicationSubmitted}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineSection onStartApplication={() => setActiveTab('form')} />
        )}

        {activeTab === 'status' && (
          <StatusTracker
            applications={applications}
            onViewApplication={(app) => setSelectedApplication(app)}
            initialQuery={trackingInitialQuery}
          />
        )}

        {activeTab === 'admin' && (
          <ReviewerDashboard
            applications={applications}
            onRefresh={refreshApplications}
            onViewApplication={(app) => setSelectedApplication(app)}
            onOpenScoringModal={() => setIsScoringModalOpen(true)}
          />
        )}
      </main>

      {/* iOS Mobile Floating Bottom Tab Bar (Dock) */}
      <div className="md:hidden fixed bottom-3 inset-x-4 z-40">
        <div className="bg-white/85 backdrop-blur-2xl border border-black/[0.08] shadow-lg shadow-black/10 rounded-full px-3 py-2 flex items-center justify-around">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              activeTab === 'form' ? 'text-[#007AFF] font-bold' : 'text-[#8E8E93]'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-[10px]">กรอกใบสมัคร</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              activeTab === 'timeline' ? 'text-[#FF9500] font-bold' : 'text-[#8E8E93]'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px]">กำหนดการ</span>
          </button>

          <button
            onClick={() => setActiveTab('status')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              activeTab === 'status' ? 'text-[#34C759] font-bold' : 'text-[#8E8E93]'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-[10px]">เช็กสถานะ</span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all relative ${
              activeTab === 'admin' ? 'text-[#5856D6] font-bold' : 'text-[#8E8E93]'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px]">เจ้าหน้าที่</span>
            {applications.length > 0 && (
              <span className="absolute top-0 right-2 w-2 h-2 rounded-full bg-[#FF3B30]" />
            )}
          </button>
        </div>
      </div>

      {/* Application Slip Modal (iOS Sheet) */}
      {selectedApplication && (
        <ApplicationSlipModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onTrackStatus={() => {
            const sid = selectedApplication.studentId;
            setSelectedApplication(null);
            handleTrackStudent(sid);
          }}
        />
      )}

      {/* Scoring Criteria & Simulator Modal */}
      <ScoringCriteriaModal
        isOpen={isScoringModalOpen}
        onClose={() => setIsScoringModalOpen(false)}
      />

      {/* iOS Styled Footer */}
      <footer className="mt-auto bg-white border-t border-black/[0.05] text-[#8E8E93] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1C1C1E] font-bold text-sm font-['Prompt',sans-serif]">
                <div className="w-7 h-7 rounded-[10px] bg-[#007AFF] text-white flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <span>คณะสังคมศาสตร์ มหาวิทยาลัยนเรศวร</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#636366]">
                Faculty of Social Sciences, Naresuan University
                <br />
                99 หมู่ 9 ถนนพิษณุโลก-นครสวรรค์ ต.ท่าโพธิ์ อ.เมืองพิษณุโลก จ.พิษณุโลก 65000
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-[#1C1C1E] font-semibold text-xs font-['Prompt',sans-serif]">
                ช่องทางติดต่อ
              </h4>
              <ul className="space-y-1 text-[11px] text-[#636366]">
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#FF9500]" />
                  <span>โทร: 055-961911 (งานกิจการนิสิต)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Facebook className="w-3 h-3 text-[#007AFF]" />
                  <span>Facebook: งานกิจการนิสิต คณะสังคมศาสตร์ ม.นเรศวร</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-[#34C759]" />
                  <span>เว็บคณะ: www.socsci.nu.ac.th</span>
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-[#1C1C1E] font-semibold text-xs font-['Prompt',sans-serif]">
                กำหนดการสำคัญ ปีการศึกษา 2569
              </h4>
              <p className="text-[11px] text-[#636366] leading-relaxed">
                • ปิดรับสมัคร: 15 กันยายน 2569
                <br />
                • ประกาศผู้มีสิทธิ์สัมภาษณ์: 18 กันยายน 2569
                <br />
                • สัมภาษณ์ทุน: 23 กันยายน 2569 (17.00 น.) ณ ห้องประชุมราชพฤกษ์ 3 ชั้น 3
              </p>
              <p className="text-[10px] text-[#FF3B30] font-semibold">
                * หากไม่เข้ารับการสัมภาษณ์ จะถือว่าสละสิทธิ์
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#8E8E93] gap-2">
            <span>© 2569 คณะสังคมศาสตร์ มหาวิทยาลัยนเรศวร. All rights reserved.</span>
            <span>Faculty of Social Sciences Scholarship Portal 2569</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
