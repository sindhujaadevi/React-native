import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {id: '1', name: 'Ram', location: 'Bangalore'},
        {id: '2', name: 'Raj', location: 'Pune'},
        {id: '3', name: 'Vinay', location: 'Kochi'}
      ]
    }
  }

  renderItem = ({item}) => (
    <Text style={{color: 'blue', fontSize: 24}}>{item.name}, {item.location}</Text>
  )

  render() {
    return (
        <FlatList style={{paddingTop: 100}}
          data={this.state.employees}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
        />
    )
  }
}






















// renderItem={({item}) => <Text style={{color: 'blue', fontSize: 24}}>{item.name}, {item.location}</Text>}
