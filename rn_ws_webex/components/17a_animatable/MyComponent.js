import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'

export default class MyComponent extends Component {

  render() {
    return (
      <Animatable.Text style={{fontSize: 48}} animation="zoomOut" iterationCount={"infinite"} direction="alternate" iterationDelay={1000}>Animate Text</Animatable.Text>
    )
  }
}
