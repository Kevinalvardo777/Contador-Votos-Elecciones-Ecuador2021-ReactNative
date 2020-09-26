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
        <button
          onPress={restar}
          
        >-</button>
        <View>{value}</View>
        <button
          onPress={sumar}
          color="white"
        >+</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  votaciones: {
    color: 'midnightblue', 
    fontWeight: 'bold', 
    fontSize: '20px'
  },
  button: {
    backGroundColor: 'white'
  },
  app: {
    fontFamily: 'sans serif',
    textAlign: 'center',
    fontSize: '25px'
  }, 
  image: {
    height: '450px',
    width: '250px',
    marginTop: '20px',
    marginBottom: '20px'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100px',
    width: '80%',
    margin: 'auto',
    backgroundColor: 'skyblue',
    fontSize: '60px', 
    flexDirection: 'row'
    
  }

});

