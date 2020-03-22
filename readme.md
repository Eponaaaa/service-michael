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
-npm i express body-parser sequelize mysql2 cors

#install testing dependencies
-npm i -D jest babel-jest @babel/polyfill enzyme enzyme-adapter-react-16

#create jest.config.js at top level
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  
  // Indicates whether each individual test should be reported during the run
  verbose: false,
};

#create enzyme.config.js in top level
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

#To create test files
Create filetotest.test.js in same directory as filetotest.jsx

#add scripts to package.json
- "test": "jest",
- "test-watch": "jest --watch",
- "test-coverage": "jest --coverage --colors",
- "start": "webpack --mode=development",
- "build": "webpack --mode=production",
- "react-dev": "webpack-dev-server --open"
- "server-dev": "nodemon server/index.js"
- "db-seed": "node db_seed.js"