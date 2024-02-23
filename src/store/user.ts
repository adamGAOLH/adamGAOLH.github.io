import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {

    state: () => {
        return {
            userInfo: {
                name: 'zangmsan',
                age: 18

            },
            token: 'usermsse'

        }
    },
    getters: {
        newName: (state) => state.userInfo.name + 'vip',

    },
    actions: {
        updatedUseInfo(userInfo: { name: string, age: number }) {
            this.userInfo = userInfo
        },
        resetToken(tokens: string) {
            this.token = tokens


        }
    },
    persist: true //数据持久化
    //修改key及存储位置 将persist: true,改为
    // persist: {
    //     key: 'storekey', // 修改存储的键名，默认为当前 Store 的 id
    //     storage: window.sessionStorage, // 存储位置修改为 sessionStorage
    // },
    // 自定义持久化字段
    //persist:{
    // paths:["userInfo.name"]
    //}


})