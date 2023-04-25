import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <Headline>Karl-Christian-Oelker</Headline>
    </header>
  );
}

const Headline = styled.h1`
  color: chocolate;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
`;
