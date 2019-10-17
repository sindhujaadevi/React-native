import React, { Component } from 'react'
import { View, Text, Button, Modal, StyleSheet } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      bModal: false
    }
  }

  toggleModal() {
    this.setState({bModal: !this.state.bModal})
  }
  
  render() {
    return (
      <View>
        <Button onPress={this.toggleModal} title="Display Modal" />
        <Modal animationType={"slide"} transparent={false} visible={this.state.bModal}
            onDismiss={() => this.toggleModal()}
            onRequestClose={() => this.toggleModal()}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>This is a Modal</Text>
            <Button onPress={() => {this.toggleModal()}} color={"#FF0000"} title="Close Modal"/>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 20,
    color: 'blue'
  }
})
