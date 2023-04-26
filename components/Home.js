// import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Vita from "./Vita";
import Klopfzeichen from "./Klopfzeichen";
import Lebenslinien from "./Lebenslinie";
import Technicus from "./Technicus";

export default function Homepage() {
  return (
    <>
      <Text>
        Lieber Besucher, ich lade Sie ein den Kosmos meiner Gedanken zu
        betreten. Sie fragen sich, was Sie finden werden? Etwas kann ich
        verraten: Gedichte und schöne Bilder. Gedanken über die Zukunft und
        Erkenntnisse aus der Gegenwart. Erstaunliches und ganz Banales. Etwas
        Romantik, etwas Sehnsucht und immer wieder ein Nachdenken über den
        eigenen Weg zum Glück und zur Selbsterkenntnis.
      </Text>
      <VitaWrapper>
        <Vita />
      </VitaWrapper>
      <H3>Meine Bücher</H3>

      <Section>
        <Lebenslinien />
        <Klopfzeichen />
        <Technicus />
      </Section>
    </>
  );
}

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: darkblue;
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 2rem;
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

const Section = styled.section`
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-area: auto;
  align-items: start;
`;

const VitaWrapper = styled.section`
  padding: 1rem;
  border-bottom: 0.4rem solid;
  border-left: 0.4rem solid;
  border-right: 0.4rem solid;
  border-radius: 2rem;
  border-color: grey;
`;
