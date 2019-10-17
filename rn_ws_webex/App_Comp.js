import React from 'react';
import { View, StyleSheet } from 'react-native';

// import MyComponent from './components/01_component/MyComponent'
// import MyComponent from './components/02_props_state_log/MyComponent'
// import MyComponent from './components/03_inlinestyle_stylesheet_flexbox/MyComponent'
// import MyComponent from './components/04_button/MyComponent'
// import MyComponent from './components/05_touchable/MyComponent'
// import MyComponent from './components/06_textinput/MyComponent'
// import MyComponent from './components/07_picker/MyComponent'
// import MyComponent from './components/08_slider/MyComponent'
// import MyComponent from './components/09_switch/MyComponent'
// import MyComponent from './components/10_image/MyComponent'
// import MyComponent from './components/11_scrollview/MyComponent'
import MyComponent from './components/12_flatlist/MyComponent'
// import MyComponent from './components/13_sectionlist/MyComponent'
// import MyComponent from './components/14_modal/MyComponent'
// import MyComponent from './components/15_forms/MyComponent'
// import MyComponent from './components/16_activityindicator_table/MyComponent'
// import MyComponent from './components/17_animated/MyComponent'
// import MyComponent from './components/17a_animatable/MyComponent'
// import MyComponent from './components/18_gestures/MyComponent'
// import MyComponent from './components/19_asyncstorage/MyComponent'
// import MyComponent from './components/20_notifications/MyComponent'

// Below, no style for View - Demo 5, 15, 16, 18
// <View style={styles.container}> - For other demos

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
