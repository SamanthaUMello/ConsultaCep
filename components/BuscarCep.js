import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { buscarCep } from '../service/cepService';

const BuscarCep = ({ aoBuscar }) => {
  const [cep, setCep] = useState('');
  const [erro, setErro] = useState('');

  const buscarEndereco = async () => {
    if (cep.length !== 8) {
      setErro('O CEP deve ter 8 dígitos.');
      return;
    }

    setErro('');
    try {
      const endereco = await buscarCep(cep);
      aoBuscar(endereco);
    } catch (e) {
      setErro('Erro ao buscar o endereço.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <Pressable style={styles.button} onPress={buscarEndereco}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>
      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default BuscarCep;