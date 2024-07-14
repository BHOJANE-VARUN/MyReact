import Card from "./Card";
import { useEffect, useState } from "react";
const Body = () => {
  [Resturantslist,setResturants] = useState([]);
  useEffect(()=>{
    fetchdata();
  },[]);
  
  const fetchdata = async ()=>{
      const raw = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsodata = await raw.json();
      const posdata = jsodata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setResturants(posdata);
  }
  if(Resturantslist.length===0)
  {
    return (<h1>Loading....</h1>)
  }
  return (
    <div id="main">
      <button id="btn" onClick={() => {
        const filterlist = Resturantslist.filter((res)=>res.info.avgRating>4);
        setResturants(filterlist);
    }}>Click me</button>
      <div id="Cardcollect">
        {Resturantslist.map((datam) => (
          <Card key={datam.info.id} dat={datam.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
// data.cards[1].card.gridElements.infoWithStyle.restaurants