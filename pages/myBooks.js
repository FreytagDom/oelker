import styled from "styled-components";
import Klopfzeichen from "../components/Klopfzeichen";
import Lebenslinien from "../components/Lebenslinie";
import Technicus from "../components/Technicus";

export default function MyBooks() {
  return (
    <>
      <Wrapper>
        <H3>Meine Bücher</H3>
        <Veröffentlichungen>
          Veröffentlichungen:
          <br /> Kanon der Literatur 2014 - ISBN 9783932443299 <br />
          Klopfzeichen 2020 - ISBN 9783750426559 <br />
          Homo Technicus 2022 - ISBN-13: 9783756295265
        </Veröffentlichungen>
        <Section>
          <Lebenslinien />
          <Klopfzeichen />
          <Technicus />
        </Section>
      </Wrapper>
    </>
  );
}

const Section = styled.section`
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-area: auto;
  align-items: start;
`;

const H3 = styled.h3`
  text-decoration: underline;
  font-size: 1rem;
  color: midnightblue;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  display: grid;
  padding-top: 2rem;
`;
const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: darkblue;
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 2rem;
`;

const Veröffentlichungen = styled(Text)`
  text-align: center;
`;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;
