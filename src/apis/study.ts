import { StudyItem } from '@type/study';
import axios from 'axios';

export async function getStudyList(): Promise<StudyItem[] | undefined> {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/study',
    });

    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      throw new Error('소식 조회에 실패했습니다!');
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
