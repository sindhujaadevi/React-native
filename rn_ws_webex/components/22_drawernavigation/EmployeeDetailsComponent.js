import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { employees } from "../../data/employees"

export default class EmployeeDetailsComponent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions =  {
    title: "Employee Details"
  }

  render() {
    const empid = this.props.navigation.getParam('empid','');
    const employee = this.state.employees[+empid-1];

    return(
      <Card title={employee.name}>
          <Text style={{margin: 10}}>ID: {employee.id}</Text>
          <Text style={{margin: 10}}>Name: {employee.name}</Text>
          <Text style={{margin: 10}}>Location: {employee.location}</Text>
      </Card>
    )
  }
}
