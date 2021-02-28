# Test task to create a Swiper Carousel in React
**Must have nodejs installed**



## Set up React environment:

1. Create package.json:
  ```
  npm init -y
  ```

2. Create node modules and package-lock.json:
  ```
  npm install react react-dom
  ```

3. Install needed Babel packages:
  ```
  npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
  ```

4. Create a babel file in your project folder:
```
.babelrc
```

5. To be able to transpile your code, in the .babelrc file type: 
```
{ "presets": ["@babel/preset-react","@babel/preset-env"] }
```

6. To add **Webpack**, type in the terminal:
  ```
  npm install webpack webpack-cli webpack-dev-server
  ```

7. Connect Webpack to Babel,
Create a file in your folder:
```
  webpack.config.js
```

8. To configure your Webpack, add this code to your config file:
```
[ https://github.com/developedbyed/simple-react-setup/blob/master/webpack.config.js ]
  (Thanks, DevEd)
in the config.js file, add:
  module.exports = {
    mode: 'development',
  };
```

9. Create a new folder "src" and include a App.js file.


10. Set it up by typing:
```
import React from 'react';
import ReactDOM from 'react-dom';
```

11. In the right-bottom corner, change the language mode from JavaScript to JavasScript React.


12. Create your first component:
```
const App = () => (
    <div></div>
```

13. To export the component to be able to use it elsewhere, at the end of page type:
```
export default App;
```

14. Create a file index.js in src, repeat the import react step, + add:
```
import ReactDOM from 'react-dom';
import App from './App';
```

15. to render out your component, use:
```
ReactDOM.render(<App/>, document.querySelector("#root"));
```

16. Create an index.html file in src and inside it create a div:
```
<div id="root"></div>
```

17. To run webpack:
Go to package.json,
find "scripts" and instead of it's "test", set up your script:
```
    "start": "webpack serve --hot --open",
    "build": "webpack --config webpack.config.js --mode production"
```

18. Install the html plugin to link the app to html:
  ```
  npm install html-webpack-plugin
  ```

19. Install a css package and create a .css file in your src folder:
  ```
  npm install style-loader css-loader
  ```
  
20. In App.js, import your css file.


21. Final installs:
```
  npm install file-loader
  npm install swiper
  npm install node-sass
```

22. You ready? 
Type in terminal:
  ```
  npm build
  npm start 
  ```

### Write all your code in the src folder.


## To deploy your project on GitHub:

```
npm install gh-pages --save-dev
```

1. Create your Git Repository.

2. Install:
```
git init
```

3. Fetch your project's adress:

```
git remote add origin http://yourghprojectlink
```

4. Get an error :) Try installing https://git-scm.com/download/win and fix it.

5. In package.json, add this:
```
"homepage": "http://yourgitusername.github.io/yourgitreponame",
```

6. Under scripts add:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build" 
```

7. Since we have no build folder, instead of gh-pages -d build, try:
```
gh-pages -d dist"
```

8. Complete the authentication into GitHub...
```
npm run deploy
```
See this(?):
```
info: please complete authentication in your browser...
Published
```
#### Success!
