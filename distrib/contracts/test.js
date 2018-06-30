//  for windows set envirompment variable:
//  NODE_PATH=C:\Users\[USERNAME]\AppData\Roaming\npm\node_modules

Web3 = require('web3')
var fs = require('/usr/local/lib/node_modules/fs-extra');

provider = new Web3.providers.HttpProvider("http://localhost:8545")
web3 = new Web3(provider)

// load files

myTokenABIFile = fs.readFileSync('MyToken_sol_MyToken.abi')
myTokenABI  = JSON.parse(myTokenABIFile.toString())
myTokenBINFile = fs.readFileSync('MyToken_sol_MyToken.bin')
myTokenByteCode = myTokenBINFile.toString()

//deploy

web3.eth.getAccounts().then(console.log)
//var aaa = web3.eth.getAccounts().then(console.log);
//console.log('AAA==' + aaa);


//web3.eth.accounts.forEach(account => {
//  balance = web3.eth.getBalance(account).toNumber();
//
//  console.log('account: ' + account + ' | ' + balance + ' ETH');
//})

account = web3.eth.accounts[0]

console.log('account: ' + account)

myTokenContract = new web3.eth.Contract(myTokenABI)

contractData = {data: myTokenByteCode, from: account, gas: 999999 }
deployedContrac = myTokenContract.deploy(contractData)

//deployedContract = MyTokenContract.new(contractData)
//console.log('deployedContract.address: ' + deployedContract.address)

console.log('deployedContract.address: ' + deployedContrac.address)
