import { AnnouncementItem, ScholarshipApplication, ScoreBreakdown, TimelineConfig } from '../types';

export const ACADEMIC_YEAR = '2569';

// ภาควิชา คณะสังคมศาสตร์ ประจำปีการศึกษา 2569
export const OFFICIAL_DEPARTMENTS_2569 = [
  'จิตวิทยา',
  'ประวัติศาสตร์',
  'รัฐศาสตร์และรัฐประศาสนศาสตร์',
  'สังคมวิทยาและมานุษยวิทยา',
  'สถานประชาคมอาเซียนศึกษา',
];

export const STUDY_YEAR_OPTIONS = [
  'ชั้นปีที่ 1',
  'ชั้นปีที่ 2',
  'ชั้นปีที่ 3',
  'ชั้นปีที่ 4',
  'ชั้นปีที่ 4 ขึ้นไป',
];

export const GPAX_RANGE_OPTIONS = [
  'มากกว่า 3.50',
  '3.00 - 3.49',
  '2.50 - 2.99',
  'น้อยกว่า 2.50',
];

export const PERSON_STATUS_OPTIONS = ['ยังมีชีวิต', 'ถึงแก่กรรม'];

export const OCCUPATION_OPTIONS = [
  'รับราชการ/พนักงานรัฐวิสาหกิจ/พนักงานองค์การของรัฐ/พนักงานบริษัท',
  'ค้าขาย',
  'รับจ้าง',
  'เกษตรกร (ทำนา/ทำสวน/ทำไร่/เลี้ยงสัตว์)',
  'อาชีพอื่น ๆ',
];

export const GUARDIAN_RELATION_OPTIONS = [
  'บิดา',
  'มารดา',
  'ปู่/ย่า/ตา/ยาย',
  'ลุง/ป้า/น้า/อา',
  'พี่/น้อง',
  'อื่น ๆ',
];

export const PARENTS_MARITAL_OPTIONS = [
  'อยู่ด้วยกันกับบิดามารดาในครัวเรือนเดียวกัน',
  'อยู่ด้วยกันกับบิดาหรือมารดาในครัวเรือนเดียวกัน',
  'ไม่ได้อยู่ด้วยกันแต่ยังมีสภาพเป็นครอบครัว',
  'ไม่ได้อยู่กับบิดามารดาและไม่มีสภาพเป็นครอบครัว',
  'อื่น ๆ',
];

export const FAMILY_ILLNESS_OPTIONS = [
  'โรครุนแรงจนทำให้ประกอบอาชีพไม่ได้หรือต้องดูแลเป็นพิเศษ',
  'โรครุนแรงแต่สามารถทำงานได้',
  'โรคไม่รุนแรง',
  'ไม่มีโรคประจำตัว',
];

export const SIBLINGS_STUDYING_OPTIONS = ['ไม่มี', '1 คน', '2 คน', 'มากกว่า 3 คน'];

export const INCOME_BRACKET_OPTIONS = [
  'น้อยกว่า 60,000',
  '60,001 - 89,999',
  '90,000 - 119,999',
  '120,000 - 149,999',
  '150,000 - 179,999',
  '180,000 - 209,999',
  '210,000 - 239,999',
  '240,000 - 269,999',
  '270,000 - 299,999',
  '300,000 - 329,999',
  'มากกว่า 330,000',
];

export const DEBT_BRACKET_OPTIONS = [
  'ไม่มีหนี้สิน',
  'น้อยกว่า 60,000',
  '60,001 - 89,999',
  '90,000 - 119,999',
  '120,000 - 149,999',
  '150,000 - 179,999',
  '180,000 - 209,999',
  '210,000 - 239,999',
  '240,000 - 269,999',
  '270,000 - 299,999',
  '300,000 - 329,999',
  'มากกว่า 330,000',
];

export const MONTHLY_ALLOWANCE_OPTIONS = [
  'มากกว่า 6,000',
  '5,000-5,999',
  '4,000-4,999',
  '3,000-3,999',
  'น้อยกว่า 3,000',
];

export const STUDENT_LOAN_OPTIONS = [
  'ไม่กู้',
  'กู้ค่าเทอมอย่างเดียว',
  'กู้ค่าครองชีพอย่างเดียว',
  'กู้ค่าเทอมและค่าครองชีพ',
];

export const PAST_SCHOLARSHIP_OPTIONS = [
  'กำลังได้รับทุนอยู่',
  'เคยได้รับและสิ้นสุดแล้ว',
  'ไม่เคยได้รับทุน',
];

export const ACCOMMODATION_OPTIONS = [
  'อยู่หอในของมหาวิทยาลัย',
  'หอพักเอกชนแต่หารกับเพื่อน',
  'หอพักเอกชนอยู่คนเดียว',
  'อยู่บ้านตนเองหรือบ้านญาติ (ไม่เสียค่าใช้จ่าย)',
];

export const PART_TIME_WORK_OPTIONS = ['ทำอยู่', 'เคยทำ', 'ไม่เคยทำ'];

export const ACTIVITY_PARTICIPATION_OPTIONS = ['เคยทำ', 'ไม่เคยทำ'];

export const VOLUNTEER_PARTICIPATION_OPTIONS = ['เคยทำ', 'ไม่เคยทำ'];

