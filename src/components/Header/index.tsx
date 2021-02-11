import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeName } from "../../styles/themes";
import Switch from "react-switch";

import { Container, GithubLogo, SearchForm } from "./styles";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
      <Switch
        onChange={toggleTheme}
        checked={themeName === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={48}
        handleDiameter={30}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        offHandleColor="#fff"
      />
    </Container>
  );
};

export default Header;
