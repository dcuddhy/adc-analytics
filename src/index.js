import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import './index.css';
import Index from './routes/index';
import Details from './routes/details';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

export default Routes;
