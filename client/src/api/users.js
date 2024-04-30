import { baseAPI } from "./base";

export function getUsers(options) {
  return baseAPI.get("users", options).then((res) => res.data);
}
export function getUser(userId, options) {
  return baseAPI.get(`users/${userId}`, options).then((res) => res.data);
}
