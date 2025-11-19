import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {


  const [count, setCount] = useState(0);
  const [isReset, setIsReset] = useState(false);

  const increment = () => {
    setIsReset(false);
    setCount(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setIsReset(false);
    setCount(prevCount => prevCount - 1);
  }
  const reset = () => {
    setCount(0);
    setIsReset(true);
  };

  const counterStyle = {
    fontSize: 100,
    color: isReset ? '#000000' : count > 0 ? '#108981' : '#EF4444'
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.subtitle}>Presiona los botones para cambiar de valor.</Text>
      </View>
      <View>
        <Text style={styles.counterContainer}></Text>
        <Text style={counterStyle}>{isReset ? 'cero' : count}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.incrementButton]}
          onPress={increment}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.decrementButton]}
          onPress={decrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonReset]}
          onPress={reset}
        >
          <Text style={styles.buttonText}>⟳</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 32,
    alignItems: 'center',
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
  },
  counterContainer: {
    marginBottom: 40,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementButton: {
    backgroundColor: '#10B981',
  },
  decrementButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonReset: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }


});
