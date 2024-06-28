// import * as React from 'react';
// import  { useEffect } from 'react';
// import { Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreenOne from './screens/DetailsScreenOne';
// import DetailsScreenTwo from './screens/DetailsScreenTwo';
// import DetailsScreenThree from './screens/DetailsScreenThree';
// import CameraScreen from './screens/CameraScreen';
// import Convertion from './screens/Convertion';
// import PdfViewer from './screens/PdfViewer';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const checkAndRequestPermissions = async () => {
//     // Check Camera Permission
//     const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
//     if (cameraPermission !== RESULTS.GRANTED) {
//       const cameraRequest = await request(PERMISSIONS.ANDROID.CAMERA);
//       if (cameraRequest !== RESULTS.GRANTED) {
//         Alert.alert(
//           'Permission Denied',
//           'Camera permission is required to use this feature. Please enable it in settings.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Open Settings', onPress: () => openSettings() },
//           ]
//         );
//         return;
//       }
//     }

//     // Check Read External Storage Permission
//     const readStoragePermission = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
//     if (readStoragePermission !== RESULTS.GRANTED) {
//       const readStorageRequest = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
//       if (readStorageRequest !== RESULTS.GRANTED) {
//         Alert.alert(
//           'Permission Denied',
//           'Read Storage permission is required to use this feature. Please enable it in settings.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Open Settings', onPress: () => openSettings() },
//           ]
//         );
//         return;
//       }
//     }

//     // Check Write External Storage Permission
//     const writeStoragePermission = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
//     if (writeStoragePermission !== RESULTS.GRANTED) {
//       const writeStorageRequest = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
//       if (writeStorageRequest !== RESULTS.GRANTED) {
//         Alert.alert(
//           'Permission Denied',
//           'Write Storage permission is required to use this feature. Please enable it in settings.',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Open Settings', onPress: () => openSettings() },
//           ]
//         );
//         return;
//       }
//     }

//     Alert.alert('All Permissions Granted', 'You have all the required permissions!');
//   };

//   useEffect(() => {
//     checkAndRequestPermissions();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="DetailsScreenOne" component={DetailsScreenOne} options={{ headerShown: false }} />
//         <Stack.Screen name="DetailsScreenTwo" component={DetailsScreenTwo} options={{ headerShown: false }} />
//         <Stack.Screen name="DetailsScreenThree" component={DetailsScreenThree} options={{ headerShown: false }} />
//         <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Convertion" component={Convertion} options={{ headerShown: false }} />
//         <Stack.Screen name="PdfViewer" component={PdfViewer} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';

import HomeScreen from './screens/HomeScreen';
import DetailsScreenOne from './screens/DetailsScreenOne';
import DetailsScreenTwo from './screens/DetailsScreenTwo';
import DetailsScreenThree from './screens/DetailsScreenThree';
import CameraScreen from './screens/CameraScreen';
import Convertion from './screens/Convertion';
import PdfViewer from './screens/PdfViewer';

const Stack = createNativeStackNavigator();

const App = () => {
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const checkAndRequestPermissions = async () => {
    // Check and request camera permission
    const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
    if (cameraPermission !== RESULTS.GRANTED) {
      const cameraRequest = await request(PERMISSIONS.ANDROID.CAMERA);
      if (cameraRequest !== RESULTS.GRANTED) {
        Alert.alert(
          'Permission Denied',
          'Camera permission is required to use this feature. Please enable it in settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => openSettings() },
          ]
        );
        return;
      }
    }
    // Check and request write external storage permission
    const writeStoragePermission = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    if (writeStoragePermission !== RESULTS.GRANTED) {
      const writeStorageRequest = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      if (writeStorageRequest !== RESULTS.GRANTED) {
        Alert.alert(
          'Permission Denied',
          'Write Storage permission is required to use this feature. Please enable it in settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => openSettings() },
          ]
        );
        return;
      }
    }

    // If all permissions are granted
    setPermissionsGranted(true);
    Alert.alert('All Permissions Granted', 'You have all the required permissions!');
  };

  useEffect(() => {
    if (!permissionsGranted) {
      checkAndRequestPermissions();
    }
  }, [permissionsGranted]);

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
};

export default App;
