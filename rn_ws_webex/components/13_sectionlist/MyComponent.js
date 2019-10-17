import React, { Component } from 'react'
import { View, Text, SectionList } from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
	    sections1: [
         {
			      subject: 'Maths',
            data: [
              { name: 'Rahul', mark: 99 },
              { name: 'Vijay', mark: 87 }
            ]
        },
        {
			     subject: 'Physics',
           data: [
             { name: 'Rahul', mark: 79 },
             { name: 'Vijay', mark: 81 }
           ]
        }
      ],
      sections2: [
        {
          subject: 'Maths',
          data: [
            { name: 'Rahul', mark: 99 },
            { name: 'Vijay', mark: 87 }
          ],
          renderItem: ({item, index}) => {
            return (
              <Text style={{color: 'blue', fontSize: 16}} key={index}>{item.name}, {item.mark}</Text>
            )
          }
        },
        {
          subject: 'Physics',
          data: [
            { name: 'Rahul', mark: 79 },
            { name: 'Vijay', mark: 81 }
          ],
          renderItem: ({item, index}) => {
            return (
              <Text style={{color: 'red', fontSize: 16}} key={index}>{item.name}, {item.mark}</Text>
            )
          }
        }
      ]
    }
  }

 renderItem = ({item, index}) => {
    return (
      <Text style={{color: 'brown', fontSize: 16}} key={index}>{item.name}, {item.mark}</Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>{section.subject}</Text>
    )
  }

  render() {
    return (
      <View>
        <SectionList style={{paddingTop: 100}}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.sections1}
          keyExtractor={(item, index) => item + index }
        />
        <SectionList
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.sections2}
          keyExtractor={(item, index) => item + index }
        />
      </View>
    )
  }
}
