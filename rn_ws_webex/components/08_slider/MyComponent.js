import React, { Component } from 'react'
import { View, Text, Slider } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      age: 25
    }
  }

  handleChange(value) {
    this.setState({
      age: value
    });
  }

  render() {
    return (
      <View>
        <Text style={{color:'black', fontSize: 20}}>Age: {this.state.age}</Text>
        <Slider style={{width: 300}} value={this.state.age} minimumValue={1} maximumValue={100} step={1}
          onValueChange={this.handleChange}
          thumbTintColor={'blue'}
          />
      </View>
    )
  }
}
