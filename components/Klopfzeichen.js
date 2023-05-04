import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import KlopfzeichenImg from "../public/KlopfzeichenImg.jpg";

export default function Klopfzeichen() {
  return (
    <>
      <KlopfzeichenWrapper>
        <CoverSection>
          <BookCover src={KlopfzeichenImg} alt="Image Klopfzeichen" />
          <LinkWrapper href="https://www.bod.de/buchshop/klopfzeichen-karl-christian-oelker-9783750426559">
            <Title>Klopfzeichen 2020 - ISBN 9783750426559</Title>
          </LinkWrapper>
        </CoverSection>
        <TextSection>
          <H4>Mein erster Gedichtband „Klopfzeichen“</H4>
          <Text>
            Lyrik ist für mich die Sehnsucht des Menschen nach Mitteilung der
            inneren Gedankensymphonie. Eingepresst in die Schablone meiner
            Sprache und meiner kulturellen Prägung, möchte ich meine Fesseln
            sprengen und neues Land betreten. Ich lade den Leser ein im Neuland
            seine eigenen Entdeckungen zu machen und mit Anderen seine
            Erlebnisse zu teilen. Aus unseren Gedanken entsteht etwas, das über
            unseren rudimentären Emotionen liegt - unsere differenzierten, durch
            kulturelle Prägung beeinflussten Gefühle. Lyrik ist Mitteilung, die
            über das normale Sprachmaß hinaus geht. In der Lyrik spiegeln sich
            Gefühle und Sprache in einem neuen Klang wider. Lyrik gibt der
            Sprache neue Deutungen. Mit meiner Lyrik möchte ich Sie verzaubern,
            anregen zu neuen Gedanken und Gefühlen, auf neuen Denkpfaden
            begleiten und ein Zauberer der Worte sein.
          </Text>
        </TextSection>
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

const H4 = styled.h4`
  color: black;
  font-size: 0.9rem;
  margin-left: 1rem;
  margin-right: 1rem;
  opacity: 0.65;
`;

const Title = styled.h5`
  justify-content: start;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  font-size: 0.8rem;
`;

const LinkWrapper = styled(Link)`
  margin-top: -6rem;
  padding-top: 1rem;
`;

const KlopfzeichenWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: grid;
  align-items: center;
  width: 100%;

  @media (max-width: 500px) {
    .KlopfzeichenWrapper {
      padding: 0 50px;
      flex-direction: column;
    }
  }
`;

const TextSection = styled.div`
  flex-basis: 70%;
  display: grid;
  @media (max-width: 679px) {
    grid-row: 2;
    grid-column: 1;
  }
  @media (min-width: 680px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

const CoverSection = styled.div`
  height: 30rem;
  padding: 2rem;
  display: grid;
  align-content: space-around;
  align-items: center;
  justify-content: center;
  justify-items: center;
  @media (max-width: 679px) {
    grid-row: 1;
    grid-column: 1;
  }
  @media (min-width: 680px) {
    grid-row: 1;
    grid-column: 2;
  }
`;

const BookCover = styled(Image)`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;
