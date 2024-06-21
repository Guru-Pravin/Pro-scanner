import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const navigation = useNavigation();

  const upload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImageUri(image.path);
        setIsImageSelected(true);
      })
      .catch(err => console.log(err));
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImageUri(image.path);
        setIsImageSelected(true);
      })
      .catch(err => console.log(err));
  };

  const retakeImage = () => {
    setImageUri(null);
    setIsImageSelected(false);
  };

  const confirmImage = () => {
    console.log('Image confirmed:', imageUri);
    navigation.navigate('Convertion', { imageUri });
  };

  return (
    <View style={styles.container}>
      {isImageSelected ? (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.retakeButton} onPress={retakeImage}>
              <Text style={styles.buttonText1}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmImage}>
              <Text style={styles.buttonText2}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Scan Now ...</Text>
          <TouchableOpacity style={styles.openCameraButton} onPress={openCamera}>
            <Text style={styles.buttonText1}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryButton} onPress={upload}>
            <Text style={styles.buttonText2}>Choose from Gallery</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  openCameraButton: {
    width: 157,
    marginTop: 30,
    height: 47,
    backgroundColor: '#9F149F',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryButton: {
    marginTop: 30,
    width: 250,
    height: 47,
    backgroundColor: '#FFB2FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retakeButton: {
    width: 120,
    height: 47,
    backgroundColor: '#9F149F',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: 120,
    height: 47,
    backgroundColor: '#FFB2FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  buttonText2: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});

export default CameraScreen;
