import { Wallet as WalletType, WalletChainType, WalletNetworkType } from '~/types/wallet';

type WalletClass = WalletType & {};

export default class Wallet implements WalletClass {
  address: string[];
  chain: WalletChainType;
  network: WalletNetworkType;

  constructor(
    address: string[],
    chain: WalletChainType,
    network: WalletNetworkType
  ) {
    this.address = address;
    this.chain = chain;
    this.network = network;
  }
}
