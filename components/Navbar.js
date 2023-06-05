import styled from "styled-components";
import Link from "next/link";
import Burger from "./Burger";
import { slide as Menu } from "react-burger-menu";
import React from "react";

// const Nav = styled.nav`
//   width: 100%;
//   height: 55px;
//   /* border-bottom: 2px solid #f1f1f1; */
//   /* padding: 0 20px; */
//   display: flex;
//   justify-content: space-between;
//   .logo {
//     padding: 15px 0;
//   }
// `;

// export default function Navbar() {
//   return (
//     <Nav>
//       <div className="logo"></div>
//       <Burger />
//     </Nav>
//   );
// }

export default function Navbar() {
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menuOpen: false,
      };
    }

    handleStateChange(state) {
      this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
      this.setState({ menuOpen: false });
    }

    toggleMenu() {
      this.setState((state) => ({ menuOpen: !state.menuOpen }));
    }

    render() {
      return (
        <div>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <LinkWrapper href="/" passHref>
              <Tags>Home</Tags>
            </LinkWrapper>

            <LinkWrapper href="/about" passHref>
              <Tags>About</Tags>
            </LinkWrapper>

            <LinkWrapper href="/myBooks" passHref>
              <Tags>Meine Bücher</Tags>
            </LinkWrapper>

            <LinkWrapper href="/impressum" passHref>
              <Tags>Impressum</Tags>
            </LinkWrapper>
          </Menu>
          <Burger onClick={() => this.toggleMenu()} />
        </div>
      );
    }
  }
  return (
    <NavbarHead>
      <ParentComponent />
      <Navigation>
        {/* <LinkWrapper href="/" passHref>
          <Tags>Home</Tags>
        </LinkWrapper>

        <LinkWrapper href="/about" passHref>
          <Tags>About</Tags>
        </LinkWrapper>

        <LinkWrapper href="/myBooks" passHref>
          <Tags>Meine Bücher</Tags>
        </LinkWrapper>

        <LinkWrapper href="/impressum" passHref>
          <Tags>Impressum</Tags>
        </LinkWrapper> */}
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
