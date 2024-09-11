import styled from "styled-components";

export default function Impressum() {
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:insulinapp@web.de';
  };
  return (
    <>
      <Wrapper>
        <H1>Impressum</H1>
        <Text>
        Inhaltlich verantwortlich i.S. des 
        Presserechtes bzw. des Telemediengesetzes (§ 5 TMG): Karl-Christian Oelker, Bremen.<br/><br/>
        Email:
        <EmailButton onClick={handleEmailButtonClick}>
           kc-oelker@gmx.de
        </EmailButton><br/><br/>
        
        <H3>
        Haftungsausschluss
        </H3><br/>

        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.<br/>
        Für in vorliegenden Inhalten verwendete Warenzeichen, Handelsnamen und Gebrauchsnamen, 
        auch wenn diese nicht als solche gekennzeichnet sind, gelten die entsprechenden Schutzbestimmungen.</Text>
        <Text>
        <H3>
        Haftung für Links:
        </H3><br/>
        Meine Seite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss haben.<br/>
        Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.<br/>
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </Text>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;

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
  color: black;
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1rem;
  text-align: center;
`;

const EmailButton = styled.button`
  background: transparent;
  font-size: 1rem;
  align-items: center;
  text-align: center;
  border: none;
  outline: none !important;
  cursor: pointer;
  bottom: 2rem;
  color: darkblue;
`;

const H3 = styled.h3`
  text-decoration: underline;
  font-size: 1rem;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
 
`