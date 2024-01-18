JAVASCRIPT CALCULATOR APP
=========================

# Task

You can view the task by opening 'task.pdf' in the root folder or by clicking the link below:
[Task File](task.pdf)

# How to run the app

This project uses Node.js and Webpack to build and run the app. You can view the list of other used dependencies by viewing 'package.json':
[Used Packages](package.json)

1. Navigate to the root directory of this project (named calculator-app) using a command prompt or terminal and use 'npm install' to install all the dependencies listed in the 'package.json':

```npm install *package name*```

2. Build the application using Webpack:

```npm run build```

3. Deploy the app on your local server. 

```node server.mjs```

Please note the app uses port 3000 by default. You can view and change deployment info in 'server.mjs':
[Local Server Info](server.mjs)

4. In case of correct deployment the following message will show in your terminal:

_Server is running on port 3000_

5. After deployment you can view the app by typing 'localhost:3000' in your browser of choice or by clicking the link below:
[Local host](http://localhost:3000)

# File structure

- [.idea]- IntelliJ IDEA config files
    - [dist](./dist/) - build folder
        - [index.html](./dist/index.html)
        - [bundle.js](./dist/bundle.js)
    - [src](./src/) - dev files (source), html/css/js modules
        - [index.html](./src/index.html)
        - [index.js](./src/index.js) - functions import & event listeners
        - [functions.js](./src/functions.js) - calculating & theme functions
        - [styles.css](./src/styles.css) - stylesheets, includes themes variables
- [.eslintrc.json] - ESLint config file
- [package.json](package.json) - dependencies list ( + package-lock.json)
- [server.mjs](server.mjs) - local server config file
- [task.pdf](task.pdf) - task file
- [webpack.config.js](webpack.config.js) - Webpack config file, takes files from /src as inputs, outputs bundled files into /dist