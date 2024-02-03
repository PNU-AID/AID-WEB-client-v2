import axios from 'axios';

export async function postSignup(
  nickname: string,
  email: string,
  password: string
) {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/register',
      data: {
        nick_name: nickname,
        email,
        password,
      },
    });
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function postLogin(email: string, password: string) {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login',
      data: {
        email,
        password,
      },
    });
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
