import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

function Wallet() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      const ethProvider = await detectEthereumProvider();
      if (ethProvider) {
        setProvider(ethProvider);
      } else {
        console.log('MetaMask not found!');
      }
    };

    initWeb3();
  }, []);

  const connectWallet = async () => {
    if (provider) {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      const balance = await provider.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      });
      setBalance(parseInt(balance, 16) / 10 ** 18);
    }
  };

  return (
    <div className="mt-5 text-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
      {walletAddress && (
        <div className="mt-5">
          <p>Wallet Address: {walletAddress}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
}

export default Wallet;
