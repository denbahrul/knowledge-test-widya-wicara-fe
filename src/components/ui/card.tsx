import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/use-store";
import { deleteProduct } from "../../stores/product/async";
import { IProduct } from "../../types/product";

export default function Card({
  id,
  productImage,
  productName,
  description,
}: IProduct) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onDelete(id: number) {
    dispatch(deleteProduct(id));
  }
  return (
    <div className="flex flex-col gap-2 rounded-xl p-4 shadow-md">
      <img
        className="h-72 w-full rounded-md object-cover"
        src={
          productImage ??
          "https://cdn.dribbble.com/userupload/13549563/file/original-6ae54ebaabdcdf37e039a332113c4295.png?resize=1024x768&vertical=center"
        }
      />
      <div>
        <p className="text-lg font-bold">{productName}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex justify-between gap-1">
        <button
          onClick={() => navigate(`/update-product/${id}`)}
          className="w-full rounded-md bg-blueB p-1 text-center text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="w-full rounded-md bg-blackA p-1 text-center text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