// ระบบคะแนนคัดเลือกทุน (Scoring Matrix 100 คะแนนเต็ม)
export function calculateScholarshipScore(app: Partial<ScholarshipApplication>): ScoreBreakdown {
  // 1. รายได้ครอบครัว (Max 25)
  let incomeScore = 5;
  switch (app.familyYearlyIncome) {
    case 'น้อยกว่า 60,000':
      incomeScore = 25;
      break;
    case '60,001 - 89,999':
      incomeScore = 22;
      break;
    case '90,000 - 119,999':
      incomeScore = 19;
      break;
    case '120,000 - 149,999':
      incomeScore = 16;
      break;
    case '150,000 - 179,999':
      incomeScore = 13;
      break;
    case '180,000 - 209,999':
      incomeScore = 10;
      break;
    case '210,000 - 239,999':
      incomeScore = 7;
      break;
    case '240,000 - 269,999':
      incomeScore = 5;
      break;
    case '270,000 - 299,999':
      incomeScore = 3;
      break;
    case '300,000 - 329,999':
      incomeScore = 2;
      break;
    case 'มากกว่า 330,000':
      incomeScore = 0;
      break;
    default:
      incomeScore = 12;
  }

  // 2. หนี้สินครอบครัว (Max 15)
  let debtScore = 3;
  switch (app.familyDebtAmountRange) {
    case 'มากกว่า 330,000':
      debtScore = 15;
      break;
    case '300,000 - 329,999':
      debtScore = 14;
      break;
    case '270,000 - 299,999':
      debtScore = 13;
      break;
    case '240,000 - 269,999':
      debtScore = 12;
      break;
    case '210,000 - 239,999':
      debtScore = 10;
      break;
    case '180,000 - 209,999':
      debtScore = 9;
      break;
    case '150,000 - 179,999':
      debtScore = 8;
      break;
    case '120,000 - 149,999':
      debtScore = 7;
      break;
    case '90,000 - 119,999':
      debtScore = 6;
      break;
    case '60,001 - 89,999':
      debtScore = 4;
      break;
    case 'น้อยกว่า 60,000':
      debtScore = 2;
      break;
    case 'ไม่มีหนี้สิน':
    default:
      debtScore = 0;
  }

  // 3. ค่าใช้จ่ายที่นิสิตได้รับต่อเดือน (Max 15)
  let allowanceScore = 4;
  switch (app.monthlyAllowance) {
    case 'น้อยกว่า 3,000':
      allowanceScore = 15;
      break;
    case '3,000-3,999':
      allowanceScore = 12;
      break;
    case '4,000-4,999':
      allowanceScore = 8;
      break;
    case '5,000-5,999':
      allowanceScore = 4;
      break;
    case 'มากกว่า 6,000':
      allowanceScore = 1;
      break;
    default:
      allowanceScore = 5;
  }

  // 4. สภาพความยากลำบากของครอบครัวและการเจ็บป่วย (Max 15)
  let illnessScore = 0;
  if (app.familyIllnessStatus === 'โรครุนแรงจนทำให้ประกอบอาชีพไม่ได้หรือต้องดูแลเป็นพิเศษ') {
    illnessScore = 8;
  } else if (app.familyIllnessStatus === 'โรครุนแรงแต่สามารถทำงานได้') {
    illnessScore = 5;
  } else if (app.familyIllnessStatus === 'โรคไม่รุนแรง') {
    illnessScore = 2;
  } else {
    illnessScore = 0;
  }

  let maritalStatusScore = 2;
  if (app.parentsMaritalStatus === 'ไม่ได้อยู่กับบิดามารดาและไม่มีสภาพเป็นครอบครัว') {
    maritalStatusScore = 7;
  } else if (app.parentsMaritalStatus === 'ไม่ได้อยู่ด้วยกันแต่ยังมีสภาพเป็นครอบครัว') {
    maritalStatusScore = 5;
  } else if (app.parentsMaritalStatus === 'อยู่ด้วยกันกับบิดาหรือมารดาในครัวเรือนเดียวกัน') {
    maritalStatusScore = 4;
  } else {
    maritalStatusScore = 2;
  }

  const familyHardshipScore = Math.min(15, illnessScore + maritalStatusScore);

  // 5. ภาระพี่น้องที่กำลังศึกษา (Max 10)
  let siblingsScore = 0;
  switch (app.siblingsStudyingCount) {
    case 'มากกว่า 3 คน':
      siblingsScore = 10;
      break;
    case '2 คน':
      siblingsScore = 7;
      break;
    case '1 คน':
      siblingsScore = 4;
      break;
    default:
      siblingsScore = 0;
  }

  // 6. ที่พักอาศัยของนิสิต (ข้อ 20 - เต็ม 3 คะแนน)
  // หอใน = 3 คะแนน, หารกับเพื่อน = 2 คะแนน, หอนอกคนเดียว = 1 คะแนน, บ้านตนเอง/ญาติ = 1 คะแนน
  let accommodationScore = 1;
  if (app.accommodationType === 'อยู่หอในของมหาวิทยาลัย' || app.accommodationType === 'หอพักมหาวิทยาลัย') {
    accommodationScore = 3;
  } else if (app.accommodationType === 'หอพักเอกชนแต่หารกับเพื่อน') {
    accommodationScore = 2;
  } else if (app.accommodationType === 'หอพักเอกชนอยู่คนเดียว' || app.accommodationType === 'หอพักเอกชน') {
    accommodationScore = 1;
  } else if (app.accommodationType === 'อยู่บ้านตนเองหรือบ้านญาติ (ไม่เสียค่าใช้จ่าย)' || app.accommodationType === 'บ้านของนิสิต') {
    accommodationScore = 1;
  } else {
    accommodationScore = 1;
  }

  // 7. การทำงานพิเศษ / จิตอาสา / กิจกรรม (Max 10)
  let partTimeScore = 0;
  if (app.partTimeWorkHistory === 'ทำอยู่') partTimeScore = 4;
  else if (app.partTimeWorkHistory === 'เคยทำ') partTimeScore = 2;

  let volunteerScore = app.volunteerWorkParticipation === 'เคยทำ' ? 3 : 0;
  let activityScore = app.studentActivityParticipation === 'เคยทำ' ? 3 : 0;
  const selfRelianceScore = Math.min(10, partTimeScore + volunteerScore + activityScore);

  // 8. ผลการเรียนและความพร้อม (Max 7 รวมกับที่พัก 3 = 10 คะแนน)
  let gpaxScore = 2;
  switch (app.gpaxRange) {
    case 'มากกว่า 3.50':
      gpaxScore = 4;
      break;
    case '3.00 - 3.49':
      gpaxScore = 3;
      break;
    case '2.50 - 2.99':
      gpaxScore = 2;
      break;
    case 'น้อยกว่า 2.50':
      gpaxScore = 1;
      break;
    default:
      gpaxScore = 2;
  }

  let needReasonScore = 1;
  if (app.reasonForApplying && app.reasonForApplying.trim().length > 30) {
    needReasonScore = 3;
  } else {
    needReasonScore = 1;
  }
  const academicAndNeedScore = Math.min(7, gpaxScore + needReasonScore);

  const totalScore =
    incomeScore +
    debtScore +
    allowanceScore +
    familyHardshipScore +
    siblingsScore +
    accommodationScore +
    selfRelianceScore +
    academicAndNeedScore;

  let priorityLevel: 'critical' | 'high' | 'moderate' | 'normal' = 'normal';
  let priorityLabel = 'ระดับปกติ';
  let colorClass = 'text-neutral-600 bg-neutral-100 border-neutral-200';

  if (totalScore >= 75) {
    priorityLevel = 'critical';
    priorityLabel = 'ความจำเป็นเร่งด่วนสูงสุด (ระดับ 1)';
    colorClass = 'text-[#d93025] bg-[#fce8e6] border-[#ea4335]/30 font-bold';
  } else if (totalScore >= 60) {
    priorityLevel = 'high';
    priorityLabel = 'ความจำเป็นสูง (ระดับ 2)';
    colorClass = 'text-[#e37400] bg-[#fef7e0] border-[#f9ab00]/40 font-semibold';
  } else if (totalScore >= 45) {
    priorityLevel = 'moderate';
    priorityLabel = 'ความจำเป็นปานกลาง (ระดับ 3)';
    colorClass = 'text-[#1a73e8] bg-[#e8f0fe] border-[#1a73e8]/30';
  }

  // Detailed itemized scores for staff view
  const itemizedScores = [
    {
      id: 'q15_income',
      moduleLabel: 'Module 3',
      questionNumber: 'ข้อ 15',
      title: 'รวมรายได้ครอบครัวบิดา มารดา หรือผู้ปกครอง/ปี',
      applicantValue: app.familyYearlyIncome || 'ไม่ระบุ',
      score: incomeScore,
      maxScore: 25,
      criteriaNote:
        incomeScore >= 22
          ? 'รายได้ต่ำกว่า 90,000 บ./ปี (ความจำเป็นสูงมาก)'
          : incomeScore >= 13
          ? 'รายได้ 120,000 - 179,999 บ./ปี (ความจำเป็นปานกลาง)'
          : 'รายได้มากกว่า 180,000 บ./ปี',
      colorTheme: 'blue',
    },
    {
      id: 'q16_debt',
      moduleLabel: 'Module 3',
      questionNumber: 'ข้อ 16',
      title: 'หนี้สินครอบครัวบิดา มารดา หรือผู้ปกครอง',
      applicantValue: app.familyDebtAmountRange || 'ไม่มีหนี้สิน',
      score: debtScore,
      maxScore: 15,
      criteriaNote:
        debtScore >= 12
          ? 'หนี้สินมากกว่า 240,000 บ. (ภาระหนี้สินวิกฤต)'
          : debtScore >= 6
          ? 'หนี้สินระดับปานกลาง (90,000 - 179,999 บ.)'
          : 'ภาระหนี้สินต่ำหรือไม่มีหนี้สิน',
      colorTheme: 'amber',
    },
    {
      id: 'q17_allowance',
      moduleLabel: 'Module 4',
      questionNumber: 'ข้อ 17',
      title: 'จำนวนเงินที่นิสิตได้รับค่าใช้จ่ายต่อเดือน',
      applicantValue: app.monthlyAllowance ? `${app.monthlyAllowance} บาท` : 'ไม่ระบุ',
      score: allowanceScore,
      maxScore: 15,
      criteriaNote:
        allowanceScore >= 12
          ? 'ได้รับค่าใช้จ่ายน้อยกว่า 4,000 บ./เดือน (ขาดแคลนค่าครองชีพ)'
          : allowanceScore >= 4
          ? 'ได้รับค่าใช้จ่าย 4,000 - 5,999 บ./เดือน'
          : 'ได้รับค่าใช้จ่ายมากกว่า 6,000 บ./เดือน',
      colorTheme: 'green',
    },
    {
      id: 'q13_illness',
      moduleLabel: 'Module 2',
      questionNumber: 'ข้อ 13',
      title: 'การเจ็บป่วยหรือโรคประจำตัวของบุคคลในครอบครัว',
      applicantValue: app.familyIllnessStatus || 'ไม่มีโรคประจำตัว',
      score: illnessScore,
      maxScore: 8,
      criteriaNote:
        illnessScore === 8
          ? 'โรครุนแรงจนทำให้ประกอบอาชีพไม่ได้ (+8)'
          : illnessScore === 5
          ? 'โรครุนแรงแต่สามารถทำงานได้ (+5)'
          : illnessScore === 2
          ? 'โรคไม่รุนแรง (+2)'
          : 'ไม่มีโรคประจำตัว (0)',
      colorTheme: 'purple',
    },
    {
      id: 'q11_marital',
      moduleLabel: 'Module 2',
      questionNumber: 'ข้อ 11',
      title: 'สถานภาพสมรสของบิดา มารดา',
      applicantValue: app.parentsMaritalStatus || 'อยู่ด้วยกันกับบิดามารดาในครัวเรือนเดียวกัน',
      score: maritalStatusScore,
      maxScore: 7,
      criteriaNote:
        maritalStatusScore === 7
          ? 'ไม่ได้อยู่กับบิดามารดาและไม่มีสภาพเป็นครอบครัว (+7)'
          : maritalStatusScore === 5
          ? 'ไม่ได้อยู่ด้วยกันแต่ยังมีสภาพเป็นครอบครัว (+5)'
          : maritalStatusScore === 4
          ? 'อยู่ด้วยกันกับบิดาหรือมารดาคนเดียว (+4)'
          : 'อยู่ด้วยกันในครัวเรือนเดียวกัน (+2)',
      colorTheme: 'purple',
    },
    {
      id: 'q14_siblings',
      moduleLabel: 'Module 2',
      questionNumber: 'ข้อ 14',
      title: 'จำนวนพี่น้องที่กำลังศึกษา (ไม่รวมตัวนิสิต)',
      applicantValue: app.siblingsStudyingCount || 'ไม่มี',
      score: siblingsScore,
      maxScore: 10,
      criteriaNote:
        siblingsScore === 10
          ? 'มีพี่น้องกำลังศึกษามากกว่า 3 คน (ภาระการส่งเสียสูงมาก)'
          : siblingsScore === 7
          ? 'มีพี่น้องกำลังศึกษา 2 คน'
          : siblingsScore === 4
          ? 'มีพี่น้องกำลังศึกษา 1 คน'
          : 'ไม่มีพี่น้องที่กำลังศึกษา (0)',
      colorTheme: 'indigo',
    },
    {
      id: 'q21_parttime',
      moduleLabel: 'Module 6',
      questionNumber: 'ข้อ 21',
      title: 'ประวัติการทำงานพิเศษเพื่อหารายได้',
      applicantValue: app.partTimeWorkHistory || 'ไม่เคยทำ',
      score: partTimeScore,
      maxScore: 4,
      criteriaNote:
        partTimeScore === 4
          ? 'ปัจจุบันทำงานพิเศษอยู่ (พึ่งพาตนเองและขยันอดทน +4)'
          : partTimeScore === 2
          ? 'เคยทำงานพิเศษ (+2)'
          : 'ไม่เคยทำงานพิเศษ (0)',
      colorTheme: 'rose',
    },
    {
      id: 'q23_volunteer',
      moduleLabel: 'Module 7',
      questionNumber: 'ข้อ 23',
      title: 'การทำจิตอาสา จิตสาธารณะ หรือบำเพ็ญประโยชน์',
      applicantValue: app.volunteerWorkParticipation || 'ไม่เคยทำ',
      score: volunteerScore,
      maxScore: 3,
      criteriaNote:
        volunteerScore === 3
          ? 'เคยทำจิตอาสาหรือบำเพ็ญประโยชน์ (+3)'
          : 'ไม่เคยทำ (0)',
      colorTheme: 'rose',
    },
    {
      id: 'q22_activity',
      moduleLabel: 'Module 7',
      questionNumber: 'ข้อ 22',
      title: 'การร่วมกิจกรรมชมรม สโมสรนิสิต องค์การ สภานิสิต',
      applicantValue: app.studentActivityParticipation || 'ไม่เคยทำ',
      score: activityScore,
      maxScore: 3,
      criteriaNote:
        activityScore === 3
          ? 'เคยทำกิจกรรมชมรม/สโมสร/สภานิสิต (+3)'
          : 'ไม่เคยทำ (0)',
      colorTheme: 'rose',
    },
    {
      id: 'q20_accommodation',
      moduleLabel: 'Module 5',
      questionNumber: 'ข้อ 20',
      title: 'ที่พักอาศัยของนิสิต',
      applicantValue: app.accommodationType || 'ไม่ระบุ',
      score: accommodationScore,
      maxScore: 3,
      criteriaNote:
        accommodationScore === 3
          ? 'อยู่หอในของมหาวิทยาลัย (พฤติกรรมประหยัดสูงสุด ช่วยลดภาระครอบครัว +3)'
          : accommodationScore === 2
          ? 'หอพักเอกชนแต่หารกับเพื่อน (พยายามประหยัดและแบ่งเบาภาระค่าห้อง +2)'
          : app.accommodationType === 'หอพักเอกชนอยู่คนเดียว' || app.accommodationType === 'หอพักเอกชน'
          ? 'หอพักเอกชนอยู่คนเดียว (+1)'
          : 'อยู่บ้านตนเองหรือบ้านญาติ ไม่เสียค่าเช่า (+1)',
      colorTheme: 'teal',
    },
    {
      id: 'q7_gpax',
      moduleLabel: 'Module 1',
      questionNumber: 'ข้อ 7',
      title: 'ผลการเรียนเฉลี่ยสะสม (GPAX)',
      applicantValue: app.gpaxRange || 'ไม่ระบุ',
      score: gpaxScore,
      maxScore: 4,
      criteriaNote:
        gpaxScore === 4
          ? 'มากกว่า 3.50 (ผลการเรียนยอดเยี่ยม +4)'
          : gpaxScore === 3
          ? '3.00 - 3.49 (ผลการเรียนดีมาก +3)'
          : gpaxScore === 2
          ? '2.50 - 2.99 (+2)'
          : 'น้อยกว่า 2.50 (+1)',
      colorTheme: 'sky',
    },
    {
      id: 'q24_26_need',
      moduleLabel: 'Module 8',
      questionNumber: 'ข้อ 24-26',
      title: 'เหตุผลความจำเป็นและความตั้งใจศึกษา',
      applicantValue: app.reasonForApplying
        ? `${app.reasonForApplying.slice(0, 60)}${app.reasonForApplying.length > 60 ? '...' : ''}`
        : 'ระบุความจำเป็นเบื้องต้น',
      score: needReasonScore,
      maxScore: 3,
      criteriaNote:
        needReasonScore === 3
          ? 'ชี้แจงความเดือดร้อนและความจำเป็นชัดเจนเป็นลายลักษณ์อักษร (+3)'
          : 'ชี้แจงความจำเป็นระดับทั่วไป (+1)',
      colorTheme: 'sky',
    },
  ];

  return {
    totalScore,
    maxScore: 100,
    incomeScore,
    debtScore,
    allowanceScore,
    familyHardshipScore,
    siblingsScore,
    accommodationScore,
    selfRelianceScore,
    academicAndNeedScore,
    priorityLevel,
    priorityLabel,
    colorClass,
    illnessScore,
    maritalStatusScore,
    partTimeScore,
    volunteerScore,
    activityScore,
    gpaxScore,
    needReasonScore,
    itemizedScores,
  };
}

