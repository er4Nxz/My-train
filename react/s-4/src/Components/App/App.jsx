import Person from "../Person/Person";
import img_1 from "../../../public/img/opium.jpg";
import Form from "../Form/Form";
const App = () => {
  {
    /* 
        defaultProps ( || or , in parametr function component)
        props(function)event
        components pair
        props(object)
        props(object in array)
        form (attr = multipate)
    */
  }
  // const firstName = "didi";
  // const print = (e) => console.log(e);
  // const person = [
  //   { fullName: "ali Ahmadi", age: 15 },
  //   { fullName: "erfan Ahmadi", age: 18 },
  // ];

  const printValue = (e) => {
    let multi = [...e.target.selectedOptions].map((item)=>item.value).toString()
    console.log(multi);
  };
  return (
    <>
      {/* <Person firstName={firstName} print={print} />
      <Person/>
      <Person>
        <h1 className="text-center text-2xl m-1">Hello-World</h1>
        <img src={img_1} />
      </Person>
      {person?.map((item, index) => {
        return <Person person={item} key={index + 1} />;
      })}
        */}
      {/* form 👇👇 */}
      <Form printValue={printValue} />
    </>
  );
};

export default App;
