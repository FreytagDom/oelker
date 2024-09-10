import React from "react";

const TechnicusWidget = () => {
  return (
    <iframe
    src="/HomoTechnicus.html"
    style={{ width: '100%', height: '600px', border: 'none' }}
    sandbox="allow-scripts allow-same-origin allow-popups"
  />
  );
};

export default TechnicusWidget;




// import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
// import Homo_Technicus from "../public/Homo_Technicus.jpg";

// export default function Technicus() {
//   return (
//     <>
//       <TechnicusWrapper>
//         <CoverSection>
//           <BookCover src={Homo_Technicus} alt="Image Homo_Technicus" />
//           <LinkWrapper href="https://www.bod.de/buchshop/homo-technicus-karl-christian-oelker-9783756295265">
//             <Title>Homo Technicus 2022 - ISBN-13: 9783756295265</Title>
//           </LinkWrapper>
//         </CoverSection>
//         <TextSection>
//           <H4>Mein erster Roman „Homo Technicus“</H4>
//           <Text>
//             Die Erde ist nicht mehr im Gleichgewicht: Naturkatastrophen und ein
//             massiver Atomschlag haben die Zivilisation ausgelöscht. In der Arche
//             konnten wenige Menschen überleben. Erst nach vielen Generationen
//             gelingt es den Überlebenden eine neue Zivilisation zu errichten. Die
//             Wissenschaften erreichen eine neue Blüte, doch die Katastrophe wirkt
//             nach. Im Auftrag der Weltregierung entwickeln Gentechniker den Neuen
//             Menschen. Sie greifen in die Geburt und die Erziehung ein. Schöne,
//             kluge und friedfertige Menschen sollen künftig den Planeten
//             besiedeln und der Menschheit das Überleben sichern. Elias arbeitet
//             als Wissenschaftler für die drei alten Männer der Weltregierung.
//             Milan gehört zur „Alten Art“. Er ist gläubig und betet zu seinem
//             Gott. Als Priester kämpft er für seine bedrohte Gemeinde, doch er
//             wird beobachtet, verfolgt und muss fliehen. Zwischen den Menschen
//             der „Neuen und der Alten Art“ wird die Kluft immer tiefer. Die
//             Unterdrückten der „Alten Art“ gehen auf die Barrikaden und
//             rebellieren. Wird die Geschichte sich wiederholen, ist der Krieg
//             noch zu vermeiden, oder gelingt es den Menschen in Zukunft,
//             Konflikte friedlich zu lösen?
//           </Text>
//         </TextSection>
        
//       </TechnicusWrapper>
//     </>
//   );
// }


// const Text = styled.p`
//   font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
//   color: black;
//   ;
//   font-size: 0.9rem;
//   margin-left: 2rem;
//   margin-right: 2rem;
// `;

// const H4 = styled.h4`
//   color: black;
//   font-size: 0.9rem;
//   margin-left: 1rem;
//   margin-right: 1rem;
//   opacity: 0.65;
// `;

// const Title = styled.h5`
//   justify-content: end;
//   font-family: Georgia, "Times New Roman", Times, serif;
//   color: black;
//   font-size: 0.8rem;
//   display: grid;
// `;

// const LinkWrapper = styled(Link)`
//   margin-top: -6rem;
//   padding-top: 1rem;
// `;

// const TechnicusWrapper = styled.div`
//   margin: 1rem;
//   padding: 1rem;
//   display: grid;
//   align-items: center;
//   width: 100%;

//   @media (max-width: 500px) {
//     .TechnicusWrapper {
//       padding: 0 50px;
//       flex-direction: column;
//     }
//   }
// `;

// const TextSection = styled.div`
//   flex-basis: 70%;
//   display: grid;
//   @media (max-width: 679px) {
//     grid-row: 2;
//     grid-column: 1;
//   }
//   @media (min-width: 680px) {
//     grid-row: 1;
//     grid-column: 2;
//   }
// `;

// const CoverSection = styled.div`
//   height: 30rem;
//   padding: 1rem;
//   display: grid;
//   align-content: space-evenly;
//   align-items: center;
//   justify-content: center;
//   justify-items: center;
//   @media (max-width: 679px) {
//     grid-row: 1;
//     grid-column: 1;
//   }
//   @media (min-width: 680px) {
//     grid-row: 1;
//     grid-column: 1;
//   }
// `;

// const BookCover = styled(Image)`
//   width: 100%;
//   height: 60%;
//   object-fit: contain;
// `;
