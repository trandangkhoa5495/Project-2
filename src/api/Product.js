import axiosClient from "./axiosClient";

class ProductAPI {
  static getAllProduct() {
    const url = "/productLish";
    return axiosClient.get(url);
  }
  static deleteAPIprodcut(param) {
    const url = `/productLish/${param}`;
    return axiosClient.delete(url);
  }
}
export default ProductAPI;
