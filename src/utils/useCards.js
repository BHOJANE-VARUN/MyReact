import { useEffect, useState } from "react"

const useCards = ()=>{
    const [data,setdata] = useState(null);
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata = async () => {
        const raw = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsodata = await raw.json();
        const posdata =
          jsodata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setdata(posdata);
      };
    return data;
}
export default useCards;