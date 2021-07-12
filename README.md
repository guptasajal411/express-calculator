# Express Calculator 
My first Web App made with Node.js + Express.js. It is a very basic calculator which performs only sums, but by a backend script. My first step towards back-end development.


# How to use this? 🤔

1. Clone this repository in your local environment by the following command:<br>
```git clone https://github.com/guptasajal411/express-calculator.git```

2. Use NPM (Node Package Manager) to install dependencies for this project. <br>
This app uses Express.js and body-parser for working. You can install these by executing this command: <br>
```npm install express``` and <br>
```npm install body-parser```

3. Now use Node.js to start the server with `calculator.js`: <br>
```node calculator.js```

4. Go to `localhost:3000` on your browser. Give inputs to the calculator. 

5. The calculator sends this data to the server script (calculator.js), where it gets parsed by `body-parser`. The calculation is then done at server side. After that, the server sends the output to the browser where it gets displayed.
