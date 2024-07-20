import Shrimmer from "./ShrimmerUI";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import useResturantinfo from "../utils/useResturantinfo";

const Resturant = () => {
  const { resid } = useParams();
  const dataobj = useResturantinfo(resid);
  if (dataobj === null) {
    return <Shrimmer />;
  }
  //console.log(dataobj);
  const cards = dataobj?.data?.cards;
  const itemCards = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;
  //console.log(cards);
  if (!Array.isArray(itemCards)) {
    return <div>No menu items available</div>;
  }

  return <Menu dataobj={dataobj} />;
};

export default Resturant;