export const TIMELINE_2569: AnnouncementItem[] = [
  {
    id: 'step-1',
    dateStr: 'ตั้งแต่บัดนี้ – 15 กันยายน 2569',
    title: 'กรอกใบสมัครขอรับทุนการศึกษาออนไลน์ (Module 0-8)',
    subtitle: 'นิสิตกรอกข้อมูลยืนยัน ข้อมูลส่วนตัว ครอบครัว ฐานะ และความจำเป็นให้ครบถ้วน 100%',
    iconName: 'FilePenLine',
    highlight: true,
  },
  {
    id: 'step-2',
    dateStr: '18 กันยายน 2569',
    title: 'ประกาศรายชื่อนิสิตผู้มีสิทธิเข้าสัมภาษณ์ทุน',
    subtitle: 'ตรวจสอบรายชื่อผ่านระบบนี้ และทางเพจเฟซบุ๊ก "งานกิจการนิสิต คณะสังคมศาสตร์ ม.นเรศวร"',
    iconName: 'Megaphone',
  },
  {
    id: 'step-3',
    dateStr: '23 กันยายน 2569 (เวลา 17.00 น. เป็นต้นไป)',
    title: 'สัมภาษณ์ทุนการศึกษา',
    subtitle: 'ณ ห้องประชุมราชพฤกษ์ 3 ชั้น 3 อาคารคณะสังคมศาสตร์ มหาวิทยาลัยนเรศวร (แต่งกายด้วยชุดเครื่องแบบนิสิตเรียบร้อย)',
    location: 'ห้องประชุมราชพฤกษ์ 3 ชั้น 3 อาคารคณะสังคมศาสตร์',
    iconName: 'Users',
    highlight: true,
  },
  {
    id: 'step-4',
    dateStr: 'สิ้นเดือนกันยายน 2569',
    title: 'คณะกรรมการประจำคณะฯ พิจารณาการจัดสรรทุน',
    subtitle: 'คณะกรรมการสรุปคะแนนประเมินและประกาศผลผู้ได้รับทุนอย่างเป็นทางการ',
    iconName: 'Award',
  },
  {
    id: 'step-5',
    dateStr: 'เดือนตุลาคม 2569 (เวลา 08.30 - 11.30 น.)',
    title: 'พิธีมอบทุนการศึกษา ในวันสถาปนาคณะสังคมศาสตร์',
    subtitle: 'ณ โถงชั้น 1 อาคารคณะสังคมศาสตร์ นิสิตรับมอบทุนและส่งเอกสารเบิกจ่ายเงินเข้าบัญชี',
    location: 'โถงชั้น 1 อาคารคณะสังคมศาสตร์',
    iconName: 'GraduationCap',
  },
];

