import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import HomeScreen from './src/Screens/HomeScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

// Define your themes
const lightTheme = {
  name: 'light',
  background: '#f8f8f8',
  text: '#1b1b1d',
  headerBackground: '#f8f8f8',
  searchIconBackground: '#f1f1f1',
  buttonBackground: '#f1f1f1',
  linkColor: '#1E90FF',
  borderColor: '#d3d3d3',
  iconBackground: '#fff',
  navBarBackground: '#fff',
  secondaryText: '#7f7f7f',
  transactionIconBackground: '#f1f1f1', // Add this line
};

const darkTheme = {
  name: 'dark',
  background: '#0c0c0d',
  text: '#e8e8e8',
  headerBackground: '#1b1b1d',
  searchIconBackground: '#333',
  buttonBackground: '#262628',
  linkColor: '#1E90FF',
  borderColor: '#262628',
  iconBackground: '#333',
  navBarBackground: '#1b1b1d',
  secondaryText: '#bbbbbb',
  transactionIconBackground: '#333', // Add this line
};

const Stack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.name === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            options={{ headerShown: false }}  // Disable the header here
          >
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Settings"
            options={{ headerShown: false }}  // Optionally disable the header for Settings too
          >
            {(props) => <SettingsScreen {...props} toggleTheme={toggleTheme} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
