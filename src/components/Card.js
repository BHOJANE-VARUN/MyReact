import { CDN_URL } from "../utils/constants";
export const Card = ({ dat }) => {
  //console.log(dat);
  
  return (
    <div className="flex-col hover:shadow-2xl items-center rounded-xl shadow-sm h-fit w-60 bg-gray-50">
      <img
        className="p-1 mb-2 h-3/4 w-full"
        src={CDN_URL + dat.cloudinaryImageId}
      />
      <h3 className="ml-1">
        <strong>{dat.name}</strong>
      </h3>
      <h4 className="ml-1">{dat.cuisines.join(", ")}</h4>
      <h4 className="ml-1">{dat.avgRating} Star</h4>
      <h4 className="ml-1">{dat.sla.deliveryTime} minutes</h4>
    </div>
  );
};
export const proCard = (card) => {
  return ({datm}) => {
    return (
      <div>
        <label className="absolute m-1 text-white bg-red-700 font-serif p-1">HOT</label>
        <Card dat={datm} />
      </div>
    );
  };
};