export const DEFAULT_TIMELINE_CONFIG: TimelineConfig = {
  academicYear: '2569',
  heroTitle: 'เปิดรับสมัครทุนการศึกษา ประจำปีการศึกษา 2569',
  heroSubtitle:
    'สำหรับนิสิตคณะสังคมศาสตร์ที่ขาดแคลนทุนทรัพย์ เพื่อแบ่งเบาภาระค่าใช้จ่ายทางการศึกษา และส่งเสริมให้นิสิตสำเร็จการศึกษาอย่างมีคุณภาพ',
  contactPhone: '055-961911',
  criticalNotice: {
    title: 'หมายเหตุสำคัญมาก (เงื่อนไขการสละสิทธิ์)',
    description:
      'หากนิสิตไม่เข้ารับการสัมภาษณ์ตามวันและเวลาที่กำหนด จะถือว่าสละสิทธิ์การพิจารณาทุนครั้งนี้',
    interviewDate: '23 กันยายน 2569 เวลา 17.00 น. เป็นต้นไป',
    interviewLocation:
      'ห้องประชุมราชพฤกษ์ 3 ชั้น 3 อาคารคณะสังคมศาสตร์ มหาวิทยาลัยนเรศวร',
  },
  steps: TIMELINE_2569,
  qualifications: [
    'นิสิตระดับปริญญาตรี คณะสังคมศาสตร์ ม.นเรศวร (ชั้นปีที่ 1 - 4)',
    'เป็นผู้ที่ขาดแคลนทุนทรัพย์ หรือครอบครัวมีปัญหาเศรษฐกิจ',
    'มีความประพฤติดี ไม่เคยมีประวัติความผิดวินัยนิสิต',
    'เข้ารับการสัมภาษณ์ตามวันและเวลาที่คณะกรรมการกำหนด',
  ],
  requiredDocuments: [
    'รูปถ่ายหน้าตรงในเครื่องแบบนิสิต',
    'สำเนาบัตรประจำตัวนิสิต หรือบัตรประชาชน',
    'ใบรายงานผลการศึกษา (GPAX จาก REG NU)',
    'หนังสือรับรองรายได้ครอบครัว / สลิปเงินเดือน',
    'บัญชีธนาคารกรุงไทยสำหรับรับเงินทุน',
  ],
  lastUpdatedAt: '2026-08-01 09:00',
  lastUpdatedBy: 'งานกิจการนิสิตและศิษย์เก่าสัมพันธ์ คณะสังคมศาสตร์',
};

