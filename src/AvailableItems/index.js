import React, { Component } from 'react';

//when user clicks on button next to available item,
//the item changes its upForAuction value to true


const AvailableItems = ({ items, filterFn, addToAuction }) => {

// onClick={() => this.handleClick(obj.id)}

  return(
<div id ='availableItems'>
<h3>Items available for bidding:</h3>
  {
    items.filter(filterFn)
    .map((item,index) => (
      <div key={index}>
      <p>
        <span className='availableItem'>{item.name}</span>
        <button onClick={addToAuction} id={item.id}>Add to auction</button>
      </p>
    </div>
    ))
  }
</div>
)}

export default AvailableItems;



