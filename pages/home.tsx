import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationProp } from '@react-navigation/native';

function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {
    return (
      <View className='flex-1 align-middle justify-center'>
        <Text className='text-center'>Hello World</Text>
        <Button title="Go to Dice" onPress={() => navigation.navigate('Dice')} />
      </View>
    );
  }
  
export default HomeScreen;