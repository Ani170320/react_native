import {View,Text,StyleSheet, Pressable} from "react-native";



const App = () => {
  return (
    <View style={styles.container}>
<Text style={styles.heading}>Welcome to React Native</Text>
<Text style ={styles.subText}>This is a simple screen</Text>
<Text style ={styles.subText}>It Demonstarates styling and core components</Text>

<Pressable style={({ pressed }) => [  
  styles.button,  
  { backgroundColor: pressed ? 'lightblue' : 'blue' },  
]}  
>
<Text style={styles.buttontext}>Click me</Text>Click me </Pressable>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
    container: {
      backgroundColor: "cyan",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontSize: 30,
      fontWeight: "bold",
      padding:10,
        backgroundColor:"rgba(247, 78, 6, 0.2)",
        flexDirection:'column'
     
    },
    subText: {
      fontSize: 25,
      marginTop: 5,
      
    },
    buttontext:{
      fontSize:30,
      backgroundColor:"rgba(134, 216, 19, 0.3)",
      color:"white"
    }
  });