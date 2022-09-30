export interface CryptoDataType {
  bpi: {
    EUR: {
      code: string;
      description: string;
      rate: string;
      rate_float: number;
      symbol: string;
    };
    GBP: {
      code: string;
      description: string;
      rate: string;
      rate_float: number;
      symbol: string;
    };
    USD: {
      code: string;
      description: string;
      rate: string;
      rate_float: number;
      symbol: string;
    };
  };
  chartName: string;
  disclaimer: string;
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
}

export interface ReduxCryptoDataType {
  error: object | null;
  loading: boolean;
  value: CryptoDataType;
}

export interface BpiData {
  bpiData: {
    code: string;
    description: string;
    rate: string;
    rate_float: number;
    symbol: string;
  };
}
