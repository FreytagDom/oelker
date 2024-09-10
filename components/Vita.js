import styled from "styled-components";

export default function Vita() {
  return (
    <>
      <Infos>VITA</Infos>
      <Text>
        Karl-Christian Oelker Als ich noch im Gitterbett lag, tat sich der
        Himmel über mir auf, grenzenlos. Später habe ich mit meinen Augen die
        Sterne gezählt, habe in Gedanken neue Welten entdeckt und bin an die
        Grenze des Univer-sums gereist, habe im Großen das Größte gesucht, um im
        Kleinen das Kleinste zu finden. Es flüsterte mir zu: Vielleicht werde
        ich Dir fremd bleiben, aber suche mich und finde meine Rätsel. Als Junge
        hatte ich Purzel, meinen Hund. Zum Feind hatte ich einen stolzen Hahn,
        der glaubte seine Hühner verteidigen zu müssen. Auf meinem
        Lieblingspferd Maxe bin ich zur Weide geritten und teilte mit dem
        Pflugschar die Erde. Im Sommer habe ich das Kornfeld gemäht und die
        Garben als Stiegen zum Trocknen aufgestellt. Im Herbst habe ich mir an
        den Kartoffelfeuern die Hände gewärmt. Ich bin gefallen und wieder
        aufgestanden, habe mir den Staub aus den Kleidern geklopft und neue Wege
        beschritten. Im Amazonas habe ich rosa Delfine und fliegende Fische
        beobachtet. Im Urwald aus Bambusholz eine Flöte geschnitten. Zu Fuß die
        Golden Gate Bridge überquert und am Sankt - Lorenz -Strom die Wale
        beobachtet. Schon immer habe ich mir im Traum Geschichten erzählt, die
        ich jetzt aufschreibe.
      </Text>
    </>
  );
}

const Text = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: black;
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem;
  border-bottom: 0.4rem solid;
  border-left: 0.4rem solid;
  border-right: 0.4rem solid;
  border-radius: 2rem;
  border-color: grey;
`;

const Infos = styled.h1`
  /* font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #006b91;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.4rem;
  text-align: center; */
  color: chocolate;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-top: 7rem;
`;
