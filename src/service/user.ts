import request from "@/utils/web/index.ts"

export function getMessage(config: object) {
  return request.get("/moment", config)
}

export function login(config: object) {
  return request.post("/login", config)
}
