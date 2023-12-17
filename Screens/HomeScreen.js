import {StyleSheet, View, Text, Button, SafeAreaView, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import Category from '../Category';
import MyComponent from '../MyComponent'
import AthleteMovement from '../AthleteMovement'
import Chart from '../Chart'
import AthleteReport from './AthleteReport';

const image1 = require('../assets/athlete-logo.jpg');
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoContainer: {
    flex: 1/3,
    marginBottom: 20,
  },
  video: {
    flex: 1,
  },
});
const HomeScreen = () => {
  const navigation= useNavigation();

  const handleReportButtonPress = () => {
    // Pass athlete data as props
    navigation.navigate('AthleteReport', {
      image: 'https://example.com/athlete.png',
      name: 'John Doe',
      stats: [{ name: 'Points', value: 20 }, { name: 'Rebounds', value: 10 }],
    });
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, []);
 return (
    <SafeAreaView>
       <View style={{backgroundColor:
         '#03fc1c',
        height:'80px',
        width:'full', display: 'flex',
        flexDirection: 'row',
   }}>
       <Image source={image1} style={{ width: 120, height: 60, marginTop:16,  marginLeft:20, }} />
       <Entypo name="menu" size={24} color="black" style={{ marginLeft:300, marginTop:20,}} />
    </View>
<View style={{marginTop:20, marginLeft:10,}}>
   <Text style={{fontSize:30, fontWeight:'bold',}}>Past Videos</Text>
    </View>
<View>
      <ScrollView style={{backgroundColor: '#808080'}}
      contentContainerStyle={{
       // paddingBottom:100,
      }}
horizontal={false}
      >
        <View>
      <Category />
      <Button
 
       title="Go to athlete report"
 
         onPress={handleReportButtonPress} />
      </View>
      
      </ScrollView>
    </View>
<View style={{marginTop:20, marginLeft:10,}}>
   <Text style={{fontSize:30, fontWeight:'bold',}}>Analysis</Text>
     </View>
    <View style={{flexDirection:'row', paddingHorizontal:10, }}>
     <Entypo name="camera" size={24} color="black" />
     <Entypo name="camera" size={24} color="black" style={{marginLeft:20, marginTop:10,}} />
     </View>
     <View>
      <button style={{width:300, height:20, marginBottom:20, marginLeft:100, }}>video data to be displayed <AntDesign name="up" size={10} color="black" /></button>
      </View>



       <View style={{marginTop:40,}}>
       <Chart />
       </View>
       
</SafeAreaView>
 )
}
 export default HomeScreen
