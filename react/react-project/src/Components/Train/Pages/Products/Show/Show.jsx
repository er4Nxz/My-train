import { Link, useParams } from "react-router-dom";
import { fetchProductsID } from "../../../Redux/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Show = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsID(id));
  }, []);

  return (
    <div className="p-5">
      {loading && <div className="spinner-border"></div>}
      {error && <div className="text-red-500">{error}</div>}
      {product && (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-5">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain mb-4 rounded"
          />
          <div className="mb-4">
            <span className="text-2xl font-bold text-green-600">
              {product.price}$
            </span>
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
            <Link
              to={"/Products"}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </Link>
            <Link
              to={`/Products/Edit/${id}`}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Edit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
