import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CarScreen from './app/screens/CarScreen';

export default function App() {
  const [user, setUser] = useState({})

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')
    setUser(JSON.parse(result))
  }

  useEffect(() => {
    findUser()
  }, [])

  return <CarScreen user={user} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});