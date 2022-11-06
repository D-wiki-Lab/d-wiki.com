import Web3 from 'web3';
import {provider} from 'web3-core';

const getProvider = (): provider => {
  const provider = window.ethereum || window.web3?.provider || undefined;
  if (!provider) {
    throw new Error('provider don\'t find');
  }

  return provider;
}

export default {
  getProvider,
};
