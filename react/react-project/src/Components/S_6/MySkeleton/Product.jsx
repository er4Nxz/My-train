import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Product = ({ pro }) => {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [rate, setRate] = useState(null);
  const [count, setCount] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setTitle(pro.title.substr(0, 10));
      setPrice(pro.price);
      setCategory(pro.category);
      setDescription(pro.description.substr(0, 40));
      setImage(pro.image);
      setRate(pro.rating.rate);
      setCount(pro.rating.count);
    }, 3000);
  }, []);
  return (
    <div className="col-2 border rounded-2xl mt-2 flex row justify-between gap-2 ">
      {/* این حالت عادیشه ک از قبل در دیتابیس موجوده و ما فقط کدشو باید نمایش بدیم  و در این حالت هم لازم نیست تمام ای پی ای هارو داخل یوز استیت قرار بدیم*/}
      <h5>{title ? title : <Skeleton />}</h5>
      {/* ولی این حالت جوریه که بخوایم تاخیر فیک بدیم و باید داخل یوز افکت ست تایم اوت بزنیم  */}
      <h5>{price || <Skeleton inline width={90} />}$</h5>
      <h5 className="fw-normal">{category || <Skeleton />}</h5>
      <p>{description || <Skeleton count={2} />}</p>
      {image ? (
        <img
          src={image}
          className="w-30 block mx-auto hover:scale-120 transition duration-300"
        />
      ) : (
        <Skeleton height={200} />
      )}
      <div className="flex justify-between">
        <h5>rate:{rate || <Skeleton inline width={50} />}</h5>
        <h5>count:{count || <Skeleton inline width={50} />}</h5>
      </div>
    </div>
  );
};

export default Product;
