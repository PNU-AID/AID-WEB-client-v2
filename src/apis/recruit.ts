import { RecruitmentData } from '@type/recruit';
import axios from 'axios';

export async function getRecruitInfo(): Promise<RecruitmentData | undefined> {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/recruit_info',
    });

    if (res.status >= 200 && res.status < 300) {
      return res.data.data;
    } else {
      throw new Error('모집 일젇 조회에 실패했습니다.');
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
