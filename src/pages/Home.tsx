import { useQuery } from "react-query";
import { getProducts } from "../services/product.service";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["Products"],
    queryFn: getProducts,
  });

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
