import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// 1. Specifying inline style
// 2. Specifying through StyleSheet
// 3. Specifying a combination of Stylesheet and inline style, through array
// 4. Flexbox
export default class MyComponent extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor: 'cyan'}}>
          <Text style={{color: 'darkblue', fontSize: 40}}>Hello Employee</Text>
        </View>
        <View style={myStyles.myView}>
          <Text style={myStyles.myText}>Welcome Employee</Text>
        </View>
        <View style={myStyles.myContainer}>
          <View style={myStyles.firstView}>
            <Text style={{color: 'white', fontSize: 20}}>Employee One</Text>
          </View>
          <View style={[myStyles.secondView, {backgroundColor: 'red'}]}>
            <Text style={{color: 'yellow', fontSize: 20}}>Employee Two</Text>
          </View>
        </View>
      </View>
    )
  }
}

const myStyles = StyleSheet.create({
  myView: {
    backgroundColor: 'yellow'
  },
  myText: {
    color: 'red',
    fontSize: 30
  },
  myContainer: {
    flexDirection: 'row'
  },
  firstView: {
    flex: 1,
    backgroundColor: 'black'
  },
  secondView: {
    flex: 1
  }
});
