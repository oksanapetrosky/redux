const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const addQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }
    
    const removeQuantity = () => {
        if (quantity <=1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }
    return(<div>
        <button className="btn1" onClick={addQuantity}>+</button>
        <span className="marginspan">{quantity}</span>
        <button className="btn1" onClick={removeQuantity}>-</button>
    </div>)
}

export default ChangeQuantity;