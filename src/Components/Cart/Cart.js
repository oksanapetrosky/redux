import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div >
              <img className="cartIcon" src="https://cdn-icons-png.freepik.com/256/11649/11649834.png?semt=ais_hybrid" alt="cart"/>  
              <h3 className="total">Total: ${totalPrice}</h3>
               {cartItems.map(cartItem => <CartItem key={cartItem.clothId} cartItem={cartItem}/>)}
        </div>
    )
}


export default Cart;

