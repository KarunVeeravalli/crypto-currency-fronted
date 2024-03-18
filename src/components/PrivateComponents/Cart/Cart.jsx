import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { getOnlyUser, getUser } from '../../../Redux/User/action';
import { useDispatch, useSelector } from 'react-redux';
import { getCartById } from '../../../Redux/cart/action';

const Cart = () => {
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(0);

    const { user } = useSelector((store) => store.userReducer);
    const {cart } = useSelector((store)=> store.cartReducer);

    useEffect(()=>{
        if(user?.id) {
          dispatch(getCartById(user?.id));
       }
      },[dispatch,user]);
  
      useEffect(() => {
        dispatch(getOnlyUser());
        console.log(user)
      }, [dispatch]);

    const addItem=()=>{
        setQuantity(quantity+1);
      }

      const removeItem=()=>{
        if(quantity!=0){
          setQuantity(quantity-1);
        }
      }
    console.log(cart)
  return (
    <div>
        <div className="bar" style={{ gap: "5px",paddingTop:'30px',padding: "5px",display:'flex',justifyContentontent: "center"}}>
            <Button onClick={removeItem}>-</Button>
            <h4>{quantity}</h4>
            <Button onClick={addItem}>+</Button>

        </div>
    </div>
  )
}

export default Cart