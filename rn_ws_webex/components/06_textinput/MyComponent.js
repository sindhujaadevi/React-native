import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

// 1. TextInput - placeholder, value, onChangeText
export default class MyComponent extends Component {
  constructor() {
    super();
    this.handleChangeText = this.handleChangeText.bind(this);
    this.state = {
      name: ""
    }
  }
  handleChangeText(value) {
    this.setState({name: value});
  }
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text>Name: </Text>
          <TextInput style={{height: 30, width: "60%", borderColor: 'blue', borderWidth: 1}} placeholder="Enter Name" value={this.state.name} onChangeText={this.handleChangeText}/>
        </View>
        <View  style={{flex: 3, flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text>{this.state.name}</Text>
        </View>
      </View>
    )
  }
}
























/*
render() {
  return (
    <View style={{paddingTop: 100, marginLeft: 10}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}> 
        <Text>Name: </Text>
        <TextInput style={{height: 30, width: "60%", borderColor: 'blue', borderWidth: 1}} placeholder="Enter Name" value={this.state.name} onChangeText={this.handleChangeText}/>
      </View>
      <View style={{paddingTop: 20}}>
        <Text>{this.state.name}</Text>
      </View>
    </View>
  )
}
*/