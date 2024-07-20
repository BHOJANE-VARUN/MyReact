const Menu = ({ dataobj }) => {
  const cards = dataobj?.data?.cards;
  const itemCards = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

  if (!Array.isArray(itemCards)) {
    return <div>No menu items available</div>;
  }

  return (
    <div>
      <h1>{dataobj?.data?.cards?.[0]?.card?.card?.text || 'No title available'}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((obj, index) => (
          <li key={index}>{obj?.card?.info?.name || 'Unnamed item'}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
