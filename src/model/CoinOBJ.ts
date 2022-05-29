export interface CoinOBJ {
  id: number;
  blockNumber: number;
  transactionIndex: number;
  sources: Array<Number>;
  symbol: string;
  slug: string;
  leaseEnd: number;
  subscriptionId: number;
  networkId: number;
  aggregationStrategy: number;
  reportingStrategy: number;
  status: number;
  client: CointClient;
  createdTimestamp: string;
  updatedTimestamp: string;
  display: boolean;
}

interface CointClient {
  clientType: number;
  connectionInfo: ConnectionInfo
}

interface ConnectionInfo {
  contractAddress: string;
  networkId: number;
}