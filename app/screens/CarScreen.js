import { StyleSheet, View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';

const CarScreen = ({user}) => {
  const [greet, setGreet] = useState('bom dia');

  const findGreet = () => {
    const hrs = new Date().getHours()

    if (hrs == 0 || hrs < 12 ) return setGreet('Bom dia')
    if (hrs == 1 || hrs < 17 ) return setGreet('Boa tarde')
    return setGreet('Boa noite')
  }

  useEffect(() => {
    findGreet()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`${greet} ${user.name}`}</Text>
      <SearchBar containerStyle={{marginVertical: 15}}/>

      <View style={[ StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
        <Text style={styles.emptyHeader}>
          Adicionar Carro
        </Text>
        <RoundIconBtn 
          onPress={() => console.log('abrindo modal')} 
          antIconName='plus' 
          style={styles.addBtn} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    paddingHorizontal: 20,
    flex: 1
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1
  },
  addBtn: {
    position: 'absolute'
  }
})

export default CarScreen