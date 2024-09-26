import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <LinkWrapper href="/" passHref>
          <Tags>Home</Tags>
        </LinkWrapper>
      </li>

      <li>
        <LinkWrapper href="/about" passHref>
          <Tags>About</Tags>
        </LinkWrapper>
      </li>

      <li>
        <LinkWrapper href="/myBooks" passHref>
          <Tags>Meine Bücher</Tags>
        </LinkWrapper>
      </li>

      <li>
        <LinkWrapper href="/impressum" passHref>
          <Tags>Impressum</Tags>
        </LinkWrapper>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: lavender;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 50rem;
    width: 13rem;
    padding-top: 3.5rem;
    margin-top: 4rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;
   
    li {
      color: #fff;
    }
  }
`;

const Tags = styled.p`
  margin: 5px 20px;
  font-size: 1.1rem;
  color: black;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: grid;
  z-index: 2;
`;

const LinkWrapper = styled(Link)`
  padding-top: 1rem;
  display: grid;
  text-decoration: none;
  grid-row: 3;
  position: relative;
`;
