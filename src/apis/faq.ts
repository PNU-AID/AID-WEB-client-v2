import axios from 'axios';

export async function getCategoryList() {
  try {
    const res = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/faq/category',
    });
    // console.log(res.data);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      throw new Error('FAQ 조회에 실패했습니다!');
    }
  } catch (e) {
    console.error(e);
    return [];
  }
}
