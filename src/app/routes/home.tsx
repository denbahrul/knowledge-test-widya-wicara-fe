import Navbar from "../../components/layout/navbar";
import ProductList from "../../features/product/component/product-list";

export default function HomePage() {
  return (
    <div className="m-auto max-w-[1280px]">
      <Navbar />
      <p>Welcome</p>
      <ProductList />
    </div>
  );
}
