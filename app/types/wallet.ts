export const WalletChainType = {
  ASTR: 'astar',
} as const;
export type WalletChainType = typeof WalletChainType[keyof typeof WalletChainType];

export const WalletAstarNetworkType = {
  astarNetwork: 'Astar Network',
} as const;
export type WalletAstarNetworkType = typeof WalletAstarNetworkType[keyof typeof WalletAstarNetworkType];

export type WalletNetworkType = WalletAstarNetworkType;

export type Wallet = {
  address: string[];
  chain: WalletChainType;
  network: WalletNetworkType;
};
