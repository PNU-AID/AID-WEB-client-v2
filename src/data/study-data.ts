import { StudyItem } from '../type/study';
import img from '../assets/study.png';

export const StudyItemList: StudyItem[] = [
  {
    id: 1,
    leaderId: 1,
    status: '모집 중',
    studyName: 'AID_WEB(frontend)',
    studyDescription:
      '기본적으로 리액션을 할 줄 알고 Typescript 어쩌구 저쩌구...... 하는 분을 구합니다.',
    imgUrl: img,
    // 추가
    category: '프로젝트',
    date: '2024.01.01',
    number: '10',
    target: '파이썬에 능숙하신 분~~~~',
    leader: '박시형',
  },
  {
    id: 2,
    leaderId: 2,
    status: '모집 완료',
    studyName: 'AID_WEB(backend)',
    studyDescription:
      '기본적으로 파이썬을 할 줄 알고 나랑 인공지능을 함께 할 사람어디 없나요 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 이렇게까지 길어지면 어떡해 ~~~~~~~를 알고 있는 분을 구합니다.',
    imgUrl: img,
    // 추가
    category: '프로젝트',
    date: '2024.01.01',
    number: '10',
    target: '파이썬에 능숙하신 분~~~~',
    leader: '박시형',
  },
  {
    id: 3,
    leaderId: 3,
    status: '모집 중',
    studyName: '논문 스터디',
    studyDescription:
      '기본적으로 리액션을 할 줄 알고 Typescript 어쩌구 저쩌구...... 하는 분을 구합니다.',
    imgUrl: img,
    // 추가
    category: '스터디',
    date: '2024.01.01',
    number: '10',
    target: '파이썬에 능숙하신 분~~~~',
    leader: '박시형',
  },
  {
    id: 4,
    leaderId: 4,
    status: '모집 중',
    studyName: '인공지능 스터디',
    studyDescription:
      '기본적으로 리액션을 할 줄 알고 Typescript 어쩌구 저쩌구...... 하는 분을 구합니다.',
    imgUrl: img,
    // 추가
    category: '스터디',
    date: '2024.01.01',
    number: '10',
    target: '파이썬에 능숙하신 분~~~~',
    leader: '박시형',
  },
  {
    id: 5,
    leaderId: 5,
    status: '모집 중',
    studyName: '백준 스터디',
    studyDescription:
      '기본적으로 리액션을 할 줄 알고 Typescript 어쩌구 저쩌구...... 하는 분을 구합니다.',
    imgUrl: img,
    // 추가
    category: '스터디',
    date: '2024.01.01',
    number: '10',
    target: '파이썬에 능숙하신 분~~~~',
    leader: '박시형',
  },
  {
    id: 6,
    leaderId: 6,
    status: '모집 완료',
    studyName: '기상 스터디',
    studyDescription:
      '기본적으로 리액션을 할 줄 알고 Typescript 어쩌구 저쩌구...... 하는 분을 구합니다.',
    imgUrl: img,
    // 추가
    category: '스터디',
    date: '2024.01.01',
    number: '10',
    target: '파이썬에 능숙하신 분~~~~',
    leader: '박시형',
  },
];

export const categoryData = [
  {
    id: 1,
    name: '전체',
  },
  {
    id: 2,
    name: '프로젝트',
  },
  {
    id: 3,
    name: '스터디',
  },
];

export const onOffline = [
  { value: 'offline', label: '대면' },
  { value: 'online', label: '비대면' },
  { value: 'both', label: '대면/비대면' },
];
