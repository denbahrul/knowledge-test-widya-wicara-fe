import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import { useAppDispatch } from "../../../hooks/use-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateProductDTO,
  createProductSchema,
} from "../../../validation/productSchema";
import { createProduct } from "../../../stores/product/async";

export default function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductDTO>({
    resolver: zodResolver(createProductSchema),
  });

  async function onSubmit(data: CreateProductDTO) {
    await dispatch(createProduct(data)).unwrap();
    navigate("/");
  }
  return (
    <div className="m-auto max-w-3xl" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-8 text-center text-xl font-bold">Add new product</p>
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
          buttonName={
            isSubmitting ? "Creating product..." : "Crate new product"
          }
          type="submit"
        />
      </form>
    </div>
  );
}
