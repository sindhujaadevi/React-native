import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      height: new Animated.Value(100)
    }
  }

  componentDidMount() {
    this.startAnimation()
  }

  startAnimation = () => {
    const {height} = this.state
    height.setValue(100)
    Animated.spring(height, {toValue: 400, friction: 0.6}).start()
  }

  render() {
    const {height} = this.state

    return (
      <AnimatedTouchableOpacity
        onPress={this.startAnimation}
        style={[styles.button, {height}]}
      >
        <Text style={styles.text}>
          Tap here
        </Text>
      </AnimatedTouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 50,
  },
})
