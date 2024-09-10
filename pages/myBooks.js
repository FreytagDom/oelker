import styled from "styled-components";
// import Klopfzeichen from "../components/Klopfzeichen";
// import Lebenslinien from "../components/Lebenslinie";
// import Technicus from "../components/Technicus";
import NachkommenWidget from "@/components/Nachkommen";
import LebenslinienWidget from "../components/Lebenslinie";
import TechnicusWidget from "../components/Technicus";
import KlopfzeichenWidget from "../components/Klopfzeichen";


export default function MyBooks() {


  return (
    <>
      <Wrapper>
        <H1>Meine Bücher</H1>
       
        {/* <Veröffentlichungen>
          Veröffentlichungen:
          <br /> Kanon der Literatur 2014 - ISBN 9783932443299 <br />
          Klopfzeichen 2020 - ISBN 9783750426559 <br />
          Homo Technicus 2022 - ISBN-13: 9783756295265
        </Veröffentlichungen> */}
        <Section>
        <NachkommenWidget id="bodShopWidget_3337720_print" class="bodShopWidget" />
        <LebenslinienWidget id="bodShopWidget_2953912_print" class="bodShopWidget" />
        <TechnicusWidget id="bodShopWidget_3957865_print" class="bodShopWidget" />
        <KlopfzeichenWidget id="bodShopWidget_2956245_print" class="bodShopWidget" />
          {/* <Lebenslinien /> */}
          {/* <Klopfzeichen />
          <Technicus /> */}
        </Section>
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
  font-size: 1rem;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  /* text-align: center;
  display: grid;
  padding-top: 2rem; */
  text-align: center;
  z-index: 1;
  position: static;
  display: grid;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-top: 7rem;
`;

const Section = styled.section`
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-area: auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
`;


// const Text = styled.p`
//   font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
//   color: darkblue;
//   font-size: 1rem;
//   margin-left: 2rem;
//   margin-right: 2rem;
//   padding: 2rem;
// `;

// const Veröffentlichungen = styled(Text)`
//   text-align: center;
// `;


