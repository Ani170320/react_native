import {
    Text,
    View,
    Pressable,
    StyleSheet,
    SafeAreaView,
    Image,
    Modal,
   } from "react-native";
   import React, { useState } from 'react';

 const App = () => {
  const[count, setCount]=useState(0);
  const[modalVisible, setModalVisible]=useState(false);
  const[buttonPressed, setButtonPressed]=useState(false);

   return (
   
    <SafeAreaView>
<Pressable 
onPress={()=> setModalVisible(true)}
onLongPress={()=>alert('Quick View')}
android_ripple={{color:'#f0f0f0'}}
style={({pressed})=>[
    styles.card,
    {transform: [{ scale: pressed ? 1.05 : 1 }] }
]}
 >

 <Image
 source={{
    uri:'https://via.placeholder.com/150',
}}
style={styles.image}
resizeMode='contain'
/>

<Text style={styles.title}>Product Name</Text>
<Text style={styles.price}>Rs999</Text>

<Pressable 
onPress={()=> {
setCount(count+1);
setButtonPressed(true);
setTimeout(()=>
setButtonPressed(false),200);
}}

style={[
    styles.cartButton,
    { backgroundColor: buttonPressed ? 'green' : 'blue' }, 

]}

>
<Text style={styles.buttonText}>Add to Cart </Text>

{count>0 &&(
    <View style={styles.badge}>
        <Text style={styles.badgeText}>{count}</Text>
    </View>
    )}
   
    </Pressable>
    </Pressable>
    
    <Modal
    visible={modalVisible}
    transparent
    animationType="fade"
    onRequestClose={()=> setModalVisible(false)}
>
    <Pressable style={styles.backdrop} onPress={()=>setModalVisible(false)}>

        <View style={styles.modalView}>
            <Image
            source={{uri:'https://via.placeholder.com/150'}}
            style={styles.modalImage}
            resizeMode="contain"
            />
            <Text style={styles.title}>Product Name</Text>
            <Text style={styles.price}>₹999</Text>
            <Text style={styles.desc}>This is a nice product you’ll love!</Text>

            <Pressable 
            onPress={()=> setModalVisible(false)}
            style={styles.closeBtn}
            >
                <Text style={{color:'white'}}>X</Text>
                </Pressable>
                </View>
                </Pressable>
                </Modal>
                </SafeAreaView>
   );
};
 export default App;


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    card: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      elevation: 3, // Shadow on Android
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
    },
    modalImage: {
      width: 200,
      height: 200,
      alignSelf: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    price: {
      fontSize: 16,
      color: 'green',
      marginBottom: 10,
    },
    desc: {
      fontSize: 14,
      marginTop: 10,
      textAlign: 'center',
    },
    cartButton: {
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    badge: {
      backgroundColor: 'red',
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
      marginLeft: 8,
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
    },
    modalView: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      margin: 40,
      elevation: 5,
      position: 'relative',
    },
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
    },
    closeBtn: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'black',
      borderRadius: 15,
      padding: 5,
    },
  });