import { useState } from "react";
const Categoryoptions = ({ s }) => {
    if (s === false) {
      return <div></div>;
    }
    return (
      <div className="w-full h-fit p-5 flex my-5 border-b-2 justify-between">
        <div className="h-full w-4/6">
          <span className="font-bold text-xl text-gray-800">
            Chicken fried Rice - Half 500ml
          </span>
          <br></br>
          <span className="font-bold text-base">₹179</span>
          <p className="mt-3 font-medium text-gray-700">
            Indulge in the all-time favorite, mouth-watering Momos filled with a
            mix of juicy boneless Chicken, Cheese, Coriander, Herbs, and Indian
            Spices. Served with our tantalizing Spicy Red Sauce [5pcs]. Enhance
            the experience as Steam Momos taste best when eaten by hand. Please
            note, we don't serve green coriander Chutney. Delight in 100 gms of
            savory goodness at 231.72 Kcal.
          </p>
        </div>
        <div>
          <button className="text-green-700 font-bold text-lg border-0 h-10 w-28 absolute mt-32 bg-white border-black shadow-neutral-500 shadow-md rounded-xl ml-6">
            ADD
          </button>
          <img
            className="h-40 w-40 rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCG-DYDrNopDoQubDd8IgBQY-00Gngw-LfNBhxDdnXkWWCLAf3BuU3UiRcvZYGR0mjZI&usqp=CAU"
          ></img>
        </div>
      </div>
    );
  };
const Category = () => {
  const [show, setshow] = useState(true);
  return (
    <div className="h-fit w-full  ">
      <div className="flex w-full h-12 my-2 font-sans text-base  justify-between">
        <h2 className="font-bold text-xl">Fried Rice Non Veg - Half 6</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mt-3"
          onClick={() => {
            if (show === false) {
              setshow(true);
            } else {
              setshow(false);
            }
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d = {show===false?"m19.5 8.25-7.5 7.5-7.5-7.5":"m4.5 15.75 7.5-7.5 7.5 7.5"}
          />
        </svg>

      </div>
      <Categoryoptions s={show} />
      <div className="w-full h-0.5 bg-gray-200"></div>
    </div>
  );
};

const Nestedcategory = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-fit flex flex-col justify-center items-start w-2/4 border-black mb-2 mt-5">
        <h1 className="w-fit h-fit flex  text-2xl font-extrabold mb-5">
          Rice & Noodles-Half
        </h1>
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <div className="w-2/4 h-4 bg-gray-200"></div>
    </div>
  );
};

export default Nestedcategory;
