import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-top: 4rem;

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    text-align: center;
    list-style: none;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #537db9;
    font-weight: 500;
    letter-spacing: 1.1px;
    &:hover {
      color: grey;
    }
  }
`;

export default function Nav() {
  return (
    <>
      <NavStyles>
        <h1>George Staniland</h1>
        <ul>
          <li>
            <Link to="/">Selected Works</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/commissioned">Commissioned</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </NavStyles>
    </>
  );
}
