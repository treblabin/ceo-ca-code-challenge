import styled from "styled-components";
import { CryptoDataType } from "../assets/types/CryptoData";

const Footer = ({ cryptoData }: { cryptoData: CryptoDataType }) => {
  const date = new Date(cryptoData.time.updated);
  return (
    <FooterWrap>
      <TimeP>
        {"Updated at (Local Time): "}
        {date.toLocaleString()}
      </TimeP>
      <TimeP>Updated at (UK): {cryptoData.time.updateduk}</TimeP>
      <DisclaimerP>{cryptoData.disclaimer}</DisclaimerP>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  padding: 30px 0;
`;

const TimeP = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const DisclaimerP = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export default Footer;
