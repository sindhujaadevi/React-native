import React, { Component } from 'react'
import { View, Button, Alert, StyleSheet } from 'react-native'

// 1. Button, onPress
// 2. Alert component
export default class MyComponent extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  add() {
    Alert.alert('Add button clicked!')
  }
  edit() {
    Alert.alert('Edit button clicked!')
  }
  delete() {
    Alert.alert('Delete button clicked!')
  }

  render() {
    return (
      <View style={styles.buttonLayoutContainer}>
        <Button onPress={this.add} title="Add" />
        <Button onPress={this.edit} title="Edit" color="purple"/>
        <Button onPress={this.delete} title="Delete" color="red"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonLayoutContainer: {
    margin: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
