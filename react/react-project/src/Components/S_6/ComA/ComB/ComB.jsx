import { useContext } from "react";
import { MyContext } from "../../S_6";


const ComB = () => {
    const info = useContext(MyContext)
    console.log(info);
    
    return ( 
        <>
        <h1>ComB-{info.email}</h1>
        <h1>ComB-{info.partner}</h1>
        </>
     );
}
 
export default ComB;