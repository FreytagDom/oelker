import styled from "styled-components";
import Burger from "./Burger";
import React from "react";


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
        <BurgerWrapper>
          <Burger onClick={() => this.toggleMenu()} />
        </BurgerWrapper>
      );
    }
  }
  return (
    <NavbarHead>
      <ParentComponent />
      <Navigation>
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
  opacity: 0.9;
  height: 4rem;
  z-index: 2;
  background-color: lavender;
  position: fixed;
`;

const Navigation = styled.nav`
  display: grid;
  font-size: 1.1rem;
  color: lavender;
  justify-content: space-evenly;
  z-index: 2;
  position: fixed;
`;

const BurgerWrapper = styled.div`
display: grid;
`;

