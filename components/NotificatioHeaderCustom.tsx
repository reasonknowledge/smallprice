import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import * as colors from "../colors/Colors"
const NotificatioHeaderCustom = () => {
  return (
    <TouchableOpacity style={{position:'relative',right:10}}>
      <Bell size={24} color={colors.white} strokeWidth={1} />
      <View style={{ position: "absolute", width: 18, height: 18, borderRadius: 18, backgroundColor: colors.white, left: 10,bottom:10, }}>
        <Text style={{fontWeight:"bold",textAlign:"center"}}>3</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NotificatioHeaderCustom

const styles = StyleSheet.create({})