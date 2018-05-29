## Overview
Both data and presentation are in App.js.

I use create-react-app, react-app-rewired and react-app-rewire-mobx to create the project. Below are the steps I take to create the project.

## use create-react-app to create the todo project
```
cd /Users/gwu/react
mkdir todo
cd todo

sudo npm install -g create-react-app
create-react-app .
```

## use react-app-rewire-mobx and react-app-rewired
I want to use create-react-app to create the project without ejecting from create-react-app. So I follow the steps here:

https://github.com/timarney/react-app-rewired/tree/master/packages/react-app-rewire-mobx

```
npm install --save mobx mobx-react react-app-rewire-mobx
npm install react-app-rewired --save-dev
touch config-overrides.js
```

config-overrides.js:
```
const rewireMobX = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}
```

In package.json, replace:

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```

with:

```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  },
```
