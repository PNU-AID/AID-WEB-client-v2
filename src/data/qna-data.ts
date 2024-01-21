import { QnaCategory, QnaCategoryItem } from '../type/qna';

export const qnaCategoryList: QnaCategoryItem[] = [
  {
    categoryId: 0,
    categoryName: '질문 TOP',
    contentList: [
      {
        contentId: 1,
        contentTitle: 'AID는 어떤 동아리인가요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 5,
        contentTitle: '4학년도 가입가능할까요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 6,
        contentTitle: 'MT 가나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 7,
        contentTitle: '생성형 인공지능 개발할 수 있나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.TOP,
        date: '2024-01-14',
      },
      {
        contentId: 8,
        contentTitle: '코딩 잘해야 하나요??',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.TOP,
        date: '2024-01-14',
      },
    ],
  },
  {
    categoryId: 1,
    categoryName: '가입',
    contentList: [
      {
        contentId: 2,
        contentTitle: 'AID에 가입하려면 어떻게 해야하나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.REGISTER,
        date: '2024-01-15',
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: '스터디',
    contentList: [
      {
        contentId: 3,
        contentTitle: '스터디는 반드시 해야하나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.STUDY,
        date: '2024-01-14',
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: '대회',
    contentList: [
      {
        contentId: 4,
        contentTitle: '대회나가면 상탈 수 있나요?',
        content: 'ㅁㄹㄴㅇㄻㅇㄹㄴㅁㄹ',
        categoryId: QnaCategory.CONTEST,
        date: '2024-01-14',
      },
    ],
  },
];
