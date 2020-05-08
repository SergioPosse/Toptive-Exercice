# TOPTIVE Calculator

Exercice for a employ test in Toptive (www.toptive.co)

## Getting Started

First!! you must know that there is another version more simple:

https://github.com/SergioPosse/Toptive-Exercice-NO-REST

because this version have a PROBLEM TO FIX when i send a json
with an operation that have nested parentheses
example: ((2))

The project try to use a MERN (mongo-express-react-node) standard and REST architecture

The project resolve an operation formated in string and containing parentheses

Save the operation and result in a Mongo Atlas collection called histories
that belongs to a data base named toptive and is accesible for a guest with studying propose
    user: invitado pass: invitado

The algoritm for search and take off parentheses was created from scratch
    but for the string resolve we use the eval method in jasvascript

### Prerequisites

Need to install node version 3.x with npm (most recent version its ok) in your system first

### Installing

****Quick run

1-Need to install node version 3.x with npm (most recent version its ok) in your system first
2-Clone or download the repository in your disk and extrac in a folder
3-Go to the folder and open console, write:
    npm install
    npm start

Now the server will be locally in localhost:3000 with a simple interface by default

****Development env (use nodemon and webpack with babel)
    1-Nedd to install the dev-dependencies first
    2-Clone or download the repository in your disk and extrac in a folder
    3-Run webpack for transpile any react code change, this will watch if you dont stop it:
        npm run webpack
    4-in other console run the dev server that watch any change you do in your code:
        npm run dev

****Endpoint for get the full history

GET localhost:3000/api/history

## Authors

* **Sergio David Posse Irigoyen** - *Initial work* - [PurpleBooth](https://github.com/SergioPosse)

## Acknowledgments
