import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

// 1. TouchableHighlight
// 2. TouchableWithoutFeedback
// 3. TouchableOpacity
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePress1 = this.handlePress1.bind(this);
    this.handlePress2 = this.handlePress2.bind(this);
    this.handlePress3 = this.handlePress3.bind(this);
    this.state = {
      message: ""
    }
  }
  handlePress1() {
    const displayMessage = "TouchableHighlight clicked";
    this.setState({message: displayMessage});
  }
  handlePress2() {
    const displayMessage = "TouchableWithoutFeedback clicked";
    this.setState({message: displayMessage});
  }
  handlePress3() {
    const displayMessage = "TouchableOpacity clicked";
    this.setState({message: displayMessage});
  }
  render() {
    return (
      <View style={{paddingTop: 100}}>
        <View style={myStyles.myContainer}>
          <TouchableHighlight style={myStyles.firstView} onPress={this.handlePress1} underlayColor='blue'>
            <View>
              <Text style={{color: 'white', fontSize: 18}}>Employee One</Text>
            </View>
          </TouchableHighlight>
          <TouchableWithoutFeedback onPress={this.handlePress2}>
            <View style={myStyles.secondView}>
              <Text style={{color: 'black', fontSize: 18}}>Employee Two</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity style={myStyles.thirdView} onPress={this.handlePress3} activeOpacity={0.2}>
            <View>
              <Text style={{color: 'red', fontSize: 18}}>Employee Three</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={myStyles.messageView}>
            <Text style={{color: 'blue', fontSize: 20}}>{this.state.message}</Text>
          </View>
      </View>
    )
  }
}

const myStyles = StyleSheet.create({
  myContainer: {
    flexDirection: 'row'
  },
  firstView: {
    flex: 1,
    backgroundColor: 'gray'
  },
  secondView: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  thirdView: {
    flex: 1,
    backgroundColor: 'violet'
  },
  messageView: {
    alignItems: 'center',
  }
});
