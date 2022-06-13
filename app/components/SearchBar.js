import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'
import colors from '../misc/colors'

const SearchBar = ({ containerStyle }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput style={styles.searchBar} placeholder='Procurar carro'/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
      borderWidth: 0.5,
      borderColor: colors.PRIMARY,
      height: 40,
      borderRadius: 40,
      paddingLeft: 15,
      fontSize: 20
    },
    container: {}
  })

export default SearchBar