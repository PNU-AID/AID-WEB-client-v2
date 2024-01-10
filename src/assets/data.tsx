import study1Img from '../assets/images/curriculums/study.png';
import study2Img from '../assets/images/curriculums/study.png';
import study3Img from '../assets/images/curriculums/study.png';
import study4Img from '../assets/images/curriculums/study.png';
import study1BgImg from '../assets/images/curriculums/study1_bg.png';
import study2BgImg from '../assets/images/curriculums/study2_bg.png';
import study3BgImg from '../assets/images/curriculums/study3_bg.png';
import study4BgImg from '../assets/images/curriculums/study4_bg.png';

export const data = {
  title: 'Curriculum',
  subtitle:
    '다양한 스터디와 프로젝트를 운영하고 있으며, 기존에 없는 스터디 및 프로젝트도 직접 생성하고 모집할 수 있습니다.',
  list: [
    {
      image: study1Img,
      bgImage: study1BgImg,
      title: 'study1',
      description: 'description1',
      linkText: 'Learn more →',
      delay: '400',
    },
    {
      image: study2Img,
      bgImage: study2BgImg,
      title: 'study2',
      description: 'description2',
      linkText: 'Learn more →',
      delay: '700',
    },
    {
      image: study3Img,
      bgImage: study3BgImg,
      title: 'study3',
      description: 'description3',
      linkText: 'Learn more →',
      delay: '1000',
    },
    {
      image: study4Img,
      bgImage: study4BgImg,
      title: 'study4',
      description: 'description4',
      linkText: 'Learn more →',
      delay: '1300',
    },
  ],
};

export const studyData = [
  {
    id: 1,
    name: 'AID_WEB(frontend)',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '',
    status: '모집 중',
    image: study1Img,
  },
  {
    id: 2,
    name: 'AID_WEB(backend)',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '',
    status: '모집 중',
    image: study1Img,
  },
  {
    id: 3,
    name: '논문스터디',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '논문',
    status: '진행 중',
    image: study1Img,
  },
  {
    id: 4,
    name: '자연어',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '자연어',
    status: '진행 완료',
    image: study1Img,
  },
  {
    id: 5,
    name: '혼자 공부하는 머신러닝',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '머신러닝',
    status: '진행 완료',
    image: study1Img,
  },
  {
    id: 6,
    name: '혼자 공부하는 머신러닝',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '머신러닝',
    status: '진행 완료',
    image: study1Img,
  },
  {
    id: 7,
    name: '혼자 공부하는 머신러닝',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '머신러닝',
    status: '진행 완료',
    image: study1Img,
  },
  {
    id: 8,
    name: '혼자 공부하는 머신러닝',
    info: '스터디장: aaa',
    number: '모집인원: 10명',
    target: '모집대상: ~~~~',
    how: '대면/비대면: 비대면',
    date: '모집기간: 10.01 - 10.10',
    category: '머신러닝',
    status: '진행 완료',
    image: study1Img,
  },
];

export const categoryData = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: '논문',
  },
  {
    id: 3,
    name: '자연어',
  },
  {
    id: 4,
    name: '머신러닝',
  },
];

export const statusData = [
  {
    id: 1,
    name: '모집 중',
  },
  {
    id: 2,
    name: '진행 중',
  },
  {
    id: 3,
    name: '진행 완료',
  },
];
