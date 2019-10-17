import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import EmployeesComponent from './EmployeesComponent'
import EmployeeDetailsComponent from './EmployeeDetailsComponent'
import AboutComponent from './AboutComponent'
//import Icon from '@expo/vector-icons/Ionicons'

const EmployeeStackNavigator = createStackNavigator({
    Employees: {screen: EmployeesComponent},
    EmployeeDetails: {screen: EmployeeDetailsComponent}
}, {
  initialRouteName: 'Employees',
  defaultNavigationOptions: ({ navigation}) => {
    return {
      headerStyle: {
        backgroundColor: 'darkblue'
      },
      headerTintColor: '#ff0',
      headerTitleStyle: {
        color: '#0ff'
      },
      headerRight: (
        <Icon style={{ paddingRight: 10 }}
          onPress={() => navigation.openDrawer()}
          type="font-awesome"
          name="bars"
          color="white"
          size={24}
        />
      )
    };
  }
})

const AboutStackNavigator = createStackNavigator({
    About: {screen: AboutComponent}
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'darkblue'
    },
    headerTitleStyle: {
      color: '#0ff'
    }
  }
})

const MainNavigator = createDrawerNavigator({
    Employees: {
      screen: EmployeeStackNavigator
    },
    About: {
      screen: AboutStackNavigator
    }
}, {
  drawerPosition: "right",
  unmountInactiveRoutes: false
}
)

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
