import styled from "styled-components";
import Link from "next/link";

export default function Klopfzeichen() {
  return (
    <>
      <KlopfzeichenWrapper>
        <H4>Mein erster Gedichtband „Klopfzeichen“</H4>
        <Text>
          Lyrik ist für mich die Sehnsucht des Menschen nach Mitteilung der
          inneren Gedankensymphonie. Eingepresst in die Schablone meiner Sprache
          und meiner kulturellen Prägung, möchte ich meine Fesseln sprengen und
          neues Land betreten. Ich lade den Leser ein im Neuland seine eigenen
          Entdeckungen zu machen und mit Anderen seine Erlebnisse zu teilen. Aus
          unseren Gedanken entsteht etwas, das über unseren rudimentären
          Emotionen liegt - unsere differenzierten, durch kulturelle Prägung
          beeinflussten Gefühle. Lyrik ist Mitteilung, die über das normale
          Sprachmaß hinaus geht. In der Lyrik spiegeln sich Gefühle und Sprache
          in einem neuen Klang wider. Lyrik gibt der Sprache neue Deutungen. Mit
          meiner Lyrik möchte ich Sie verzaubern, anregen zu neuen Gedanken und
          Gefühlen, auf neuen Denkpfaden begleiten und ein Zauberer der Worte
          sein.
        </Text>

        <Books>
          <Link href="https://www.bod.de/buchshop/lebenslinien-karl-christian-oelker-9783750417960">
            <Title>Klopfzeichen</Title>
          </Link>
        </Books>
      </KlopfzeichenWrapper>
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

const KlopfzeichenWrapper = styled.div`
  background-color: sandybrown;
  display: grid;
  justify-content: space-evenly;
`;
