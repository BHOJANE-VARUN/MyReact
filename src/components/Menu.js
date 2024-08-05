import Nestedcategory from "./Nestedcategory";
const Menu = ({ dataobj }) => {
  const cards = dataobj?.data?.cards;
  const itemCards = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;
  let listme = (cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards).filter((data)=>{
    return  data.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
  })
  if (!Array.isArray(itemCards)) {
    return <div>No menu items available</div>;
  }
  return (
    <div>
      {listme.map((dat,index)=>
        {
          //console.log(dat);
          
          return <Nestedcategory key={index} Ncat={dat.card.card}/>
        })}
  </div>
  );
};

export default Menu;
