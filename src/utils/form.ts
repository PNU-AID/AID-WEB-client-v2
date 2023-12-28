// form에 관련된 유틸 함수

/**
 * 이메일 주소의 유효성을 검증합니다.
 *
 * @param email - 검증하고자 하는 이메일 주소
 * @returns 유효한 이메일 주소인 경우 true, 그렇지 않으면 false
 */
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

/**
 * 전화번호의 유효성을 검증합니다.
 *
 * @param phone - 검증하고자 하는 전화번호
 * @returns 유효한 전화번호인 경우 true, 그렇지 않으면 false
 */
export function isPhoneNumber(phone: string) {
  if (/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/.test(phone)) {
    return true;
  }
  return false;
}

/**
 * URL의 유효성을 검증합니다.
 *
 * @param urlString - 검증하고자 하는 URL
 * @returns 유효한 URL인 경우 true, 그렇지 않으면 false
 */
export function isUrl(urlString: string) {
  try {
    new URL(urlString);
    return true;
  } catch (error) {
    return false;
  }
}
