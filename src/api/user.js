import axiosClient from "./axiosClient";

export class UserAPI {
  static register(param) {
    const url = "/register";
    return axiosClient.post(url, param);
  }
  static login(param) {
    const url = "/login";
    return axiosClient.post(url, param);
  }
  static getAllUsers() {
    const url = "/users";
    return axiosClient.get(url);
  }
  static updateUser(param) {
    const url = `/users/${param.id}`;
    return axiosClient.patch(url, param);
  }
  static deleteUser(param) {
    const url = `/users/${param}`;
    return axiosClient.delete(url);
  }
}
