import styled from "styled-components";
import NachkommenWidget from "@/components/Nachkommen";
import LebenslinienWidget from "../components/Lebenslinie";
import TechnicusWidget from "../components/Technicus";
import KlopfzeichenWidget from "../components/Klopfzeichen";
import Head from "next/head";


export default function MyBooks() {

  return (
    <>
    <Head>
    <meta
          name="description"
          content="Hier sind meine Bücher aufgeführt die man über BoD kaufen kann.
                   Dort kann man auch eine Leseprobe machen."
        />
        <meta
          name="description"
          content="Lebenslinien | Klopfzeichen | Homos Technicus | Nachkommen | Buch | Bücher | BoD | Oelker "
        />
    </Head>
      <Wrapper>
        <H1>Meine Bücher</H1>
        <Section>
        <TechnicusWidget id="bodShopWidget_3957865_print" class="bodShopWidget" />
        <NachkommenWidget id="bodShopWidget_3337720_print" class="bodShopWidget" />
        <KlopfzeichenWidget id="bodShopWidget_2956245_print" class="bodShopWidget" />
        <LebenslinienWidget id="bodShopWidget_2953912_print" class="bodShopWidget" />
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

const Section = styled.section`
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-area: auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
`;


