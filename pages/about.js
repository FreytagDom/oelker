import styled from "styled-components";
import Vita from "../components/Vita";

export default function AboutMy() {
  return (
    <>
      <Wrapper>
        {/* <VitaWrapper> */}
        <Vita />
        {/* </VitaWrapper> */}
      </Wrapper>
    </>
  );
}

// const VitaWrapper = styled.section`
//   /* padding: 1rem;
//   border-bottom: 0.4rem solid;
//   border-left: 0.4rem solid;
//   border-right: 0.4rem solid;
//   border-radius: 2rem;
//   border-color: grey; */
// `;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;
