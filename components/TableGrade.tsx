import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TableheaderGrade from './TableheaderGrade'
import TableRowItemStudentGrade from './TableRowItemStudentGrade'

const TableGrade = () => {
  return (
    <View style={{flex:1}}>
      <Text>Notes</Text>
      <TableheaderGrade />
    </View>
  );
}

export default TableGrade

const styles = StyleSheet.create({})


