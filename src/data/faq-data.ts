import { FaqCategory, FaqCategoryItem } from '../type/faq';

export const faqCategoryList: FaqCategoryItem[] = [
  {
    categoryId: FaqCategory.TOP,
    categoryName: '질문 TOP',
    contentList: [
      {
        contentId: 1,
        contentTitle: 'AID는 어떤 동아리인가요?',
        content:
          '스터디를 통해 최신 AI 기술과 연구 동향에 대해 주도적으로 탐구, 실질적인 프로젝트를 기반으로 AI 모델을 개발 스터디를 통해 최신 AI 기술과 연구 동향에 대해 주도적으로 탐구',
        categoryId: FaqCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 5,
        contentTitle: '4학년도 가입가능할까요?',
        content: '네!',
        categoryId: FaqCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 6,
        contentTitle: 'MT 가나요?',
        content: '저는 안 갈듯',
        categoryId: FaqCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 7,
        contentTitle: '생성형 인공지능 개발할 수 있나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: FaqCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 8,
        contentTitle: '코딩 잘해야 하나요??',
        content: '당근이죠',
        categoryId: FaqCategory.TOP,
        date: '2024-01-14',
      },
    ],
  },
  {
    categoryId: FaqCategory.REGISTER,
    categoryName: '가입',
    contentList: [
      {
        contentId: 2,
        contentTitle: 'AID에 가입하려면 어떻게 해야하나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: FaqCategory.REGISTER,
        date: '2024-01-15',
      },
    ],
  },
  {
    categoryId: FaqCategory.STUDY,
    categoryName: '스터디',
    contentList: [
      {
        contentId: 3,
        contentTitle: '스터디는 반드시 해야하나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: FaqCategory.STUDY,
        date: '2024-01-14',
      },
    ],
  },
  {
    categoryId: FaqCategory.CONTEST,
    categoryName: '대회',
    contentList: [
      {
        contentId: 4,
        contentTitle: '대회나가면 상탈 수 있나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: FaqCategory.CONTEST,
        date: '2024-01-14',
      },
    ],
  },
];
