import type { ILogin } from "@cangqion/types/modules/employee";
import { http } from "@cangqion/common/http";

// 登录
export const login = (data: ILogin) => http({
    url: "/v1/employee/login",
    method: 'POST',
    body: data
})