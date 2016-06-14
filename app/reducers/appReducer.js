import Immutable from 'immutable';
import types from '../constants/actionTypes';

var initialState = Immutable.fromJS({
  test: 'my test yes this is'
});

export default function appReducer(state=initialState, action={}){
  switch(action.type){
    
    default:
      return state;
  }
}