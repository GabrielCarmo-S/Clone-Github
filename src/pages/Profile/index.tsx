import React from 'react';

import { Container, Main, LeftSide, RightSide} from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'GabrielCarmo-S'}
            name={'Gabriel Carmo'}
            avatarUrl={'https://avatars.githubusercontent.com/u/70289493?v=4'}
            followers={14}
            following={25}
            company={'TIM'}
            location={'São Paulo, Brazil'}
            email={'gabriekcarmk@gmail.com'}
            blog={'linkedin.com/in/gabrielcarmo-s'}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;