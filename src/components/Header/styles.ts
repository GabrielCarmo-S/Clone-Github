import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  height: 32px;
  width: 32px;
  flex-shrink: 0;

  cursor: pointer;
`; 

export const SearchForm = styled.div`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    transition: width .2s ease-out, color .2s ease-out;
  }
`;


