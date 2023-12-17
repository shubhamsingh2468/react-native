import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { SafeAreaView } from 'react-native';
const Category = () => {
  return (
    <SafeAreaView>
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:15,
                          }}
    horizontal
    showsHorizontalScrollIndicator={false} 
    >
      <CategoryCard  title='athlete'  />
      <CategoryCard title='athlete1' />
      <CategoryCard title='athlete3' />
      <CategoryCard title='athlete4'/>
      <CategoryCard title='athlet5' />
      <CategoryCard title='athlete6' />
      <CategoryCard title='athlete7' />
      <CategoryCard title='athlet8' />
      <CategoryCard title='athlete9' />
</ScrollView>
    </SafeAreaView>
  )
}
export default Category