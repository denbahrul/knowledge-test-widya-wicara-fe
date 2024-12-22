import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { apiV1 } from "../../libs/api";
import { IProduct } from "../../types/product";
import {
  CreateProductDTO,
  UpdateProductDTO,
} from "../../validation/productSchema";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/product");

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId: number, thunkAPI) => {
    try {
      const res = await apiV1.get(`/product/${productId}`);

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const createProduct = createAsyncThunk<IProduct, CreateProductDTO>(
  "product/createProduct",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "productImage" && value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append("productImage", file);
          });
        } else if (key !== "productImage") {
          formData.append(key, value);
        }
      });
      const res = await apiV1.post(`/product/create`, formData);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#181818",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });

        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const updateProduct = createAsyncThunk<
  IProduct,
  { data: UpdateProductDTO; productId: number }
>("product/updateProduct", async ({ data, productId }, thunkAPI) => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "productImage" && value instanceof FileList) {
        Array.from(value).forEach((file) => {
          formData.append("productImage", file);
        });
      } else if (key !== "productImage") {
        formData.append(key, value);
      }
    });
    const res = await apiV1.patch(`/product/update/${productId}`, formData);
    Swal.fire({
      icon: "success",
      title: res.data.message,
      showConfirmButton: false,
      background: "#181818",
      color: "#fff",
      iconColor: "#04A51E",
      timer: 1500,
    });
    return res.data.product;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: `${error.message}`,
        background: "#181818",
        color: "#fff",
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: number, thunkAPI) => {
    try {
      const res = await apiV1.delete(`/product/delete/${id}`);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#1D1D1D",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.data.id;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
