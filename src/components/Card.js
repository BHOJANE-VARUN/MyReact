import { CDN_URL } from "../utils/constants";
const Card = ({ dat }) => {
  return (
    <div className="card">
      <img
        className="cardimg"
        src={
          CDN_URL +
          dat.cloudinaryImageId
        }
      />
      <h3><strong>{dat.name}</strong></h3>
      <h4>{dat.cuisines.join(", ")}</h4>
      <h4>{dat.avgRating} Star</h4>
      <h4>{dat.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default Card;
