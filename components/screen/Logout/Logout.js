import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Logout = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text>Logout</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})