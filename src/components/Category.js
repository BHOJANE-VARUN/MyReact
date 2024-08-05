import Categoryoptions from "./Categoryoptions";
const Category = ({ cat, index, show, expand }) => {
  //console.log(cat);
  return (
    <div className="h-fit w-full  ">
      <div className="flex w-full h-12 my-2 font-sans text-base  justify-between">
        <h2 className="font-bold text-xl">
          {cat.title + " (" + cat.itemCards.length + ") "}
        </h2>
        <svg
          data-testid={"downbut"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mt-3"
          onClick={() => {
            if (show === index) {
              expand(-1);
            } else {
              expand(index);
            }
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              show === -1
                ? "m19.5 8.25-7.5 7.5-7.5-7.5"
                : "m4.5 15.75 7.5-7.5 7.5 7.5"
            }
          />
        </svg>
      </div>
      {show === index &&
        cat.itemCards.map((dat) => {
        //  console.log(dat);
          return <Categoryoptions data-testid={"options"} item={dat.card.info} />;
        })}
      <div className="w-full h-0.5 bg-gray-200"></div>
    </div>
  );
};
export default Category;
