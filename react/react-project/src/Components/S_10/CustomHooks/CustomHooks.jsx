import useFetch from "./hooks/useFetch";

const CustomHooks = () => {
  const [data] = useFetch(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return (
    <>
      <div className="w-[100%] flex flex-wrap p-2 bg-accent justify-between">
        {data?.map((item) => {
          return (
            <div className="w-[40%] bg-amber-200 p-2 border" key={item.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CustomHooks;
