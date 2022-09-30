import styled from "styled-components";
import { CryptoDataType } from "../assets/types/CryptoData";
import { DecodeHtmlEntities } from "../assets/DecodeHtmlEntities";

const BpiTable = ({ cryptoData }: { cryptoData: CryptoDataType }) => {
  return (
    <BpiTableWrap>
      <th>Code</th>
      <th>Symbol</th>
      <th>Rate</th>
      <th>Description</th>
      <th>Rate Float</th>
      <tr>
        <td>{cryptoData.bpi.USD.code}</td>
        <td>{DecodeHtmlEntities(cryptoData.bpi.USD.symbol)}</td>
        <td>{cryptoData.bpi.USD.rate}</td>
        <td>{cryptoData.bpi.USD.description}</td>
        <td>{cryptoData.bpi.USD.rate_float}</td>
      </tr>
      <tr>
        <td>{cryptoData.bpi.GBP.code}</td>
        <td>{DecodeHtmlEntities(cryptoData.bpi.GBP.symbol)}</td>
        <td>{cryptoData.bpi.GBP.rate}</td>
        <td>{cryptoData.bpi.GBP.description}</td>
        <td>{cryptoData.bpi.GBP.rate_float}</td>
      </tr>
      <tr>
        <td>{cryptoData.bpi.EUR.code}</td>
        <td>{DecodeHtmlEntities(cryptoData.bpi.EUR.symbol)}</td>
        <td>{cryptoData.bpi.EUR.rate}</td>
        <td>{cryptoData.bpi.EUR.description}</td>
        <td>{cryptoData.bpi.EUR.rate_float}</td>
      </tr>
    </BpiTableWrap>
  );
};

const BpiTableWrap = styled.table`
  margin: 30px auto;
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: center;
    }
    table {
      width: 100%;
    }
  }
`;

export default BpiTable;
