const Item = ({ item }) => {
  return (
    <>
      <div className="p-3 m-2 rounded-2xl bg-amber-600 w-[100%]">
        <h4>{item.title}</h4>
        <p className="text-justify">{item.description}</p>
      </div>
    </>
  );
};

export default Item;
