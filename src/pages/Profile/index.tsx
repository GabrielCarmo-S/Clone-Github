import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

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
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

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

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
