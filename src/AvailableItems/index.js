import React, { Component } from 'react';




const AvailableItems = ({ items, filterFn }) => {

function nominateItem() {
  console.log('it poops')
}


  return(
<div id ='availableItems'>
{
      items.filter(filterFn)
        .map((item,index) => (
          <div key={index}>
            <p>{item.name}</p>

          </div>
        ))
    }
<h3>these are the available items</h3>

</div>
)
}

export default AvailableItems;



