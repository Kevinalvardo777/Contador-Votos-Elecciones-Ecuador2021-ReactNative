import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Image, Button, Text, View } from 'react-native';

export default function App() {

  let [value, setValue] = useState(0);

  const restar = () => {
    if (value > 0)
    setValue(--value)
  }

  const sumar = () => {
    setValue(++value)
  }

  const resetear = () => {
    setValue(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.votaciones}>Votaciones Partido Creo</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://pbs.twimg.com/media/A7I_mNsCIAAYO5h.jpg',
        }}
      />
      <View style={styles.wrapper}>
        <View style={styles.buttonStyle}>
          <Button
            onPress={restar}
            title="     -     "
            style={styles.buttonProperty}
          >-</Button>
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#154360'}}>{value}</Text>
          <Button
            onPress={sumar}
            title="     +     "
            style={styles.buttonProperty}
          >   +   </Button>
          
        </View>
        
      </View>  
      <Button onPress={resetear} title="Reiniciar" style={{ paddingTop: 20}}>Reiniciar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  buttonStyle: {
    marginHorizontal: 30,
    width: 260,
    marginTop: 5, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonProperty: {
    width:"100%", 
    marginHorizontal: 60
  },
  btnSize: {
    width: '100%'
  }, 
  votaciones: {
    color: '#154360', 
    fontWeight: 'bold', 
    fontSize: 20, 
    marginTop: 40
  },
  button: {
    backgroundColor: 'white'
  },
  app: {
    fontFamily: 'sans serif',
    textAlign: 'center',
    fontSize: 25
  }, 
  image: {
    height: 370,
    width: 250,
    marginTop: 20,
    marginBottom: 20
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 10,
    alignItems: 'center',
    height: 100,
    width: 250,
    margin: 'auto',
    backgroundColor: 'skyblue',
    fontSize: 60, 
    flexDirection: 'row'
    
  }, 
  reset: {
    marginTop: 80,
  }

});

