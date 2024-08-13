import { baseApi } from "./baseApi";

export const getProducts = async (): Promise<Product[]> => {
  const {data} = await baseApi.get<Product[]>("/products");
  return data;
};

export const getProduct = async(id:string|undefined):Promise<Product> => {
    const {data} = await baseApi.get<Product>(`/products/${id}`)
    return data
}