export const TIMELINE_STORAGE_KEY = 'nu_socsci_scholarship_timeline_config_2569';

export function loadTimelineConfig(): TimelineConfig {
  try {
    const raw = localStorage.getItem(TIMELINE_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(DEFAULT_TIMELINE_CONFIG));
      return DEFAULT_TIMELINE_CONFIG;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.steps) || parsed.steps.length === 0) {
      localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(DEFAULT_TIMELINE_CONFIG));
      return DEFAULT_TIMELINE_CONFIG;
    }
    return {
      ...DEFAULT_TIMELINE_CONFIG,
      ...parsed,
      criticalNotice: {
        ...DEFAULT_TIMELINE_CONFIG.criticalNotice,
        ...(parsed.criticalNotice || {}),
      },
    };
  } catch (e) {
    console.error('Failed to load timeline config', e);
    return DEFAULT_TIMELINE_CONFIG;
  }
}

export function saveTimelineConfig(config: TimelineConfig): void {
  try {
    const updated: TimelineConfig = {
      ...config,
      lastUpdatedAt: new Date().toLocaleString('th-TH'),
      lastUpdatedBy: config.lastUpdatedBy || 'ผู้ดูแลระบบ (Admin)',
    };
    localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save timeline config', e);
  }
}

export function resetTimelineConfig(): TimelineConfig {
  try {
    localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(DEFAULT_TIMELINE_CONFIG));
    return DEFAULT_TIMELINE_CONFIG;
  } catch (e) {
    console.error('Failed to reset timeline config', e);
    return DEFAULT_TIMELINE_CONFIG;
  }
}

