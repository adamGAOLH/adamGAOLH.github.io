// 生明window上自定义属性  如事件总线
declare interface window {
  eventBus: any;
}

// 生命.vue文件
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}
