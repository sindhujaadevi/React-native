import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage, StyleSheet } from 'react-native'

const ASYNC_STORAGE_KEY = 'KEY_MYCOMPONENT_NAME'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
    this.clearAsyncStorage = this.clearAsyncStorage.bind(this);
    this.state = {
      name: 'Ram',
      text: ''
    }
  }

  componentWillMount() {
    this.load()
  }

  load = async () => {
    try {
      const retrievedName = await AsyncStorage.getItem(ASYNC_STORAGE_KEY)
      if (retrievedName !== null) {
        this.setState({name: retrievedName})
      }
    } catch (e) {
      console.error('Failed to load name.')
    }
  }

  save = async (enteredName) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY, enteredName)

      this.setState({name: enteredName})
    } catch (e) {
      console.error('Failed to save name.')
    }
  }

  onChangeText(enteredText) {
    this.setState({text: enteredText})
  }

  onSubmitEditing() {
    if (!this.state.text) return // If empty, return without submitting
    this.save(this.state.text)
    this.setState({text: ''})
  }

  clearAsyncStorage() {
    AsyncStorage.removeItem(ASYNC_STORAGE_KEY);
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.text}
          placeholder={'Enter name, hit enter and refresh the browser'}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
        <Text style={styles.text}>Hello {this.state.name}!</Text>
        <Button onPress={this.clearAsyncStorage} title="Clear AsyncStorage" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    height: 60,
    fontSize: 15
  },
  text: {
    marginBottom: 80,
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 20
  }
})
