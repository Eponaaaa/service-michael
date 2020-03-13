#Set up the repo
-Create repo directory
-npm init

#create app and dist folders
-app files: index.html, index.js, index.css
-dist files: none

#install react
-npm install react react-dom

#install dev dependencies
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin

#create webpack.config.js
touch webpack.config.js

#add webpack config
var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

};

#install additional dependencies
-npm i -D nodemon
-npm i -D eslint
-npm i express
-npm i body-parser
-npm i sequelize
-npm i mysql2

#install testing dependencies
-npm i -D jest
-npm i -D enzyme enzyme-adapter-react-16

#add scripts to package.json
- "test": "NEED TEST SCRIPT"
- "react-dev": "webpack -d --watch",
- "server-dev": "nodemon server/index.js"
- "db-seed": "node db_seed.js"