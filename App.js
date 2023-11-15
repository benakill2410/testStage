import { StyleSheet, Text, View } from 'react-native';
import {Tasks} from "./src/component/tasks";

export default function App() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            marginTop : 50,
            marginBottom : 50
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of tasks</Text>
        <Tasks/>
    </View>
  );
}
