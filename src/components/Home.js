import React, { useState } from 'react';
import './Home.css';
import {BiSolidChevronDown} from 'react-icons/bi';
import {BsStarFill} from 'react-icons/bs';

const Home = () => {
    const [items,setItems]=useState([
        {id:0,name:"Pure Danedar cow Ghee",price:500,quantity:1,img:'./images/item1.jpeg'},
        {id:1,name:"Pure Ptanjali Honey",price:500,quantity:1,img:"./images/item2.jpeg"},
        {id:2,name:"Pure Ptanjali Honey",price:270,quantity:1,img:"./images/item3.png"},
        {id:3,name:"Pure Ptanjali Honey",price:478,quantity:1,img:"./images/item4.jpg"},
        // {id:4,name:"Pure Agro Maida",price:566,quantity:1,img:"./images/item5.png"}
    ]);
  return (
    <div className='home'>
       <div className='wrapper'> 
            <div className='homeText'>Home/Shop</div>
            <div className='filters'>
                <div className='filterInner'>
                    <p className='filterText'>Filter</p>
                    <button className='filterBtn'>All products <span className='down'><BiSolidChevronDown/></span></button>
                </div>
                <div className='filterInner'>
                    <p className='filterText'>Sort By</p>
                    <button className='filterBtn'>Default <span className='down'><BiSolidChevronDown/></span></button>
                </div>
                
            </div>
            <div className='itemsList'>
              {
                items.lemgth===0 ?(<div> No items present</div>):(
                    items.map((item,k)=>(
                        <div className='listItem' key={k}>
                            <img src={item.img} className='listItemimg' alt='item'/>
                            <p className='itemTitle'>{item.name}</p>
                            <p className='itemPrice'><span className='strike'>&#8377; 700.00 INR</span>&#8377; {item.price}.00 INR</p>
                            <div className='reviews'>
                                <div className='star'>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                </div>
                                <p>(156 reviews)</p>
                            </div>
                        </div>
                
                    ))
                )
              }
                
            </div>
       </div>
    </div>
  )
}

export default Home;