import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Permissions, Notifications } from 'expo'

export default class MyComponent extends Component {
    constructor() {
      super();
      this.notify = this.notify.bind(this);
    }

    async getPermissionForNotification() {
        let perm = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if (perm.status !== 'granted') {
            perm = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if (perm.status !== 'granted') {
                console.log('No Permission to display notifications');
            }
        }
        return perm;
    }

    async displayNotification() {
        await this.getPermissionForNotification();
        Notifications.presentLocalNotificationAsync({
            title: 'Notification Message',
            body: 'This is a notification message from React Native',
            android: {
                sound: true,
                color: 'lightblue',
                icon: '../../assets/icon.png'
            }
        });
    }
  
    notify() {
      this.displayNotification();
    }
  
    render() {
      return (
        <View style={styles.buttonLayoutContainer}>
          <Button onPress={this.notify} title="Notify" />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    buttonLayoutContainer: {
      margin: 100,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
  

