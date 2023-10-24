import React from 'react'

const Item = (props) => {
    let item=props.item;
    function increamentHandler(id){
        props.items[id].quantity++;
        console.log(id);
        // props.setItems(props.items[id])

    }
  return (
    <div className='item'>
                <div className='itemInner'>
                    <img src={item.img} className='itemImage'/>
                    <div className='information'>
                        <p className='title'>{item.name}</p>
                        <p className='quanttext'>Quantity description</p>
                        <p className='price'>Price</p>
                        <div className='quantity'>
                            <div className='decrement' onClick={()=>{ if(item.quantity>1){item.quantity--;}}}>-</div>
                            <div className='value'>{item.quantity}</div>
                            <div className='increment' onClick={increamentHandler(item.id)}>+</div>
                        </div>
                    </div>
                </div>
                <div className='remove'><p>Remove</p></div>
                
    </div>
  )
}

export default Item