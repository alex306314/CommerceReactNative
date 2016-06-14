import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

/**
 * 主界面
 */
class NewsDetailView extends Component
{
  render(){
    return(
      <View>
        <Text>内容页</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailView);