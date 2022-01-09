require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift repeat mad hole gloom praise army genius'; 
let testAccounts = [
"0xf2785055aa824d61075bd48145eaabc668b6291b2ca42ef51e0f2c6ac329da3d",
"0xb1fc8508347bfe7410d903579eb8d0cccf43c4b85231372d6df6417c46bdecd9",
"0xbd33b158524d267e6ebce85920f0bd98cd41f9e611f3793dc47221ee40767ac7",
"0x05150245b8969c580cd0df89fe887b02b0d4e243963803770a2e83d32dfd159d",
"0xe6ec21724e32f8962d03422bf49c0571b1858cb73d317f350ecfa6d0c0c00941",
"0x4c49c789ff39086a269b8ec6ef873784a4c8a2c295816ee9779e4f4bb963177c",
"0x4461a8d236f83bb32a7bd961d897a53ba74ac2058fb390f61c7f39cc04a846ba",
"0x6a58d825bcdcdfaf4718dc37c5008b2f6cdedc2eeb13ff48a6aeb4c55776da22",
"0xf273d11940dd284c82faedaae8aa2819fdd942950e29efe76efbee8f3d87ac60",
"0xbe92fa9f3cbe88e58f95d6f5fb8c5ad5d9e3403bdabed015b18f1c9316dc8318"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


