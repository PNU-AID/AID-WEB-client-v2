import axios from 'axios';

export async function getNewsList() {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/news',
    });
    // console.log(res.data);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      throw new Error('소식 조회에 실패했습니다!');
    }
  } catch (e) {
    console.error(e);
    return [];
  }
}
