import { baseAPI } from "./base";

export function getPosts(options) {
  return baseAPI.get("posts", options).then((res) => res.data);
}
export function getPost(postId, options) {
  return baseAPI.get(`posts/${postId}`, options).then((res) => res.data);
}
export function createPost(data, options) {
  return baseAPI.post("posts", data, options).then((res) => res.data);
}
export function updatePost(postId, data, options) {
  return baseAPI.put(`posts/${postId}`, data, options).then((res) => res.data);
}
