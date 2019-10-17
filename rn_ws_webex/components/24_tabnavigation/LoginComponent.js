import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class LoginComponent extends Component {
  static navigationOptions =  {
    title: "Login Page"
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login!" onPress={() => {this.props.navigation.navigate('App')}} />
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
