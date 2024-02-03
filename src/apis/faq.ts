import axios from 'axios';

export async function getCategoryList() {
  try {
    const res = await axios({
      method: 'get',
      url: '/homepage/api/faq/category',
    });
    // console.log(res.data);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      throw new Error(res.data.message);
    }
  } catch (e) {
    console.error(e);
    return [];
  }
}
