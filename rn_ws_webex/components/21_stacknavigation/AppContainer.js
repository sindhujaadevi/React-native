import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import EmployeesComponent from './EmployeesComponent'
import EmployeeDetailsComponent from './EmployeeDetailsComponent'

const EmployeeStackNavigator = createStackNavigator({
    Employees: {screen: EmployeesComponent},
    EmployeeDetails: {screen: EmployeeDetailsComponent}
}, {
  initialRouteName: 'Employees',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'darkblue'
    },
    headerTintColor: '#ff0',
    headerTitleStyle: {
      color: '#0ff'
    }
  }
})

const AppContainer = createAppContainer(EmployeeStackNavigator);

export default AppContainer;
