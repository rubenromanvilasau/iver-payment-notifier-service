
# Iver payment notification service

This service checks items and their offers to notify the highest bid set to make the payment, if user doesn't pay, it goes with the second highest bid and successively

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend

## Installation

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd iver-payment-notifier-service
npm i
node index.js
```

## Development

Open your favorite Terminal and run these commands.

First Tab:

```sh
cd iver-payment-notifier-service
npm run dev
```

   [node.js]: <http://nodejs.org>
   
