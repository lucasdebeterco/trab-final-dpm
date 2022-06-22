import { StyleSheet, View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import SearchBar from '../components/SearchBar';
import Car from '../components/Car';
import RoundIconBtn from '../components/RoundIconBtn';
import CarInputModal from '../components/CarInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-web';

const CarScreen = ({user}) => {
  const [greet, setGreet] = useState('bom dia');
  const [modalVisible, setModalVisible] = useState(false)
  const [cars, setCars] = useState([])

  const findGreet = () => {
    const hrs = new Date().getHours()

    if (hrs == 0 || hrs < 12 ) return setGreet('Bom dia')
    if (hrs == 1 || hrs < 17 ) return setGreet('Boa tarde')
    return setGreet('Boa noite')
  }

  const findCars = async () => {
    const result = await AsyncStorage.getItem('cars')
    if (result !== null) setCars(JSON.parse(result))
  }

  useEffect(() => {
    findCars()
    findGreet()
  }, [])

  const handleOnSubmit = async (marca, modelo, ano) => {
    const car = {id: Date.now(), marca, modelo, ano, time: Date.now()}
    const updatedCars = [...cars, car]
    
    setCars(updatedCars)
    AsyncStorage.setItem('cars', JSON.stringify(updatedCars))
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>{`${greet} ${user.name}`}</Text>
      <SearchBar containerStyle={{marginVertical: 15}}/>

      <FlatList 
        data={cars}
        numColumns={2}
        columnWrapperStyle={{justifyContent: "space-between", marginBottom: 15}}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Car item={item} />} 
      />

      {!cars.length ?       
        <View style={[ StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
          <Text style={styles.emptyHeader}>
            Adicionar Carro
          </Text>
        </View> : null
      }

    </View>
    
    <RoundIconBtn 
      onPress={() => setModalVisible(true)} 
      antIconName='plus' 
      alignItems='center'
      justifyContent='center'
      style={styles.addBtn} 
    />

    <CarInputModal 
      visible={modalVisible} 
      onClose={() => setModalVisible(false)}
      onSubmit={handleOnSubmit}
     />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
})

export default CarScreen