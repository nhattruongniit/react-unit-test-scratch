import { dataProduct } from "../mocks/dataProduct";

export const fetchProductDetail = async () => {
  const response = await new Promise((resolve) => resolve(dataProduct));
  return response;
};
