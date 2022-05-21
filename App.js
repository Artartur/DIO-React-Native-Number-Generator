import { StatusBar}from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';



export default function App() {

const [numero, setNumero] = useState(0)

function handleNumero(){
  const novoNumero = Math.floor(Math.random()*10)

  setNumero(novoNumero)
} 

  return (
    <SafeAreaView  style = {styles.container}>
      <Text style = {styles.number}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style = {styles.botao}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
    number:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
    },
    botao:{
       backgroundColor: '#FFF',
       width: '40%',
       paddingHorizontal: 10,
       paddingVertical: 25,
       margin: 10,
       borderRadius: 5,
       justifyContent: 'center',
       alignItems: 'center',
    }

});
