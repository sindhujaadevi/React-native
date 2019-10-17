import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, createStackNavigator, createDrawerNavigator,
  createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import EmployeesComponent from './EmployeesComponent'
import EmployeeDetailsComponent from './EmployeeDetailsComponent'
import AboutComponent from './AboutComponent'
import LoginComponent from './LoginComponent'
import CompanyComponent from './CompanyComponent'
import DirectorsComponent from './DirectorsComponent'
import TeamComponent from './TeamComponent'
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
          name="menu"
          color="orange"
          size={24}
        />
      )
    };
  }
})

const AboutTabNavigator = createBottomTabNavigator({
  Company: {screen: CompanyComponent},
  Directors: {screen: DirectorsComponent},
  Team: {screen: TeamComponent}
})

const AboutStackNavigator = createStackNavigator({
    About: {screen: AboutTabNavigator}
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

const AuthStackNavigator = createStackNavigator({
    Login: {
      screen: LoginComponent
    }
})

const AppSwitchNavigator = createSwitchNavigator({
  Auth: AuthStackNavigator,
  App: MainNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
