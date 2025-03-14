import React, { useState } from 'react';

function SocialFeed() {
  const [socialFeed, setSocialFeed] = useState([]);

  const fetchSocialFeed = async () => {
    // Here, you'd fetch SocialFi data (e.g., staking, interactions, etc.)
    // For demo purposes, we are just displaying mock data.
    setSocialFeed([
      { id: 1, action: 'Staked 10 ETH in DeFi pool', date: '2023-01-01' },
      { id: 2, action: 'Followed wallet 0x123...', date: '2023-01-02' },
    ]);
  };

  return (
    <div className="mt-5 text-center">
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded"
        onClick={fetchSocialFeed}
      >
        Fetch Social Feed
      </button>

      {socialFeed.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xl">Social Feed</h3>
          <ul>
            {socialFeed.map((post) => (
              <li key={post.id}>
                <p>{post.action}</p>
                <small>{post.date}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SocialFeed;
