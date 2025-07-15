import { Link } from "react-router-dom";

const Item = ({item}) => {
  return (
    <div
      className="border rounded-2xl p-2 m-2 w-[300px] h-[420px] flex flex-col justify-between"
    >
      <h5>
        <Link to={`/Products/${item.id}`} style={{ color: "red" }}>
          {item.title}
        </Link>
      </h5>
      <h5>{item.price}$</h5>
      <p className="text-[14px]">{item.discription}</p>
      <img
        src={item.image}
        className="w-30 h-40 object-contain block mx-auto hover:scale-120 transition duration-300"
      />
    </div>
  );
};

export default Item;
