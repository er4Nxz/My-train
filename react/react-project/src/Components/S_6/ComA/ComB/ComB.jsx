import { useContext } from "react";
import { MyContext } from "../../S_6";


const ComB = () => {
    // const {email,partner} = useContext(MyContext)
    return ( 
        <>
        <h1>ComB-{email}</h1>
        <h1>ComB-{partner}</h1>
        </>
     );
}
 
export default ComB;