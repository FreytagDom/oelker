import styled from "styled-components";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavbarHead>
      <Navigation>
        <LinkWrapper href="/" passHref>
          <Tags>Home</Tags>
        </LinkWrapper>

        <LinkWrapper href="/about" passHref>
          <Tags>About</Tags>
        </LinkWrapper>

        <LinkWrapper href="/myBooks" passHref>
          <Tags>Meine Bücher</Tags>
        </LinkWrapper>
      </Navigation>
    </NavbarHead>
  );
}

const NavbarHead = styled.section`
  justify-content: space-evenly;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  justify-items: center;
  align-content: center;
  display: grid;
  top: 0;
  width: 100%;
  opacity: 0.8;
  height: 4rem;
  z-index: 2;
  background-color: cadetblue;
  position: fixed;
`;

const Navigation = styled.nav`
  display: grid;
  font-size: 1.1rem;
  color: darkcyan;
  justify-content: space-evenly;
  z-index: 2;
  position: fixed;
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
