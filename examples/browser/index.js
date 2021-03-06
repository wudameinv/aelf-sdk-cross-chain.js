const Wallet = AElf.wallet;

// address: 2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX
// const defaultAddress = '2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX';
const defaultPrivateKey = 'bdb3b39ef4cd18c2697a920eb6d9e8c3cf1a930570beb37d04fb52400092c42b';
// address: 2SHdLCrMggDf6bmQFrgrynf85BRe2ifQy81qMsU1DmbWJF7F13
const receiveAddress = '2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX';
// const receiveAddress = '2SHdLCrMggDf6bmQFrgrynf85BRe2ifQy81qMsU1DmbWJF7F13';
// const receivePrivateKey = '1bf2d0eb2f8d98dba8d622839f18f2c9a0d68e618c4cd3cae69f73816b9aae1a';

const wallet = Wallet.getWalletByPrivateKey(defaultPrivateKey);
// const sendInstance = new AElf(new AElf.providers.HttpProvider('http://13.231.179.27:8000'));
// const receiveInstance = new AElf(new AElf.providers.HttpProvider('http://52.68.97.242:8000'));

const receiveInstance = new AElf(new AElf.providers.HttpProvider('http://13.231.179.27:8000'));
const sendInstance = new AElf(new AElf.providers.HttpProvider('http://52.68.97.242:8000'));

const {
  CrossChain
} = window.AElfCrossChain;

// async function init() {
//   const crossChainInstance = new CrossChain({
//     AElfUtils: AElf.utils,
//     sendInstance,
//     receiveInstance,
//     wallet,
//   });
//   await crossChainInstance.init();

//   const {
//     crossTransferTxId
//   } = await crossChainInstance.send({
//     to: receiveAddress,
//     symbol: 'ELF',
//     amount: 1,
//     memo: 'to be or not to be.'
//   });

//   console.log('crossTransferTxId: ', crossTransferTxId);

//   const receiveInfo = await crossChainInstance.receive({
//     // crossTransferTxId: 'cad78d4697f23ec34d03956ab17c0c8443d97277f7590d2b178d714d4a9682d3'
//     crossTransferTxId
//   });

//   return receiveInfo;
// }

async function init() {
  const crossChainInstance = new CrossChain({
    AElfUtils: AElf.utils,
    sendInstance,
    receiveInstance,
    wallet,
  });
  await crossChainInstance.init();

  const {
    crossTransferTxId
  } = await crossChainInstance.send({
    to: receiveAddress,
    symbol: 'ELF',
    amount: 1,
    memo: 'to be or not to be.'
  });

  console.log('crossTransferTxId: ', crossTransferTxId);

  const receiveInfo = await crossChainInstance.receive({
    // crossTransferTxId: 'cad78d4697f23ec34d03956ab17c0c8443d97277f7590d2b178d714d4a9682d3'
    crossTransferTxId
    // crossTransferTxId: 'ac9011e4e0944cba37f7859b201dee2bc804291c43004ca47bd05cf424bd27f4'
  });

  return receiveInfo;
}

init().then(result => {
  console.log('init result: ', result);
}).catch(error => {
  console.log('init error: ', error);
});