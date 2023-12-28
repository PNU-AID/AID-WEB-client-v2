/**
 * 주어진 경로에 대해 'Dark Mode' 페이지인지 여부를 판단합니다.
 *
 * 이 함수는 특정 경로들이 Dark Mode를 사용하는 페이지인지 확인합니다.
 * 현재 '/apply', '/about', '/register' 경로에서는 Dark Mode를 사용한다고 가정합니다.
 *
 * @param path - 현재 페이지의 경로
 * @returns Dark Mode를 사용하는 페이지인 경우 true, 그렇지 않으면 false를 반환합니다.
 */
export function isDarkPage(path: string) {
  return path === '/apply' || path === '/about' || path === '/register';
}

/**
 * 주어진 경로가 인증(로그인/회원가입) 페이지가 아닌지 여부를 판단합니다.
 *
 * 이 함수는 '/login'과 '/register' 경로를 제외한 모든 경로를
 * 인증이 필요하지 않은 페이지로 간주합니다.
 *
 * @param path - 현재 페이지의 경로
 * @returns 인증 페이지가 아닐 경우 true, 인증 페이지일 경우 false를 반환합니다.
 */
export function isNotAuthPage(path: string) {
  return path !== '/login' && path !== '/register';
}
