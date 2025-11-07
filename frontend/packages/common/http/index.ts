import { IFetchOptions } from "@cangqion/types/modules/http";
import { message } from "antd";


export async function http(options: IFetchOptions) {
    const { url, method, params, body } = options
    try {
        const f = await fetch(url, {
            method,
            body: body instanceof FormData ? body : JSON.stringify(body)
        })
        const res = await f.json()
        console.log(res);
        
    } catch (e) {
        message.error(e)
    }
}