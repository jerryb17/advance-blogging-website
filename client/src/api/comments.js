import { baseAPI } from "./base";

export function getComments(postId, options) {
  return baseAPI
    .get(`posts/${postId}/comments`, options)
    .then((res) => res.data);
}
