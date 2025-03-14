import React, { useState } from 'react';
import Wallet from './components/Wallet';
import Transactions from './components/Transactions';
import SocialFeed from './components/SocialFeed';

function App() {
  return (
    <div className="App">
      <div className="text-center text-3xl mt-10">Web3 Explorer - SocialFi Edition</div>
      <div className="mt-10">
        <Wallet />
        <Transactions />
        <SocialFeed />
      </div>
    </div>
  );
}

export default App;
