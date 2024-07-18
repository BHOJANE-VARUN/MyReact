import { useEffect, useState } from "react";
import { RES_URLF, RES_URLS } from "../utils/constants";
import Shrimmer from "./ShrimmerUI";
import Menu from "./Menu";
import { useParams } from "react-router-dom";

const Resturant = () => {
  const { resid } = useParams();
  const [Resinfo, setResinfo] = useState(null);
  const [error, setError] = useState(null);

  const getinfo = async () => {
    try {
      const response = await fetch(`${RES_URLF}${resid}${RES_URLS}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const objinfo = await response.json();
      setResinfo(objinfo);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getinfo();
  }, [resid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (Resinfo === null) {
    return <Shrimmer />;
  }

  return <Menu dataobj={Resinfo} />;
};

export default Resturant;
