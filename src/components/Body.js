import { Link } from "react-router-dom";
import {Card , proCard} from "./Card";
import Shrimmer from "./ShrimmerUI";
import { useEffect, useState } from "react";
import useOnline from "../utils/useOnlineStatus";
import useCards from "../utils/useCards";

const Body = () => {
  const [Search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const Resturantslist = useCards();
  const status = useOnline();
  const Procard = proCard(Card);
  useEffect(() => {
    if (Resturantslist) {
      setFilteredRestaurants(Resturantslist);
    }
  }, [Resturantslist]);

  if (!status) {
    return <h1>Sorry, you went offline. Please check your internet connection.</h1>;
  }
  if (Resturantslist === null) {
    return <Shrimmer />;
  }

  const handleTopRatedClick = () => {
    setFilteredRestaurants(Resturantslist.filter(res => res.info.avgRating > 4));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    setFilteredRestaurants(Resturantslist.filter(datam =>
      datam.info.name.toLowerCase().includes(Search.toLowerCase())
    ));
  };
  return (
    <div className="">
      <div className="buttons">
        <button
          id="btn"
          className="text-white bg-blue-100 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5"
          onClick={handleTopRatedClick}
        >
          Top Rated Restaurants
        </button>
        <br></br>
        <input
          type="text"
          id="textsearch"
          className="border border-black m-4 rounded-2xl w-64 h-11"
          placeholder=" What's greaving?"
          onChange={handleSearchChange}
        />
        <button
          id="srhbtn"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-950 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.filter((datam) => {
          if (Search.length === 0) {
            return true;
          } else {
            return datam.info.name.toLowerCase().includes(Search.toLowerCase());
          }
        }).map((datam) => (
          <Link className="h-1/4 w-1/4 p-10" key={datam.info.id} to={"/resturant/" + datam.info.id}>
            {datam.info.avgRating>4.5?<Procard datm={datam.info} /> :<Card dat={datam.info} />}      
          </Link>
        ))
        }
      </div>
    </div>
  );
};

export default Body;
