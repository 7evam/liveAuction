import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Button, Grid, Typography} from '@material-ui/core';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const PickUser = ({pickUser, allUsers}) => {

return(
<div id='pickUser'>
<Typography
variant="h6"
align="center"
color="textSecondary"
paragraph>
  Welcome to Live Auction! <br/>
  Compete against other users in real time to win the best collection items on a limited budget. <br/>
  To start, pick a user from below.
</Typography>
   <Grid
   className="fullUserGrid"
    container
    spacing={24}
    >
        {
        allUsers.filter(user => user.username!=="Unowned")
        .map((user,index) => (
          <Grid
          item
          sm ={4}
          xs={6}
          key={user.username}
          >
          <Button
          color='primary'
          variant="contained"
          className="userButton"
          id={user.id}
          onClick={pickUser}
          >
          <span className="userButtonClick" id={user.id}>{user.username} <br/>${user.balance} <br/> {user.id}</span>
          </Button>
          </Grid>
        ))
        }
    </Grid>
</div>
  )
}

export default PickUser;



