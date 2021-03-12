/* eslint-disable camelcase */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}
const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    api.get('providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const navigateProfile = useCallback(() => {
    // navigate('Profile');
    signOut();
  }, [signOut]);
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ProfileButton onPress={navigateProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        // eslint-disable-next-line prettier/prettier
        keyExtractor={(provider) => provider.id}
        renderItem={({ item }) => <UserName>{item.name}</UserName>}
      />
    </Container>
  );
};

export default Dashboard;
