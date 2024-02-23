import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useUserStore } from "@/store/user"
import ElMessage from "element-plus/es/components/message";
import { ElMessageBox } from "element-plus/es/components/message-box";

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
    headers: { "Content-Type": "application/json;charset=utf-8" },

})

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const userInfo = useUserStore()
        if (userInfo.token) {
            config.headers.Authorization = userInfo.token
        }
        return config

    },
    (error: any) => {

        return Promise.reject(error)
    }

)

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { code, msg } = response.data
        if (code == '000') {
            return response.data

        }
        // 响应数据为二进制流处理(Excel导出)
        if (response.data instanceof ArrayBuffer) {
            return response
        }
        ElMessage.error(msg || "Error")
        return Promise.reject(new Error(msg || "Error"))

    },
    (error: any) => {
        if (error.response.data) {
            const { code, msg } = error.response.data
            //token过期
            if (code == '11111') {
                ElMessageBox.confirm("当前页面已失效，请重新登录", "提示", {
                    confirmButtonText: "确定",
                    type: "warning",
                }).then(() => {
                    const userStore = useUserStore();
                    console.log(userStore);
                    
                    // userStore.resetToken().then(() => {
                    //     location.reload();
                    // });
                });

            } else {
                ElMessage.error(msg || "系统出错");

            }

        }
        return Promise.reject(error.message);

    }
)

// 导出 axios 实例
export default service;