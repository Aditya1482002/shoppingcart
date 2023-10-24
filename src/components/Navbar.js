import React, { useState } from 'react'
import "./Navbar.css";
import Cart from './Cart';
// import { FaBeer } from 'react-icons/fa';
import {BsCart3} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {BiSolidChevronDown} from 'react-icons/bi';
import {BiSearch} from 'react-icons/bi';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

const Navbar = () => {
    const [menuBtn,setMenuBtn]=useState(false);
    const [cartBtn,setCartBtn]=useState(false);
    function cartHandler(event){
        if(cartBtn){
            setCartBtn(false);
        }
        else{
            setCartBtn(true);
        }
    }
    function menuHandler(event){
        if(menuBtn){
            console.log("if");
            // document.getElementsByClassName("list").style.top="-100%";
            setMenuBtn(false);
        }
        else{
            console.log("else");
            // document.getElementsByClassName("list").style.top="top:0";
            setMenuBtn(true);
        }
        
        // let {id}=event.target;
        // console.log(id);
        // console.log(event.target.id);
    }
  return (
    <div className='m'>
     <div className='nav'>
       {/* <p className='logo'>Lorem</p> */}
        <img src={logo} className='logo' alt='logo'/>
        {/* <div> */}

            <ul className={menuBtn?('list show'):('list')}>
                <li className='link'>Home</li>
                <li className='link'>Shop<BiSolidChevronDown/></li>
                <li className='link'>Explore<BiSolidChevronDown/></li>
                <li className='link'>Help<BiSolidChevronDown/></li>
                <div class="search">
                   <span class="fa fa-search"><BiSearch/></span>
                   <input placeholder="Search term"/>
                </div>
                <li className='cartIcon' onClick={cartHandler}><BsCart3/></li>
                <li><img src={profile} className='profile' alt='profile'/></li>
            </ul>
            <label id='icon' onClick={menuHandler}><AiOutlineMenu/></label>
        {/* </div> */}
     </div>
     <div className={cartBtn?('overlay showOverlay'):('overlay')} onClick={cartHandler}>
                
     </div>
     <div className={cartBtn?('sidebar showSidebar'):('sidebar')}><Cart cartBtn={cartBtn} setCartBtn={setCartBtn}/></div>
    </div>
  )
}

export default Navbar