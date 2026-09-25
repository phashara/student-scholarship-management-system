/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, CheckCircle2, Download, FileText, MapPin, Phone, Printer, ShieldCheck, X } from 'lucide-react';
import { ScholarshipApplication } from '../types';

interface ApplicationSlipModalProps {
  application: ScholarshipApplication | null;
  onClose: () => void;
  onTrackStatus?: () => void;
}

export const ApplicationSlipModal: React.FC<ApplicationSlipModalProps> = ({
  application,
  onClose,
  onTrackStatus,
}) => {
  if (!application) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl border border-black/[0.08] overflow-hidden my-6">
        {/* Modal Top Bar (Hidden when printing) */}
        <div className="print:hidden px-6 py-4 bg-[#1C1C1E] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34C759]" />
            <span className="font-bold text-sm font-['Prompt',sans-serif] tracking-tight">
              ใบสมัครขอรับทุนการศึกษา ประจำปีการศึกษา 2569
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-white/15 hover:bg-white/25 text-white rounded-full transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#FF9500]" />
              <span>พิมพ์ใบสมัคร / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Application Document */}
        <div
          id="printable-application-slip"
          className="p-6 sm:p-10 space-y-6 text-[#1C1C1E] text-sm font-['Sarabun',sans-serif] max-h-[85vh] overflow-y-auto print:max-h-none print:overflow-visible"
        >
          {/* Header */}
          <div className="text-center border-b-2 border-[#1C1C1E] pb-5">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-[16px] bg-[#1C1C1E] text-[#FF9500] flex items-center justify-center font-bold text-xl shadow-md">
                <Award className="w-7 h-7" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1C1C1E] font-['Prompt',sans-serif]">
              แบบคำขอรับทุนการศึกษาสำหรับนิสิตที่ขาดแคลนทุนทรัพย์
            </h2>
            <h3 className="text-base font-semibold text-[#636366]">
              คณะสังคมศาสตร์ มหาวิทยาลัยนเรศวร ประจำปีการศึกษา 2569
            </h3>
            <div className="mt-2 inline-flex flex-wrap items-center justify-center gap-3 text-xs text-[#8E8E93]">
              <span className="px-2.5 py-1 bg-[#F2F2F7] rounded-full font-mono font-bold text-[#1C1C1E] border border-black/[0.05]">
                เลขที่ใบสมัคร: {application.id}
              </span>
              <span>วันที่บันทึก: {application.createdAt}</span>
              <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#34C759]/12 text-[#248A3D] border border-[#34C759]/30">
                สถานะ: บันทึกและยื่นใบสมัครแล้ว
              </span>
            </div>
          </div>

          {/* Module 0 : การยืนยันข้อมูล */}
          <div className="bg-[#F8F9FA] rounded-[14px] p-3.5 border border-black/[0.06] text-xs">
            <p className="font-bold text-[#1C1C1E] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
              <span>Module 0 : การยืนยันข้อมูล</span>
            </p>
            <p className="text-[#3C4043] mt-1 pl-5">
              ข้าพเจ้าขอรับรองว่าข้อมูลตามแบบคำขอสมัครทุนการศึกษาเป็นข้อมูลที่ถูกต้องตามความเป็นจริงทุกประการ
              (ยืนยันแล้ว: {application.agreedToTerms ? 'ใช่' : 'ไม่ใช่'})
            </p>
          </div>

          {/* Module 1 : ข้อมูลส่วนตัวของนิสิต */}
          <div>
            <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-3">
              Module 1 : ข้อมูลส่วนตัวของนิสิต
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm pl-2">
              <p>
                <strong>1. ชื่อ-สกุล:</strong> {application.fullName}
              </p>
              <p>
                <strong>2. รหัสนิสิต:</strong> {application.studentId || '-'}
              </p>
              <p>
                <strong>3. ภาควิชา:</strong> {application.department}
              </p>
              <p>
                <strong>4. ชั้นปี:</strong> {application.studyYear}
              </p>
              <p>
                <strong>5. เบอร์โทรศัพท์:</strong> {application.phone}
              </p>
              <p>
                <strong>7. ผลการเรียนเฉลี่ยสะสม (GPAX):</strong> {application.gpaxRange || application.gpax || '-'}
              </p>
              <p className="sm:col-span-2">
                <strong>6. บ้านเลขที่ ภูมิลำเนาของนิสิต:</strong> {application.homeAddress || '-'}
              </p>
            </div>
          </div>

          {/* Module 2 : ข้อมูลครอบครัว */}
          <div>
            <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-3">
              Module 2 : ข้อมูลครอบครัว
            </h4>
            <div className="space-y-3 pl-2 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 bg-[#F9F9FB] rounded-[10px]">
                <p>
                  <strong>8. บิดา:</strong> {application.fatherName || '-'} ({application.fatherStatus || 'ยังมีชีวิต'}, อายุ {application.fatherAge || '-'} ปี)
                </p>
                <p>
                  <strong>อาชีพ:</strong> {application.fatherOccupation || '-'} {application.fatherOccupationDetail ? `(${application.fatherOccupationDetail})` : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 bg-[#F9F9FB] rounded-[10px]">
                <p>
                  <strong>9. มารดา:</strong> {application.motherName || '-'} ({application.motherStatus || 'ยังมีชีวิต'}, อายุ {application.motherAge || '-'} ปี)
                </p>
                <p>
                  <strong>อาชีพ:</strong> {application.motherOccupation || '-'} {application.motherOccupationDetail ? `(${application.motherOccupationDetail})` : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 bg-[#F9F9FB] rounded-[10px]">
                <p>
                  <strong>10. ผู้ปกครอง:</strong> {application.guardianName || '-'} (เกี่ยวข้อง: {application.guardianRelation || '-'})
                </p>
                <p>
                  <strong>อาชีพ:</strong> {application.guardianOccupation || '-'} {application.guardianOccupationDetail ? `(${application.guardianOccupationDetail})` : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <p>
                  <strong>11. สถานภาพสมรสของบิดามารดา:</strong> {application.parentsMaritalStatus || '-'}
                </p>
                <p>
                  <strong>14. จำนวนพี่น้องที่กำลังศึกษา:</strong> {application.siblingsStudyingCount || '-'}
                </p>
                <p className="sm:col-span-2">
                  <strong>12. สภาพความเป็นอยู่ในครอบครัว:</strong> {application.familyLivingCondition || '-'}
                </p>
                <p className="sm:col-span-2">
                  <strong>13. การเจ็บป่วยหรือโรคประจำตัวในครอบครัว:</strong> {application.familyIllnessStatus || '-'}
                </p>
              </div>
            </div>
          </div>

          {/* Module 3 & 4 : ฐานะเศรษฐกิจ & ประวัติรับทุน */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-2">
                Module 3 : ฐานะทางเศรษฐกิจ
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm pl-2">
                <p>
                  <strong>15. รายได้ครอบครัว/ปี:</strong> {application.familyYearlyIncome || '-'} บาท
                </p>
                <p>
                  <strong>16. หนี้สินครอบครัว:</strong> {application.familyDebtAmountRange || '-'}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-2">
                Module 4 : ประวัติการได้รับทุน
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm pl-2">
                <p>
                  <strong>17. เงินค่าใช้จ่ายได้รับ/เดือน:</strong> {application.monthlyAllowance || '-'} บาท
                </p>
                <p>
                  <strong>18. การกู้ยืม กยศ.:</strong> {application.studentLoanStatus || '-'}
                </p>
                <p>
                  <strong>19. ทุนการศึกษาอื่น:</strong> {application.pastScholarshipHistory || '-'}
                  {application.pastScholarshipName ? ` (${application.pastScholarshipName} ${application.pastScholarshipAmount} บ.)` : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Module 5, 6, 7 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-2">
                Module 5 : ที่พักอาศัย
              </h4>
              <p className="text-xs sm:text-sm pl-2">
                <strong>20. ที่พักอาศัย:</strong> {application.accommodationType || '-'}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-2">
                Module 6 : การทำงานพิเศษ
              </h4>
              <p className="text-xs sm:text-sm pl-2">
                <strong>21. ประวัติทำงานพิเศษ:</strong> {application.partTimeWorkHistory || '-'}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-2">
                Module 7 : การมีส่วนร่วม
              </h4>
              <div className="text-xs sm:text-sm pl-2 space-y-1">
                <p>
                  <strong>22. กิจกรรมชมรม/สโมสร/สภา:</strong> {application.studentActivityParticipation || '-'}
                </p>
                <p>
                  <strong>23. จิตอาสา/บำเพ็ญประโยชน์:</strong> {application.volunteerWorkParticipation || '-'}
                </p>
              </div>
            </div>
          </div>

          {/* Module 8 : ความจำเป็นในการรับทุน */}
          <div>
            <h4 className="font-bold text-[#1C1C1E] text-sm font-['Prompt',sans-serif] bg-[#F2F2F7] px-3.5 py-1.5 rounded-[10px] mb-3">
              Module 8 : ความจำเป็นในการรับทุน
            </h4>
            <div className="space-y-3 pl-2 text-xs sm:text-sm">
              <div className="bg-[#F8F9FA] p-3 rounded-[12px]">
                <p className="font-bold text-[#1C1C1E] mb-1">
                  24. สิ่งที่นิสิตภูมิใจในตนเอง หรือความสามารถของนิสิต:
                </p>
                <p className="text-[#3A3A3C] leading-relaxed">
                  "{application.selfPrideOrTalent || '-'}"
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-3 rounded-[12px]">
                <p className="font-bold text-[#1C1C1E] mb-1">
                  25. เหตุผลและความจำเป็นในการรับทุนการศึกษา:
                </p>
                <p className="text-[#3A3A3C] leading-relaxed">
                  "{application.reasonForApplying || '-'}"
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-3 rounded-[12px]">
                <p className="font-bold text-[#1C1C1E] mb-1">
                  26. หากได้รับทุนการศึกษา จะนำเงินทุนไปใช้ประโยชน์ในด้านใด อย่างไร:
                </p>
                <p className="text-[#3A3A3C] leading-relaxed">
                  "{application.scholarshipFundUsagePlan || '-'}"
                </p>
              </div>
            </div>
          </div>

          {/* Signature Sign-offs */}
          <div className="pt-6 border-t border-black/10 grid grid-cols-2 gap-8 text-center text-xs">
            <div className="space-y-6">
              <p>ขอรับรองว่าข้อความทั้งหมดเป็นความจริงทุกประการ</p>
              <div className="pt-4 border-b border-black/40 w-48 mx-auto" />
              <p>
                ลงชื่อ ({application.fullName})
                <br />
                ผู้สมัครขอรับทุนการศึกษา
              </p>
            </div>

            <div className="space-y-6">
              <p>ความเห็นคณะกรรมการประจำคณะสังคมศาสตร์</p>
              <div className="pt-4 border-b border-black/40 w-48 mx-auto" />
              <p>
                ลงชื่อ (.......................................................)
                <br />
                กรรมการพิจารณาทุนการศึกษา
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="print:hidden px-6 py-4 bg-[#F2F2F7] border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#8E8E93]">
            เลขที่ใบสมัคร: <strong className="text-[#1C1C1E] font-mono">{application.id}</strong>
          </div>

          <div className="flex items-center gap-2">
            {onTrackStatus && (
              <button
                onClick={onTrackStatus}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#007AFF]/12 hover:bg-[#007AFF]/20 text-[#007AFF] transition-colors cursor-pointer"
              >
                ตรวจสอบสถานะการสมัคร
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-[#1C1C1E] hover:bg-black text-white transition-all active:scale-95 cursor-pointer shadow-xs"
            >
              พิมพ์เอกสาร
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
