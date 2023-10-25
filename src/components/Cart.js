import React, { useState, useEffect } from 'react'
import "./Cart.css";
// import Item from './Item';
// import item1 from '../assets/item1.jpeg'
import {RxCross2} from 'react-icons/rx';
const Cart = (props) => {
    // console.log(props);
    let cartItems=props.cartItems;
    let setCartItems=props.setCartItems;
    function crossHandler(event){
        props.setCartBtn(false);
        
    }
    
    const [totalAmt, setTotalAmt] = useState(0);
    useEffect(() => {
        console.log("useeffect");
        const total = cartItems.reduce((s, i) => s += i.price * i.quantity, 0);
        console.log(total);
        setTotalAmt(total);
      }, [cartItems]);


    const incrQty = (index) => {
        // console.log("jhnj");
        setCartItems((v) => {
            // console.log(v);
        // const a = JSON.parse(JSON.stringify(v)); // FOR AVOIDING MUTATING DATA, BECAUSE IN STRICT MODE THIS SETSTATE CALLBACK WILL TRIGGER TWICE
          v[index].quantity += 1;      
          return [...v];
        });
      };
    const decrQty = (index) => {
        // console.log("jhnj");
        setCartItems((v) => {
            // console.log(v);
        // const a = JSON.parse(JSON.stringify(v)); // FOR AVOIDING MUTATING DATA, BECAUSE IN STRICT MODE THIS SETSTATE CALLBACK WILL TRIGGER TWICE
          if(v[index].quantity>1){
            v[index].quantity -= 1;
          }
                
          return [...v];
        });
      };
      const removeHandler=(index)=>{
        setCartItems((v)=>{
            v.splice(index, 1);
            return [...v];
        })
      }

  return (
    <div className='cart'>
        {/* <img src={items[0].img}/>
        <p>{items.length}</p> */}
        <div className='heading1'>
            <p className='yourCart'>Your Cart ({cartItems.length})</p>
            <p onClick={crossHandler} className='exit'><RxCross2/></p>
        </div>
        <div className='cartItems'>
        {
            cartItems.lemgth===0 ?
            (<div>No Items in cart</div>):(
                cartItems.map((item,k)=>(
                    <div className='item' key={k}>
                <div className='itemInner'>
                    <img src={item.img} alt='item' className='itemImage'/>
                    <div className='information'>
                        <p className='title'>{item.name}</p>
                        <p className='quanttext'>Quantity description</p>
                        <p className='price'>Price: &#8377; <span className='quanttext'>{item.price}</span> </p>
                        <div className='quantity'>
                            <div className='decrement' onClick={e => decrQty(k)}>-</div>
                            <div className='value'>{item.quantity}</div>
                            <div className='increment' onClick={item => incrQty(k)}>+</div>
                        </div>
                    </div>
                </div>
                <div className='remove'><p onClick={item=> removeHandler(k)}>Remove</p></div>
                
            </div>
                ))
            )
        }
        </div>
        <div className='coupon'>
            <input className="input" type="text" placeholder="Enter coupon code"/>
            <button type='button' className='button'>Apply coupon</button>
        </div>
        <div className='alsoLike'>
            <p className='alsoLikeText'>You May Also Like</p>
            <div className='box'>
               <div className='box1'>
                 <div className='b1'><span className='plus'>+</span></div>
                 <p className='title'>Name</p>
                 <p className='quanttext'>Price</p>  
               </div>
               <div className='box1'>
                 <div className='b1'><span className='plus'>+</span></div>
                 <p className='title'>Name</p>
                 <p className='quanttext'>Price</p>  
               </div>
               {/* <div className='box2'>box2</div> */}
            </div>
            
        </div>
        <div className='total'>
            <p className='subtotalText'>SUBTOTAL</p>
            <p className='totalValue'>&#8377; {totalAmt}</p>
        </div>
        <div className='checkout'>
            <button type='button' className='checkoutBtn'>CHECKOUT</button>
        </div>
        <div className='continueShopping'>CONTINUE SHOPPING</div>
    </div>
  )
}

export default Cart