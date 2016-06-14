
import React, { Component } from 'react';
import { 
  View,
  Text
} from 'react-native';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';
import scenes from './scenes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = compose(createStoreWithMiddleware)(reducers);


export default class Root extends Component
{
  render(){
    return(
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} hideNavBar={true}/>
      </Provider>
    );
  }
}