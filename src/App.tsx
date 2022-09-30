import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./shared/redux/Hooks";
import { getBitcoinPrice } from "./shared/redux/Crypto";
import { ChangeViewButton, UpdateButton } from "./elements/Buttons";

const App = () => {
  const dispatch = useAppDispatch();
  const bitcoinData = useAppSelector((state) => state.Crypto);
  const [tableView, setTableView] = React.useState(false);
  React.useEffect(() => {
    dispatch(getBitcoinPrice());
  }, []);

  return (
    <div>
      <h1>ee</h1>
        <ChangeViewButton
          onClick={() => {
            setTableView(!tableView);
          }}
        >
          Change View Type
        </ChangeViewButton>
        <UpdateButton
          onClick={() => {
            dispatch(getBitcoinPrice());
          }}
        >
          Update Data
        </UpdateButton>
    </div>
  );
};

export default App;
