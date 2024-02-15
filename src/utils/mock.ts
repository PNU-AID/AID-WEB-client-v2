/**
 * 개발 모드(DEV)일 때만, api 모킹 처리 로직을 킨다.
 * msw: api 모킹을 위한 라이브러리
 * worker: 클라이언트에서 요청하는 api를 네트워크단에서 가로채는 Service Worker를 등록하는 객체
 */
export async function enableMocking() {
  // 백엔드에 직접 api 요청을 날리고 싶다면, 아래 주석을 해제하라.
  //return;
  if (import.meta.env.DEV) {
    return;
  }

  const { worker } = await import('../mocks/browser');
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  });
}
