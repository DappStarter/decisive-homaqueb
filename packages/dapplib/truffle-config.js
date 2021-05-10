require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember assume hope argue front skull'; 
let testAccounts = [
"0x125e91f60fc9be2a4cd2d82e301b6e46e8fccb9007bdaa52671e3594ad8c16ea",
"0xbf9a5b30be678cd28371dfb18d6d6cabfd4a152c27336a7c741f63819899534c",
"0x4fcc90d6798f59421a6dbe425f391fd93fd9d67b7340c6fa96dda933ec592cbb",
"0xf996a97ae895b841536d25a632b547d357aa4be53beba1d2b7e699e3fb4e6e1e",
"0x4bdf13b23fb84b1b4169ddd24d586ccb87dc3299f7c60efbae5756a5c380c7ee",
"0xc8e1a833b91dfbe40200ea0fcfd6cc2299c26ea2b701c0f3ca6216356824b694",
"0x0df16bfea567fadc82880f2e155b363c8c41bc27280a57a45263b119f01ec6e0",
"0x580d1ebc8f84df694b0d878e9dfd6402395226fd766eb16a73117ca633cb8879",
"0xa18048a7eeeac39b3ec8cc4ab32b2b92da98bf960b9beb1873354873188ab908",
"0x471d79e194fe459b0fd1091f8243bbb6d64e6db472f64ce45153394af8759f4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
