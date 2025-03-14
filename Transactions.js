import React, { useState } from 'react';
import Web3 from 'web3';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [address, setAddress] = useState('');

  const fetchTransactions = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}`);
    const data = await response.json();
    setTransactions(data.result);
  };

  return (
    <div className="mt-5 text-center">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded"
        placeholder="Enter Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className="px-4 py-2 mt-2 bg-green-500 text-white rounded"
        onClick={fetchTransactions}
      >
        Fetch Transactions
      </button>

      {transactions.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xl">Transactions</h3>
          <ul>
            {transactions.map((tx) => (
              <li key={tx.hash}>
                <a href={`https://etherscan.io/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
                  {tx.hash}
                </a> - {tx.value} ETH
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Transactions;