export const INITIAL_APPLICATIONS_2569: ScholarshipApplication[] = [
  {
    id: 'APP-2569-001',
    createdAt: '2026-08-20 09:30',
    updatedAt: '2026-08-20 09:30',
    academicYear: '2569',
    status: 'eligible_for_interview',
    agreedToTerms: true,
    fullName: 'นายณัฐพงษ์ สิทธิโชค',
    studentId: '66012458',
    department: 'รัฐศาสตร์และรัฐประศาสนศาสตร์',
    studyYear: 'ชั้นปีที่ 2',
    phone: '0812345678',
    homeAddress: '142/5 หมู่ 4 ต.บ้านกร่าง อ.เมือง จ.พิษณุโลก 65000',
    gpaxRange: '3.00 - 3.49',

    fatherName: 'นายประสิทธิ์ สิทธิโชค',
    fatherStatus: 'ยังมีชีวิต',
    fatherAge: '52',
    fatherOccupation: 'รับจ้าง',
    fatherOccupationDetail: 'รับจ้างทั่วไป รายได้ไม่แน่นอน ขึ้นอยู่กับงานก่อสร้าง',

    motherName: 'นางสมใจ สิทธิโชค',
    motherStatus: 'ยังมีชีวิต',
    motherAge: '49',
    motherOccupation: 'ค้าขาย',
    motherOccupationDetail: 'ขายของชำเล็กๆ หน้าบ้าน กำไรวันละ 200-300 บาท',

    guardianName: 'นายประสิทธิ์ สิทธิโชค',
    guardianStatus: 'ยังมีชีวิต',
    guardianAge: '52',
    guardianOccupation: 'รับจ้าง',
    guardianOccupationDetail: 'หัวหน้าครอบครัว',
    guardianRelation: 'บิดา',

    parentsMaritalStatus: 'ไม่ได้อยู่ด้วยกันแต่ยังมีสภาพเป็นครอบครัว',
    familyLivingCondition: 'อาศัยอยู่ในบ้านไม้ยกสูงสภาพทรุดโทรม อยู่ร่วมกัน 5 คน',
    familyIllnessStatus: 'โรครุนแรงแต่สามารถทำงานได้',
    siblingsStudyingCount: '2 คน',

    familyYearlyIncome: '90,000 - 119,999',
    familyDebtAmountRange: '180,000 - 209,999',

    monthlyAllowance: '3,000-3,999',
    studentLoanStatus: 'กู้ค่าเทอมและค่าครองชีพ',
    pastScholarshipHistory: 'ไม่เคยได้รับทุน',
    pastScholarshipName: '',
    pastScholarshipAmount: '',

    accommodationType: 'หอพักมหาวิทยาลัย',
    partTimeWorkHistory: 'ทำอยู่',
    studentActivityParticipation: 'เคยทำ',
    volunteerWorkParticipation: 'เคยทำ',

    selfPrideOrTalent: 'มีความสามารถด้านการประสานงานกิจกรรมและทักษะคอมพิวเตอร์ ช่วยงานอาจารย์และเพื่อนๆ ในสาขาวิชาอย่างสม่ำเสมอ มีความซื่อสัตย์และกตัญญู',
    reasonForApplying: 'ครอบครัวมีภาระหนี้สินจากการกู้เงินเพื่อการเกษตรและค่ารักษาพยาบาล มีน้องอีกสองคนที่กำลังเรียนชั้นมัธยมศึกษา เงินเดือนที่ได้รับไม่เพียงพอกับค่าอุปกรณ์การเรียน จึงต้องการทุนการศึกษานี้เพื่อแบ่งเบาภาระของบิดามารดาและตั้งใจจะเรียนให้จบด้วยเกียรตินิยม',
    scholarshipFundUsagePlan: 'จะนำเงินทุนไปจัดสรรเป็นค่าที่พักหอพักใน ค่าอุปกรณ์การเรียน เอกสารตำรา และสำรองไว้เป็นค่าครองชีพประจำเดือนโดยไม่รบกวนเงินจากทางบ้าน',
  },
  {
    id: 'APP-2569-002',
    createdAt: '2026-08-22 14:15',
    updatedAt: '2026-08-22 14:15',
    academicYear: '2569',
    status: 'submitted',
    agreedToTerms: true,
    fullName: 'นางสาวกัญญาภัทร พรหมศิริ',
    studentId: '65018923',
    department: 'จิตวิทยา',
    studyYear: 'ชั้นปีที่ 3',
    phone: '0897654321',
    homeAddress: '88 หมู่ 2 ต.เมืองเก่า อ.เมือง จ.สุโขทัย 64210',
    gpaxRange: 'มากกว่า 3.50',

    fatherName: 'นายวีระ พรหมศิริ',
    fatherStatus: 'ยังมีชีวิต',
    fatherAge: '56',
    fatherOccupation: 'เกษตรกร (ทำนา/ทำสวน/ทำไร่/เลี้ยงสัตว์)',
    fatherOccupationDetail: 'ทำนาบนที่ดินเช่า ผลผลิตเสียหายจากน้ำท่วมบ่อยครั้ง',

    motherName: 'นางมาลี พรหมศิริ (ถึงแก่กรรม)',
    motherStatus: 'ถึงแก่กรรม',
    motherAge: '-',
    motherOccupation: 'อาชีพอื่น ๆ',
    motherOccupationDetail: 'เสียชีวิตด้วยโรคมะเร็งเมื่อ 2 ปีก่อน',

    guardianName: 'นายวีระ พรหมศิริ',
    guardianStatus: 'ยังมีชีวิต',
    guardianAge: '56',
    guardianOccupation: 'เกษตรกร (ทำนา/ทำสวน/ทำไร่/เลี้ยงสัตว์)',
    guardianOccupationDetail: 'บิดาผู้ดูแลเพียงคนเดียว',
    guardianRelation: 'บิดา',

    parentsMaritalStatus: 'อยู่ด้วยกันกับบิดาหรือมารดาในครัวเรือนเดียวกัน',
    familyLivingCondition: 'อาศัยกับบิดาและยายชรา บ้านชั้นเดียวชนบท',
    familyIllnessStatus: 'โรครุนแรงจนทำให้ประกอบอาชีพไม่ได้หรือต้องดูแลเป็นพิเศษ',
    siblingsStudyingCount: '1 คน',

    familyYearlyIncome: '60,001 - 89,999',
    familyDebtAmountRange: '240,000 - 269,999',

    monthlyAllowance: 'น้อยกว่า 3,000',
    studentLoanStatus: 'กู้ค่าครองชีพอย่างเดียว',
    pastScholarshipHistory: 'ไม่เคยได้รับทุน',
    pastScholarshipName: '',
    pastScholarshipAmount: '',

    accommodationType: 'หอพักเอกชน',
    partTimeWorkHistory: 'ทำอยู่',
    studentActivityParticipation: 'เคยทำ',
    volunteerWorkParticipation: 'เคยทำ',

    selfPrideOrTalent: 'มีผลการเรียนสะสมดีเยี่ยม (เกรดเฉลี่ยมากกว่า 3.50) และเป็นผู้ช่วยให้คำปรึกษาทางจิตวิทยาเบื้องต้นแก่นิสิตในโครงการ Peer Counselor',
    reasonForApplying: 'เนื่องจากมารดาเสียชีวิต บิดาต้องดูแลคุณยายที่ป่วยติดเตียงและทำนาเพียงลำพัง หนี้สิน ธ.ก.ส. มีภาระดอกเบี้ยสูง ข้าพเจ้าต้องทำงานพาร์ทไทม์หลังเลิกเรียนเพื่อหาค่ากินอยู่ จึงอยากขอรับทุนเพื่อลดเวลาทำงานพิเศษและมีสมาธิกับการฝึกงานและทำวิจัยทางจิตวิทยาคลินิก',
    scholarshipFundUsagePlan: 'ชำระค่าเช่าหอพักและค่าเดินทางไปฝึกงานที่โรงพยาบาล รวมถึงเก็บเป็นทุนสำรองเพื่อการศึกษาจนจบหลักสูตร',
  },
  {
    id: 'APP-2569-003',
    createdAt: '2026-08-25 11:00',
    updatedAt: '2026-08-25 11:00',
    academicYear: '2569',
    status: 'submitted',
    agreedToTerms: true,
    fullName: 'นายธีรพัฒน์ ภักดีชน',
    studentId: '67015542',
    department: 'สังคมวิทยาและมานุษยวิทยา',
    studyYear: 'ชั้นปีที่ 1',
    phone: '0823344556',
    homeAddress: '55/1 หมู่ 8 ต.สากเหล็ก อ.สากเหล็ก จ.พิจิตร 66160',
    gpaxRange: '3.00 - 3.49',

    fatherName: 'นายมงคล ภักดีชน',
    fatherStatus: 'ยังมีชีวิต',
    fatherAge: '48',
    fatherOccupation: 'รับจ้าง',
    fatherOccupationDetail: 'ขับรถส่งของชั่วคราว',

    motherName: 'นางวรรณา ภักดีชน',
    motherStatus: 'ยังมีชีวิต',
    motherAge: '46',
    motherOccupation: 'รับจ้าง',
    motherOccupationDetail: 'รับจ้างเย็บผ้าที่บ้าน',

    guardianName: 'นายมงคล ภักดีชน',
    guardianStatus: 'ยังมีชีวิต',
    guardianAge: '48',
    guardianOccupation: 'รับจ้าง',
    guardianOccupationDetail: 'บิดา',
    guardianRelation: 'บิดา',

    parentsMaritalStatus: 'อยู่ด้วยกันกับบิดามารดาในครัวเรือนเดียวกัน',
    familyLivingCondition: 'บ้านพักอาศัยร่วมกับญาติ',
    familyIllnessStatus: 'ไม่มีโรคประจำตัว',
    siblingsStudyingCount: '2 คน',

    familyYearlyIncome: '120,000 - 149,999',
    familyDebtAmountRange: '90,000 - 119,999',

    monthlyAllowance: '4,000-4,999',
    studentLoanStatus: 'กู้ค่าเทอมและค่าครองชีพ',
    pastScholarshipHistory: 'ไม่เคยได้รับทุน',
    pastScholarshipName: '',
    pastScholarshipAmount: '',

    accommodationType: 'หอพักมหาวิทยาลัย',
    partTimeWorkHistory: 'เคยทำ',
    studentActivityParticipation: 'เคยทำ',
    volunteerWorkParticipation: 'เคยทำ',

    selfPrideOrTalent: 'เป็นผู้นำกิจกรรมค่ายอาสาพัฒนาชนบทสมัยมัธยมปลาย มีความรับผิดชอบและกระตือรือร้นในการเรียนรู้เพื่อชุมชน',
    reasonForApplying: 'เพิ่งเข้าศึกษาชั้นปีที่ 1 มีค่าใช้จ่ายแรกเข้า เครื่องแบบ และหนังสือจำนวนมาก ครอบครัวต้องส่งเสียน้องอีกสองคน รายได้ของผู้ปกครองลดลงมาก',
    scholarshipFundUsagePlan: 'ใช้เป็นค่าธรรมเนียมการศึกษา ค่าหนังสือเรียนทางสังคมวิทยา และซื้ออุปกรณ์คอมพิวเตอร์มือสองเพื่อใช้สืบค้นงานวิจัย',
  },
];

