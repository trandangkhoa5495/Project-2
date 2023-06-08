import axiosClient from "./axiosClient";

class ProductAPI {
  static getAllProduct() {
    const url = "/productLish";
    return axiosClient.get(url);
  }
}
export default ProductAPI;
