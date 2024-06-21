// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// const App = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [isImageSelected, setIsImageSelected] = useState(false);

//   const upload = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         console.log(image);
//         setImageUri(image.path);
//         setIsImageSelected(true);
//       })
//       .catch(err => console.log(err));
//   };

//   const openCamera = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         console.log(image);
//         setImageUri(image.path);
//         setIsImageSelected(true);
//       })
//       .catch(err => console.log(err));
//   };

//   const retakeImage = () => {
//     setImageUri(null);
//     setIsImageSelected(false);
//   };

//   const confirmImage = () => {
//     console.log('Image confirmed:', imageUri);
//   };

//   return (
//     <View style={styles.container}>
//       {isImageSelected ? (
//         <>
//           <Image source={{ uri: imageUri }} style={styles.image} />
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.retakeButton} onPress={retakeImage}>
//               <Text style={styles.buttonText1}>Retake</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.confirmButton} onPress={confirmImage}>
//               <Text style={styles.buttonText2}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       ) : (
//         <>
//           <Text style={styles.title}>Scan Now ...</Text>
//           <TouchableOpacity style={styles.openCameraButton} onPress={openCamera}>
//             <Text style={styles.buttonText1}>Open Camera</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.galleryButton} onPress={upload}>
//             <Text style={styles.buttonText2}>Choose from Gallery</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '500',
//   },
//   image: {
//     width: 300,
//     height: 400,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//   },
//   openCameraButton: {
//     width: 157,
//     marginTop: 30,
//     height: 47,
//     backgroundColor: '#9F149F',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   galleryButton: {
//     marginTop: 30,
//     width: 250,
//     height: 47,
//     backgroundColor: '#FFB2FF',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   retakeButton: {
//     width: 120,
//     height: 47,
//     backgroundColor: '#FF6347',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   confirmButton: {
//     width: 120,
//     height: 47,
//     backgroundColor: '#32CD32',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText1: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: 'white',
//   },
//   buttonText2: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: 'black',
//   },
// });

// export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreenOne from './screens/DetailsScreenOne';
import DetailsScreenTwo from './screens/DetailsScreenTwo';
import DetailsScreenThree from './screens/DetailsScreenThree';
import CameraScreen from './screens/CameraScreen';
import Convertion from './screens/Convertion';
import PdfViewer from './screens/PdfViewer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailsScreenOne" component={DetailsScreenOne} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreenTwo" component={DetailsScreenTwo} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreenThree" component={DetailsScreenThree} options={{ headerShown: false }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Convertion" component={Convertion} options={{ headerShown: false }} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;