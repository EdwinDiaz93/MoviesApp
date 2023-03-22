class HttpFactory {

    protected static async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const result: T = await response.json();
        return result;
    }

    protected static async post<T>(url: string, method: string, data: object): Promise<T> {
        const response = await fetch(url, { method, body: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
        const result: T = await response.json();
        return result;
    }
}

export default HttpFactory;