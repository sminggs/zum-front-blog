import ESTatClient from '@zuminternet/statistics';

declare global {
  interface window {
    historyStack: string[];
  }
}

export default class ESTatClientManager {
  private static instance: ESTatClient | null = null;
  private static isInstalled: boolean = false;
  private static historyAPIPatched: boolean = false;
  private static historyStack: string[] = [];

  private constructor() {}

  public static getInstance(): ESTatClient | null {
    if (typeof window === 'undefined') return null;

    if (!ESTatClientManager.instance) {
      ESTatClientManager.instance = new ESTatClient(window);
    }

    if (!ESTatClientManager.isInstalled) {
      ESTatClientManager.instance.install();
      ESTatClientManager.isInstalled = true;
    }

    return ESTatClientManager.instance;
  }

  /** 통계에 필요한 referrer 획득 */
  public static patchHistoryAPI() {
    if (this.historyAPIPatched) return;

    const { history, location } = window;
    this.historyStack = [location.href];

    const patchStateMethod = (originalMethod: typeof history.pushState) => {
      return function (this: History, data: any, unused: string, url?: string | URL | null) {
        const result = originalMethod.apply(this, [data, unused, url]);
        if (url) {
          ESTatClientManager.historyStack.push(location.origin + url.toString());
          if (ESTatClientManager.historyStack.length > 2) {
            ESTatClientManager.historyStack.shift();
          }
        }
        return result;
      };
    };

    history.pushState = patchStateMethod(history.pushState);
    history.replaceState = patchStateMethod(history.replaceState);

    this.historyAPIPatched = true;
  }

  public static getLastReferrer(): string {
    return this.historyStack.length > 1 ? this.historyStack[0] : document.referrer;
  }
}
