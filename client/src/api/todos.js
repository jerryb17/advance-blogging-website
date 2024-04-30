import { baseAPI } from "./base";

export function getTodo(options) {
  return baseAPI.get("todos", options).then((res) => res.data);
}
