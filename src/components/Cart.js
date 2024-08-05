import { useSelector } from "react-redux";
import Cartitem from "./Cartitems";
const Cart = ()=>{
    const items = useSelector((Store)=> Store.cart.items);
    return (
        <div className="h-full w-full flex justify-center">
        <div className="h-full w-7/12 flex flex-col items-center justify-center">
        {items.map((data) => <Cartitem item={data}/>)}
        </div></div>
    )
}
export default Cart;