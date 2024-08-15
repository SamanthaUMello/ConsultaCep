import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExibirEndereco = ({ endereco }) => {
  if (!endereco) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rua: {endereco.logradouro}</Text>
      <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.text}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.text}>Estado: {endereco.uf}</Text>
      <Text style={styles.text}>IBGE: {endereco.ibge}</Text>
      <Text style={styles.text}>DDD: {endereco.ddd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ExibirEndereco;
