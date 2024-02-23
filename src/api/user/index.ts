import request from "@/untils/axios"
import { AxiosPromise } from "axios";

import {
    UserInfos,
    listMode

} from './types'


export function getiList(params:UserInfos):AxiosPromise<listMode> {

    return request({
        url: "/api/v1/dict/types/page",
        method: "get",
        params: params,
    
    })
    
}