import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from
 
'@react-navigation/native';
import { createStackNavigator } from
 
'@react-navigation/native-stack';

const CategoryCard = ({title, navigation}) => {
  const image = require('./assets/athlete2.jpg');
  
  return (
    <SafeAreaView>
    <ScrollView horizontal={true}>

    <TouchableOpacity style={{justifyContent:'space-between', marginHorizontal:10,}}>
      


      <Image source={image} style={{height:100, width:100,}} />


    <View>
      <Text>{title}</Text>
      </View> 
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView> 

  )
}

export default CategoryCard