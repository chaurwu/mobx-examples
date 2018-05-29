Run the tests by executing the following in the mobx-examples/counter folder:

`npm test`

I create the project by coping the files from mobx-examples/a4. 
Then I do the following.

## install and configure enzyme (perferred)

```
npm i --save-dev enzyme enzyme-adapter-react-16
```

src/setupTests.js:
```
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
}

Enzyme.configure({ adapter: new Adapter() });
```
