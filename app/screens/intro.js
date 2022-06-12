import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

export default function intro() {
  return (
    <View>
      <Text>Insira seu nome</Text>
      <TextInput />
    </View>
  )
}

const styles = StyleSheet.create({})