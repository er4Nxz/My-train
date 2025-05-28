const Person = ({ firstName="lala",print,children, person }) => {
  const { fullName, age } = person;
  return (
    <div className="w-1/5 p-4 bg-amber-500 mx-auto mt-10 rounded-2xl">
      {/* <h4>firstName = {firstName}</h4>
      <h4>lastName = {lastName || "Ahmadi"}</h4>
      <button
        onClick={(e) => print(e.target)}
        className="bg-green-400 px-2 py-1 block mx-auto rounded-2xl cursor-pointer"
      >
        click me
      </button>
      <div>{children}</div> */}
      <h4>full name : {fullName}</h4>
      <h4>age : {age}</h4>
    </div>
  );
};
export default Person;
