import Web3 from 'web3';

export default defineEventHandler(async (event): Promise<{ isVerified: boolean }> => {
  const { message, address: expected, signature } = await readBody(event);

  const web3 = new Web3();
  const actual = web3.eth.accounts.recover(message, signature);
  const isVerified = actual === expected;

  return { isVerified };
});
