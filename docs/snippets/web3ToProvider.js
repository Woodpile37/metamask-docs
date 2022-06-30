/**
 * Getting Accounts
 */

// window.web3
const accounts = web3.eth.accounts;

// window.ethereum
const accounts = await ethereum.request({ method: 'eth_accounts' });

/**
 * Sending a Transaction
 */

// window.web3
web3.eth.sendTransaction(
  {
    to: '0x...',
    'from': '0x...',
    value: '0x...',
    // And so on...
  },
  (error, result) => {
    if (error) {
      return 
    }
    // Handle the result
    
  }
);

// window.ethereum
try {
  const transactionHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        to: '0x...',
        'from': '0x...',
        value: '0x...',
        // And so on...
      },
    ],
  });
  // Handle the result
  
} catch (error) {
  console.error(error);
}
