import React, { useState } from 'react';
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  FileText,
  Flame,
  Info,
  Layers,
  Phone,
  Radio,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'form' | 'timeline' | 'status' | 'admin';
  setActiveTab: (tab: 'form' | 'timeline' | 'status' | 'admin') => void;
  applicationCount?: number;
  onOpenScoringModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  applicationCount = 0,
  onOpenScoringModal,
}) => {
  const [islandExpanded, setIslandExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-2xl border-b border-black/[0.06] shadow-xs transition-all">
      {/* iOS Dynamic Island Capsule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 pb-1 flex justify-center">
        <div
          onClick={() => setIslandExpanded(!islandExpanded)}
          className={`cursor-pointer group flex items-center justify-between gap-3 px-3.5 py-1.5 rounded-full bg-black text-white text-[12px] font-medium shadow-md shadow-black/10 border border-white/10 transition-all duration-300 select-none ${
            islandExpanded ? 'w-full max-w-lg scale-100' : 'hover:scale-[1.02]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34C759]"></span>
            </span>
            <span className="font-semibold tracking-wide text-white/95">
              ทุนการศึกษา 2569
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/75 text-[11px] truncate max-w-[140px] sm:max-w-none">
              คณะสังคมศาสตร์ ม.นเรศวร
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/70">
            <span className="hidden sm:inline text-[11px] bg-white/15 px-2 py-0.5 rounded-full text-white font-mono">
              ปิด 15 ก.ย. 69
            </span>
            <a
              href="tel:055961911"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[11px] text-[#FF9F0A] hover:text-[#FFB340] px-2 py-0.5 rounded-full bg-white/10 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>055-961911</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          {/* Brand & Large Title */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[16px] bg-gradient-to-br from-[#007AFF] via-[#0051D5] to-[#5856D6] p-0.5 shadow-md shadow-[#007AFF]/25 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                <Award className="w-6 h-6 text-[#007AFF]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1C1E] font-['Prompt',sans-serif]">
                  ทุนการศึกษา คณะสังคมศาสตร์
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#00A1F1]/15 text-[#0077B6] border border-[#00A1F1]/25">
                  ปี 2569
                </span>
              </div>
              <p className="text-[12px] text-[#8E8E93] leading-none mt-1">
                สำหรับนิสิตที่ขาดแคลนทุนทรัพย์ • มหาวิทยาลัยนเรศวร
              </p>
            </div>
          </div>

          {/* Cupertino Segmented Control */}
          <div className="bg-[#767680]/12 p-1 rounded-[16px] flex items-center gap-1 overflow-x-auto max-w-full self-start lg:self-auto shadow-inner">
            <button
              id="nav-form-tab"
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'form'
                  ? 'bg-white text-[#1C1C1E] shadow-sm font-bold scale-[1.01]'
                  : 'text-[#636366] hover:text-[#1C1C1E] hover:bg-white/40'
              }`}
            >
              <FileText className={`w-4 h-4 ${activeTab === 'form' ? 'text-[#007AFF]' : 'text-[#8E8E93]'}`} />
              <span>กรอกใบสมัคร</span>
            </button>

            <button
              id="nav-timeline-tab"
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'timeline'
                  ? 'bg-white text-[#1C1C1E] shadow-sm font-bold scale-[1.01]'
                  : 'text-[#636366] hover:text-[#1C1C1E] hover:bg-white/40'
              }`}
            >
              <Calendar className={`w-4 h-4 ${activeTab === 'timeline' ? 'text-[#FF9500]' : 'text-[#8E8E93]'}`} />
              <span>กำหนดการ</span>
            </button>

            <button
              id="nav-status-tab"
              onClick={() => setActiveTab('status')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'status'
                  ? 'bg-white text-[#1C1C1E] shadow-sm font-bold scale-[1.01]'
                  : 'text-[#636366] hover:text-[#1C1C1E] hover:bg-white/40'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${activeTab === 'status' ? 'text-[#34C759]' : 'text-[#8E8E93]'}`} />
              <span>เช็กสถานะ</span>
            </button>

            <button
              id="nav-admin-tab"
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'admin'
                  ? 'bg-white text-[#1C1C1E] shadow-sm font-bold scale-[1.01]'
                  : 'text-[#636366] hover:text-[#1C1C1E] hover:bg-white/40'
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${activeTab === 'admin' ? 'text-[#5856D6]' : 'text-[#8E8E93]'}`} />
              <span>เจ้าหน้าที่</span>
              {applicationCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[#FF3B30] text-white">
                  {applicationCount}
                </span>
              )}
            </button>

            {/* Scoring criteria modal only accessible to admin/committee */}
            {activeTab === 'admin' && onOpenScoringModal && (
              <button
                type="button"
                onClick={onOpenScoringModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs sm:text-sm font-semibold text-[#5856D6] bg-[#5856D6]/12 hover:bg-[#5856D6]/20 transition-all cursor-pointer whitespace-nowrap"
                title="เปิดดูเกณฑ์การให้คะแนน 100 คะแนนเต็ม & เครื่องมือจำลองคะแนน (สำหรับคณะกรรมการ)"
              >
                <Scale className="w-3.5 h-3.5 text-[#5856D6]" />
                <span className="hidden sm:inline">เกณฑ์คะแนน (กก.)</span>
                <span className="sm:hidden">เกณฑ์</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
