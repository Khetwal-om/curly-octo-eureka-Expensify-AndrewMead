This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# React router

1. **Resources**
   1. reacttraining.com
   2. https://reacttraining.com/react-router/web/api/Route/component

   
### Router is working

```javascript

import * as serviceWorker from './serviceWorker';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} exact={true} />
            <Route path="/edit" component={EditExpensePage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
        </div>
    </BrowserRouter>
);





ReactDOM.render(routes, document.getElementById('root'));

serviceWorker.unregister();
```




### Rewriting the above in App.js file

```js
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage'; import * as serviceWorker from './serviceWorker';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';








function App() {
  return (

    <BrowserRouter>
      <div>
        <p>Now i am in working condition</p>
        <Route path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit" component={EditExpensePage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
      </div>
    </BrowserRouter>
  );
}
export default App;



```



### Page not found with switch

```javascript
import React from 'react';
import './App.css';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';


function App() {
  return (

    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;


```


### Linking between routes

1. Avoid use of *default* keyword in *export default Header*.




---

# Under no cirumstances I can do this

```js
import React from 'react';
import Link from 'react-router-dom';

function Header() {
    return < header >
        <h1>Expensify</h1>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link>
        <Link to="/">Home</Link>
    </header >;

}



export { Header, Link };
```

---











2. Use this instead

---


```js

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/create">Create</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
    <Link to="/">Home</Link>
  </header>
)
```


---


### Navlink is a better option than Link

```javascript
import React from 'react';
import './App.css';
import './styles/base/sample.css';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';
// import Header from './Header';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/create" exact activeClassName="is-active">Create</NavLink>
    <NavLink to="/edit" exact activeClassName="is-active">Edit</NavLink>
    <NavLink to="/help" exact activeClassName="is-active">Help</NavLink>
    <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
  </header>
)

function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}
export default App;




```




### URL Parameters

1. We wanna make the *edit* part dynamic
 i.e.,  This guy **  <Route path="/edit" component={EditExpensePage} />**

```js

function AppRouter() {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ExpenseDashboardPage} />
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>

        </BrowserRouter>
    );
}
export default AppRouter;



```

---

** <Route path="/edit/:id" component={EditExpensePage} />
**

---