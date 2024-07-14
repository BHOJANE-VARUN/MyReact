import { LOGO_URL } from "../utils/constants";
const Heading = () => {
  return (
    <div className="heading">
      <img
        alt="companyLogo"
        src={LOGO_URL}
        className="logoimg"
      />
      <ul className="list">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default Heading;