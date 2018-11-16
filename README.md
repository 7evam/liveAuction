# Live Auction App

## About this App

Live Auction works by using socket.io (not necessarily websockets) to have clients communicate bidirectionally in real time with a 'source of truth' living on the server. Try adding an item to bid, opening up the app in another window, and bid away. The bidding mechanism only accepts bids if they are higher than the current highest bid. For now, bidders are identified with their socket id. The timer resets every time a valid bid is placed. When the timer reaches 0, whoever has the highest bid is rewarded the item for the current price.

## User stories:

As a user I want to have a platform to bid on items in a live auction style

As a bidder, I want to be able to see how much time is left before a bid is final

As a collector, I want to see everything I've won in an auction

## Wireframe/ERD:

![live auction wireframe/erd](https://image.ibb.co/duBayL/IMG-4070.jpg)

## How will it work:

### IN TERMS OF USER
* a user will log in
* there is a list of items for auction
* each user has $200
* the first user will nominate an item for auction by placing an initial $1 bid
* each logged in user can bid on item
* theres a 6 second countdown clock, it resets whenever a user bids
* when countdown clock hits 0, the bidding is over and whichever user has the highest bid wins.

### IN TERMS OF CODE
* when a bid starts, a websocket will open between the server and each logged in user
* each bid will update the price state of item being bid on
* when timer runs out, websocket will close and the price state of item will be added to the database and the item will be associated with the winning user in the database

## Featured technologies:

* Node
* Express
* socket.io to transfer bidding dat in real time
* passport for user auth
* react for components 
* redux to manage state

### react components:
* won items component (each user has a list of itmes they won at auction)
* available items component (items available for bid, uniform to all users)
* bid dashboard component (holds all info on item currently bid on)
* banner component (title, login/logout button)

### states to manage (reducer function for each of these)
* each users balance
* countdown timer
* current bid value
* auth status
* current bid for auction

