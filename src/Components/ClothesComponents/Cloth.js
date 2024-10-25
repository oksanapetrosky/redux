import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


const Cloth = ({cloth, cartItem}) => {
      const [quantity, setQuantity] = useState(1);
      const dispatch = useDispatch();
     
    
     

    return(<div className="card">
           <img className="product-card" src={`./${cloth.img}.jpg`} alt="alldata" width="340px" height="500px"/>
            <p >{cloth.name} - ${cloth.price}</p>
           <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
           <button className="btn" onClick={() => {dispatch(addItemToCart({cloth, quantity}))}}>Add to cart</button>
          
    </div>)
} 

export default Cloth; 