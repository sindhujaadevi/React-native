import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TeamComponent extends Component {
  static navigationOptions =  {
    title: "Team Page"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Team Page</Text>
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
