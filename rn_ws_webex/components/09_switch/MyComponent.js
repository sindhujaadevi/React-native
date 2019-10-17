import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
    this.state = {
      todoCompleted: false
    }
  }

  handleSwitchChange(value) {
    this.setState({
      todoCompleted: value
    });
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{color:'black', fontSize: 20}}>React Native Completed</Text>
        <Switch value={this.state.todoCompleted} onValueChange={this.handleSwitchChange} 
        />
      </View>
    )
  }
}























// thumbColor={'blue'} trackColor={{false: null, true: 'lightblue'}}