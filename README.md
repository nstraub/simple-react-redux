[react-redux](https://github.com/reactjs/react-redux/) 
is a great module that allows us to decouple our components from our state, 
so we can focus only on the view.
It does this by providing a connector that maps state and actions to props, 
effectively allowing us to make all our components dumb again (which is a good thing).

To use it you create a `mapStateToProps` function and a `mapDispatchToProps` function, which return
state properties and actions respectively. 
The problem is you have to do this for every component which requires something from the state or 
performs an action, leading to a lot of repetition and boilerplate code.

**simple-react-redux** allows you to leverage the power of `react-redux` declaratively:
instead of creating the required functions, you add props to your element to tell it
what to get from the state and which actions to use.

Let's say you have a person component, which needs `name` and `age` from the state and dispatches
the `updateName` action. With `react-redux` the code would look something like this:

```javascript
import {connect} from 'react-redux';
import {updateName} from './actions';

var Person = React.createClass({
    ...
});

function mapStateToProps(state) {
    return {
        name: state.name,
        age: state.age
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateName: function (newName) {
            return dispatch(updateName(newName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
```

Using `simple-react-redux` you can achieve the same functionality with just a few lines of code:
 
```javascript
import simpleConnect from 'simple-react-redux';
import {updateName} from './actions';

var Person = React.createClass({
    // ...
});

export default simpleConnect(Person);
```

And then when you use it:

```html
<Person getFromState={["name", "age"]} getFromActions={{updateName: updateName}} />
```

And that's it!
