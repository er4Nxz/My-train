import Person from "../Person/Person";
import img_1 from "../../../public/img/opium.jpg";
const App = () => {
  {
    /* 
        defaultProps ( || or , in parametr function component)
        props(function)event
        components pair
        props(object)
        props(object in array)
    */
  }
  const firstName = "didi";
  const print = (e) => console.log(e);
  const person = [
    { fullName: "ali Ahmadi", age: 15 },
    { fullName: "erfan Ahmadi", age: 18 },
  ];
  return (
    <>
      {/* <Person firstName={firstName} print={print} />
      <Person/>
      <Person>
        <h1 className="text-center text-2xl m-1">Hello-World</h1>
        <img src={img_1} />
      </Person> */}
      {person?.map((item, index) => {
        return <Person person={item} key={index + 1} />;
      })}
    </>
  );
};

export default App;
