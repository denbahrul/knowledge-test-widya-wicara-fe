import { useEffect } from "react";
import Card from "../../../components/ui/card";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getProduct } from "../../../stores/product/async";
import Button from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { entities, loading } = useAppSelector((state) => state.product);
  const products = entities;

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading === "pending") {
    return <p>Loading</p>;
  }

  if (!products) {
    return <p>No products found</p>;
  }
  return (
    <div className="p-4">
      <div className="flex justify-center pb-8">
        <Button
          onClick={() => navigate("add-product")}
          buttonName="Add new product"
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              productImage={product.productImage}
              productName={product.productName}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}
