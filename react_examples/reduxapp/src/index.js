import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducerCombined from './reducers/reducer-combineall';

import SuperRootComponent from "./root/rootcomponent";

const reduxStore = createStore(allReducerCombined)
console.log("Store is created....")
console.log(reduxStore)
console.log("Store will be injected in root component....")

ReactDOM.render(
  <Provider store={reduxStore}>
    <SuperRootComponent></SuperRootComponent>
  </Provider>
  ,
  document.getElementById('root')
);

