# About
This service is one module of a e-commerce page, with team members building the other modules. It is an image carousel created with React, Express, and MySQL.

# Quick setup
## Install dependencies
```
npm -i
```

## Setup the database
```
npm run db-seed
```

mySql is used with sequelize.
The seed file creates a database named gallery, with one table named Photos.
You may need to change the user/password for your database on line 3 of the db/index.js file.

Note: this scans /images and populates the database with filenames from that directory.

## Start the server
```
npm run server-dev
```

Default port is 3000.

# Complete setup from scratch
### Set up the repo
-Create repo directory
```
npm init
```

### create src and public folders
src/App.jsx
src/index.js
public/index.html

### install react
```
npm install react react-dom
```

### install dev dependencies
```
npm install -D @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader
```

### create webpack.config.js
webpack.config.js

#### add webpack config
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
};
```

### create .babelrc
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### install additional dependencies
```
npm i -D nodemon eslint
npm i express body-parser sequelize mysql2 cors
```

### install testing dependencies
```
npm i -D jest babel-jest @babel/polyfill enzyme enzyme-adapter-react-16
```
  ##needed if using fetch api
```
npm i -D jest-fetch-mock
```

#### create jest.config.js at top level
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
```
module.exports = {
  // Automatically clear mock calls and instances between every test. Automock is required for jest-fetch-mock
  clearMocks: true,
  automock: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js', '<rootDir>/setupJestFetchMock.js'],

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

  //Send Jest to mock files for the following imported extensions
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/mocks/styleMock.js",
    "\\.(gif|ttf|eot|svg|jpg|jpeg)$": "<rootDir>/mocks/fileMock.js"
  }
};
```

#### add the mock folder files from above
mocks/styleMock.js
```
  module.exports = {};
```

mocks/fileMock.js
```
  module.exports = 'test-file-stub';
```

#### create jest-fetch-mock config if using (file already imported in jest config)
```
require('jest-fetch-mock').enableMocks()
```

#### create enzyme.config.js in top level
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

### To create test files
Create filetotest.test.js

### add scripts to package.json
- "test": "jest",
- "test-watch": "jest --watch",
- "test-coverage": "jest --coverage --colors",
- "start": "webpack --mode=development",
- "build": "webpack --mode=production",
- "react-dev": "webpack-dev-server --open"
- "server-dev": "nodemon server/index.js"
- "db-seed": "node db_seed.js"
