import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnlineStatus";
const Heading = () => {
  const online = useOnline();
  return (
    <div className="flex justify-between items-center">
      <img
        alt="companyLogo"
        src={LOGO_URL}
        className="object-contain w-9p m-5"
      />
      <ul className="flex items-center justify-between w-6/12 mr-9">
        <li className="md:text-[170%] text-[100%]">Online Status:{online===true?"🟢":"🔴"}</li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/"}>Home</Link></li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/aboutus"}>About us</Link></li>
        <li className="md:text-[170%] text-[100%]"><Link to={"/contactus"}> Contact us</Link></li>
        <li className="md:text-[170%] text-[100%]">Cart</li>
      </ul>
    </div>
  );
};
export default Heading;