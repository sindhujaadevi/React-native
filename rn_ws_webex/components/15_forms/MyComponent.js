import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput, Button, Picker, Switch, StyleSheet } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.addEmployee = this.addEmployee.bind(this);
    this.state = {
      addName: '',
      addLocation: 'Bangalore',
      addManager: false,
      employees: [
            {
                "name": "Ram",
                "location": "Chennai",
                  "manager": true
            },
            {
                "name": "Raj",
                "location": "Pune",
                "manager": false
            },
            {
                "name": "Vinay",
                "location": "Kochi",
                "manager": false
            }
      ]
    }
  }

  addEmployee() {
      let employee = {
          "name": this.state.addName,
          "location": this.state.addLocation,
          "manager": this.state.addManager
      }
      this.state.employees.push(employee);
      this.setState({employees: this.state.employees})
  }

  render() {
    let index=0;
    let employeeList = this.state.employees.map(employee => {
        index++;
        return(
            <Text style={styles.employee} key={index}>{employee.name}, {employee.location}, {employee.manager ? 'Yes': 'No'}</Text>
        )
    })

    return (
        <View style={{paddingTop: 100, marginLeft: 10}}>
            <View style={styles.row}>
                <Text style={styles.label}>Name: </Text>
                <TextInput style={[styles.item, {height: 30, width: "60%", borderColor: 'black', borderWidth: 1}]} placeholder="Enter Name" value={this.state.addName}
                    onChangeText={(value) => this.setState({addName: value})}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Location: </Text>
                <Picker style={styles.item}
                    selectedValue={this.state.addLocation}
                    onValueChange={(itemValue, itemIndex) => this.setState({addLocation: itemValue})}>
                    <Picker.Item label="Bangalore" value="Bangalore" />
                    <Picker.Item label="Chennai" value="Chennai" />
                    <Picker.Item label="Kochi" value="Kochi" />
                    <Picker.Item label="Pune" value="Pune" />
                </Picker>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Manager: </Text>
                <Switch style={styles.item} value={this.state.addManager} onValueChange={(value) => this.setState({addManager: value})}/>
            </View>
            <View style={styles.row}>
                <Button onPress={this.addEmployee} title="Add Employee" />
            </View>
            <View style={styles.employees}>
                {employeeList}
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 25,
        alignItems: 'center'
    },
    label: {
        flex: 1,
        flexDirection: 'column'
    },
    item: {
        flex: 2,
        flexDirection: 'column'
    },
    employees: {
        flexDirection: 'column',
        padding: 25
    },
    employee: {
        fontSize: 18,
        color: 'blue'
    }
});
