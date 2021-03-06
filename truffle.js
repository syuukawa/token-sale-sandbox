module.exports = {
  networks: {
    development: {
      gas: 6721975,
      gasPrice: 0,
      from: 'your address',
      host: 'localhost',
      port: 4444,
      network_id: '778' // Match any network id
    },
    test: {
      gas: 46000000,
      gasPrice: 0,
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
};
