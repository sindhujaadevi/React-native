import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { employees } from "../../data/employees"

export default class EmployeesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employees
    };
  }

  static navigationOptions =  {
    title: "Employees List"
  }

  render() {
    const renderItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.location}
          onPress={() => { this.props.navigation.navigate('EmployeeDetails', {empid: item.id})}}
        />
      );
    }

    const { navigate} = this.props.navigation;

    return (
        <FlatList data={this.state.employees}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      );
  }
}
