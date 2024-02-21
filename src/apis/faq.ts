import { FaqContentItem } from '@type/faq';
import axios from 'axios';

export async function getCategoryList(): Promise<FaqContentItem[] | undefined> {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/faq',
    });
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      throw new Error('FAQ 조회에 실패했습니다!');
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
