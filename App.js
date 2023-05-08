
import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet,TouchableOpacity,Text } from 'react-native';

import * as ImagePicker from 'expo-image-picker';


export default function App() {


  //comenzamos haciendo un estado para guardar la img
  const [image, setImage] = useState(null);

  //hacemos una funcion asyn  
  //llamamos a la funcion launchImageLibraryAsync nos permite entrar al almacenamiento
  //realizamos algunas configuraciones
  const pickImage = async () => {
   
    let result = await ImagePicker.launchImageLibraryAsync({
      selectionLimit: 0,
      mediaType: 'photo',
      allowsEditing: false,
      quality: 1,
    });

    console.log(result);

    

    //hacemos una condicion para poder guardar la imagen
    //canceled es un metodo la cual nos permite salir o cancelar del almacenamiento, seleccionando una foto se pone el false
    
    //saliendo del almacenamiento en true, esto se puede ver en el console del result
    if (!result.canceled) {//sino se activa canceled entonces guardame la img
      setImage(result.assets[0].uri);//desestructuramos la misma para llegar a la uri
    }
   
  };


  return (


      <View style={styles.avatar}>


<Text style={styles.textimg}>Uso de imagenes</Text>

{/* requiere es para poder imprimir img de manera local */}
<Image
        style={styles.photos}
        source={require('./assets/img/desconocido.png')}
      />
{/* uri es para poder imprimir img de otros lados como los sitios */}
<Image
        style={styles.photos}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      {/* y este uri es para poner directamente la data de la img */}
      <Image
        style={styles.photos}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />




<Text style={styles.text}>IMAGE PICKER</Text>


            {/*imprimimos la imagen  haciendo una condicion la cual dice que si encuentra la imagen entonces se imprime la uri de la misma
          pero si no hay ninguna imagen le agrego una otra por defecto
            */}

      <Image
          style={styles.avatarImage}
          source={image ? { uri: image } : require('./assets/img/desconocido.png')}
        />

{/* esta es otra forma de imprimir la imagen sin ninguna otra img por defecto como en el caso anterior */}
        {/* { image && <Image source={{uri:image}}  style={styles.avatarImage} />} */} 


{/* llamo a la funcion que hice para ir al almacenamiento */}
        <TouchableOpacity style={styles.addButton} onPress={pickImage}>

 
       <Image
        style={styles.addButtonIcon}
        source={require('./assets/img/mas.png')}
      />
        </TouchableOpacity>

       



      </View>


      
      )
}





const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },

  
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 140,
    bottom: 40,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },

  textimg:{
    fontSize:30,
    top:-100,
  margin:30
    
      },

  text:{
fontSize:30,

margin:10

  },


  photos: {
    width: 50,
    height: 50,
    margin:10,
    position:'relative',
    top:-100
  },

});
