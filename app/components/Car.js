import { View, StyleSheet, Text, Dimensions} from 'react-native'
import React from 'react'
import colors from '../misc/colors';

const Car = ({item}) => {
    const {marca, modelo, ano} = item;
  return (
    <View style={styles.container}>
      <Text>{marca}</Text>
      <Text>{modelo}</Text>
      <Text>{ano}</Text>
    </View>
  )
}

const width = Dimensions.get('window').width - 40

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        width: width / 2 - 10,
        padding: 10,
        borderRadius: 10
    }
})

export default Car