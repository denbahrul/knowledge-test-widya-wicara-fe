import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateProductDTO,
  createProductSchema,
  UpdateProductDTO,
} from "../../../validation/productSchema";
import { getProductById, updateProduct } from "../../../stores/product/async";
import { useEffect } from "react";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.currentProduct);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductDTO>({
    resolver: zodResolver(createProductSchema),
  });

  useEffect(() => {
    dispatch(getProductById(+id!));
  }, []);

  useEffect(() => {
    if (product) {
      reset({
        productName: product.productName,
        description: product.description,
      });
    }
  }, [product, reset]);

  async function onSubmit(data: UpdateProductDTO) {
    await dispatch(updateProduct({ data, productId: +id! })).unwrap();
    navigate("/");
  }
  return (
    <div className="m-auto max-w-3xl" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-8 text-center text-xl font-bold">Update new product</p>
      <form className="flex flex-col gap-3">
        <FormInput
          {...register("productName")}
          type="Text"
          placeholder="Enter product name"
          label="Product Name"
        />
        {errors.productName && (
          <p className="text-rose-600">* {errors.productName.message}</p>
        )}
        <FormInput
          {...register("description")}
          type="Text"
          placeholder="Enter product description"
          label="Product Description"
        />
        {errors.description && (
          <p className="text-rose-600">* {errors.description.message}</p>
        )}
        <FormInput
          {...register("productImage")}
          type="file"
          label="Product Image"
        />
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {watch("productImage") &&
            Array.from(watch("productImage")).map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image as Blob)}
                alt="product photo"
                className="h-28 w-full rounded-md object-cover"
              />
            ))}
        </div>
        <Button
          buttonName={isSubmitting ? "Updating product..." : "Update product"}
          type="submit"
        />
      </form>
    </div>
  );
}
