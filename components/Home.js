import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
// import imageBlue from "../public/imageBlue.jpg"
// import imageGreen from "../public/imageGreen.jpg"
// import imageOrange from "../public/imageOrange.jpg"


export default function Homepage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/imageBlue.jpg", "/imageGreen.jpg", "/imageOrange.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  // const [currentImage, setCurrentImage] = useState(0);
  // const images = ["/imageBlue.jpg", "/imageGreen.jpg", "/imageOrange.jpg"];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);
  return (
    <>
      <Header />
      <Wrapper>
        <Text>
          Lieber Besucher, ich lade Dich ein den Kosmos meiner Gedanken zu
          betreten. Sie fragen sich, was Sie finden werden? Etwas kann ich
          verraten: Gedichte und schöne Bilder. Gedanken über die Zukunft und
          Erkenntnisse aus der Gegenwart. Erstaunliches und ganz Banales. Etwas
          Romantik, etwas Sehnsucht und immer wieder ein Nachdenken über den
          eigenen Weg zum Glück und zur Selbsterkenntnis.
        </Text>
        {/* <Container>
      <ImageContainer>
        {images.map((src, index) => (
          <MainImage
            key={index}
            src={src}
            alt={`Bild ${index + 1}`}
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </ImageContainer>
      <ThumbnailsContainer>
        {images.map((src, index) => (
          <Thumbnail
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentImage ? "active" : ""}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </ThumbnailsContainer>
    </Container> */}
        <GemäldeWrapper>
      {images.map((src, index) => (
        <StyledImage
          key={index}
          src={src}
          alt={`Bild ${index + 1}`}
          className={index === currentImage ? "active" : ""}
        />
      ))}
    </GemäldeWrapper>
        {/* <GemäldeWrapper>
          <Gemälde1 src={imageBlue} alt="Gemälde" />
          <Gemälde2 src={imageGreen} alt="Gemälde" />
          <Gemälde3 src={imageOrange} alt="Gemälde" />
        </GemäldeWrapper> */}
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
  /* display: grid;
  justify-content: space-evenly; */
  display: flex;
  padding-top: 1vh;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  height: 40vh;
`;

// const Gemälde = styled(Image)`
//   width: 10rem;
//   height: 10rem;
//   object-fit: contain;
//   gap: 2rem;
//   padding: 0.7rem;
//   justify-content: space-around;
// `;

// const Gemälde1 = styled(Gemälde)`
//   @media only screen and (min-device-width: 480px) {
//     grid-column: 2;
//     grid-row: 2;
//   }
//   @media (max-width: 600px) {
//     .grid {
//       width: 80%;
//       flex-direction: column;
//       grid-column: 2;
//       grid-row: 2;
//     }
//   }
//   display: grid;
// `;

// const Gemälde2 = styled(Gemälde)`
//   display: grid;
//   grid-column: 1;
//   grid-row: 2;
// `;

// const Gemälde3 = styled(Gemälde)`
//   display: grid;
//   grid-column: 3;
//   grid-row: 2;
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 70%;
//   height: 100vh; /* Vollbild-Höhe */
//   overflow: hidden;
// `;

const StyledImage = styled.img`
  position: absolute;
  width: 65%;
  height: auto;
  max-width: 48rem;
  max-height: 100%;
  opacity: 0;
  transition: opacity 4s ease-in-out;

  &.active {
    opacity: 1;
  }
`;
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
//   position: relative;
// `;

// const ImageContainer = styled.div`
//   width: 80%;
//   height: 70%;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

// const MainImage = styled.img`
//   position: absolute;
//   width: 100%;
//   height: auto;
//   max-height: 100%;
//   opacity: 0;
//   transition: opacity 1s ease-in-out;

//   &.active {
//     opacity: 1;
//   }
// `;

// const ThumbnailsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;
//   overflow-x: auto;
//   width: 80%;
//   padding: 10px;
//   white-space: nowrap;
// `;

// const Thumbnail = styled.img`
//   width: 100px;
//   height: auto;
//   margin: 0 10px;
//   cursor: pointer;
//   opacity: 0.6;
//   transition: opacity 0.3s ease;

//   &:hover {
//     opacity: 1;
//   }

//   &.active {
//     opacity: 1;
//     border: 2px solid #000;
//   }
// `;
// pages/index.js
// pages/index.js



// Styled Components


// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
//   position: relative;
// `;

// const Carousel = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   width: 100%;
// `;

// const ImageWrapper = styled.div`
//   position: absolute;
//   transition: transform 2s ease, opacity 2s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &.left {
//     transform: translateX(-150%) scale(0.5); /* Links, kleiner und verblasst */
//     opacity: 0.5;
//   }

//   &.center {
//     transform: translateX(0) scale(1); /* Mitte, groß und klar */
//     opacity: 1;
//   }

//   &.right {
//     transform: translateX(150%) scale(0.5); /* Rechts, kleiner und verblasst */
//     opacity: 0.5;
//   }
// `;

// const Image = styled.img`
//   width: auto;
//   max-height: 70vh;
//   transition: transform 0.5s ease;
// `;

// export default function Homepage() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = ["/imageBlue.jpg", "/imageGreen.jpg", "/imageOrange.jpg"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const getClassName = (index) => {
//     if (index === currentImage) return "center";
//     if (index === (currentImage + 1) % images.length) return "right";
//     return "left";
//   };

//   return (
//     <Container>
//       <Carousel>
//         {images.map((src, index) => (
//           <ImageWrapper key={index} className={getClassName(index)}>
//             <Image src={src} alt={`Bild ${index + 1}`} />
//           </ImageWrapper>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }
