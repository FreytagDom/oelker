import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import oelker_leseprobe from "../public/oelker_leseprobe.jpg";
import oelker_leseprobe1 from "../public/oelker_leseprobe1.jpg";
import oelker_leseprobe2 from "../public/oelker_leseprobe2.jpg";

export default function Homepage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Text>
          Lieber Besucher, ich lade Sie ein den Kosmos meiner Gedanken zu
          betreten. Sie fragen sich, was Sie finden werden? Etwas kann ich
          verraten: Gedichte und schöne Bilder. Gedanken über die Zukunft und
          Erkenntnisse aus der Gegenwart. Erstaunliches und ganz Banales. Etwas
          Romantik, etwas Sehnsucht und immer wieder ein Nachdenken über den
          eigenen Weg zum Glück und zur Selbsterkenntnis.
        </Text>
        <GemäldeWrapper>
          <Gemälde1 src={oelker_leseprobe} alt="Gemälde" />
          <Gemälde2 src={oelker_leseprobe1} alt="Gemälde" />
          <Gemälde3 src={oelker_leseprobe2} alt="Gemälde" />
        </GemäldeWrapper>
      </Wrapper>
    </>
  );
}

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: black;
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 2rem;
`;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;

const GemäldeWrapper = styled.span`
  display: grid;
  justify-content: space-evenly;
`;

const Gemälde = styled(Image)`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  gap: 2rem;
  padding: 0.7rem;
  justify-content: space-around;
`;

const Gemälde1 = styled(Gemälde)`
  @media only screen and (min-device-width: 480px) {
    grid-column: 2;
    grid-row: 2;
  }
  @media (max-width: 600px) {
    .grid {
      width: 80%;
      flex-direction: column;
      grid-column: 2;
      grid-row: 2;
    }
  }
  display: grid;
`;

const Gemälde2 = styled(Gemälde)`
  display: grid;
  grid-column: 1;
  grid-row: 2;
`;

const Gemälde3 = styled(Gemälde)`
  display: grid;
  grid-column: 3;
  grid-row: 2;
`;
