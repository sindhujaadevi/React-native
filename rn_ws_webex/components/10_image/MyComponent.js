import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class MyComponent extends Component {
  render() {
    console.log("Rendering image....");
    return (
      <View>
        <Image
          style={{width:200, height: 200, marginBottom: 20}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/GettingStartedCongratulations.png'}}
        />
        <Image
          source={require('../../assets/images/nature.jpg')}
        />
        <Image
          style={{width: 66, height: 58, marginTop: 20}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    )
  }
}
