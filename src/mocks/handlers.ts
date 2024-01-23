import { http, HttpResponse } from 'msw';
import { qnaCategoryList } from '../data/qna-data';

export const handlers = [
  http.post('/auth', () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json({
      user: {
        id: 'abc-123',
        name: 'John Maverick',
      },
    });
  }),
  http.get('/study', () => {
    return HttpResponse.json({
      studyList: [
        {
          id: 123,
          name: '밑바닥부터 시작하는 딥러닝',
          leader: '박시형',
        },
        {
          id: 124,
          name: '혼자 공부하는 머신러닝',
          leader: '손봉국',
        },
        {
          id: 125,
          name: '강화학습 스터디',
          leader: '강준우',
        },
      ],
    });
  }),
  http.get('/homepage/api/qna/category', () => {
    return HttpResponse.json(qnaCategoryList);
  }),
];
