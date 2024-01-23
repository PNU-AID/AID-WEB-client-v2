import axios from 'axios';

export async function getCategoryList() {
  try {
    const res = await axios({
      method: 'get',
      url: '/homepage/api/qna/category',
    });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
