import { useState } from "react";
import Category from "./Category";
const Nestedcategory = ({Ncat}) => {
 // console.log(Ncat);
  
  const [show,setshow] = useState(-1);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-fit flex flex-col justify-center items-start w-2/4 border-black mb-2 mt-5">
        <h1 className="w-fit h-fit flex  text-2xl font-extrabold mb-5">
          {Ncat.title}
        </h1>
        {Ncat.categories.map((dat,index)=> <Category key={index} cat={dat} index={index} show={show} expand={setshow}/>)}
      </div>
      <div className="w-2/4 h-4 bg-gray-200"></div>
    </div>
  );
};

export default Nestedcategory;
