import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"GabrielCarmo-S"}
            name={"Gabriel Carmo"}
            avatarUrl={"https://avatars.githubusercontent.com/u/70289493?v=4"}
            followers={14}
            following={25}
            company={"TIM"}
            location={"São Paulo, Brazil"}
            email={"gabriekcarmk@gmail.com"}
            blog={"linkedin.com/in/gabrielcarmo-s"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"gabrielcarmo-s"}
                  reponame={"Happy"}
                  description={"Contains"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={9}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
