import { useState, useEffect } from "react";

const useOnline = () => {
  const [online, setonline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline",(event)=>{
        setonline(false);
    })
    window.addEventListener("online", (event) => {
        setonline(true);
    });
  }, []);
  return online;
};
export default useOnline;