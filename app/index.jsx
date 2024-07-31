import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants'
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView
      contentContainerStyle = {{height: "100%"}}
      >
        <View className = "w-full justify-center min-h-[85vh] items-center px-4">
          <Image
            source={images.Logo}
            className = "w-[130px] h-[84px]"
            resizeMode='contain'
          />
          <Image
          source={images.Cards}
          className = "max-w-[380px] w-full h-[300px]"
          resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className = 'text-3xl text-white font-bold text-center'>
              Re-Imagine Patient Management with <Text className = "text-secondary-200">Inaara.ai</Text>
            </Text>
          </View>
          <Text className = 'text-gray-100 mt-7 text-center'>
            Your patient management re-imagined
          </Text>

          <CustomButton
          title = "Continue with Email"
          handlePress = {() => router.push('/sign-in')}
          containerStyles = "w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
