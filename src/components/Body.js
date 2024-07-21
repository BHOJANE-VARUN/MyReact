import { Link } from "react-router-dom";
import Card from "./Card";
import Shrimmer from "./ShrimmerUI";
import { useEffect, useState } from "react";
import useOnline from "../utils/useOnlineStatus";

const Body = () => {
  const [Resturantslist, setResturants] = useState([]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const raw = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsodata = await raw.json();
    const posdata =
      jsodata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturants(posdata);
  };

  const status = useOnline();

  if (!status) {
    return <h1>Sorry, you went offline. Please check your internet connection.</h1>;
  }

  if (Resturantslist.length === 0) {
    return <Shrimmer />;
  }

  return (
    <div id="main">
      <div className="buttons">
        <button
          id="btn"
          onClick={() => {
            const filterlist = Resturantslist.filter(
              (res) => res.info.avgRating > 4
            );
            setResturants(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          id="textsearch"
          className="search"
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          id="srhbtn"
          onClick={() => {
            const btn = document.getElementById("textsearch");
            setSearch(btn.value);
          }}
        >
          Search
        </button>
      </div>
      <div id="Cardcollect">
        {Resturantslist.filter((datam) => {
          if (Search.length === 0) {
            return true;
          } else {
            return datam.info.name.toLowerCase().includes(Search.toLowerCase());
          }
        }).map((datam) => (
          <Link className="anchor" key={datam.info.id} to={"/resturant/" + datam.info.id}>
            <Card dat={datam.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
