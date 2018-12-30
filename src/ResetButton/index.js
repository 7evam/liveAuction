import React, { Component } from 'react';

const ResetButton = ({resetAuction}) => {

return(
  <div id='resetButton'>
  <button onClick={resetAuction}>Reset Auction</button>
  </div>
  )
}

export default ResetButton;
