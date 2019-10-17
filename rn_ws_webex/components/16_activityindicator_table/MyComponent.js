import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import EmployeeApi from './EmployeeApi'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      employees: []
    }
  }

  componentDidMount() {
    EmployeeApi.getAllEmployees(data => this.setState({ employees: data, isLoading: false}));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{padding: 40, margin: 40}}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={{color: '#0000FF', fontSize: 24, fontWeight: 'bold'}}>Loading...</Text>
        </View>
      )
    }
    else {
      var employeeList = this.state.employees.map(employee => {
        return(
          <View key={employee.id} style={styles.row}>
            <View style={[styles.column, {flex: 2}]}>
              <Text style={styles.item}>{employee.id}</Text>
            </View>
  
            <View style={[styles.column, {flex: 4}]}>
              <Text style={styles.item}>{employee.name}</Text>
            </View>
  
            <View style={[styles.column, {flex: 4}]}>
              <Text style={styles.item}>{employee.location}</Text>
            </View>
          </View>
        )
      })
      return (
        <View>
          <Text style={styles.heading}>
              Employee Information
          </Text>
          {employeeList}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 60,
    fontSize: 30,
    color: '#0000FF',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 20
  },
  column: {
    flexDirection: 'column'
  },
  item: {
    fontSize: 18
  }
});
