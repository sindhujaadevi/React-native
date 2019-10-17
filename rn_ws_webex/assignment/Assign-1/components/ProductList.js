import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [
        { id: '1', productName: 'Moto', quantity: '1' },
        { id: '2', productName: 'One Plus', quantity: '2' },
        { id: '3', productName: 'POCO', quantity: '1' },
        { id: '4', productName: 'Samsung', quantity: '3' },
      ],
    };
  }

  renderItem = ({ item }) => (
    <Text style={{ color: 'blue', fontSize: 18 }}>
      {item.id}) {item.productName}, {item.quantity}
    </Text>
  );

  render() {
    return (
      <View>
        <Text style={{ color: 'red', fontSize: 24 }}> Products List</Text>
        <FlatList
          style={{ padding: 10 }}
          data={this.state.productsList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}
