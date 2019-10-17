import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class AboutComponent extends Component {
  static navigationOptions =  {
    title: "About Page"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>About Page</Text>
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
