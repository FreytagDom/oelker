import styled from "styled-components";
import Vita from "../components/Vita";

export default function AboutMy() {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
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

const VitaWrapper = styled.section`
  padding: 1rem;
  border-bottom: 0.4rem solid;
  border-left: 0.4rem solid;
  border-right: 0.4rem solid;
  border-radius: 2rem;
  border-color: grey;
`;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;
