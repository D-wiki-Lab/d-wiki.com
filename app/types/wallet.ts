export const WalletChainType = {
  ASTR: 'astar',
} as const;
export type WalletChainType = typeof WalletChainType[keyof typeof WalletChainType];

export const WalletNetworkType = {
  astarNetwork: 'Astar Network',
} as const;
export type WalletNetworkType = typeof WalletNetworkType[keyof typeof WalletNetworkType];

export type Wallet = {
  address: string[];
  chain: WalletChainType;
  network: WalletNetworkType;
};
