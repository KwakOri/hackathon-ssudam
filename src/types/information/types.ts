export interface SupportProgram {
  id: number; // 출산 지원 데이터 ID
  number: string; // 지원 데이터 번호
  title: string; // 지원금 제목
  registrationDate: string; // 등록 날짜 (ISO 8601 date format)
  addressProvince: string; // 도(省)
  addressCity: string; // 시(市)
  viewCount: number; // 조회수
  scrapCount: number; // 스크랩 수
  createdAt: string; // 생성 일시 (ISO 8601 date-time format)
  updatedAt: string; // 수정 일시 (ISO 8601 date-time format)
  supportTarget?: string; // 지원 대상
  supportContent?: string; // 지원 내용
  inquiryContact?: string; // 문의 연락처
  applicationMethodDetail?: string; // 신청 방법
  supportAmount?: string; // 지원 금액
  from: string;
}

export type sortByTypes = "asc" | "desc" | " viewCount" | "scrapCount";
