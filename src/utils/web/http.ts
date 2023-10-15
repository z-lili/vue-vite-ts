import axios from "axios"

class Request {
  private instance: any
  private defaultConfig = {
    baseURL: "/api",
    timeout: 5000,
  }
  private interceptorHook: any
  constructor(config: any) {
    this.instance = axios.create(Object.assign(this.defaultConfig, config))
    this.interceptorHook = config.interceptorHook
    this.setupInterceptors()
  }

  // 通用拦截，在初始化时就进行注册和运行，对基础属性进行处理
  private setupInterceptors() {
    this.instance.interceptors.request.use(
      this.interceptorHook?.requestInterceptor,
      this.interceptorHook?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorHook?.responseInterceptor,
      this.interceptorHook?.responseInterceptorCatch
    )
  }

  // 请求
  public request(config: any) {
    return this.instance.request(config)
  }

  public get(url: string, data: object) {
    return this.instance.get(url, {
      params: data,
    })
  }

  public post(url: string, data: object, config?: any) {
    return this.instance.post(url, data, config)
  }

  public put(url: string, data: object, config?: any) {
    return this.instance.put(url, data, config)
  }

  public delete(url: string, config: any) {
    return this.instance.delete(url, config)
  }
}

export default Request
