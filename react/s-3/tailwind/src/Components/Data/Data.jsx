const Data = (props) => {
    let {lName,age} = props
    return ( 
        <div className="mx-auto w-1/4 bg-[#2b2b2b] p-2 rounded-2xl text-white m-[20px]">
        <h4>first Name = {props.fName}</h4>
        <h4>last Name = {lName}</h4>
        <h4>age = {age}</h4>
        </div>
     );
}
 
export default Data;