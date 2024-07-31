import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return(
    <View className = " items-center justify-center gap-2">
      <Image
        source = {icon}
        resizeMode='contain'
        tintColor={color}
        className = "w-6 h-6"
      />
      <Text className = {`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#9d9daa',
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        }
      }}
      >
        <Tabs.Screen 
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
              <TabIcon
              icon={icons.home}
              color={color}
              name = "Home"
              focus = {focused}
              />
          )
        }}
        />
        <Tabs.Screen 
        name='manage'
        options={{
          title: "Manage",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
              <TabIcon
              icon={icons.manage}
              color={color}
              name = "Manage"
              focus = {focused}
              />
          )
        }}
        />
        <Tabs.Screen 
        name='settings'
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
              <TabIcon
              icon={icons.settings}
              color={color}
              name = "Settings"
              focus = {focused}
              />
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout