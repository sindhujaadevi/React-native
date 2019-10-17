import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CompanyComponent extends Component {
  static navigationOptions =  {
    title: "Company Page"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Company Page</Text>
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
