# Live Auction App

## About this App

Live Auction works by using socket.io (not necessarily websockets) to have clients communicate bidirectionally in real time with a 'source of truth' living on the server. Try adding an item to bid, choosing 2 different users, opening up the app in another window, and bid away. The bidding mechanism only accepts bids if they are higher than the current highest bid. The timer resets every time a valid bid is placed. When the timer reaches 0, whoever has the highest bid is rewarded the item for the current price.

Check out this article I wrote about the process of making this application [here](https://medium.com/@7evam/lets-get-methodical-5572560f068b)

## Try it out!

I have Live Auction deployed to Heroku [here](http://peaceful-headland-93321.herokuapp.com/)

## Features

* Live updating with socket.io
* Live user detection with socket.io on the user selection screen
* A reset button that resets the database to an initial state
* Bid validation to check if a bid is valid (if a user has enough money, bid is whole number)
* Associations between users and items won in a relational (PSQL) database

<!-- ## Wireframe/ERD:

![live auction wireframe/erd](https://image.ibb.co/duBayL/IMG-4070.jpg) -->

## Featured technologies:
* Node
* Express
* Webpack (NOT create-react-app)
* PSQL
* Sequelize
* Socket.io
* React
* Materialize


