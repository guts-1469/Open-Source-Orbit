
require('@nomiclabs/hardhat-waffle');

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const METAMASK_PVT_KEY = process.env.METAMASK_PVT_KEY;

module.exports = {
  solidity: '0.8.0',
  networks: {
    zkEVM: {
      url: `${ALCHEMY_URL}`,
      accounts: [`${METAMASK_PVT_KEY}`],
    },
  },
};

//0xf7f8975CAB7E3E029355F2fDea095dDF857EC0aB