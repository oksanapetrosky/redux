import dataClothes from "../../Data/DataClothes";
import React from 'react';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { toggleFavorite, getFavoriteItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const CartItem = ({cartItem}) => {
  const clothes = dataClothes.find(item => item.id === cartItem.clothId)
  const dispatch = useDispatch();
  const favoriteItems = useSelector(getFavoriteItems);

  const isFavorite = favoriteItems.some(favItem => favItem.clothId === cartItem.clothId);
 
    return(
        <div className="cart-icon">
           <p className="cloth-info">{clothes.name}</p>
           <button
                className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} // Dynamic class based on favorite status
                onClick={() => {
                    dispatch(toggleFavorite({ clothId: cartItem.clothId }));
                }}
            >
                {isFavorite ? '★' : '☆'} {/* Filled star for favorite, empty star for non-favorite */}
            </button>
           <p className="cloth-quantity">{cartItem.quantity} - ${clothes.price * cartItem.quantity}</p>
           <button className="btn" onClick={() => {dispatch(removeItemFromCart({ cartItemId: cartItem.id }));}}>Remove</button>
        </div>
    )
}


export default CartItem;

