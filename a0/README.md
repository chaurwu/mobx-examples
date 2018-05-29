# Use Jest to run tests written in ES2015

This project shows how to use Jest to run tests written in ES2015. 

To see it work, clone the repo, run `npm install` and then run `npm test`.

To achive such a setup, we need to do two things: setting up Babel and setting up Jest. 

## Babel
Setting up Babel in our case has nothing related to Jest. We install the following npm packages:
```
npm install --save-dev babel-cli babel-preset-es2015
```

We also add the .babelrc file for configuring Babel.

## Jest
Once Babel is set up, we need to install and configure Jest to use Babel. We do so by installing the following npm packages: 
```
npm install --save-dev jest babel-jest
```

That's all we need to do.

## ESLint

Setting up ESLint is orthogonal to the rest of the setup. Here we first need to install the following packages:
```
npm install --save-dev eslint eslint-watch eslint-plugin-import
```

We also add the .eslintrc.json file for configuring ESLint.

We can run `npm run lint` or `npm run lint:watch` to start linting the code.

