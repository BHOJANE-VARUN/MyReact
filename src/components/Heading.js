import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import userCon from "../utils/userContext";
import { useSelector } from "react-redux";

const Heading = () => {
  const cart = useSelector((store)=> store.cart.items);
  const online = useOnline();
  const {name} = useContext(userCon);
  const [log,setlog] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <img
        alt="companyLogo"
        src={LOGO_URL}
        className="object-contain w-9p m-5"
      />
      <ul className="flex items-center justify-between w-7/12 mr-9">
        <li className="md:text-[170%] text-[100%]">Online Status:{online===true?"🟢":"🔴"}</li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/"}>Home</Link></li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/aboutus"}>About us</Link></li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/contactus"}> Contact us</Link></li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/Cart"}>Cart ({cart.length})</Link></li>
        <li className="md:text-[170%] text-[100%]"><button onClick={()=>{log===true?setlog(false):setlog(true)}}>{log===true?"logout":"login"}</button></li>
        <li className="md:text-[170%] text-[100%]">{name}</li>      
      </ul>
    </div>
  );
};
export default Heading;