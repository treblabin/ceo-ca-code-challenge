import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./shared/redux/Hooks";
import { getBitcoinPrice } from "./shared/redux/Crypto";
import BpiBox from "./components/BpiBox";
import BpiTable from "./components/BpiTable";
import { ChangeViewButton, UpdateButton } from "./elements/Buttons";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useAppDispatch();
  const bitcoinData = useAppSelector((state) => state.Crypto);
  const [tableView, setTableView] = React.useState(false);
  React.useEffect(() => {
    dispatch(getBitcoinPrice());
  }, []);

  return (
    <div>
      <Wrap>
        <BitcoinTitle>Bitcoin</BitcoinTitle>
        <ChangeViewButton
          onClick={() => {
            setTableView(!tableView);
          }}
        >
          Change View Type
        </ChangeViewButton>
        {tableView ? (
          <BpiTable cryptoData={bitcoinData.value} />
        ) : (
          <BpiGrid>
            <BpiBox bpiData={bitcoinData.value.bpi.USD} />
            <BpiBox bpiData={bitcoinData.value.bpi.GBP} />
            <BpiBox bpiData={bitcoinData.value.bpi.EUR} />
          </BpiGrid>
        )}
        <UpdateButton
          onClick={() => {
            dispatch(getBitcoinPrice());
          }}
        >
          Update Data
        </UpdateButton>
        <Footer cryptoData={bitcoinData.value} />
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  max-width: ${({ theme }) => theme.width.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
  text-align: center;
`;

const BitcoinTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const BpiGrid = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 40px auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
`;

export default App;
