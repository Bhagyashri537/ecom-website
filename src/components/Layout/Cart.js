


  


const Cart = (props) => {
  const CartItems = <ul>
        {[{id:'p1', title:'Colors', price:100, quantity:2}].map((item)=><li>{item.title} {item.price} {item.quantity}</li>)}
    </ul>
   return (
    <>
   {CartItems}
    <div >
        <span>Toatal Amount</span>
        <span>$200</span>
    </div>
    {/* <div >
        <button  onClick={props.onClose}>Close</button>
        <button className={classes.button}>Purchase</button>
    </div> */}
    </>
    )
 
};
export default Cart;
