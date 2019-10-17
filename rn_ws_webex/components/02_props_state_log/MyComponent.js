import React, { Component } from 'react'
import { View, Text } from 'react-native'

// 1. Default Props
// 2. Props passed from App.js
// 3. State
// 4. console.log
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Wipro',
    }
  }

  static defaultProps = {
    name: 'Sachin'
  }

  render() {
    console.log("====> Name: " + this.props.name);
    console.log("====> Company: " + this.state.company);
    return (
      <View>
        <Text>Hello {this.props.name}</Text>
        <Text>Working in {this.state.company}</Text>
      </View>
    )
  }
}
