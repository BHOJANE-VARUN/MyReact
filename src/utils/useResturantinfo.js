import { useState } from "react";
import { useEffect, useState } from "react";
import { RES_URLF, RES_URLS } from "../utils/constants";

const useResturantinfo =  (resid) => {
  const [Resinfo, setResinfo] = useState(null);
  useEffect(() => {
    getinfo();
  }, []);

  const getinfo = async () => {
      const response = await fetch(`${RES_URLF}${resid}${RES_URLS}`);
      const objinfo = await response.json();
      setResinfo(objinfo);
     // console.log(objinfo);
  };

  return Resinfo;
};
export default useResturantinfo;