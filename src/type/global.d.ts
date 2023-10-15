// typeScript 的声明文件，用于提供类型信息以及对外部库、模块或代码的类型定义

//声明window上自定义属性，如事件总线
declare interface Window {
  eventBus: any
}

//声明.vue文件
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<object, object, any>
  export default component
}
