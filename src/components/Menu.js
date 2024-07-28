import Nestedcategory from "./Nestedcategory";
const Menu = ({ dataobj }) => {
  const cards = dataobj?.data?.cards;
  const itemCards = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;
  let listme = (cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards).filter((data)=>{
    return  data.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
  })
  console.log(listme);
  if (!Array.isArray(itemCards)) {
    return <div>No menu items available</div>;
  }

  return (
    <div>
      <Nestedcategory/>
  </div>
  );
};

export default Menu;
