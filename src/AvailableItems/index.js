import React, { Component,Fragment } from 'react';

//when user clicks on button next to available item,
//the item changes its upForAuction value to true
const AvailableItems = ({ items, filterFn, addToAuction }) => {

  return(
<div id ='availableItems'>
<h3 className='sectionHeader'>Available for Auction</h3>
<div className="availableItems">

  {
    items.filter(filterFn)
    .map((item,index) => (
      <div key={index}>
      <p>
        <span className='availableItem'>{item.name}</span>
        <button onClick={addToAuction} id={item.id}>Add to auction</button>
      </p>
      <hr/>
    </div>
    ))
  }
  </div>
</div>
)}

export default AvailableItems;



