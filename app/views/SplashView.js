import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreateors } from 'redux';
import { Actions } from 'react-native-router-flux';

import * as actionCreators from '../actions';

const mapStateToProps = state => {
  return {
    test: state.appReducer.get('test')
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

/**
 * 闪屏页
 */
class SplashView extends Component
{
  render(){
    return(
      <View style={{backgroundColor:'rgba(0,0,0,0.2)',flex:1}}>
        <Text style={{fontSize:30,color:'black'}}>splash view {this.props.test}</Text>
        <TouchableOpacity onPress={Actions.main} >
          <Text>跳转主页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashView);