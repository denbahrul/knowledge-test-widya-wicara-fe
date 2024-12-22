import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "./async";
import { IProduct } from "../../types/product";

interface ProductState {
  entities?: IProduct[];
  currentProduct?: IProduct | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProductState = {
  entities: [],
  currentProduct: null,
  loading: "idle",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get product
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = "failed";
    });

    //get product by id
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.currentProduct = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getProductById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.currentProduct = null;
      state.loading = "failed";
    });

    //create product
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.entities = [...(state.entities || []), action.payload];
      state.loading = "succeeded";
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.loading = "failed";
    });

    //update product
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.entities = state.entities?.map((product) =>
        product.id === action.payload.id ? action.payload : product,
      );
      state.loading = "succeeded";
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = "failed";
    });

    //delete product
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.entities = state.entities?.filter(
        (product) => product.id !== action.payload,
      );
      state.loading = "succeeded";
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default productSlice.reducer;
