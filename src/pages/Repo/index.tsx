import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stars,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={"username"} to={"/gabrielcarmo-s"}>
          gabrielcarmo-s
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/gabrielcarmo-s/Happy"}>
          Happy
        </Link>
      </BreadCrumb>

      <p>Contains all</p>

      <Stars>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stars>

      <LinkButton href={'https://github.com/gabrielcarmo-s/Happy'}>
        <GithubIcon />
        <span>View on github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
