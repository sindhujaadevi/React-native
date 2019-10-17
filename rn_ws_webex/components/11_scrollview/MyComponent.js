import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

const myText = "This is a very long text which might span across the page and hence need to be scrolled";

export default class MyComponent extends Component {
  render() {
    return (
      <ScrollView>
          <Image
            source={require('../../assets/images/fox_baloon.png')}
          />
        <ScrollView horizontal>
          <View style={{width:1000}}>
            <Text>{myText}</Text>
          </View>
        </ScrollView>
        <Image
            source={require('images/fox_baloon.png')}
          />
          <Image
            source={require('images/fox_baloon.png')}
          />
          <Image
            source={require('images/fox_baloon.png')}
          />
          <Image
            source={require('images/fox_baloon.png')}
          />
      </ScrollView>
    )
  }
}
