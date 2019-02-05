import React, { Component, Fragment } from 'react';

import './styles.css';
import AjaxAdapter from '../AjaxAdapter';
import UserAjaxAdapter from '../UserAjaxAdapter';

import BidDashboard from '../BidDashboard';
import UserDashboard from '../UserDashboard';
import AvailableItems from '../AvailableItems';
import AuctionHistory from '../AuctionHistory';
import Header from '../Header';
import PickUser from '../PickUser';
import io from 'socket.io-client'
import {Button, Grid, Typography, Paper} from '@material-ui/core';

const ItemDataModel = AjaxAdapter('/api/items');
const upForAuctionRoute = AjaxAdapter('/api/items/upForAuction');
const completedBidRoute = AjaxAdapter('/api/items/completedBid');
const UserDataModel = UserAjaxAdapter('/api/users/');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      latestBid: {body: 0, from: undefined},
      userID: undefined,
      user: {},
      allUsers: [],
    }
    this.addToAuction = this.addToAuction.bind(this);
    this.completedBidFn = this.completedBidFn.bind(this);
    this.getData = this.getData.bind(this);
    this.updateUserBalanceDb = this.updateUserBalanceDb.bind(this);
    this.resetPrice = this.resetPrice.bind(this);
    this.resetAuction = this.resetAuction.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.pickUser = this.pickUser.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.getThisUser = this.getThisUser.bind(this);
  }

    componentDidMount() {
      this.getData();
      this.getAllUsers();
      //all network events should go in componentDidMount
      this.socket = io.connect('/');

      this.socket.on('latestBid', latestBid => {
        this.setState({latestBid: latestBid,})
      })

    // this.socket.on('userLoggedOff', () => {
    //   console.log('client recognizes a user logged off')
    //   console.log(this.state.user.username)
    //   this.socket.emit('currentUsers', this.state.user.username)
    // })

      // if(this.state.user){
      //   setInterval(function() {
      //     this.socket.emit('chooseUser', "it works");
      //   }, 5000);
      // }

      this.socket.on('update', () => {
        // re-renders data in real time
        // none of these functions depend on each other,
        // no async is needed
        this.getData();
        this.getAllUsers();
        this.getThisUser();
      })
    }

   async getThisUser() {
    // this function gets current user
    let userID = this.state.userID
    this.setState({
      user: await UserDataModel.read(userID),
    });
  }

 async getData() {
  // this function gets all the item data and sets it to state
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

  async getAllUsers() {
    // gets all user data
    this.setState({
      allUsers: await UserDataModel.index(),
    });
  }

    async addToAuction(e){
    let valid = true
    this.state.items.forEach(function(el) {
      if(el.upForAuction === true){
        valid = false
      }
    });
    // update database
    if(valid){
      let id = e.target.id
      await upForAuctionRoute.update(id)
      this.socket.emit('update')
      this.socket.emit('bid', {body:1,from:this.state.user.username})
      this.socket.emit('load')
    }
    }

    async updateItem(id){
    if(this.state.user.username === this.state.latestBid.from){
      await completedBidRoute.updateAfter(id,this.state.latestBid.body,this.state.user.id)
    }
  }

   async completedBidFn(id){
    // when a bid completes, this is what needs to be done
    await this.updateItem(id)
    await this.updateUserBalanceDb()
    await this.resetPrice()
    await this.socket.emit('update')
  }

    async updateUserBalanceDb(){
    if(this.state.user.username === this.state.latestBid.from){
      let newBalance = this.state.user.balance - this.state.latestBid.body
      await UserDataModel.update(this.state.userID,newBalance)
      .then(this.getData())
      .then(this.getThisUser())
    }
  }

  async resetPrice(){
    await this.setState({
      latestBid: {}
    })
  }

  async resetAuction(){
    console.log('lets reset')
    await ItemDataModel.resetItems()
    await UserDataModel.resetUsers()
    await this.socket.emit('update')
  }

  async pickUser(e){
    let chosenUserId = parseInt(e.target.id, 10)

    await this.setState({
      userID: chosenUserId
    });
    await this.getThisUser();
    await this.socket.emit('chooseUser', chosenUserId);


  }

  render() {
    let { items, latestBid, user, allUsers, userID } = this.state

    return(
      //using materialize grid to format...nice
        <Grid container spacing={24}>
          <Grid className="header-grid" item xs={12}>
            <Header />
          </Grid>
          {userID ? (
            <Fragment>
          <Grid className="user-dashboard-grid" item xs={3}>
            <UserDashboard items = {items} filterFn={item => !item.upForAuction && item.completedBid} latestBid={latestBid} user={user} allUsers={allUsers} resetAuction={this.resetAuction}/>
          </Grid>
          <Grid className="bid-dashboard-grid" item xs={6}>
            <BidDashboard items = {items} completedBidFn = {this.completedBidFn} filterFn={item => item.upForAuction && !item.completedBid} user={user}/>
            <AvailableItems items = {items} addToAuction={this.addToAuction} filterFn={item => !item.upForAuction && !item.completedBid} />
          </Grid>
          <Grid className="auction-history-grid" item xs={3}>
            <AuctionHistory items = {items} filterFn={item => !item.upForAuction && item.completedBid} latestBid={latestBid} user={user} resetAuction={this.resetAuction}/>
          </Grid>
          </Fragment>
          ) : (
          <PickUser pickUser={this.pickUser} allUsers={allUsers}/>
          )}
        </Grid>
    )
  }
}
export default App;
