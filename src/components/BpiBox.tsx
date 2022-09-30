import styled from "styled-components";
import { BpiData } from "../assets/types/CryptoData";
import { DecodeHtmlEntities } from "../assets/DecodeHtmlEntities";

const BpiBox = ({ bpiData }: BpiData) => {
  return (
    <BoxWrap>
      <CodeP>{bpiData.code}</CodeP>
      <SymbolSpan>{DecodeHtmlEntities(bpiData.symbol)}</SymbolSpan>
      <DescP>{bpiData.description}</DescP>
      <RateP>{bpiData.rate}</RateP>
      <RateFloatP>{bpiData.rate_float}</RateFloatP>
    </BoxWrap>
  );
};

const BoxWrap = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 15px;
`;

const CodeP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 25px;
`;

const SymbolSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
`;

const DescP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
  margin: 10px 0 20px 0;
`;

const RateP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.green};
  margin: 20px auto 0 auto;
`;

const RateFloatP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
  margin: 10px auto;
`;

export default BpiBox;
