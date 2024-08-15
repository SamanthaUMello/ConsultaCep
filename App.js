import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BuscarCep from './components/BuscarCep';
import ExibirEndereco from './components/ExibirEndereco';

const App = () => {
  const [endereco, setEndereco] = useState(null);

  const atualizarEndereco = (novoEndereco) => setEndereco(novoEndereco);

  return (
    <View style={styles.container}>
      <BuscarCep aoBuscar={atualizarEndereco} />
      <ExibirEndereco endereco={endereco} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
