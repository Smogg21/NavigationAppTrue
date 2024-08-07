import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
