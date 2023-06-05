import styled from "styled-components";

export default function Impressum() {
  return (
    <>
      <Wrapper>
        <H1>Impressum</H1>
        <Text>Kontakt: Karl-Christian Oelker</Text>

        <Text>Email: kc-oelker@gmx.de</Text>
      </Wrapper>
    </>
  );
}

const H1 = styled.h1`
  text-decoration: underline;
  font-size: 1.5rem;
  color: chocolate;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-top: 7rem;
`;

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: darkblue;
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem;
  text-align: center;
`;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;
