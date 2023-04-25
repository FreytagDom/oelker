import styled from "styled-components";
import Link from "next/link";

export default function Technicus() {
  return (
    <>
      <TechnicusWrapper>
        <H4>Mein erster Roman „Homo Technicus“</H4>
        <Text>
          Die Erde ist nicht mehr im Gleichgewicht: Naturkatastrophen und ein
          massiver Atomschlag haben die Zivilisation ausgelöscht. In der Arche
          konnten wenige Menschen überleben. Erst nach vielen Generationen
          gelingt es den Überlebenden eine neue Zivilisation zu errichten. Die
          Wissenschaften erreichen eine neue Blüte, doch die Katastrophe wirkt
          nach. Im Auftrag der Weltregierung entwickeln Gentechniker den Neuen
          Menschen. Sie greifen in die Geburt und die Erziehung ein. Schöne,
          kluge und friedfertige Menschen sollen künftig den Planeten besiedeln
          und der Menschheit das Überleben sichern. Elias arbeitet als
          Wissenschaftler für die drei alten Männer der Weltregierung. Milan
          gehört zur „Alten Art“. Er ist gläubig und betet zu seinem Gott. Als
          Priester kämpft er für seine bedrohte Gemeinde, doch er wird
          beobachtet, verfolgt und muss fliehen. Zwischen den Menschen der
          „Neuen und der Alten Art“ wird die Kluft immer tiefer. Die
          Unterdrückten der „Alten Art“ gehen auf die Barrikaden und
          rebellieren. Wird die Geschichte sich wiederholen, ist der Krieg noch
          zu vermeiden, oder gelingt es den Menschen in Zukunft, Konflikte
          friedlich zu lösen?
        </Text>

        <Books>
          <Link href="https://www.bod.de/buchshop/lebenslinien-karl-christian-oelker-9783750417960">
            <Title>Homo Technicus</Title>
          </Link>
        </Books>
      </TechnicusWrapper>
    </>
  );
}

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: darkblue;
  font-size: 0.9rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Books = styled.span`
  display: grid;
  justify-items: center;
  justify-content: space-evenly;
  grid-area: auto;
`;

const H4 = styled.h4`
  color: black;
  font-size: 0.9rem;
  margin-left: 1rem;
  margin-right: 1rem;
  opacity: 0.65;
`;

const Title = styled.h5`
  justify-content: center;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const TechnicusWrapper = styled.div`
  background-color: bisque;
  display: grid;
  justify-content: space-evenly;
`;
