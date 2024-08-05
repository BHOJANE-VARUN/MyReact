import { ITEM_URL } from "../utils/constants";
import { additem, removeitem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const Categoryoptions = ({item }) => {
    const Cartlist = useSelector((store)=> store.cart.items);
    const [get,setget] = useState(false);
    const dispatch = useDispatch();
    const handleclick = (itemx)=>{
      if(get===false)
      {
        dispatch(additem(itemx));
        setget(true);
      }else{
        dispatch(removeitem(itemx));
        setget(false);
      }
    }
    return (
      <div className="w-full h-fit p-5 flex my-5 border-b-2 justify-between">
        <div className="h-full w-4/6">
          <span className="font-bold text-xl text-gray-800">
            {item.name}
          </span>
          <br></br>
          <span className="font-bold text-base">₹{(item.price || item.finalPrice || item.defaultPrice)/100}</span>
          <p className="mt-3 font-medium text-gray-700">
            {item.description}
          </p>
        </div>
        <div>
          <button onClick={()=>{handleclick(item)}} className="text-green-700 font-bold text-lg border-0 h-10 w-28 absolute mt-32 bg-white border-black shadow-neutral-500 shadow-md rounded-xl ml-9">
            {Cartlist.includes(item)?"REMOVE":"ADD"}
          </button>
          <img
            className="h-40 w-44 rounded-2xl"
            src= {ITEM_URL + item.imageId}
          ></img>       
        </div>
      </div>
    );
  };
export default Categoryoptions;
