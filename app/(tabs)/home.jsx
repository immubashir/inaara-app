import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import { images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: '',
    department: '',
    phone: '',
    photo: null
  });

  const handleAddDoctorPress = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    // Add the new doctor to the list
    setDoctors([...doctors, form]);
    // Reset the form
    setForm({
      name: '',
      department: '',
      phone: '',
      photo: null
    });
    setShowForm(false);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, photo: result.assets[0].uri });
    }
  };

  const renderDoctorCard = ({ item }) => (
    <View className="bg-gray-800 w-full h-1/2 p-4 rounded-lg mt-4 flex flex-col items-center">
      <Image source={{ uri: item.photo }} className="w-full h-40 rounded-lg" resizeMode='cover' />
      <Text className="text-white text-lg font-pbold mt-4">{item.name}</Text>
      <Text className="text-gray-400 text-base mt-1">{item.department}</Text>
      <View className="flex-row justify-between mt-4 w-full">
        <CustomButton
          title="+"
          containerStyles="w-1/2 mr-2"
          handlePress={() => {}}
        />
        <CustomButton
          title="Add Patients"
          containerStyles="w-1/2 ml-2"
          handlePress={() => {}}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="bg-primary flex-1">
      {showForm ? (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
          <View className="w-full px-4 mt-4">
            <FormField
              title="Name of the Doctor"
              value={form.name}
              handleChangeText={(value) => setForm({ ...form, name: value })}
              otherStyles="mt-7"
            />
            <FormField
              title="Department"
              value={form.department}
              handleChangeText={(value) => setForm({ ...form, department: value })}
              otherStyles="mt-7"
            />
            <FormField
              title="Phone Number"
              value={form.phone}
              handleChangeText={(value) => setForm({ ...form, phone: value })}
              otherStyles="mt-7"
              keyboardType="phone-pad"
            />
            <View className="mt-7">
              <Text className="text-base text-gray-100 font-pmedium">Upload a Photo</Text>
              <TouchableOpacity onPress={pickImage} className="w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary border-2 border-black-200 items-center flex-row justify-center mt-2">
                <Text className="text-white font-psemibold text-base">{form.photo ? 'Change Photo' : 'Select Photo'}</Text>
              </TouchableOpacity>
              {form.photo && (
                <Image source={{ uri: form.photo }} className="w-full h-40 mt-4" resizeMode='contain' />
              )}
            </View>
            <CustomButton
              title="Submit"
              containerStyles="mt-7 w-5/6"
              handlePress={handleFormSubmit}
            />
          </View>
        </ScrollView>
      ) : (
        <>
          <FlatList
            data={doctors}
            renderItem={renderDoctorCard}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View className="flex flex-col items-center justify-center mx-4 mt-4">
                <Image 
                  source={images.empty} 
                  resizeMode='contain'
                  className="w-90 h-52"
                />
                <Text className="text-gray-100 font-pbold text-2xl text-center">You haven't added any doctors yet!</Text>
              </View>
            }
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
          />
          {!showForm && (
            <View className="absolute bottom-0 w-full flex items-center">
              <CustomButton
                title="Add Doctor"
                containerStyles="mb-4 w-5/6"
                handlePress={handleAddDoctorPress}
              />
            </View>
          )}
        </>
      )}
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default Home;
