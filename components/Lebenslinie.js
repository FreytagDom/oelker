import styled from "styled-components";
import Link from "next/link";

export default function Lebenslinien() {
  return (
    <>
      <LebenslinienWrapper>
        <H4>Mein Buch Lebenslinien</H4>
        <Text>
          Früher begannen Familiengeschichten mit der Darstellung eines
          Stammbaumes. Ich will mich auf die Beschreibung der Menschen
          beschränken, die ich persönlich kennengelernt habe. Ich bin mir meiner
          Wurzeln und meiner Herkunft bewusst, ich glaube an die prägende Kraft
          der Lebensbiografie und daran, dass jeder sein Schicksal in die
          eigenen Hände nehmen kann. Im Spiel von Zufall und Notwendigkeit
          entsteht dann unser Leben, immer wieder beeinflusst durch die
          Begegnung mit anderen Menschen, beeinflusst durch Liebe und
          Freundschaft und geprägt durch unsere berufliche Tätigkeit. So bin ich
          von der Wahrheit des Evolutionsprinzips überzeugt. Wir Menschen sind
          der Zweig an einem Stamm, der auf diesem Planeten gewachsen ist und
          deshalb sind wir alle untereinander verwandt, niemand soll sich über
          den anderen erheben und niemand hat Grund sich kleiner zu machen als
          er ist. Unsere Kinder und Enkelkinder werden gesünder und schöner sein
          als wir, sie sind unsere Hoffnung auf eine zukünftige, bessere Welt.
          Jeder Mensch ist nur ein Tropfen im Wasserfall des Lebens, aber es
          gibt Tage, an denen die Sonne scheint. Sie bringt den Tropfen zum
          Glänzen und für einen kleinen Augenblick, angesichts der Ewigkeit,
          werden wir zu einem glänzenden Diamanten, der die Dunkelheit erhellt.
        </Text>
        <Books>
          <Link href="https://www.bod.de/buchshop/lebenslinien-karl-christian-oelker-9783750417960">
            <Title>LebensLinien</Title>
          </Link>
        </Books>
      </LebenslinienWrapper>
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

const LebenslinienWrapper = styled.div`
  background-color: cadetblue;
  display: grid;
  justify-content: space-evenly;
`;
