import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product.service";
import { Button } from "../components/ui/button";
import StockSelect from "../components/StockSelect";
import { useContext, useState } from "react";
import { CartStore } from "../store/CartProvider";

const ProductDetail = () => {
  const { state,addCart } = useContext(CartStore);

  const [qty, setQty] = useState<number>(1);
  const { id } = useParams<{ id: string | undefined }>();
  const { data: product } = useQuery<Product>(["Product", id], () =>
    getProduct(id)
  );

  console.log(state)

  return (
    <div className=" flex gap-10">
      <div className="w-[30%]">
        <img src={product?.image} className="w-full" alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl">{product?.title}</h1>
        <p className="text-sm text-gray-500">{product?.description}</p>
        <h5 className="text-xl">{product?.price}</h5>
        <div>
          <StockSelect
            count={product?.rating.count}
            setQty={setQty}
            qty={qty}
          />
        </div>
        <div>
          <Button onClick={() => addCart({ product: product, qty: qty })}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
