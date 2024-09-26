import styled from "styled-components";
import Header from "@/components/Header";
import { useEffect, useState } from "react";


export default function Homepage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/imageBlue.jpg", "/imageGreen.jpg", "/imageOrange.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Header />
      <Wrapper>
        <Text>
          Liebe*r Besucher*in, ich lade Dich ein den Kosmos meiner Gedanken zu
          betreten. Sie fragen sich, was Sie finden werden? Etwas kann ich
          verraten: Gedichte und schöne Bilder. Gedanken über die Zukunft und
          Erkenntnisse aus der Gegenwart. Erstaunliches und ganz Banales. Etwas
          Romantik, etwas Sehnsucht und immer wieder ein Nachdenken über den
          eigenen Weg zum Glück und zur Selbsterkenntnis.
        </Text>
        <GemäldeWrapper>
      {images.map((src, index) => (
        <StyledImage
          key={index}
          src={src}
          alt={`Gemälde ${index + 1}`}
          className={index === currentImage ? "active" : ""}
        />
      ))}
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
  max-width: 100vh;
`;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
  justify-content: center;
`;

const GemäldeWrapper = styled.span`
  display: flex;
  padding-top: 1vh;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  height: 40vh;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 65%;
  height: auto;
  max-width: 40rem;
  max-height: 100%;
  opacity: 0;
  transition: opacity 4s ease-in-out;

  &.active {
    opacity: 1;
  }
`;
