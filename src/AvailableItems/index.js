import React, { Component } from 'react';

//when user clicks on button next to available item,
//the item changes its upForAuction value to true


const AvailableItems = ({ items, filterFn, addToAuction }) => {

function nominateItem() {

}

// onClick={() => this.handleClick(obj.id)}

  return(
<div id ='availableItems'>
{
      items.filter(filterFn)
        .map((item,index) => (
          <div key={index}>
            <p>{item.name} <button onClick={addToAuction} id={item.id}>click</button></p>

          </div>
        ))
    }
<h3>these are the available items</h3>

</div>
)
}

export default AvailableItems;



