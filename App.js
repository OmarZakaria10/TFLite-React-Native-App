import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Camera1 from "./src/components/Camera";
import Header from "./src/components/Header";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    
    
    <Camera1 />
      <View style={styles.innerContainer}>
        <Text>MobileNetV2</Text>
        
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1, // Ensure that SafeAreaView takes up the entire screen
    
  },
  innerContainer: {
    flex: 1, // Ensure that the inner container takes up the entire SafeAreaView
    justifyContent: 'center',
    alignItems: 'center',
    
  },

});

export default App;
