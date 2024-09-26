import styled from "styled-components";
import Vita from "../components/Vita";
import Head from "next/head";

export default function AboutMy() {
  return (
    <>
    <Head>
    <meta
          name="description"
          content="Hier erfahren Sie etwas zu meiner Person und was mich bewegt hat Bücher zu schreiben."
        />
        <meta
          name="description"
          content="Bücher | Vita | Oelker | Kartoffelfeuer | Pferd | Gitterbett"
        />
    </Head>
      <Wrapper>
        <Vita />
      </Wrapper>
    </>
  );
}


const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;
