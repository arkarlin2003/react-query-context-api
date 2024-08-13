import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import { CartStore } from "../store/CartProvider";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const {addCart} = useContext(CartStore)
  return (
    <Card>
      <CardContent>
        <img src={product.image} className="w-32 h-44 mx-auto py-3" alt="" />
        <CardTitle className="text-xl mb-3 font-light">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </CardTitle>
        <p className="text-lg font-bold">{product.price}</p>
        <div className="mt-3">
          <Button onClick={() => addCart({product,qty:1})}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
