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