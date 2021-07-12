# Express Calculator 🧮

My first Web App made with Node.js + Express.js. It is a very basic calculator which performs only addition and basic BMI calculation with a backend script. My first step towards back-end development.

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

# Screenshots 📸

![Addition Input](https://user-images.githubusercontent.com/70312106/125315900-353f5380-e355-11eb-84d8-caee9d9903f4.png)
-------
![Addition Output](https://user-images.githubusercontent.com/70312106/125316027-5738d600-e355-11eb-81f2-4dc1d4885225.png)
-------
![BMI Input](https://user-images.githubusercontent.com/70312106/125316358-ae3eab00-e355-11eb-802c-1f7fe7fe6620.png)
-------
![BMI Output](https://user-images.githubusercontent.com/70312106/125316398-b860a980-e355-11eb-9c02-b417f7eaf368.png)
