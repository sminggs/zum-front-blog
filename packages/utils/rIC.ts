/** 사파리 등 rIC 미지원 브라우저 대응 */
export const rIC = (callback: () => void) => {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(callback);
  } else {
    window.setTimeout(callback, 1);
  }
};
