import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({ route }) => {
  const { pdfPath } = route.params;
  const source = { uri: `file://${pdfPath}` };
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('CameraScreen', { reset: true, retake: true });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <View style={styles.backButton}>
          <Image source={require('../assets/icons/arrow-left.png')} style={styles.icon} />
          <Text style={{color:'black',fontSize:16}}>Back</Text>
        </View>
      </TouchableOpacity>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight:300,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    color:'black',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PdfViewer;
