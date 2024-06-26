import React, { useContext } from 'react';
import { ScrollView, Image } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';

// Import icons and images
import HomeIconSource from './home.png';
import MyCardsIconSource from './myCards.png';
import StatisticsIconSource from './statictics.png';
import SettingsIconSource from './settings.png';
import CardImageSource from './card.png';
import ProfilePicSource from './13.jpg';
import SearchIconSource from './search.png';
import SentIconSource from './send.png';
import ReceiveIconSource from './recieve.png';
import LoanIconSource from './loan.png';
import TopupIconSource from './topUp.png';
import AppleStoreIcon from './apple.png';
import SpotifyIcon from './spotify.png';
import MoneyTransferIcon from './moneyTransfer.png';
import GroceryIcon from './grocery.png';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.headerBackground};
`;

const WelcomeText = styled.View`
  flex: 1;
  padding-left: 10px;
`;

const WelcomeMessage = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const SearchIconContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.searchIconBackground};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const SearchIcon = styled(Image)`
  width: 24px;
  height: 24px;
  /* Conditional style based on theme */
  ${(props) =>
    props.theme.name === 'dark'
      ? 'filter: brightness(0) invert(1);'
      : ''}
`;

const CardImage = styled.Image`
  width: 90%;
  height: undefined;
  aspect-ratio: 1.78;
  align-self: center;
  margin: 20px 0;
`;

const ButtonsSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

const ActionButton = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonImageContainer = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.buttonBackground};
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const ButtonImage = styled(Image)`
  width: 25px;
  height: 30px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  text-align: center;
`;

const TransactionsSection = styled.View`
  padding: 20px;
`;

const TransactionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TransactionTitleText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

const SeeAllText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.linkColor};
`;

const TransactionList = styled.View`
  margin-top: 10px;
`;

const TransactionItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;  
  border-bottom-color: ${(props) => props.theme.borderColor};
`;

const TransactionDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TransactionIconContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.transactionIconBackground};
  border-radius: 23px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const TransactionIcon = styled(Image)`
  width: 40%;
  height: 40%;
`;

const TransactionTextContainer = styled.View`
  flex-direction: column;
`;

const TransactionTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

const TransactionCategory = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.secondaryText};
`;

const getAmountColor = (isPositive, theme) => {
  if (theme.name === 'dark' && !isPositive) {
    return '#ffffff'; // White for negative amounts in dark theme
  }
  return isPositive ? '#1E90FF' : '#000000'; // Black for negative amounts in light theme
};

const TransactionAmount = styled.Text`
  font-size: 16px;
  color: ${({ isPositive, theme }) => getAmountColor(isPositive, theme)};
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
  box-shadow: 0 -1px 5px rgba(0,0,0,0.1);
`;

const NavItem = styled.TouchableOpacity`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const NavIcon = styled(Image)`
  width: 26px;
  height: 25px;
  margin-bottom: 5px;
`;

const NavText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 12px;
`;

// Transaction Item Component
const TransactionItem = ({ icon, title, category, amount, isPositive }) => {
  const theme = useContext(ThemeContext);
  return (
    <TransactionItemContainer>
      <TransactionDetails>
        <TransactionIconContainer>
          <TransactionIcon 
            source={icon} 
            style={theme.name === 'dark' && (icon === SentIconSource || icon === ReceiveIconSource || icon === LoanIconSource || icon === TopupIconSource || icon === AppleStoreIcon) ? { tintColor: 'white' } : {}} 
          />
        </TransactionIconContainer>
        <TransactionTextContainer>
          <TransactionTitle>{title}</TransactionTitle>
          <TransactionCategory>{category}</TransactionCategory>
        </TransactionTextContainer>
      </TransactionDetails>
      <TransactionAmount isPositive={isPositive} theme={theme}>{amount}</TransactionAmount>
    </TransactionItemContainer>
  );
};

// HomeScreen Component
const HomeScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Header>
          <ProfilePicture source={ProfilePicSource} />
          <WelcomeText>
            <WelcomeMessage>Welcome back,</WelcomeMessage>
            <UserName>Michael Adadey</UserName>
          </WelcomeText>
          <SearchIconContainer>
            <SearchIcon 
              source={SearchIconSource} 
              style={theme.name === 'dark' ? { tintColor: 'white' } : {}} 
            />
          </SearchIconContainer>
        </Header>
        
        <CardImage source={CardImageSource} />

        <ButtonsSection>
          <ActionButton>
            <ButtonImageContainer>
              <ButtonImage source={SentIconSource} style={theme.name === 'dark' ? { tintColor: 'white' } : {}} />
            </ButtonImageContainer>
            <ButtonText>Sent</ButtonText>
          </ActionButton>
          <ActionButton>
            <ButtonImageContainer>
              <ButtonImage source={ReceiveIconSource} style={theme.name === 'dark' ? { tintColor: 'white' } : {}} />
            </ButtonImageContainer>
            <ButtonText>Receive</ButtonText>
          </ActionButton>
          <ActionButton>
            <ButtonImageContainer>
              <ButtonImage source={LoanIconSource} style={theme.name === 'dark' ? { tintColor: 'white' } : {}} />
            </ButtonImageContainer>
            <ButtonText>Loan</ButtonText>
          </ActionButton>
          <ActionButton>
            <ButtonImageContainer>
              <ButtonImage source={TopupIconSource} style={theme.name === 'dark' ? { tintColor: 'white' } : {}} />
            </ButtonImageContainer>
            <ButtonText>Topup</ButtonText>
          </ActionButton>
        </ButtonsSection>

        <TransactionsSection>
          <TransactionHeader>
            <TransactionTitleText>Transaction</TransactionTitleText>
            <SeeAllText>See All</SeeAllText>
          </TransactionHeader>
          <TransactionList>
            <TransactionItem 
              icon={AppleStoreIcon}
              title="Apple Store" 
              category="Entertainment" 
              amount="- $5.99" 
              isPositive={false} 
            />
            <TransactionItem 
              icon={SpotifyIcon}
              title="Spotify" 
              category="Music" 
              amount="- $12.99" 
              isPositive={false} 
            />
            <TransactionItem 
              icon={MoneyTransferIcon}
              title="Money Transfer" 
              category="Transaction" 
              amount="+ $300" 
              isPositive={true} 
            />
            <TransactionItem 
              icon={GroceryIcon}
              title="Grocery" 
              category="Shopping" 
              amount="- $88" 
              isPositive={false} 
            />
          </TransactionList>
        </TransactionsSection>
      </ScrollView>
      <NavBar>
        <NavItem onPress={() => navigation.navigate('Home')}>
          <NavIcon source={HomeIconSource} />
          <NavText>Home</NavText>
        </NavItem>
        <NavItem onPress={() => navigation.navigate('My Cards')}>
          <NavIcon source={MyCardsIconSource} />
          <NavText>My Cards</NavText>
        </NavItem>
        <NavItem onPress={() => navigation.navigate('Statistics')}>
          <NavIcon source={StatisticsIconSource} />
          <NavText>Statistics</NavText>
        </NavItem>
        <NavItem onPress={() => navigation.navigate('Settings')}>
          <NavIcon source={SettingsIconSource} />
          <NavText>Settings</NavText>
        </NavItem>
      </NavBar>
    </Container>
  );
};

export default HomeScreen;
