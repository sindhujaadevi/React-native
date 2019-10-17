import React, { Component } from 'react'
import { View, Text, Alert, PanResponder } from 'react-native'
import { Card } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

const SWIPE_IGNORE = 0;
const SWIPE_LEFT = 1;
const SWIPE_RIGHT = 2;
const SWIPE_UP = 3;
const SWIPE_DOWN = 4;


export default class MyComponent extends Component {
  recognizeDrag = ({moveX, moveY, dx, dy}) => {
      if (dx < -100)
        return SWIPE_LEFT;
      else if (dx > 100)
        return SWIPE_RIGHT;
      else if (dy < -100)
        return SWIPE_UP;
      else if (dy > 100)
        return SWIPE_DOWN;
      else
        return SWIPE_IGNORE;
  }

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderGrant: () => {this.myview.wobble()},
    onPanResponderEnd: (evt, gestureState) => {
      const returnValue = this.recognizeDrag(gestureState);
      switch (returnValue) {
        case SWIPE_LEFT:
          Alert.alert('Right to Left swiped!')
          break;
        case SWIPE_RIGHT:
          Alert.alert('Left to Right swiped!')
          break;
        case SWIPE_UP:
          Alert.alert('Bottom to Top Swiped !')
          break;
        case SWIPE_DOWN:
          Alert.alert('Top to Bottom swiped!')
          break;
      }
    }
  })

  render() {
    return (
      <Animatable.View
          ref={(animViewRef) => this.myview = animViewRef}
          {...this.panResponder.panHandlers}>
        <Card title='Gestures Demo'
              image={require('../../assets/images/nature.jpg')}>
              <Text style={{margin: 10, fontSize: 16}}>Nature image</Text>
        </Card>
      </Animatable.View>
    )
  }
}
