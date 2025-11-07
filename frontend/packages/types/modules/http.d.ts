export interface IFetchOptions {
    url: string
    method: "GET" | "POST" | "PUT" | "DELETE",
    params?: Record<string, any>
    body?: Record<string, any> | FormData
}