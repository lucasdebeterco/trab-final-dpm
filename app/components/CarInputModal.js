import { StyleSheet, Modal,Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { React, useState } from 'react'
import { TextInput } from 'react-native-web'
import colors from '../misc/colors'
import RoundIconBtn from './RoundIconBtn'

const CarInputModal = ({visible, onClose, onSubmit}) => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss
  }

  const handleOnChangeText = (text, valueFor) => {
    if(valueFor === 'marca') setMarca(text)
    if(valueFor === 'modelo') setModelo(text)
    if(valueFor === 'ano') setAno(text)
  }

  const handleSubmit = () => {
    if(!marca.trim() && !modelo.trim() && !ano.trim()) return onClose();

    onSubmit(marca, modelo, ano)
    setMarca('')
    setModelo('')
    setAno('')
    onClose()
  }

  const closeModal = () => {
    setMarca('')
    setModelo('')
    setAno('')
  }

  return <Modal visible={visible} animationType='fade' >
    <View style={styles.container}>
      <TextInput value={marca} placeholder='Marca' style={[styles.input, styles.marca]} onChangeText={(text) => handleOnChangeText(text, 'marca')} />
      <TextInput value={modelo} placeholder='Modelo' style={[styles.input, styles.modelo]} onChangeText={(text) => handleOnChangeText(text, 'modelo')} />
      <TextInput value={ano} placeholder='Ano' style={[styles.input, styles.ano]} onChangeText={(text) => handleOnChangeText(text, 'ano')} />
      <View style={styles.btnContainer}>
        <RoundIconBtn size={15} antIconName='check' onPress={handleSubmit} />
        <RoundIconBtn size={15} antIconName='close' style={{marginLeft: 15}} onPress={closeModal} />
      </View>
     
    </View>
    <TouchableWithoutFeedback onPress={handleModalClose}>
      <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
    </TouchableWithoutFeedback>
  </Modal>
}

export default CarInputModal

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.DARK,

  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15
  }
})