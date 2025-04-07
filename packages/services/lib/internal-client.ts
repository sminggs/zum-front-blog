export type ClientConfig = RequestInit;

class ApiClient {
  private async _fetch<TData>(url: string, options?: RequestInit): Promise<TData> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Accept: 'application/vnd.zum.resource-1.0+json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error('[FETCH ERROR]', {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        message: errorDetails.substring(0, 200),
        date: new Date().toLocaleDateString(),
      });
      throw new Error(`Error: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  }

  public async get<TData, TOption extends ClientConfig = {}>(
    url: string,
    option?: TOption,
  ): Promise<TData> {
    return this._fetch<TData>(url, {
      method: 'GET',
      ...option,
    });
  }
}

const client = new ApiClient();
export default client;
