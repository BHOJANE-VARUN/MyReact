import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnlineStatus";
const Heading = () => {
  const online = useOnline();
  return (
    <div className="heading">
      <img
        alt="companyLogo"
        src={LOGO_URL}
        className="logoimg"
      />
      <ul className="list">
        <li>Online Status:{online===true?"yes":"no"}</li>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/aboutus"}>About us</Link></li>
        <li><Link to={"/contactus"}> Contact us</Link></li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default Heading;