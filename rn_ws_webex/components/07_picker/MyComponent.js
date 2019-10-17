import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Ram'
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Picker
            selectedValue={this.state.name}
            onValueChange={(itemValue, itemIndex) => this.setState({name: itemValue})}>
            <Picker.Item label="Ram" value="Ram" />
            <Picker.Item label="Raj" value="Raj" />
            <Picker.Item label="Vinay" value="Vinay" />
          </Picker>
        </View>
        <View style={styles.messageView}>
          <Text style={{color: 'blue', fontSize: 16}}>Selected employee: {this.state.name}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop: 100,
	marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  messageView: {
    alignItems: 'flex-start',
    padding: 20
  }
});
