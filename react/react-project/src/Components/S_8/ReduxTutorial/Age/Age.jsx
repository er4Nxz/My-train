import { useDispatch, useSelector } from "react-redux";
import { incFuncAge, decFuncAge, resetFuncAge } from "../Redux/Age/AgeAction";
const Age = () => {
  const Age = useSelector((state) => state.Age.Age);

  const dispatch = useDispatch();
  return (
    <>
      <div className="w-1/4 bg-accent p-2 mx-auto  rounded-2xl mt-2">
        <h2 className="text-white">Age : {Age}</h2>
        <button
          className="btn btn-sm btn-accent bg-white mx-2"
          onClick={() => {
            dispatch(incFuncAge());
          }}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-accent bg-white mx-2"
          onClick={() => {
            dispatch(decFuncAge());
          }}
          disabled={Age == 18 ? "disable" : null}
        >
          -
        </button>
        <button
          className="btn btn-sm btn-accent bg-white mx-2"
          onClick={() => {
            dispatch(resetFuncAge());
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Age;
