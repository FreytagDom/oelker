import styled from "styled-components";
import Impressum from "@/components/Impressum";

export default function ImpressumContact() {
  return (
    <>
      <Wrapper>
        <VitaWrapper>
          <Impressum />
        </VitaWrapper>
      </Wrapper>
    </>
  );
}

const VitaWrapper = styled.section`
  padding: 1rem;
`;

const Wrapper = styled.span`
  display: grid;
  padding: 1rem;
`;
