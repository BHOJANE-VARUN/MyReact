import { Aboutusclass } from "./Usercard"
import userCon from "../utils/userContext";

const Aboutus = () => {
    return (
        <div>
             <Aboutusclass name={"varun"}/>
             <userCon.Consumer>
                {({name})=>{
                    return name;
                }}
             </userCon.Consumer>
         </div>
        
    )
}
export default Aboutus;