export const STORAGE_KEY = 'nu_socsci_scholarship_applications_2569';
export const DRAFT_STORAGE_KEY = 'nu_socsci_scholarship_draft_2569';

export function loadApplications(): ScholarshipApplication[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_APPLICATIONS_2569));
      return INITIAL_APPLICATIONS_2569;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_APPLICATIONS_2569));
      return INITIAL_APPLICATIONS_2569;
    }
    return parsed;
  } catch (e) {
    console.error('Failed to load applications from localStorage', e);
    return INITIAL_APPLICATIONS_2569;
  }
}

export function saveApplication(app: ScholarshipApplication): void {
  try {
    const apps = loadApplications();
    const existingIndex = apps.findIndex(
      (a) => a.id === app.id || (app.studentId && a.studentId === app.studentId)
    );
    if (existingIndex >= 0) {
      apps[existingIndex] = { ...app, updatedAt: new Date().toISOString() };
    } else {
      apps.unshift({ ...app, updatedAt: new Date().toISOString() });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  } catch (e) {
    console.error('Failed to save application', e);
  }
}

export function saveDraft(data: Partial<ScholarshipApplication>): void {
  try {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save draft', e);
  }
}

export function loadDraft(): Partial<ScholarshipApplication> | null {
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch (e) {
    // ignore
  }
}
