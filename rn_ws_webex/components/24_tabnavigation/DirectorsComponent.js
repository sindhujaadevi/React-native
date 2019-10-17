import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DirectorsComponent extends Component {
  static navigationOptions =  {
    title: "Directors Page"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Directors Page</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
