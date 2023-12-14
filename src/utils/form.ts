// form에 관련된 유틸 함수

export function isEmail(email: string) {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
}

export function isPhoneNumber(phone: string) {
  if (/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/.test(phone)) {
    return true;
  }
  return false;
}

export function isUrl(urlString: string) {
  try {
    new URL(urlString);
    return true;
  } catch (error) {
    return false;
  }
}
