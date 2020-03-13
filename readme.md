#Set up the repo
-Create repo directory
-npm init

#create src and public folders
-src files: app.js
-public files: index.html

#install react
-npm install react react-dom

#install dev dependencies
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader

#create webpack.config.js
touch webpack.config.js

#add webpack config
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}

#create .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

#install additional dependencies
-npm i -D nodemon eslint
-npm i express body-parser sequelize mysql2

#install testing dependencies
-npm i -D jest enzyme enzyme-adapter-react-16

#add scripts to package.json
- "test": "NEED TEST SCRIPT"
- "start": "webpack --mode=development",
- "build": "webpack --mode=production",
- "react-dev": "webpack-dev-server --open"
- "server-dev": "nodemon server/index.js"
- "db-seed": "node db_seed.js"