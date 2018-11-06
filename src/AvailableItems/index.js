import React, { Component } from 'react';
import { hot }      from 'react-hot-loader';

const AvailableItems = ({ items }) => {
  return(


<div className ='availableItems'>
<h3>these are the available items</h3>
{items.map((item)=>
      <p>{item.name}</p>
      )}
</div>
)
}

export default AvailableItems;



