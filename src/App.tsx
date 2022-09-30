import React from "react";
import { useAppDispatch, useAppSelector } from "./shared/redux/Hooks";
import { getBitcoinPrice } from "./shared/redux/Crypto";

const App = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getBitcoinPrice());
  }, []);

  return (
    <div>
      <h1>ee</h1>
    </div>
  );
};

export default App;
