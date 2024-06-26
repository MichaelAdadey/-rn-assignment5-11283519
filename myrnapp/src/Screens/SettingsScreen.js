import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeIconSource from './home.png';
import MyCardsIconSource from './myCards.png';
import StatisticsIconSource from './statictics.png';
import SettingsIconSource from './settings.png';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const ItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: #d3d3d3;
`;

const ItemText = styled(Text)`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

const ThemeContainer = styled(View)`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 0.5px;
  border-top-color: #d3d3d3;
`;

const ThemeText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
  color: ${(props) => props.theme.text};
`;

const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.navBarBackground};
  padding: 10px 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.TouchableOpacity`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const NavIcon = styled.Image`
  width: 26px;
  height: 25px;
  margin-bottom: 5px;
`;

const NavText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 12px;
`;

const CustomSwitchContainer = styled(TouchableOpacity)`
  width: 48px;
  height: 28px;
  border-radius: 14px;
  margin-top: 50px;
  background-color: ${(props) => (props.isEnabled ? '#5dca3e' : '#dadada')};
  justify-content: center;
  padding: 3px;
`;

const SwitchThumb = styled(Animated.View)`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background-color: #ffffff;
  ${(props) => (props.isEnabled ? 'align-self: flex-end;' : 'align-self: flex-start;')}
`;

const CustomSwitch = ({ isEnabled, toggleSwitch }) => (
  <CustomSwitchContainer isEnabled={isEnabled} onPress={toggleSwitch}>
    <SwitchThumb isEnabled={isEnabled} />
  </CustomSwitchContainer>
);

const SettingsScreen = ({ toggleTheme }) => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(theme.name === 'dark');
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderText>Settings</HeaderText>
      </Header>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <ItemContainer onPress={() => navigation.navigate('Language')}>
          <ItemText>Language</ItemText>
          <Icon name="chevron-forward" size={20} color="#ccc" />
        </ItemContainer>
        <ItemContainer onPress={() => navigation.navigate('MyProfile')}>
          <ItemText>My Profile</ItemText>
          <Icon name="chevron-forward" size={20} color="#ccc" />
        </ItemContainer>
        <ItemContainer onPress={() => navigation.navigate('ContactUs')}>
          <ItemText>Contact Us</ItemText>
          <Icon name="chevron-forward" size={20} color="#ccc" />
        </ItemContainer>
        <ItemContainer onPress={() => navigation.navigate('ChangePassword')}>
          <ItemText>Change Password</ItemText>
          <Icon name="chevron-forward" size={20} color="#ccc" />
        </ItemContainer>
        <ItemContainer onPress={() => navigation.navigate('PrivacyPolicy')}>
          <ItemText>Privacy Policy</ItemText>
          <Icon name="chevron-forward" size={20} color="#ccc" />
        </ItemContainer>
        <ThemeContainer>
          <ThemeText>Theme</ThemeText>
          <CustomSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        </ThemeContainer>
      </ScrollView>
      <NavBar>
        <NavItem onPress={() => navigation.navigate('Home')}>
          <NavIcon source={HomeIconSource} />
          <NavText>Home</NavText>
        </NavItem>
        <NavItem onPress={() => navigation.navigate('MyCards')}>
          <NavIcon source={MyCardsIconSource} />
          <NavText>My Cards</NavText>
        </NavItem>
        <NavItem onPress={() => navigation.navigate('Statistics')}>
          <NavIcon source={StatisticsIconSource} />
          <NavText>Statistics</NavText>
        </NavItem>
        <NavItem onPress={() => navigation.navigate('Settings')}>
          <NavIcon source={SettingsIconSource} style={{ tintColor: theme.linkColor }} />
          <NavText style={{ color: theme.linkColor }}>Settings</NavText>
        </NavItem>
      </NavBar>
    </Container>
  );
};

export default SettingsScreen;
