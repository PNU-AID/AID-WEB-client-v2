export function isDarkPage(path: string) {
  if (path === '/apply' || path === '/about' || path === '/register') {
    return true;
  }
  return false;
}

export function isNotAuthPage(path: string) {
  return path !== '/login' && path !== '/register';
}
