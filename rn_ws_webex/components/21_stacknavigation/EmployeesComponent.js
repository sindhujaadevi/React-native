import React, { Component } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import SwipeOut from 'react-native-swipeout'
import { employees } from "data/employees"

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
    const { navigate} = this.props.navigation;

    const leftButton = [
      {
        component: (
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon type="font-awesome" name="trash" color="black" size={30}/>
          </View>
        ),
        onPress: () => {
          Alert.alert("The list item will be deleted")
        }
      }
  ];

    const renderItem = ({item, index}) => {
      return (
        <SwipeOut left={leftButton} autoClose={true}>
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.location}
            onPress={() => { navigate('EmployeeDetails', {empid: item.id})}}
          />
        </SwipeOut>
      );
    }


    return (
        <FlatList data={this.state.employees}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      );
  }
}
