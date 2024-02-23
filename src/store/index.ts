import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
const store = createPinia();
store.use(piniaPluginPersistedstate) //数据持久化
export default store